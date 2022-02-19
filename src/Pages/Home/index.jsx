import axios from "axios";
import React, { useState } from "react";
import "./styles.scss"
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Loading from "../LoadingState";
import Result from "../Result";

const URL = "https://api.github.com"

const Home = () => {
    const [org, setOrg] = useState("");
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.get(`${URL}/orgs/${org}/repos`);
            setResult(response.data);
            setLoading(false);
        } catch (error) {
            alert(error.message);
            setLoading(false);
        }
    }
    const handleDjango = async(e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.get(`${URL}/orgs/django/repos`);
            setResult(response.data);
            setLoading(false);
        } catch (error) {
            alert(error.message);
            setLoading(false);
        }
    }
    
    const handleDogehouse = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.get(`${URL}/orgs/dogehouse/repos`);
            setResult(response.data);
            setLoading(false);
        } catch (error) {
            alert(error.message);
            setLoading(false);
        }
    }
    const handleMicrosoft = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.get(`${URL}/orgs/microsoft/repos`);
            setResult(response.data);
            setLoading(false);
        } catch (error) {
            alert(error.message);
            setLoading(false);
        }
    }

    

    if (loading) {
        return (
            <Loading
                org={org}
                loading={loading}
                handleSubmit={handleSubmit}
                onChange={e => setOrg(e.target.value)}
            />
        )
    }
    
    if (result.length > 0) {
        return (
            <Result 
                result={result}
                org={org}
                loading={loading}
                handleSubmit={handleSubmit}
                onChange={e => setOrg(e.target.value)}
            />
        )
    }

    return (
        <>
            <div className="header_container">
            <h1>CommitViewer</h1>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li><li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="home_container">
            <h1>Discover the <br/> world of code</h1>
            <p>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
        
            <form onSubmit={handleSubmit}>
                <div className="form_input">
                    <TextInput
                        className="search_input" 
                        type="text" 
                        placeholder="Eg. facebook/react"
                        onChange={e => setOrg(e.target.value)}
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

            <span className="suggestion">Or pick one of these suggested repos</span>
        
            <div className="repository">
                <button
                    type="submit" onClick={handleDjango}>django/django</button>
                <button type="submit" onClick={handleMicrosoft}>microsoft/vscode</button>
                <button>jezen/is-thirteen</button>
                <button type="submit" onClick={handleDogehouse}>benawad/dogehouse</button>
            </div>
        
        </div>
        </>
    )
}

export default Home;