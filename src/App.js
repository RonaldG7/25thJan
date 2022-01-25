import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import fbContext from "./context/KindOfFBContext";
import FbToolbar from "./component/FbToolbar";
import FbFirstPage from "./pages/FbFirstPage";
import FbRegisterPage from "./pages/FbRegisterPage";
import FbLogInPage from "./pages/FbLogInPage";
import FbMainPage from "./pages/FbMainPage";
import FbCreatePostPage from "./pages/FbCreatePostPage";

const App = () => {

  const [getPage, setPage] = useState("")
  const [getUsers, setUsers] = useState([])
  const [getUser, setUser] = useState("")
  const [getPosts, setPosts] = useState([])

  return (
      <fbContext.Provider value={{getPage, setPage, getUsers, setUsers, getUser, setUser, getPosts, setPosts}}>
        <Router>
          <nav>
            <FbToolbar/>
          </nav>
          <Routes>
            <Route path="/" element={<FbFirstPage/>}/>
            <Route path="/register" element={<FbRegisterPage/>}/>
            <Route path="/login" element={<FbLogInPage/>}/>
            <Route path="/main" element={<FbMainPage/>}/>
            <Route path="/createPost" element={<FbCreatePostPage/>}/>
          </Routes>
        </Router>
      </fbContext.Provider>
  );
};

export default App;
