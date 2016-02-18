import React from 'react'
import { Link, IndexLink } from 'react-router'


let App = (props) => {
    return <div>
        <h1> App Name < /h1>
        < ul >
        <li><IndexLink to="/" activeClassName={"active"} activeStyle={{color: 'red'}} > Home </IndexLink></li >
        <li><Link to="/about" activeClassName={"active"} activeStyle={{color: 'red'}} > About </Link></li >
        </ul>
    { props.children }
    </div>
}

export default App;