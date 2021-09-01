import React from "react";
import { Main, Grid, Box, Stack, Anchor, Avatar, Text, Heading, Paragraph} from 'grommet';
import { Github, Linkedin } from 'grommet-icons';
import Profile from '../profile/index'
import Particle from '../particles/Particle'
import Typical from 'react-typical'
import MediaQuery from 'react-responsive'
import MobileNavbar from '../mobileNavbar'
import Navbar from '../navbar';


const nolanIcon = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolan-picture.png?raw=true';

function TestHome() {
    return (

        <Stack>
            <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }} >
                <Particle />
            </Box>

            <MediaQuery minWidth={1920}>
                <Navbar />
                <Box>

                </Box>
            </MediaQuery>

            <MediaQuery maxWidth={1919}>
                <Box>

                </Box>
            </MediaQuery>

            <MediaQuery  maxWidth={5000} maxHeight={5000}>
                <MobileNavbar/>

                <Box>
                    <Grid
                        areas={[
                            ['main'],
                            ['about'],
                            ['languages'],
                            ['contact']
                        ]}
                        columns={['flex']}
                        rows={['small']}

                        responsive="true"
                    >
                        <Box gridArea="main" align="center" width="100%" height="100vh" border={{color:"white","size":"large"}} >
                            <Heading color="white" size="125px">Hello there!</Heading>
                            <Heading color="white" size="125px">I'm</Heading>
                            <Heading color="#FCE181" size="125px">Nolan Stucky!</Heading>
                        </Box>

                    </Grid>
                </Box>

            </MediaQuery>
        </Stack>

    );
}

export default TestHome;