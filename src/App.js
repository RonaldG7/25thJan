import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import fbContext from "./context/KindOfFBContext";
import FbToolbar from "./component/FbToolbar";
import FbHomePage from "./pages/FbHomePage";
import FbRegisterPage from "./pages/FbRegisterPage";
import FbLogInPage from "./pages/FbLogInPage";
import FbProfilePage from "./pages/FbProfilePage";
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
            <Route path="/" element={<FbHomePage/>}/>
            <Route path="/register" element={<FbRegisterPage/>}/>
            <Route path="/login" element={<FbLogInPage/>}/>
            <Route path="/profile" element={<FbProfilePage/>}/>
            <Route path="/createPost" element={<FbCreatePostPage/>}/>
          </Routes>
        </Router>
      </fbContext.Provider>
  );
};

export default App;
