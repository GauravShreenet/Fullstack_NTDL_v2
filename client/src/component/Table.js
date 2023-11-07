import React from 'react'
import { switchTask } from '../helper/axiosHelper'

export const Table = ({ taskList, setResp, fetchtask }) => {
    const entyArg = taskList.filter(item => item.type === 'entry')
    const badArg = taskList.filter(item => item.type === 'bad')

    const handleOnSwitch = async (_id, type) => {
        const data = await switchTask({ _id, type });
        setResp(data);

        data.status === 'success' && fetchtask();
    }

    return (
        <div className="row mt-5">
            <div className="col-md">
                <h3>Entry List</h3>
                <table class="table table-striped table-hover border">
                    <tbody>
                        {
                            entyArg.map(({ _id, task, hr }) => {
                                return (
                                    <tr>
                                        <td>
                                            <input type="checkbox"
                                                className='form-check-input'
                                                id={_id} /> {" "}
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
                <table class="table table-striped table-hover border">
                    <tbody>
                        {
                            badArg.map(({ _id, task, hr }) => {
                                return (
                                    <tr>
                                        <td>
                                            <input type="checkbox"
                                                className='form-check-input'
                                                id={_id} /> {" "}
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
            </div>
        </div>
    )
}
