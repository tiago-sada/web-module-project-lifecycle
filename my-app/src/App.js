import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios';
import UserCard from "./Components/UserCard"
import FollowersList from "./Components/FollowersList"

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: null,
      followers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/tiago-sada`)
      .then(res => {
        const userData = res.data;
        this.setState({user: userData, followers: this.state.followers});
      }).catch(err => {
        console.log(err)
      })

      axios.get(`https://api.github.com/users/tiago-sada/followers`)
      .then(res => {
        const followersData = res.data;
        this.setState({user: this.state.user, followers: followersData});
      }).catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <h2>User:</h2>
        <UserCard user={this.state.user}/>
        <h2>Followers:</h2>
        <FollowersList followers={this.state.followers}/>
      </div>
      
    );
  }
  
}

export default App;
