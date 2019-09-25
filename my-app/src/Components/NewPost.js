import React from 'react';
import '../App.css';

function NewPost() {
    let NewPostElement = React.createRef();
    let addPost = () => {
        let text = NewPostElement.current.value;
        alert(text);
    };
   return (
        <div className={"newMessage"}>
        <textarea ref={NewPostElement} className={"newMessage_place"}></textarea>
        <button onClick={addPost}> Добавить</button>
    </div>
    );
}


export default NewPost;
