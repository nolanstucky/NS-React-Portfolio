import React from "react";
import { Main, Grid, Box } from 'grommet';
import Profile from '../profile/index'
import Particles from "react-tsparticles";
import particlesOptions from "../particles/particles.json"

function Home() {
    return (
        <Main>
            <Particles options={particlesOptions}/>
            <Box align="center">
                <Profile />
            </Box>
        </Main>
    );
}

export default Home;
