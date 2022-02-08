import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">
                                Enter User Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br />
                    <TextField
                        label="Enter Your First Name"
                        variant='standard'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        label="Enter Your Last Name"
                        variant='standard'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        label="Enter Your email"
                        variant='standard'
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.continue}>
                        SUBMIT
                    </Button>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails
