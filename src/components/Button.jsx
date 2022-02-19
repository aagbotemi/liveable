import React from 'react'

const Button = ({ type, className, label, disabled }) => {
    return (
        <div>
            <button disabled={disabled} type={type} className={className}>
                {label}
            </button>
        </div>
    )
}

export default Button