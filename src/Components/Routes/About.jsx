import React from 'react';
import hero from '../../assets/night.jpg';
import Hero from '../Hero';

const About = () => {
	return (
		<div>
			<Hero
				img={hero}
				title={'About'}
			/>
		</div>
	);
};

export default About;
