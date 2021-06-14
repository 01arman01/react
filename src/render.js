import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPosts} from "./redux/state";
import {updateNewPostText} from './redux/state'
import {updateNewMessageText} from './redux/state'
import {addMessage} from './redux/state'

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
                addMessage={addMessage}
                addPost={addPosts}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



