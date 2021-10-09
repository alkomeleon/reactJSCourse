import React from 'react';
import './App.css';

export function App({ children, name, component, msgText }) {

    return (
        <div className="App">
            <div>hello react, {name}</div>
            <div>{children}</div>
            <AppClass name={name} />
            <Message msg={msgText} msg2={msgText} msg3={msgText}/>
            {component}
        </div>
    );
}

export class AppClass extends React.Component {
    render() {
        // this.props
        const { name } = this.props;

        return <div className="App">AppClass {name}</div>;
    }
}
export function Message(props) {
    return (
        <div className="Message">
            Сообщение: {props.msg}
        </div>
    )
}