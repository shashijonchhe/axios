import * as React from "react";
import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';



export default function App(){
    const [counter,setCounter] = useState(0);
    const [randomData,setRandomData] = useState('');

    useEffect(()=>{
        fetchRandomData().then(el=>{
            setRandomData(el)
        })
    },[])

    const fetchRandomData=()=>{
        return axios.get('https://randomuser.me/api')
        .then((data)=>{
            return JSON.stringify(data,null, 2)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    

    return(<div className="App">
        <h1>{counter}</h1>
        <button onClick={()=>{
            setCounter(counter+1);
            console.log('foo')
        }}>Counter</button>
{/* 
        <button onClick={()=>{
            fetchRandomData()
        }}>Get Random Data</button> */} 

        <p>{randomData}</p>
       
    </div>)
}



