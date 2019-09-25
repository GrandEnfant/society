import React from 'react';
import '../../../App.css';

const UserMessage = (props) => {
    return (
        <div className={"messages eachElementOfMessage"}>
            {props.text}
        </div>
    )
}






export default UserMessage;