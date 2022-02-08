import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail'
import FormPersonalDetail from './FormPersonalDetail'
import Confirm from './Confirm'
import Success from  './Success'

export class UserForm extends Component {

    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //process to next stape
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //go back to the prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handlefield change
    handleChange = input => (e) => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio } = this.state ;
        const values = {firstname, lastname, email, occupation, city, bio}

        switch (step) {
            case 1:
                return (
                    <FormUserDetail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>FormPersonalDetail</h1>
            case 2:
                return <h1>Confirm</h1>
            case 2:
                return <h1>Success</h1>
        }
    }
}

export default UserForm
