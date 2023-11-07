import React from 'react'

export const Table = () => {
    return (
        <div className="row mt-5">
            <div className="col-md">
                <h3>Entry List</h3>
                <table class="table table-striped table-hover border">
                    <tbody>

                        <tr>
                            <td>
                                <input type="checkbox"
                                    className='form-check-input'
                                    id='entryItm' /> {" "}
                                <label htmlFor="entryItm">Mark</label></td>
                            <td>Otto</td>
                            <td>
                                <button className='btn btn-success'><i class="fa-solid fa-angle-right fa-fade"></i></button>
                            </td>
                        </tr>
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
