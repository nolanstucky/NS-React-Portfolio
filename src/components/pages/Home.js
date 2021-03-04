import React from "react";
import { Main, Grid, Box, Stack } from 'grommet';
import Profile from '../profile/index'
import Particle from '../particles/Particle'

function Home() {
    return (
        
            <Stack>
                <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }} >
                    <Particle />
                </Box>
                <Box align="center" margin="25px" overflow={{ horizontal: 'hidden', vertical: 'hidden' }}>
                    <Profile />
                </Box>
            </Stack>
        
    );
}

export default Home;
