import React from 'react';
import './App.css';

const Users = (props) => {
return (
        <div className={"users eachElementOfMessage"}>
            {props.name}
        </div>
)}
const UserMessage = (props) => {
    return (
        <div className={"messages eachElementOfMessage"}>
            {props.text}
        </div>
    )}
const UserPhoto = (props) => {
    return (
        <div className={"userPhoto eachElementOfMessage"}>
            {/*<img src = */}
                     {props.photo}
                 {/*dangerouslySetInnerHTML={{ __html: 'HTML' }}> </img>*/}
        </div>
    )}

const Dialogs = (props) => {

    let users = [
        {id:0, name: "Ivan", photo: "img/Ivan.jpg"},
        {id:1, name: "Victor Reznov", photo: "img/Reznov.png"},
        {id:2, name: "Vladimir Lenin", photo: "img/VLenin.jpg"}
    ]
    let messages = [
        {id:0, text:"Hey! I'm not a cop"},
        {id:1, text:"I'm Victor Reznov!"},
        {id:2, text:"Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners."}
    ]

    let userElements = users.map(dialog => <Users name={dialog.name} key={dialog.id} photo={dialog.photo}/>);
    let messageElements = messages.map(message => <UserMessage text={message.text} key={message.id}/>);
    let photoElements = users.map(photo => <UserPhoto key={photo.id} photo={photo.photo}/>);
return (
    <div>

        <div className={"titleContent"}> Сообщения </div>
        <div className={"newMessage"}>
            <textarea className={"newMessage_place"}> </textarea>
            <button> Добавить </button>
        </div>
  <div className={"dialogs just-flex"}>
        <div className={"usersBlock"}>
            {userElements} {Users} </div>
      <div className="photoDialog">
          {photoElements}{Users}
      </div>
        <div className={"messagesBox"}>
             {messageElements}
        </div>
           </div>
    </div>

)
}
export default Dialogs;