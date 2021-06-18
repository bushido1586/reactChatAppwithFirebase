import React from 'react';
import style from 'styled-components';
import Messages from './message';

export default function Container() {

    const Box = style.div`
    
        .chatBox{
            background: #cccfff;
            height: 90vh;
            width: 500px;
            margin: 5vh auto;
            border-radius: 10px;
            position: relative;
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
            padding: 52px;
        }
        `
        return(
            <Box>
                <div className="chatBox">
                    <Messages />
                    <div className="textFooter">
                        <input type="test" />
                        <button>Send</button>
                    </div>
                </div>
            </Box>
        )
}