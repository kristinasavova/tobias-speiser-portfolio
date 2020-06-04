import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';
import List from './List';
import Form from './Form'; // contact form

class Portfolio extends Component {

    state = {
        isDesktop: false
    }

    componentDidMount () {
        this.updatePredicate ();
        window.addEventListener ('resize', this.updatePredicate); 
    }

    componentWillUnmount () {
        window.removeEventListener ('resize', this.updatePredicate);
    }

    /**
     * Update state if width of the window gets greater than 768 px
     */
    updatePredicate = () => {
        this.setState ({ isDesktop: window.innerWidth > 768 });
    }

    render () {
        return (
            <React.Fragment>
                <div className='content'>
                    <div className='header'>
                        <div className='button about'>
                            <Link to='/about' className='nav-link'>ABOUT ME</Link>
                        </div>
                    </div>
                    <div className='main-info'>
                        <h2 className='heading'>TOBIAS SPEISER | MODELING & LOOK DEV</h2>
                        <div className='video-wrapper'>
                            <iframe 
                                title='Showreel'
                                src='https://www.youtube.com/embed/sxNVFklby-Q' 
                                frameBorder='0' 
                                scrolling='no'
                                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                                allowFullScreen />
                        </div>
                    </div>
                    { // Render Table if desktop or list if not 
                        this.state.isDesktop ?
                        <Table /> : <List />
                    }
                    <div className='contact-form'>
                        <h3>CONTACT ME IF YOU HAVE A QUESTION</h3>
                        <Form />
                    </div>
                </div>
                <footer />
            </React.Fragment>
        );
    }
};

export default Portfolio; 