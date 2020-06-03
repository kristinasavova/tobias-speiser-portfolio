import React, { Component } from 'react'; 
import axios from 'axios';

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    /**
     * A method to send a POST request to the server when the form gets submitted
     * @param {object} event 
     */
    handleSubmit = event => {
        event.preventDefault (); 
        const { name, email, message } = this.state; // destructure data from state
        axios ({   // send POST request to the server
            method: 'POST',
            url: 'http://localhost:4444/send',
            data: { name, email, message }
        })
        .then (response => {
            if (response.data.msg === 'SUCCESS') {
                alert ('Message sent');
                this.resetForm ();
            } else if (response.data.msg === 'FAIL') {
                alert ('Message failed to send')
            }
        })
        .catch (error => console.log (error)); 
    }

    /**
     * A method to reset the form 
     */
    resetForm = () => {
        this.setState ({
            name: '',
            email: '',
            message: ''
        });
        document.getElementById ('contact-form').reset (); 
    }

    render () {
        return (
            <form 
                id='contact-form' 
                onSubmit={ (event) => this.handleSubmit (event) } 
                method='POST' >
                <div>
                    <label htmlFor='name'>NAME</label>
                    <input 
                        type='text' 
                        id='name' 
                        onChange={ event => this.setState ({ name: event.target.value })}
                        value={this.state.name}
                        required />
                </div>
                <div>
                    <label htmlFor='email'>EMAIL ADDRESS</label>
                    <input 
                        type='email' 
                        id='email' 
                        onChange={ event => this.setState ({ email: event.target.value })}
                        value={this.state.email}
                        required />
                </div>
                <div>
                    <label htmlFor='message'>MESSAGE</label>
                    <textarea 
                        type='text'
                        rows='5' 
                        id='message' 
                        onChange={ event => this.setState ({ message: event.target.value })}
                        required />
                </div>
                <button type='submit'>SEND</button>
            </form>
        );
    }
};

export default Form; 