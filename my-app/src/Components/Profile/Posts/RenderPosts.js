import React from 'react';
import '../../../App.css';
import store from "../../../redux/state";
import UserPost from "./Post";
import NewPost from "./NewPost";

const Posts = () => {
    let postElements = store.getState().userProfile.posts.map(post => <UserPost text={post.text} key={post.id}/>);

    return (
        <div>
            <NewPost dispatch={store.dispatch({type: "ADD_POST"})}> </NewPost>
            <div className={"post"}>
                {postElements}
            </div>
        </div>
    )
};


export default Posts;
