import React from 'react';
import '../../../App.css';
import store from '../../../redux/state';



function NewMessage() {
    let NewMessageElement = React.createRef();
    let addMessage = () => {
       let textInArea = NewMessageElement.current.value;
       let action = store.getState().dialogs.addMessageActionCreator(textInArea);
       store.dispatch(action);
       NewMessageElement.current.value = '';
    };

    return (
        <div className={"newMessage"}>
            <textarea ref={NewMessageElement} className={"newMessage_place"}></textarea>
            <button onClick={addMessage}> Добавить сообщение</button>
        </div>
    );

}

export default NewMessage;
