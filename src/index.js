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
        case ADD_TODO:
            newState.task = action.payload.task;
            break;
        default:
            break;
    }
    return newState;
}


const DEL_TODO = 'DEL_TODO';
function actionDelTodo(id){
    return {
        type: DEL_TODO,
        payload:{
            id
        }
    }
}

const defaultApp = []
function TodoApp (state= defaultApp, action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text:action.text,
                    completed: false
                }
            ]
    }
}

const store = createStore(add, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    console.table(store.getState())
});

store.dispatch(actionAddTodo('do the dishes'));






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
