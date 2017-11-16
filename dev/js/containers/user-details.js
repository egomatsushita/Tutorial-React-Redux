import React, {Component} from 'react';
import {connect} from 'react-redux'

class UserDetails extends Component {
  render() {
    if(!this.props.user) {
      return (
        <h4>Select a user...</h4>
      );
    }
    return (
      <div>
        <img src={this.props.user.thumbnail}/>
        <h3>{this.props.user.first} {this.props.user.first}</h3>
        <h4>Age: {this.props.user.age}</h4>
        <h4>Description: {this.props.user.description}</h4>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetails);