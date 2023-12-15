import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import hero from '../../assets/12.jpg';

const Home = () => {
	return (
		<div>
			<Hero
				img={hero}
				title={'Your Journey Your Story'}
				text={'Choose Your Favourite Destination'}
				btnText={'Travel Plan'}
				url='/'
			/>
		</div>
	);
};

export default Home;
