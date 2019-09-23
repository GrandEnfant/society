import React from 'react';
import './App.css';
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { BrowserRouter, Route } from 'react-router-dom';
import YourProfile from "./MainYourProfile";
import News from "./News";
import Registration from "./Registration";
import Dialogs from "./Dialogs";


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
          <Route path="/Messages" component={Dialogs}/>
           </div></div>
        </BrowserRouter>

  );
}

export default App;
