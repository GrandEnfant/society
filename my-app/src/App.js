import React from 'react';
import './App.css';
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { BrowserRouter, Route } from 'react-router-dom';
import YourProfile from "./MainYourProfile";
import News from "./News";
import Registration from "./Registration"


function App() {
  return (
    <div className="App">
        <Header> </Header>
       <div className="mainContainer">
        <LeftSideBar>

        </LeftSideBar>
        <BrowserRouter>
          <Route exact path="/MainYourProfile" component={YourProfile}/>
          <Route exact path="/News" component={News}/>
          <Route exact path="/Registration" component={Registration}/>
        </BrowserRouter>
       </div>
    </div>
  );
}

export default App;
