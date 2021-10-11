import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
const Render = () => {
  return (
    <>
    <Counter/>
    </>
  )
}
ReactDOM.render(<Render/>,document.getElementById("root"))
