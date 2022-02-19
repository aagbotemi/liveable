import React from 'react'

const TextInput = ({ type, onChange, placeholder, className }) => {
    return (
        <div>
            <input 
                type={type} 
                className={className} 
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput