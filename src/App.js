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
  const [getUsers, setUsers] = useState([
    {
      username: "Tomas",
      password: "asd"
    },
    {
      username: "Paulius",
      password: "asd"
    },
    {
      username: "Linas",
      password: "asd"
    }
  ])
  const [getUser, setUser] = useState("")
  const [getPosts, setPosts] = useState([
    {
      "id": "97768a81-415c-4bc3-acef-f2e47c19de41",
      "title": "Ketvirtadienis",
      "article": "Pagaliau",
      "username": "Tomas",
      "likes": [],
      "comments": []
    },
    {
      "id": "6d346dfb-b1b7-461c-98a9-c7af0aaff934",
      "title": "Penktadienis",
      "article": "Jau rytoj",
      "username": "Tomas",
      "likes": [],
      "comments": []
    },
    {
      "id": "f5fb96f7-5346-4e34-ae86-69524360d0a3",
      "title": "Sestadienis",
      "article": "Savaitgalis",
      "username": "Paulius",
      "likes": [],
      "comments": []
    },
    {
      "id": "da078871-1213-48be-a269-0d44310ed748",
      "title": "Sekmadienis",
      "article": "Savaitgalis",
      "username": "Paulius",
      "likes": [],
      "comments": []
    },
    {
      "id": "b59feebc-60a3-43da-a536-f64826618ef7",
      "title": "Pirmadienis",
      "article": "Darbo diena",
      "username": "Linas",
      "likes": [],
      "comments": []
    },
    {
      "id": "2c3444cf-2f0e-4046-a2cd-bfef4ad85943",
      "title": "Antradienis",
      "article": "Dar viena darbo diena",
      "username": "Linas",
      "likes": [],
      "comments": []
    }
  ])

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
