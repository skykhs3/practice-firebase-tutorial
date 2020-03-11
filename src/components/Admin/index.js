import React, { Component } from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    console.log('AdminPage did mount');
    this.setState({ loading: true });


//     var ref = this.props.firebase.db.ref("user/XW4LpKHZY3bWyVaS4VHpr0qxJaj2");
// ref.on('value', function(snapshot) {
//   console.log(snapshot.val().username);

// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
  this.props.firebase.users().on('value', snapshot => {
    console.log('hmm');
    this.setState({
      users: snapshot.val(),
      loading: false,
    });
  });
 console.log( 'hmm2' );
}
  componentWillUnmount() {
    console.log('AdminPage will unmount');
    this.props.firebase.users().off();
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}
        <UserList users={users} />
      </div>
    );
  }
}
const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);
const condition = authUser => !!authUser;
export default withFirebase(AdminPage);