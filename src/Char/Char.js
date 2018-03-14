import React from 'react';

export default props => <div style={{
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black',
  fontFamily: 'cursive',
  backgroundColor: props.backgroundColor,
  color: props.textColor,
  fontWeight: 'bold',
  fontStyle: 'italic',
  textDecoration: 'underline',
  fontSize: '2rem'
}} onClick={props.click.bind(this, props.index)}>{props.char}</div>;
