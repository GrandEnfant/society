import React from 'react';
import '../../../App.css';

const Users = (props) => {
    return (
        <div className={"users eachElementOfMessage"}>
            {props.name}
        </div>
    )
}

// const UserPhoto = (props) => {
//     return (
//         <div className={"userPhoto eachElementOfMessage"}>
//             {/*<img src = */}
//             {props.photo}
//             {/*dangerouslySetInnerHTML={{ __html: 'HTML' }}> </img>*/}
//         </div>
//     )
// }


export default Users;