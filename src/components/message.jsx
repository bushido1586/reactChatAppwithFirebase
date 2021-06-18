import React from 'react';
//import { db } from '../config/firebase';
import style from 'styled-components';
import Message from './messageBox';



export default function Messages(){

    const Messages = style.div`
    padding: 20px;
    height: calc(100% - 64px);
    overflow-y: scroll;
    `

    const messages =[
        {
            message:'Hi',
            sender:0,
        },
        {
            message: 'Hi!',
            sender:0,
        },
        {
            message: 'Have you guys read any of my former articles?',
            sender: 0,
        }, 
        {
            message: 'Hi',
            sender: 1,
        },
        {
            message: 'Hi',
            sender: 0,
        },
        {
            message: 'Hi!',
            sender: 1,
        }
    ]

    
    return (
        <Messages>{messages.map((data)=>{
            return <Message data={data} />
            })}
        </Messages>
    )
}