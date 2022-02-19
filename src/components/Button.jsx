import React from 'react'

const Button = ({ type, className, label }) => {
    return (
        <div>
            <button type={type} className={className}>
                {label}
            </button>
        </div>
    )
}

export default Button