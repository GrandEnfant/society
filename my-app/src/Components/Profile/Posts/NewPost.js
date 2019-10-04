import React from 'react';
import '../../../App.css';
import store from "../../../redux/state";

function NewPost() {
    let NewPostElement = React.createRef();
    let addPost = () => {
        debugger;
        let PostText = NewPostElement.current.value;
        debugger;
        let action = store.getState().posts.addPostActionCreator(PostText);
        debugger;
        store.dispatch(action);
        debugger;
        NewPostElement.current.value = '';
    };
   return (
        <div className={"newMessage"}>
        <textarea ref={NewPostElement} className={"newMessage_place"}></textarea>
        <button onClick={addPost}> Добавить</button>
    </div>
    );
}


export default NewPost;
