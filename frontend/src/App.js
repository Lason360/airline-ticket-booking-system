import "./App.css";
import Layout from "./components/Layout/Layout";
import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { app } from "./config/firebase-config";
import {getAuth} from 'firebase/auth'

const App=() =>{
const firebaseAuth =getAuth(app);
const navigate = useNavigate();



  const [auth, setAuth]= useState(false||window.localStorage.getItem("auth")==="true")
  
  useEffect(()=>{
      firebaseAuth.onAuthStateChanged((userCred)=>{
        if(userCred){
            userCred.getIdToken().then((token)=>{
                console.log(token);
            })
        }else{
          setAuth(false);
          window.localStorage.setItem("auth","false");
          navigate("/login")
        }
      })
  },[])
  
  return <Layout />;

}


export default App;
