import React from 'react';
import style from 'styled-components'

export default function Message({data}){
    const {message, sender} = data

const Message = style.div`
min-height: 21px;
max-width: 90%;
min-width: 50%;
width: max-content;
background: ${sender?'pink':'blue'};;
text-align: left;
padding: 10px;
border-radius: 10px;
color: white;
margin: 15px 0;
float: ${sender?'left':'right'}
`

    return(
        <Message>
          {message}
        </Message>
    )
}