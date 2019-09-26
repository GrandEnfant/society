import React from 'react';
import './../../App.css';
import NewPost from '../Profile/Posts/NewPost';
import Users from './Users/User';
import UserMessage from './Messages/Message';


const Dialog = (props) => {
    let userElements = props.users.map(dialog => <Users name={dialog.name} key={dialog.id} photo={dialog.photo}/>);
    let messageElements = props.messages.map(message => <UserMessage text={message.text} key={message.id}/>);

    return (
        <div>
            <div className={"titleContent"}> Сообщения</div>
            <NewPost> </NewPost>
            <div className={"dialogs just-flex"}>
                <div className={"usersBlock"}> {userElements} </div>
                <div className={"messagesBox"}> {messageElements} </div>
            </div>
        </div>
    )
}


export default Dialog;