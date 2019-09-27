import React from 'react';
import '../../../App.css';
import FriendsList from './FriendsList';

const Friends = (props) => {
    let friendItem = props.friends.map(friend => <FriendsList name={friend.name} key={friend.id}/>);

    return (
        <div className={"friendList"}>
            <h1>Friend List Here</h1>
            <div className={"friendsList"}>
                {friendItem}
                </div>
        </div>
)
}


export default Friends;