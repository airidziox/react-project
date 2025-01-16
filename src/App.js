import './App.css';
import React, {useEffect, useState, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import UserPage from './pages/UserPage';
import SinglePostPage from "./pages/SinglePostPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import UpdatePostPage from "./pages/UpdatePostPage";

import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

function App() {

    const [posts, setPosts] = useState([])
    const [secretKey, setSecretKey] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);

    function settingSecretKey(key,username) {
        setSecretKey(key);
        setLoggedUser(username);
        console.log(secretKey, loggedUser);
    }

    useEffect(() => {
        fetch('http://167.99.138.67:1111/getallposts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.data)
                console.log(data.data)
            })
        settingSecretKey()
    },[])


    return (
        <div className="App d-flex flex-column">
            <div>
                <BrowserRouter>
                    <Toolbar loggedIn={secretKey} />
                        <div className="d-flex flex-column gap-5 p-3">
                            <Routes>
                                <Route path="/" element={<IndexPage posts={posts} secretKey={secretKey} loggedUser={loggedUser}/>}/>
                                <Route path="/register" element={<RegisterPage/>}/>
                                <Route path="/login" element={<LoginPage settingSecretKey={settingSecretKey}/>}/>
                                <Route path="/userpost/:username" element={<UserPage/>}/>
                                <Route path="/singlepost/:username/:id" element={<SinglePostPage secretKey={secretKey}/>}/>
                                <Route path="/upload" element={<UploadPage secretKey={secretKey}/>}/>
                                <Route path="/updatepost/:id" element={<UpdatePostPage secretKey={secretKey}/>}/>
                            </Routes>
                        </div>
                    <Footer/>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
