import { useState } from 'react';
import Navbar from './Components/Navbar';
import {
	Outlet,
	RouterProvider,
	ScrollRestoration,
	createBrowserRouter,
} from 'react-router-dom';
import Home from './Components/Routes/Home';
import About from './Components/Routes/About';
import Contact from './Components/Routes/Contact';
import Service from './Components/Routes/Service';
const Layout = () => {
	return (
		<div>
			<Navbar className=' fixed top-0 left-0 right-0 mx-auto z-10' />
			<ScrollRestoration />
			<Outlet />
		</div>
	);
};
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/service',
				element: <Service />,
			},
		],
	},
]);

function App() {
	return (
		<div className='w-screen h-auto'>
			{/* <Navbar /> */}
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
