import React, { useState } from "react";
import "./styles.scss"
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import moment from "moment";

const Result = ({onChange, handleSubmit, loading, org, result}) => {

    return (
        <>
            <div className="result_header_container">
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
        <div className="result_home_container">
            <h1>{org}</h1>
            <ul>
                {result.slice(0, 5).map(res => {
                    console.log(res)
                    return (
                        <li key={res.id}>
                            <div className="avatar">
                                <img width={"40px"} src={res.owner.avatar_url} alt="avatar" />
                                <div>{res.name}</div>
                            </div>
                            <div className="description">
                                <div>{res.description}</div>
                                <div>(#{res.open_issues})</div>
                            </div>
                            <div>{moment(res.created_at).format("HH:mm L")}</div>
                        
                        </li>
                    )
                })}
            </ul>
            
                
        </div>
        </>
    )
}

export default Result;