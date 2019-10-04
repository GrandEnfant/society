import React from 'react';
import '../../../App.css';
import store from "../../../redux/state";

function NewPost() {
    let NewPostElement = React.createRef();
    let addPost = () => {
        let PostText = NewPostElement.current.value;
        let action = store.getState().posts.addPostActionCreator(PostText);
        store.dispatch(action);
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
