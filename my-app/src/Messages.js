import React from 'react';
import './App.css';


const Messages = (props)=> {

    let users = [
        {id:0, name: "Ivan", photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiW9OWrsrzkAhVM_SoKHdizC8gQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.kinopoisk.ru%2Fname%2F1664014%2F&psig=AOvVaw2fhd6cvobyBKdakjEBKOXq&ust=1567866052181841"},
        {id:1, name: "Victor Reznov", photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj8yP3RsrzkAhVrwosKHR3aBIMQjRx6BAgBEAQ&url=https%3A%2F%2Fcallofduty.fandom.com%2Fru%2Fwiki%2F%25D0%2592%25D0%25B8%25D0%25BA%25D1%2582%25D0%25BE%25D1%2580_%25D0%25A0%25D0%25B5%25D0%25B7%25D0%25BD%25D0%25BE%25D0%25B2&psig=AOvVaw2qx7e-39JXiiJK8xnYGbzX&ust=1567866132196771"},
        {id:2, name: "Vladimir Lenin", photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiB6OWCs7zkAhXIUJoKHa8wCeAQjRx6BAgBEAQ&url=https%3A%2F%2Fnews.rambler.ru%2Fother%2F39405367-chto-horoshego-sdelal-vladimir-lenin-dlya-rossii%2F&psig=AOvVaw2gZBU2sGWmgO3A86Opkuk6&ust=1567866223791290"}
    ]

    let dialogElements = users.map(dialog => <users name={users[0].name} messages={messages[0].text}/>)
;
    let messages = [
        {id:0, text:"Hey! I'm not a cop"},
        {id:1, text:"I'm Victor Reznov!"},
        {id:2, text:"Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners."}
    ]
}

export default Messages;