
const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_POST = 'ADD_POST';
let store = {
    _state: {
        users: [
            {id: 0, name: "Ivan", photo: "img/Ivan.jpg"},
            {id: 1, name: "Victor Reznov", photo: "img/Reznov.png"},
            {id: 2, name: "Vladimir Lenin", photo: "img/VLenin.jpg"}
        ],
        messages: [
            {id: 0, text: "Hey! I'm not a cop"},
            {id: 1, text: "I'm Victor Reznov!"},
            {
                id: 2,
                text: "Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners."
            }
        ],
        userProfile: {
            friends: [
                {id: 0, name: "Ivan", photo: "img/Ivan.jpg"},
                {id: 1, name: "Victor Reznov", photo: "img/Reznov.png"},

            ],
            posts: [
                {id: 0, text: "It's my first post. Once on Tuesday I went home", likesCount: 12},
                {id: 1, text: "It's my second post. I reading a book when mother came", likesCount: 12},
                {
                    id: 2,
                    text: "It's my third post. I say her: 'My bus leaves at 7 pm tomorrow'", likesCount: 15
                }
            ],

    },
        posts: {
            addPostActionCreator(PostText) {
                return {
                    type: ADD_POST,
                    textPost: PostText,
                }
            },
        },
        dialogs: {
            addMessageActionCreator(textInArea) {
                return {
                    type: ADD_MESSAGE,
                    textMessage: textInArea,
                }
            },


        },

    },
    callSubscriber() {
        console.log("rerenderThree");
    },

    subscribe(observer) {
        this.callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action){
        if((action.type === ADD_MESSAGE) && (action.textMessage)) {
            let NewMessage = {
                id: 4,
                text: action.textMessage,
            }
            this.getState().messages.push(NewMessage);
            console.log(NewMessage, this.getState().messages);
            this.callSubscriber();

           // this.callSubscriber(this._state);
        }
        else if((action.type === ADD_POST) && (action.textPost)) {
            console.log("Post added");
            let NewPostArr = {
                id: 4,
                text: action.textPost,
            };
            this.getState().userProfile.posts.push(NewPostArr);
            console.log(NewPostArr, this.getState().userProfile.posts);
            this.callSubscriber();
        }
    }
};



export default store;

