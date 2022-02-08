import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { RaisedButton } from '@material-ui/core/styles'

export class FormUserDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter" />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetail
