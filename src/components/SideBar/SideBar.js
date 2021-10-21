import React from 'react';
import $ from 'jquery';
import './Sidebar.css';
import ReactDOM from 'react-dom';
import StepStone from '../StepStone/StepStone';

class Sidebar extends React.Component{
    componentDidMount(){
       
    }

    render(){
        return(
            <div>
            <div className="left-sidebar">
	<div id="menu">
		<ul>
			<li><a className="active" href="#1">Home</a>

			</li>
			<li><a href="#2">Portfolio</a>

			</li>
			<li><a href="#3">About</a>

			</li>
			<li><a href="#4">Contact</a>

			</li>
		</ul>
	</div>
</div>
<div className="main-container">
	<section className="section" id="1"><h1><StepStone /></h1></section>
	<section className="section" id="2"><h1>Content 2</h1></section>
	<section className="section" id="3"><h1>Content 3</h1></section>
	<section className="section" id="4"><h1>Content 4</h1></section>
</div>
        </div>
        );
    }
}

export default Sidebar;
