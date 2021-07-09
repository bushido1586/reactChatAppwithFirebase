import React from 'react'
import style from 'styled-components'
import Messages from './messages'
import {AnimationWrapper} from 'react-hover-animation';
 
export default function Container() {
 
   const Box = style.div`
 
       .chatBox{
           background:#cccfff;
           height:90vh;
           width:500px;
           margin:5vh auto;
           border-radius:10px;
           position:relative;
 
       }
 
       .textFooter{
           position: absolute;
           bottom: 0;
           display: inline-flex;
           width: 100%;
           left: 0;
       }
 
       input{
           width: -webkit-fill-available;
           height: 52px;
           border: 0;
           padding: 0 10px;
       }
 
       button{
           width: 60px;
           border: 0;
           height: 52px;
       }
   `
    const input = React.createRef('');

   return (
       <Box>
         <div className="chatBox">
         <Messages />
             <div className="textFooter">
                 <input type="text" 
                 id="input"
                 onChange={(e) => {
                     input.current = `${e.target.value}`
                 }}
                 />
                 <AnimationWrapper>
                 <button onClick={async (e) => {
                     if(input.current.length===0){
                         return 
                     };
                     document.getElementById('input').value='';
                 }} type="submit">
                 Send</button>
                 </AnimationWrapper>
             </div>
         </div>
       </Box>
   )
}