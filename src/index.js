import React from 'react';
import ReactDOM from 'react-dom';


const luckyNumber = () => Math.floor(Math.random()*1000)+1;
const user = {
    name: 'Kyle',
    luckyNumber: luckyNumber()
};

function greeting (userObj) {
    console.log(userObj);
    const userObject = (
        <div className="container">
            <h1>Hello, {userObj.name}!</h1>
            <h2 className="text-muted">Your lucky number is {userObj.luckyNumber}!</h2>
        </div>
    );
    return userObject;
}


ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
