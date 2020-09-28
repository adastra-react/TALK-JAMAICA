import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';
// import ChatBox from './ChatBox';
import Profile from './Profile';
import Signup from './SignUp';
import Login from './Login';
// import Footer from './Footer';
// import Welcome from './Welcome'; 
import firebase from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from 'firebase';
import './App.css'


export default class App extends Component {

     ShowToast = (type, message) => {
        switch (type) {
          case 0:
            toast.warning(message)
            break;
            case 1:
              toast.success(message)
              default:
                break;
        }
      }

      constructor(){
          super();
          this.state = {
              authenticated: false,
              loading: true
          };
      };

      componentDidMount(){
          firebase.auth().onAuthStateChanged(user => {
              if(user){
                this.setState({
                    authenticated: true,
                    loading: false
                })
              } else {
                  this.setState({
                    authenticated: false,
                    loading: false
                  })
                  
              }
          })
      }

    render() {


        return this.state.loading === true ? (
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading....</span>
            </div>
        ) : (
            <Router>
                <ToastContainer
                  autoClose={2000}
                  hideProgressBar={true}
                  position={toast.POSITION.TOP_CENTER}
                 />

                 <Switch>
                     
  

                     <Route path="/login" 
                            render={ props => <Login ShowToast = { this.ShowToast } { ...props } /> } 
                    />

                    <Route path="/profile" 
                            render={ props => <Profile ShowToast = { this.ShowToast } { ...props } /> } 
                    />

                    <Route path="/signup" 
                            render={ props => <Signup ShowToast = { this.ShowToast } { ...props } /> } 
                    />

                    <Route path="/chat" 
                            render={ props => <Chat ShowToast = { this.ShowToast } { ...props } /> } 
                    />

                    <Route path="/" render={ props => <Home { ...props } /> }/>



                     
                 </Switch>
            </Router>
        )
    }
}



// function App() {

  

//    const [authenticated, SetAuthenticated] = useState(false);
//    const [loading, SetLoading] = useState('');
//    const [user, setUser] = useState('');
//    const [email, setEmail] = useState('');
//    const [password, SetPassword] = useState('');
//    const [emailError, setEmailError] = useState('');
//    const [passwordError, setPasswordError] = useState('');
//    const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//       setEmail('');
//       SetPassword('');
//   } 

//   const clearErrors = () => {
//       setEmailError('');
//       setPasswordError('')
//   }

//   const handleLogin = () => {
//       clearErrors();
//        firebase
//                .auth()
//                .signInWithEmailAndPassword(email, password)
//                .catch(err => {
//                    switch(err.code){
//                        case "auth/invalid-email":
//                        case "auth/user-disabled":
//                        case "auth/user-not-found":
//                            setEmailError(err.message);
//                            break;
//                        case "auth/wrong-password":
//                            setPasswordError(err.message);
//                            break;
//                    }
//                })
//            }

//    const handleSignup = () => {
//        clearErrors();
//        firebase
//                .auth()
//                .createUserWithEmailAndPassword(email, password)
//                .catch(err => {
//                    switch(err.code){
//                        case "auth/email-already-in-use":
//                        case "auth/invalid-email":
                       
//                            setEmailError(err.message);
//                            break;
//                        case "auth/weak-password":
//                            setPasswordError(err.message);
//                            break;
//                    }
//                })
//            };

//    const handleLogout = () => {
//        firebase.auth().signOut();
//    };

//    const authListener = () => {
//        firebase.auth().onAuthStateChanged(user => {
//            if(user){
//                clearInputs();
//                setUser(user)
//                SetAuthenticated(true)
//                SetLoading(false)
//            } else {
//                setUser('');
//                SetAuthenticated(false)
//                SetLoading(false)
//            }
//         })
//      }

//    useEffect(() => {
//        authListener();
//    }, []);


   
   
//   return SetLoading(true) ? (
//       <div className="spinner-border text-success" role="status">
//           <span className="sr-only">Loading....</span>
//       </div>
//   ) : (
//         <Router>
//             <ToastContainer 
//                 autoClose={2000}
//                 hideProgressBar={true}
//                 position={toast.POSITION.TOP_CENTER}
//             />
//             <Switch>
//                 <Route path="/" exact render={ props=> <Home {...props}/> }>

//                 </Route>
//             </Switch>
//         </Router>
//   )
// }

// export default App;
