import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Navbar() {
    return (
        <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Mortgage Calculator
                </Typography>
            </Toolbar>
        </Container>
        </AppBar>
    )
}

export default Navbar