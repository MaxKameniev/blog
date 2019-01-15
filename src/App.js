import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAsync } from './redux/actions/getPostsAction';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import './App.css';

class App extends Component {

  state = {
    id: ''
  }

  componentDidMount() {
    this.props.fetchPostsAsync();
  }

  getId = (event) => {
    let id = event.target.dataset.id;
    this.setState({id: id});
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>BLOG</h1>
          <Menu />
        </div>
        <Main getId={this.getId} id={this.state.id}/>
      </div>
    );
  }
}

function MSTP(state) {
  return {
      posts: state.posts
  }
}

function MDTP(dispatch) {
  return {
      fetchPostsAsync: function () {
          dispatch(fetchPostsAsync())
      }
  }
}

export default connect(MSTP, MDTP)(App);

