import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SignUp.css';
import firebase from './firebase';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextFeild from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            name:"",
            error:null
        }
    }
    render() {
        return (
            <div>
                <CssBaseline/>
            </div>
        )
    }
}
