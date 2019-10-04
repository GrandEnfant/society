import React from 'react';
import '../../../App.css';


const UserPost= (props) => {
    return (
        <div className={"messages eachElementOfMessage"}>
            {props.text}
        </div>
    )
}


export default UserPost;
