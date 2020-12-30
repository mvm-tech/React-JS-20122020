/*import { script } from './script';

script();
console.log('А это index.js');
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
   'h1',
   { className: "element" },
   'Кажется, мы подключили React',
);

ReactDOM.render(
   element,
   document.getElementById('root'),
);
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1 className="element">Кажется, мы подключили React</h1>;

ReactDOM.render(
   element,
   document.getElementById('root'),
);
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

const content = 'Кажется, мы подключили React';

const Component = (props) => <h1 className="element">{props.content}</h1>;

ReactDOM.render(
   <Component content={ content } />,
   document.getElementById('root'),
);


import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);
*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


