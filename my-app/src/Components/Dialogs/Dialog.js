import React from 'react';
import './../../App.css';
import Users from './Users/User';
import UserMessage from './Messages/Message';
import NewMessage from './Messages/NewMessage';
import store from '../../redux/state';


const Dialog = (props) => {
    let userElements = props.users.map(dialog => <Users name={dialog.name} key={dialog.id} photo={dialog.photo}/>);
    let messageElements = props.messages.map(message => <UserMessage text={message.text} key={message.id}/>);

    return (
        <div>
            <div className={"titleContent"}> Сообщения</div>
            <NewMessage addElement={store.addElement}></NewMessage>

            <div className={"dialogs just-flex"}>
                <div className={"usersBlock"}> {userElements} </div>
                <div className={"messagesBox"}> {messageElements} </div>
            </div>
        </div>
    )
}




export default Dialog;