import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import LeftSideBar from "./Components/LeftSideBar";
import {Route} from 'react-router-dom';
import News from "./Components/News";
import Registration from "./Components/Registration/Registration";
import Dialog from "./Components/Dialogs/Dialog";
import Friends from "./Components/Profile/Friends/Friends";
import store from './redux/state';
import Posts from "./Components/Profile/Posts/RenderPosts";



function App(props) {

  return (
       <div className={"BrowserRouterDelete"}>
        <Header> </Header>
       <div className="mainBox just-flex">
       <div className="mainContainer just-flex">
        <LeftSideBar>
        </LeftSideBar>
          <Route path="/MainYourProfile" render = {() => <Posts/>}/>
          <Route path="/News" render = {() => <News/>}/>
          <Route path="/Registration" render = {() => <Registration/>}/>
          <Route path="/Dialogs" render = {() => <Dialog messages ={store.getState().messages} users = {store.getState().users} dispatch ={store.dispatch}/>}/>
          <Route path="/Friends" render ={() => <Friends friends = {store.getState().friends}/>}/>
           </div></div>
       </div>

  );
}

export default App;
