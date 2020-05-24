import React, {Component}  from 'react';
import CardList from '../components/CardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

//How the Searchbox can commnicate with cardlist? Use State
//State is something that can change and affect app
class App extends Component {
  
  //Constructor to set State
  constructor(){
    super()
    this.state = {
      robots: [], //Normally in real life we wont have preset array of data
      searchField: '',
    }
  }

//In React, there is a lifecycle, certain functions will always be executed, eg: render(), componentDidMount() etc.
  componentDidMount() {
    //fetch is window object, meant to grab something from server
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users =>  this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})//This is naturally in React, always use this
  }
//Notice the scroll is closing tag
//Important note: Props, State, Children
  render(){
    const {robots, searchField} = this.state; // By doing this then no need keep repeat this.state below
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    //Worry if API call too slow
    if(this.state.robots.length === 0){
      return <h1 className='tc'>Loading</h1>
    }else {
      return (
        <div className= 'tc'>
          <h1 className= 'lightest-blue'>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll> 
            <ErrorBoundry>
            <CardList robots= {filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }

  }
}
export default App;
