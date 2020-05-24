import React from 'react'; //React is view library, it not only used for browser, can used in mobile phone, VR
import ReactDOM from 'react-dom'; //used for DOM 
import './index.css'; //  ./ means in same directory
// import App from './App';// This is from App.js, if no write any extension it auto detect as JS file
//You can create customized Component. Example import Hello from './Hello'
import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {robots} from './components/robots' //You have to destructure it because u not exporting default like the Card above

//You can give property to the tag: greeting, and check the hello.js
ReactDOM.render(
<App />, document.getElementById('root')
);
//You can customize the <App /> to your own too
/* ReactDOM.render(
  <React.StrictMode>
    <Hello />                  <<<<See this
  </React.StrictMode>,
  document.getElementById('root')
); */
//install tachyons, it helps easier styling with their own class




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
