
const ADD_ELEMENT = 'ADD_ELEMENT';
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
        friends: [
            {id: 0, name: "Ivan", photo: "img/Ivan.jpg"},
            {id: 1, name: "Victor Reznov", photo: "img/Reznov.png"},

        ],
    },
    addElement(text) {

    },
    callSubscriber() {
        console.log("rerenderThree");
    },
    getState() {
       return this._state;
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },
    addElementActionCreator(textInArea) {
        return {
            type: ADD_ELEMENT,
            textMessage: textInArea,

        }
    },

    // update(){
    //   this.callSubscriber();
    //     debugger;
    // },
    dispatch(action){
        if((action.type === ADD_ELEMENT) && (action.textMessage)) {
            let NewMessage = {
                id: 4,
                text: action.textMessage,
            }
            this.getState().messages.push(NewMessage);
            console.log(NewMessage, this.getState().messages);
            this.callSubscriber();

           // this.callSubscriber(this._state);
        }
        else if(!action.textMessage) {
            console.log("textMessage is empty");
        }
    }
};



export default store;

