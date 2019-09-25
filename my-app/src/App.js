import React from 'react';
import './App.css';
import Header from "./Components/Header";
import LeftSideBar from "./LeftSideBar";
import { BrowserRouter, Route } from 'react-router-dom';
import YourProfile from "./Components/Profile/ProfileInfo/MainYourProfile";
import News from "./Components/News";
import Registration from "./Components/Registration";
import Dialog from "./Components/Dialogs/Dialog";


function App() {
  return (
        <BrowserRouter>
        <Header> </Header>

       <div className="mainBox just-flex">
       <div className="mainContainer just-flex">
        <LeftSideBar>
        </LeftSideBar>
          <Route path="/MainYourProfile" component={YourProfile}/>
          <Route path="/News" component={News}/>
          <Route path="/Registration" component={Registration}/>
          <Route path="/Dialogs" component={Dialog}/>
           </div></div>
        </BrowserRouter>

  );
}

export default App;
