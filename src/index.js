import {
    createStore,
    combineReducers
} from 'redux';

const ADD_TODO = 'ADD_TODO';
function actionAddTodo (task){
    return {
        type: ADD_TODO,
        payload: {
            task
        }
    }
}

const defaultTodo = {
    task: ''
}

function add (state= defaultTodo, action){
    const newState= {...state};
    switch(action.type){
        case ADD_TODO = 'ADD_TODO':
            newState.task = action.payload.task;
            break;
        default:
            break;
    }
    return newState;
}


const DEL_TODO = 'DEL_TODO';
function actionDelTodo(task){
    return {
        type: DEL_TODO,
        payload:{
            task
        }
    }
}







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
