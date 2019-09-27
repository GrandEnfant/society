import React from 'react';
import '../../../App.css';

const FriendsList = (props) => {
    return (
        <div className={"FriendItem"}>
            <div className={"userPic"}>
            </div>
            <div className={"userName"}>
                {props.name}
            </div>
        </div>
    )
}

export default FriendsList;
