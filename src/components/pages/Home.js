import React from "react";
import { Main, Grid, Box, Stack, Anchor, Avatar, Text, Heading, Nav } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';
import Profile from '../profile/index'
import Particle from '../particles/Particle'
import Typical from 'react-typical'
import MediaQuery from 'react-responsive'
import Navbar from '../navbar';

const nolanIcon = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolan-picture.png?raw=true';

function Home() {
    return (

        <Stack>
            <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }} >
                <Particle />
            </Box>
            <MediaQuery minDeviceWidth={1920}>
                <Navbar />
                <Box>
                    {/* <Profile /> */}

                    <Grid
                        areas={[
                            ['main', 'main', 'main'],
                            ['blank', 'about', 'blank2'],
                            ['languages', 'languages', 'languages'],
                            ['blank5', 'contact', 'blank6']
                        ]}
                        columns={['medium', 'flex', 'medium']}
                        rows={['small']}

                        responsive="true"
                    >
                        {/* <Box gridArea="blank" style={{background: 'rgba(0, 0, 0, 0.1)'}}/> */}
                        <Box gridArea="main" style={{ background: 'rgba(0, 0, 0, 0.2)' }} pad="small" height="300px">
                            <Grid
                                areas={[
                                    ['blank', 'profile2', 'profile2', 'blank1'],
                                ]}
                                columns={['medium', 'flex', 'flex', 'medium']}

                                responsive="true"
                            >
                                <Box gridArea="profile">

                                </Box>
                                <Box gridArea="profile2" align="center" margin={{ "top": "50px" }}>
                                    <Heading color="white" size="60px">Hello there, I'm <span style={{ color: "#FCE181" }}>Nolan Stucky!</span></Heading>
                                    <Box align="center" margin={{ "top": "-25px" }}>
                                        <Text color="#FCE181">
                                            <Typical
                                                steps={[
                                                    'Front End Developer', 1500,
                                                    'Back End Developer', 1500,
                                                    'Software Developer', 1500,
                                                    'Game Designer', 1500,
                                                ]}
                                                loop={Infinity}
                                                wrapper="h1"
                                                color="#FCE181"
                                            />
                                        </Text>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                        <Box gridArea="blank" style={{ background: 'rgba(0, 0, 0, 0.3)' }} height="725px" margin={{ "top": "110px" }} />
                        <Box gridArea="blank2" style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ "top": "110px" }} />
                        <Box gridArea="about" style={{ background: 'rgba(0, 0, 0, 0.3)' }} align="center" margin={{ "top": "110px" }}>
                            <Avatar size="180px" src={nolanIcon} margin={{ "top": "25px" }} />
                            <Heading color="white">Let me <span style={{ color: "#FCE181" }}>introduce</span> myself</Heading>
                            <Box align="start" margin={{ "left": "50pxnp" }}>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.</Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> I have a passion for learning especially when it comes to things that interest me.</Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> Which includes <span style={{ color: "#FCE181" }}>React.js</span>, <span style={{ color: "#FCE181" }}>JavaScript</span>, and <span style={{ color: "#FCE181" }}>Unity.</span></Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> Always trying to create aesthetically pleasing applications for users to enjoy.  </Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> That means I am fascinated in the latest in modern web development as I continue to sharpen my skills in that field.</Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> I also love to snowboard and hope that you enjoy this serene background as much as I do!</Text>

                            </Box>

                        </Box>

                        <Box gridArea="languages" style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ "top": "3px" }} height="500px">
                            <Box margin={{ "top": "15px" }} align="center">
                                <Heading color="white"><span style={{ color: "#FCE181" }}>Languages</span> and <span style={{ color: "#FCE181" }}>Technologies</span></Heading>

                            </Box>

                            <Grid
                                areas={[
                                    ['blank', 'js', 'html', 'css', 'c'],
                                ]}
                                columns={['500px', '250px', '250px', '250px', '250px']}
                                rows={['small']}

                                responsive="true"
                            >

                                <Box gridArea="js">
                                    {/* <img src="https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/JavaScript-logo.png?raw=true"alt="js-logo" width="150px" height="150px"/> */}
                                    <Avatar size="150px" src="https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/JavaScript-logo.png?raw=true" margin={{ "top": "25px" }} />

                                </Box>
                                <Box gridArea="html" margin={{ "top": "25px" }}>
                                    <img src="https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/logo-2582748_1280.png?raw=true" alt="js-logo" width="150px" height="150px" />

                                </Box>
                                <Box gridArea="css" margin={{ "top": "25px" }}>
                                    <img src="https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/css3.png?raw=true" alt="js-logo" width="150px" height="150px" />

                                </Box>
                                <Box gridArea="c" margin={{ "top": "25px" }}>
                                    <img src="https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/c-logo-icon-28402.png?raw=true" alt="js-logo" width="150px" height="150px" />

                                </Box>
                            </Grid>

                            <Box margin={{ "top": "25px", "left": "550px" }} >

                                <Text color="white" size="25px"><span style={{ color: "#FCE181" }}>Languages:</span> Javascript, HTML, CSS, Typescript, C#, Python, UNIX shell</Text>
                                <Text color="white" size="25px"><span style={{ color: "#FCE181" }}>Technologies:</span> React, Express, MySql, MongoDb, Node Handlebars,<br /> Unity, Blender, Microsoft Excel</Text>
                            </Box>
                        </Box>

                        <Box gridArea="blank5" style={{ background: 'rgba(0, 0, 0, 0.3)' }} height="300px" margin={{ "top": "3px" }} />
                        <Box gridArea="blank6" style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ "top": "3px" }} />
                        <Box gridArea="contact" style={{ background: 'rgba(0, 0, 0, 0.3)' }} align="center" margin={{ "top": "3px" }}>
                            <Box margin={{ "top": "25px" }} align="start">
                                <Heading color="white">Contact me <span style={{ color: "#FCE181" }}>here</span></Heading>
                                <Text color="white" size="25px"><span style={{ color: "#FCE181" }}>Email:</span> Nolan@Stucky.Net</Text>
                                <Anchor href="https://www.linkedin.com/in/nolan-stucky/" color="white"><Linkedin /> https://www.linkedin.com/in/nolan-stucky/</Anchor>
                                <Anchor href="https://github.com/nolanstucky?tab=repositories" color="white"> <Github /> https://github.com/nolanstucky?tab=repositories</Anchor>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={1919}>
                <Box>

                </Box>
            </MediaQuery>
            <MediaQuery minDeviceWidth={360} minDeviceHeight={640} >
                <Navbar />

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
                        <Box gridArea="main" style={{ background: 'rgba(0, 0, 0, 0.2)' }} pad="small" height="300px" align="center" >


                            <Heading color="white" size="50px">Hello there,</Heading>
                            <Heading color="white" size="50px" margin={{ "top": "-45px" }}> I'm </Heading>
                            <Heading color="#FCE181" size="50px" margin={{ "top": "-45px" }}>Nolan Stucky </Heading>
                            <Box align="center" margin={{ "top": "-25px" }}>
                                <Text color="#FCE181" size="15px">
                                    <Typical
                                        steps={[
                                            'Front End Developer', 1500,
                                            'Back End Developer', 1500,
                                            'Software Developer', 1500,
                                            'Game Designer', 1500,
                                        ]}
                                        loop={Infinity}
                                        wrapper="h1"
                                        color="#FCE181"
                                    />
                                </Text>

                            </Box>
                        </Box>
                        
                        <Box gridArea="about" style={{ background: 'rgba(0, 0, 0, 0.3)' }} align="center" margin={{ "top": "110px" }}>
                            <Avatar size="180px" src={nolanIcon} margin={{ "top": "25px" }} />
                            <Heading color="white"  size="27px">Let me <span style={{ color: "#FCE181" }} >introduce</span> myself</Heading>
                            <Box align="start" margin={{ "left": "50pxnp" }}>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.</Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> I have a passion for learning especially when it comes to things that interest me.</Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> Which includes <span style={{ color: "#FCE181" }}>React.js</span>, <span style={{ color: "#FCE181" }}>JavaScript</span>, and <span style={{ color: "#FCE181" }}>Unity.</span></Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> Always trying to create aesthetically pleasing applications for users to enjoy.  </Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> That means I am fascinated in the latest in modern web development as I continue to sharpen my skills in that field.</Text>
                                <Text color="white" size="30px" margin={{ "left": "25px", "right": "25px" }}> I also love to snowboard and hope that you enjoy this serene background as much as I do!</Text>

                            </Box>

                        </Box>

                        <Box gridArea="languages" style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ "top": "3px" }} height="500px" align="center">
                            <Box margin={{ "top": "15px" }} align="center">
                                <Heading color="white" size="25px"><span style={{ color: "#FCE181" }}>Languages</span> and <span style={{ color: "#FCE181" }}>Technologies</span></Heading>

                            </Box>

                            <Box>

                                <Text color="white" size="20px"><span style={{ color: "#FCE181" }}>Languages:</span> Javascript, HTML, CSS, Typescript, C#, Python, UNIX shell</Text>
                                <Text color="white" size="20px"><span style={{ color: "#FCE181" }}>Technologies:</span> React, Express, MySql, MongoDb, Node Handlebars,<br /> Unity, Blender, Microsoft Excel</Text>
                            </Box>
                        </Box>

                        <Box gridArea="contact" style={{ background: 'rgba(0, 0, 0, 0.3)' }} align="center" margin={{ "top": "3px" }}>
                            <Box margin={{ "top": "25px" }} align="start">
                                <Heading color="white">Contact me <span style={{ color: "#FCE181" }}>here</span></Heading>
                                <Text color="white" size="25px"><span style={{ color: "#FCE181" }}>Email:</span> Nolan@Stucky.Net</Text>
                                <Anchor href="https://www.linkedin.com/in/nolan-stucky/" color="white"><Linkedin /> https://www.linkedin.com/in/nolan-stucky/</Anchor>
                                <Anchor href="https://github.com/nolanstucky?tab=repositories" color="white"> <Github /> https://github.com/nolanstucky?tab=repositories</Anchor>
                            </Box>
                        </Box>

                    </Grid>
                </Box>

            </MediaQuery>
        </Stack>

    );
}

export default Home;
