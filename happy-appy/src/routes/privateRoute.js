import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute(props){
    if("token" in localStorage){
        return(
            <Route path={props.path} component={props.component}/>
        )
    }else{
        return(
            <Redirect to="/Login/"/>
            
        )
    }   
};

