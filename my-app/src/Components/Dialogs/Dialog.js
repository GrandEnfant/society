import React from 'react';
import './../../App.css';
import NewPost from './../NewPost';
import Users from './Users/User';
import UserMessage from './Messages/Message';

const Dialog = (props) => {
    let users = [
        {id: 0, name: "Ivan", photo: "img/Ivan.jpg"},
        {id: 1, name: "Victor Reznov", photo: "img/Reznov.png"},
        {id: 2, name: "Vladimir Lenin", photo: "img/VLenin.jpg"}
    ]
    let messages = [
        {id: 0, text: "Hey! I'm not a cop"},
        {id: 1, text: "I'm Victor Reznov!"},
        {
            id: 2,
            text: "Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners."
        }
    ]

    let userElements = users.map(dialog => <Users name={dialog.name} key={dialog.id}/>);
    let messageElements = messages.map(message => <UserMessage text={message.text} key={message.id}/>);
    // let photoElements = users.map(photo => <UserPhoto key={photo.id} photo={photo.photo}/>);

    return (
        <div>
            <div className={"titleContent"}> Сообщения</div>
            <NewPost> </NewPost>
            <div className={"dialogs just-flex"}>
                <div className={"usersBlock"}>
                    {userElements}
                    </div>
                <div className={"messagesBox"}>
                    {messageElements}
                    </div>
            </div>
        </div>
    )
}


export default Dialog;