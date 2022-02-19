import React from 'react'

const TextInput = ({ type, onChange, placeholder, className, disabled }) => {
    return (
        <div>
            <input 
                type={type}
                disabled={disabled}
                className={className} 
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput