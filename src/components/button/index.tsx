import React from 'react';

export const Button = (props) => {


  return (
    <div onClick={props.onClick} className="button">
      {props.text}
    </div>
  )
};