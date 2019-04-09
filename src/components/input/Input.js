import React from 'react';

function Input(props) {
    return(
      <input value={props.val} onClick={props.click} onChange={props.change} type={props.type} className={props.className}/>
    );
}
export default Input;