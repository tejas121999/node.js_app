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

    back = e => {
        e.preventDefault();
        this.props.prevtStep();
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
                        label="Enter Your occupation"
                        variant='standard'
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        label="Enter Your city"
                        variant='standard'
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        label="Enter Your  bio"
                        variant='standard'
                        onChange={handleChange(' bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.continue}>
                        SUBMIT
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.back}>
                        BACK
                    </Button>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails
