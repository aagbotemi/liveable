import React, { useState } from "react";
import "./styles.scss"
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

const Loading = ({onChange, handleSubmit, loading, org}) => {

    return (
        <>
            <div className="loading_header_container">
                <h1>CommitViewer</h1>
                <form className="loadingForm" onSubmit={handleSubmit}>
                    <div className="form_input">
                        <TextInput
                            className="search_input" 
                            type="text"
                            placeholder="Eg. facebook/react"
                            onChange={onChange}
                            disabled={loading}
                        />
                        <FaSearch className="icon"/>
                    </div>

                    <Button
                        label="See commit"
                        type="submit"
                        className="submit_btn"
                        disabled={loading}
                    />
                </form>
        </div>
        <div className="loading_home_container">
            <h1>{org}</h1>
            <p>Loading...</p>
        </div>
        </>
    )
}

export default Loading;