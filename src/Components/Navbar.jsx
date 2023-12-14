import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	FcAbout,
	FcCancel,
	FcContacts,
	FcHome,
	FcMenu,
	FcServices,
} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	return (
		<div className='shadow-2xl bg-white px-8 py-3 h-full rounded-xl w-[95%] flex items-center justify-center mx-auto'>
			{/* For destops */}
			<nav className='hidden md:flex w-full h-full items-center justify-between shadow-primary py-1'>
				<h1 className=' text-4xl font-bold flex items-center justify-center cursor-pointer'>
					Trippy
				</h1>
				<ul className=' flex gap-6 items-center justify-center'>
					<Link to={'/'}>
						<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-200 hover:ease-in-out p-4 cursor-pointer'>
							<FcHome className=' text-3xl' /> Home
						</li>
					</Link>
					<Link to={'/about'}>
						<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-400 hover:ease-in-out p-4 cursor-pointer'>
							<FcAbout className=' text-3xl' /> About{' '}
						</li>
					</Link>
					<Link to={'/service'}>
						<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-200 hover:ease-in-out p-4 cursor-pointer'>
							<FcServices className=' text-3xl' /> Services
						</li>
					</Link>
					<Link to={'/contact'}>
						<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-200 hover:ease-in-out p-4 cursor-pointer'>
							<FcContacts className=' text-3xl' /> Contact
						</li>
					</Link>
					<li className=' py-2 px-4 bg-gray-200 rounded-md font-semibold cursor-pointer hover:bg-black hover:text-white'>
						Sign up
					</li>
				</ul>
			</nav>
			{/* For Mobile */}
			<nav className='flex items-center justify-between md:hidden px-1 py-1 w-screen'>
				<h1 className=' text-4xl font-bold'>Trippy</h1>
				<div className=' relative'>
					<FcMenu
						className=' text-4xl'
						onClick={() => setIsMenu(true)}
					/>
					{isMenu && (
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, y: 200 }}
							className=' bg-gray-50 shadow-xl rounded-lg flex flex-col top-2 right-4 fixed w-[90%] h-3/4 z-[101] p-5'>
							<div className='flex justify-end'>
								<FcCancel
									className='text-red-500 text-3xl'
									onClick={() => setIsMenu(false)}
								/>
							</div>
							<ul className='flex flex-col gap-1 items-center'>
								<Link to={'/'}>
									<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-200 hover:ease-in-out p-4 cursor-pointer'>
										<FcHome className=' text-3xl' /> Home
									</li>
								</Link>
								<Link to={'/about'}>
									<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-400 hover:ease-in-out p-4 cursor-pointer'>
										<FcAbout className=' text-3xl' /> About{' '}
									</li>
								</Link>
								<Link to={'/service'}>
									<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-200 hover:ease-in-out p-4 cursor-pointer'>
										<FcServices className=' text-3xl' /> Services
									</li>
								</Link>
								<Link to={'/contact'}>
									<li className=' flex items-center justify-center gap-1 font-semibold text-xl hover:bg-blue-500 hover:text-white hover:rounded-md hover:transition-all hover:duration-200 hover:ease-in-out p-4 cursor-pointer'>
										<FcContacts className=' text-3xl' /> Contact
									</li>
								</Link>
								<li className=' py-2 px-4 bg-gray-200 rounded-md font-semibold cursor-pointer hover:bg-black hover:text-white'>
									Sign up
								</li>
							</ul>
						</motion.div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
