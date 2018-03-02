console.log('App.js is running!');

// JSX - JavaScript XML

const appObj = {
    title: 'Indecision App',
    subtitle: 'Just leave it up to us',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item one</li>
        </ol>
    </div>
);

const user = {
    username: 'Gabriel Gómez',
    age: 21,
    city: 'Guadalajara'
}

function getLocation(city) {
    if (city) {
        return <p>Location: {city}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.username ? user.username : 'Anonymous'}</h1>
        {user.age > 18 && <p>Age: {user.age}</p>}
        {getLocation(user.city)}
    </div>   
)

const appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);