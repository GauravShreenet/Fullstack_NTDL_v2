import React from 'react'

export const Table = ({ taskList }) => {
    const entyArg = taskList.filter(item => item.type === 'entry')
    const badArg = taskList.filter(item => item.type === 'bad')
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
                                            <button className='btn btn-success'><i class="fa-solid fa-angle-right fa-fade"></i></button>
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
                        <tr>
                            <td>
                                <input type="checkbox"
                                    className='form-check-input'
                                    id='badItm' /> {" "}
                                <label htmlFor="badItm">Mark</label></td>
                            <td>Otto</td>
                            <td>
                                <button className='btn btn-warning'><i class="fa-solid fa-angle-left fa-fade"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
