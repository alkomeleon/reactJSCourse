import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Message} from './App';


const myName = "test";
const myChildren = "123123123123";

ReactDOM.render(
    <React.StrictMode>
            <App
                test="123"
                id={() => {}}
                test3={{}}
                name={myName}
                component={<div>test component</div>}
                msgText={"Hi"}
            >
                    {myChildren}
            </App>
    </React.StrictMode>,
  document.getElementById('root')
);

