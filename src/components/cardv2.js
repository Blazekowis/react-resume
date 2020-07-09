import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import About from './about';
import Resume from './resume';
import Profile from './profile';


function cardv2() {
    return (
	 
	<Router>
		<div className="w-1/4 rounded rounded-t-lg shadow text-gray-700 px-6 py-4 m-4 h-screen">
			<img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
			<div className="flex justify-center -mt-8">
				<img src={require('../assets/images/dprobhat.jpg')} className="h-32 w-32 rounded-full border-solid border-white border-2 -mt-3 " />
			</div>
			<div className="text-center px-3 pb-6 pt-2">
				<h3 className="text-black text-sm bold font-sans">Probhat Deuri</h3>
				<p className="mt-2 font-sans font-light text-grey-dark">Hello, from a ReactJs Developer!</p>
			</div>
			<div className="flex justify-center pb-3 text-grey-dark">
				<div className="text-center text-sm border-r">
				3 years of Experience as Full Stack Developer
				</div>
			</div>
			<div className="flex flex-col hover:cursor-pointer">
					<Link to="/profile" className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold">
						<i className="fa fa-user text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Profile</Link>
					<Link to="/resume" className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold">
						<i className="fa fa-pen-nib text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Technologies</Link>
					<Link to="/about" className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold">
						<i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i>About</Link>
				</div>
		</div>
		
			<Switch>

				<Route path="/about">
					<Profile />
				</Route>
				
				<Route path="/about">
					<About />
				</Route>
				
				<Route path="/resume">
					<Resume />
				</Route>
				
				<Route path="/profile">
					<Profile />
				</Route>

			</Switch>
		
	</Router>

    )
}


export default cardv2;

