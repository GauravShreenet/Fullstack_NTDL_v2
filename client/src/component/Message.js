import React from 'react'

export const Message = ({ resp }) => {
    const { status, message } = resp;
    const clsNm = status === "success" ? "alert alert-success" : "alert alert danger"
    return message ? <div className={clsNm}>{message}</div> : ''
}

export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center text-primary" style={{ width: '3rem', height: '3rem'}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
