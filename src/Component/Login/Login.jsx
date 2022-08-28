import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

import './Login.css'
import { Image, Box, Flex, Text } from '@chakra-ui/react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            password: '',
            errorMessage: ''
        };

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.user_name === "admin" && this.state.password === "admin") {
            this.props.history.push('gifts');
        } else {
            this.setState({ errorMessage: "Invalid Username or Password" });
        }

    }


    render() {

        return (
            <div>
                <Box>
                    <Image mt='5%' ml="10%" w='80%' alt='poster' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_' />
                </Box>
                <Flex>
                    <Box ml='20%' mt='10%'>
                        <div>
                            <span className="text-danger">{this.state.errorMessage}</span>
                            <form onSubmit={this.handleSubmit}>
                                <label id='l1'>Name</label><br />
                                <input type='text' className='email' name="user_name" placeholder="User name"
                                    required="required"
                                    onChange={this.handleChange} /><br />
                                <label id='l2' >Password</label><br />
                                <input type="password" className='pass'
                                    placeholder="Password"
                                    required="required"
                                    name="password"
                                    onChange={this.handleChange} /><br /><br />
                                <button type="submit" className="submit">
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </Box>

                    <Box ml='5%' mt='5%'>
                        <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
                        <Image mt='5' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.217/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_' alt='img' />
                    </Box>
                </Flex>
            </div>
        );
    }
}

export default (Login);