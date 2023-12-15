import React from 'react';
import hero from '../assets/12.jpg';
import { Link } from 'react-router-dom';

const Hero = (props) => {
	return (
		<div className=' relative'>
			<img
				src={props.img}
				alt='HeroImg'
				className=' w-screen h-full'
			/>
			<div className=' text-center absolute top-[50%] right-0 left-0'>
				<h1 className=' text-2xl md:text-5xl font-bold text-white pt-2 md:pb-2'>
					{props.title}
				</h1>
				<p className=' text-xl text-white md:py-4 mb-4'>{props.text}</p>
				<Link
					to={props.url}
					className='underline text-xl bg-white rounded-lg py-2 md:py-4 px-4 md:px-8 hover:bg-black hover:text-white'>
					{props.btnText}
				</Link>
			</div>
		</div>
	);
};

export default Hero;
