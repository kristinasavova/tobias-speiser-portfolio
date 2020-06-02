import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';
import List from './List';

class Portfolio extends Component {

    constructor () {
        super ();
        this.state = {
            isDesktop: false
        };
        this.updatePredicate = this.updatePredicate.bind (this);  
    }

    componentDidMount () {
        this.updatePredicate ();
        window.addEventListener ('resize', this.updatePredicate); 
    }

    componentWillUnmount () {
        window.removeEventListener ('resize', this.updatePredicate);
    }

    updatePredicate () {
        this.setState ({ isDesktop: window.innerWidth > 768 });
    }

    render () {
        return (
            <div className='content'>
                <div className='header'>
                    <h2 className='heading'>TOBIAS SPEISER | MODELING & LOOK DEV</h2>
                    <div className='button about'>
                        <Link to='/about' className='nav-link'>ABOUT ME</Link>
                    </div>
                </div>
                <div className='main-info'>
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
                { 
                    this.state.isDesktop ?
                    <Table /> : <List />
                }
            </div>
        );
    }
};

export default Portfolio; 