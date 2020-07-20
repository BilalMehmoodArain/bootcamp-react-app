import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Hi(props){
  return <div>
            Hello {props.firstname}{props.lastname}!
            <strong>Bilal Mehmood</strong>
            {5+10}
            <h1>Chaska Point offers:</h1>
            <ul>
              <li>Coffee</li>
              <li>Milk</li>
              <li>Tea</li>
            </ul>
            <ol>
              <li>Coffee</li>
              <li>Milk</li>
              <li>Tea</li>
            </ol>
            <App />
         </div>
          
}
ReactDOM.render(<Hi firstname="Bilal" lastname="Mehmood"/>, document.querySelector('#root'));