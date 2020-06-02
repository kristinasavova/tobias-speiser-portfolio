import React from 'react';
import { Link } from 'react-router-dom'; 

const About = () => {
    return (
        <div className='main-content'>
            <div className='column details'>
                <div className='description'>
                    <p>Hello, my name is Tobias Speiser. I’m a 3D Generalist based in Basel, Switzerland. I have competencies in all basics of 3D animation, yet I am most specialised in modeling and look development.</p>
                    <p>In Summer 2018 I graduated with a Bachelors Degree in animation from the Lucerne University of Applied Sciences and Arts. Since then I have been working in Animation and Archviz in London and Zurich.</p>
                    <p>For any questions or enquiries, feel free to contact me at <strong>tobiasspeiser@hotmail.com</strong></p>
                </div>
                <div className='button home'>
                    <Link to='/' className='nav-link'>HOME</Link>
                </div>
            </div>
            <div className='column photo' />
        </div>
    );
};

export default About;