import React, {ChangeEvent} from 'react';

type InputPropsType = {
    inputChange: (event:ChangeEvent<HTMLInputElement>)=>void
    inputField: string
}
function Input(props: InputPropsType) {
    return (
        <input onChange={props.inputChange} value={props.inputField}/>
    );
}

export default Input;