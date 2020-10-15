import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          const {displayName, email} = result.user;
          const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    


    return (
      <div className="App">
       <div>
        <h1>Login With</h1>
        <br/>
        <button onClick={handleGoogleSignIn} className="btn btn-success">Google</button>
        <br/>
        <br/>
        <p>Don't have an account? <a href="#">Create an account</a></p>

       </div>
      </div>
    );
};

export default Login;