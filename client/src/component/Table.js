import React, { useState } from 'react'
import { deleteTasks, switchTask } from '../helper/axiosHelper'
import { Message } from './Message';

export const Table = ({ taskList, setResp, fetchtask }) => {

    const [idsToDelete, setIdsToDelete] = useState([]);

    const entyArg = taskList.filter(item => item.type === 'entry')
    const badArg = taskList.filter(item => item.type === 'bad')

    const handleOnSwitch = async (_id, type) => {
        const data = await switchTask({ _id, type });
        setResp(data);

        data.status === 'success' && fetchtask();
    }

    const handleOnSelectAll = (e) => {
        const { checked, value } = e.target;
        console.log(checked, value);

        const filteredArg = [];
        taskList.forEach(item => {
            if (item.type === value) {
                filteredArg.push(item._id)
            }
        });

        if (checked) {
            setIdsToDelete([...idsToDelete, ...filteredArg]);
        } else {
            const afterRemovingIdsArg = idsToDelete.filter((id) => !filteredArg.includes(id));
            setIdsToDelete(afterRemovingIdsArg)
        }
    }

    const handleOnItemSelect = (e) => {
        const { checked, value } = e.target;
        console.log(checked, value);
        if (checked) {
            setIdsToDelete([...idsToDelete, value])
        } else {

            setIdsToDelete(idsToDelete.filter((item) => item !== value));
        }
    }

    const handleOnDelete = async () => {
        if (window.confirm("Are you sure you want to delete all the selected tasks")
        ) {
            const result = await deleteTasks(idsToDelete);
            setResp(result);

            if (result?.status === "success") {
                fetchtask();
                setIdsToDelete([]);
            }
        }
    }

    const ttlHr = badArg.reduce((a, i) => a + +i.hr, 0);

    const msg = {
        status: 'success',
        message: `You have saved ${ttlHr} hrs`,
    }

    return (
        <>

            <div className="row my-2">
                <div className="col-md">
                    <h3>Entry List</h3>
                    <div>
                        <td>
                            <input type="checkbox"
                                className='form-check-input'
                                id="allEntry"
                                onChange={handleOnSelectAll}
                                value="entry" /> {" "}
                            <label htmlFor="allEntry">All Entry Task</label></td>
                    </div>
                    <table class="table table-striped table-hover border">
                        <tbody>
                            {
                                entyArg.map(({ _id, task, hr }) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input type="checkbox"
                                                    className='form-check-input'
                                                    id={_id}
                                                    value={_id}
                                                    onChange={handleOnItemSelect}
                                                    checked={idsToDelete.includes(_id)} /> {" "}
                                                <label htmlFor={_id}>{task}</label></td>
                                            <td>{hr} hr</td>
                                            <td className='text-end'>
                                                <button
                                                    onClick={() => handleOnSwitch(_id, "bad")}
                                                    className='btn btn-success'><i class="fa-solid fa-angle-right fa-fade"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-md">
                    <h3>Entry List</h3>
                    <div>
                        <td>
                            <input type="checkbox"
                                className='form-check-input'
                                id="allBad"
                                onChange={handleOnSelectAll}
                                value="bad" /> {" "}
                            <label htmlFor="allBad">All Bad Task</label></td>
                    </div>
                    <table class="table table-striped table-hover border">
                        <tbody>
                            {
                                badArg.map(({ _id, task, hr }) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input type="checkbox"
                                                    className='form-check-input'
                                                    id={_id}
                                                    value={_id}
                                                    onChange={handleOnItemSelect}
                                                    checked={idsToDelete.includes(_id)} /> {" "}
                                                <label htmlFor={_id}>{task}</label></td>
                                            <td>{hr} hr</td>
                                            <td>
                                                <button
                                                    onClick={() => handleOnSwitch(_id, "entry")}
                                                    className='btn btn-warning'><i class="fa-solid fa-angle-left fa-fade"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>
                    {ttlHr > 0 && <Message resp={msg} />}
                </div>
            </div>
            {
                idsToDelete.length > 0 && (
                    <div className="d-grid mt-5">
                        <button className="btn btn-danger btn-lg"
                            onClick={handleOnDelete}
                        >
                            Delete {idsToDelete.length} tasks
                        </button>
                    </div>

                )}
        </>

    )
}
