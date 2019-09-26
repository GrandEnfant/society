import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import LeftSideBar from "./LeftSideBar";
import { BrowserRouter, Route } from 'react-router-dom';
import YourProfile from "./Components/Profile/ProfileInfo/MainYourProfile";
import News from "./Components/News";
import Registration from "./Components/Registration/Registration";
import Dialog from "./Components/Dialogs/Dialog";




function App(props) {

  return (
        <BrowserRouter>
        <Header> </Header>

       <div className="mainBox just-flex">
       <div className="mainContainer just-flex">
        <LeftSideBar>
        </LeftSideBar>
          <Route path="/MainYourProfile" render = {() => <YourProfile/>}/>
          <Route path="/News" render = {() => <News/>}/>
          <Route path="/Registration" render = {() => <Registration/>}/>
          <Route path="/Dialogs" render = {() => <Dialog messages ={props.State.messages} users = {props.State.users}/>}/>
           </div></div>
        </BrowserRouter>

  );
}

export default App;
