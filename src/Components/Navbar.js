import React from 'react'
//import {a} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    
    <div className="App">
        
    <nav className={'navbar navbar-expand-lg navbar-$(props.mode) bg-$(props.mode)'}>
<a className="navbar-brand">{props.title}</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="\navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>



<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="/home">Home </a>
    </li>
    <li className="nav-item">
      <a  className="nav-link" href="/about>{props.AboutUs} </a>
    </li>
  </ul>

  
</div>

 <div className={'form-check form-switch text-{props.mode}'} >
  <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <button className="btn-btn primary" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</button>
</div>
</nav>
</div>  
  </>
  )
}
