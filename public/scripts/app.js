'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var appObj = {
    title: 'Indecision App',
    subtitle: 'Just leave it up to us',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subtitle && React.createElement(
        'p',
        null,
        appObj.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObj.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item one'
        )
    )
);

var user = {
    username: 'Gabriel Gómez',
    age: 21,
    city: 'Guadalajara'
};

function getLocation(city) {
    if (city) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            city
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.username ? user.username : 'Anonymous'
    ),
    user.age > 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.city)
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);
