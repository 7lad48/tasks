import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}
function Button(props:ButtonPropsType) {
    return (
        <button onClick={props.callBack}>{props.name}</button>
    );
}

export default Button;