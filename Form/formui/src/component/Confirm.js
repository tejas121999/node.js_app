import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

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
        const { values: { firstName, lasteName, email, occupation, city, bio } } = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6">
                                    confirm user data
                            </Typography>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem align='center'>
                                <ListItemText
                                    primary="first name"
                                    secondary={firstName}
                                />
                            </ListItem>
                            <ListItem align='center'>
                                <ListItemText
                                    primary="last name"
                                    secondary={lasteName}
                                />
                            </ListItem>
                            <ListItem align='center'>
                                <ListItemText
                                    primary="email"
                                    secondary={email}
                                />
                            </ListItem>
                            <ListItem align='center'>
                                <ListItemText
                                    primary="occupation"
                                    secondary={occupation}
                                />
                            </ListItem>
                            <ListItem align='center'>
                                <ListItemText
                                    primary="city"
                                    secondary={city}
                                />
                            </ListItem>
                            <ListItem align='center'>
                                <ListItemText
                                    primary="bio"
                                    secondary={bio}
                                />
                            </ListItem>
                        </List>
                    </Grid>
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
