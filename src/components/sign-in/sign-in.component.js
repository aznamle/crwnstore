import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    //handle button submit
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    //handle inputs
    handleChange = event => {
        const {value, name} = event.target;

        //sets NAME element in input as VALUE dynamically
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label='email'
                        required 
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
