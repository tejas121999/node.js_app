import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lasteName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //Procide to next stape
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Procide to prev stape
    prevtStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lasteName, email, occupation, city, bio } = this.state;
        const values = { firstName, lasteName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevtStep={this.prevtStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevtStep={this.prevtStep}
                        values={values}
                    />
                )
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm
