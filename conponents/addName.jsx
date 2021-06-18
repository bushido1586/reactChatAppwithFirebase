import React from 'react';
import style from 'styled-components';

export default function EmailAdderComponent( {setName} ){
    const input = React.createRef('');
    const EmailAdder = style.div`
    
    width: -webkit-fill-available;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background: wheat;
    top: 0;
    `;

    return (
        <EmailAdder>
            <div className="textContainer">
                <p>
                    Type Your Name
                </p>
                <input id="input" onChange={(e) =>{ 
                    input.current = `${e.target.value}`;
                }} type="text" />
                <button onClick={async (e) => {
                    if(input.current.length === 0){
                        return;
                    }
                    setName(input.current)
                }}>
                    Send
                </button>
            </div>
        </EmailAdder>
    );
}