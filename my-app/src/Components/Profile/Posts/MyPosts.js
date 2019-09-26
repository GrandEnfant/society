import React from 'react';
import './../../App.css';

const Posts = () => {

    let posts = [
        {id: 0, text: "It's my first post. Once on Tuesday I went home", likesCount: 12},
        {id: 1, text: "It's my second post. I reading a book when mother came", likesCount: 12},
        {
            id: 2,
            text: "It's my third post. I say her: 'My bus leaves at 7 pm tomorrow'", likesCount: 15
        }
    ]
    let postElements = posts.map(post => <UserPosts text={post.text} key={post.id}/>);
    return (
        <div>
            <div className={"post"}>
                {postElements}
            </div>
        </div>
    )

}

export default Posts;