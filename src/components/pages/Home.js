import React from "react";
import { Main, Grid, Box } from 'grommet';
import Profile from '../profile/index'


function Home() {
    return (
        <Main>
            <Box align="center">
                <Profile />
            </Box>
        </Main>
    );
}

export default Home;
