import React, { useState } from 'react'
import { postTask } from '../helper/axiosHelper';

const initialState = {
    task: "",
    hr: "",
}
export const Form = ({ setResp ,setShowSpinner}) => {

    const [form, setForm] = useState(initialState);
    const handleOnChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        setShowSpinner(true);

        const data = await postTask(form);
        setResp(data);
        setShowSpinner(false);
        data.status === "success" && setForm(initialState);
    }

    return (
        <form onSubmit={handleOnSubmit} action="" className='border p-5 rounded-4 shadow-lg mt-4'>
            <div className="row g-2">
                <div className="col-md-6">
                    <input type="text"
                    onChange={handleOnChange}
                    value={form.task}
                    name='task' 
                    className='form-control'
                    placeholder='i.e Coding'/>
                </div>
                <div className="col-md-2">
                    <input type="number"
                    onChange={handleOnChange}
                    name='hr'
                    value={form.hr}
                    className='form-control'
                    placeholder='i.e 44' />
                </div>
                <div className="col-md-4 d-grid">
                    <button 
                    className='btn btn-primary'
                    >
                        Add New Task
                    </button>
                </div>
            </div>
        </form>
    )
}
