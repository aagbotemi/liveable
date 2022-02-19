import axios from "axios";
import React, { useState } from "react";
import "./styles.scss"
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

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
            setResult(response);
            setLoading(false);
            console.log(response)
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <>
                <div className="result">
                    loading is here
                </div>
            </>
        )
    }

    // if (result) {
    //     return (
    //         <>
    //             <div className="result">
    //                 result is here
    //             </div>
    //         </>
    //     )
    // }

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
                    />
                    <FaSearch className="icon"/>
                </div>

                <Button
                    label="See commit"
                    type="submit"
                    className="submit_btn"
                />
            </form>

            <span className="suggestion">Or pick one of these suggested repos</span>
        
            <div className="repository">
                <button>django/django</button>
                <button>microsoft/vscode</button>
                <button>jezen/is-thirteen</button>
                <button>benawad/dogehouse</button>
            </div>
        
        </div>
        </>
    )
}

export default Home;