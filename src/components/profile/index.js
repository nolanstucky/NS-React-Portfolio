import React, { Component } from 'react';
import { Box, Avatar, Anchor, Grid, Text } from 'grommet';
import './style.css'

const nolanIcon = 'https://avatars.githubusercontent.com/u/59997535?s=460&u=2afb177181195736519ec2943467b191069bd40d&v=4';

class Profile extends Component {
    render() {
        return (
            <Grid
                areas={[
                    ['main', 'main', 'text', 'text'],
                    ['about', 'about', 'about', 'about'],
                    ['footer', 'footer', 'footer', 'footer']
                ]}
                columns={['small', 'flex', 'medium']}
                rows={['small']}
                gap="small"
                responsive="true"
            >
                <Box gridArea='main'>
                    <Anchor color="white" href="https://github.com/nolanstucky">
                        <Avatar size="180px" src={nolanIcon} />
                    </Anchor>

                </Box>

                <Box gridArea="text"
                    direction="row"
                    pad="medium"
                    animation={{ type: "fadeIn", duration: "1000" }}
                >
                    <Text>My name is Nolan Stucky</Text>
                    <br />
                    <Text>I am a:</Text>
                </Box>

                <Box gridArea="about"
                    direction="row"
                    pad="medium"
                    animation={{ type: "fadeIn", duration: "1000" }}
                >

                    <Grid
                        areas={[
                            ['text', 'text', 'text'],
                            ['about', 'blank', 'blank'],
                            ['lang', 'lang', 'lang'],
                            ['skill', 'skill', 'skill'],
                            ['contact', 'contact', 'contact'],
                            ['contactText', 'contactText', 'contactText']


                        ]}
                        columns={['flex']}
                        rows={['25px']}
                        gap="medium"
                        responsive="true">

                        <Text gridArea="text" size="30px" className="text">About Me</Text>
                        <Box width="495px">
                        <Text gridArea="about" size="20px" className="about" wordBreak="break-word">I am a full stack web developer that absolutly loves the world of technology. I have a passion for learning  </Text>
                        </Box>
                        <Box width="495px" gridArea='lang'>
                        <Text gridArea="lang" size="25px" className="text" wordBreak="break-word">Skillset:</Text>
                        </Box>
                        <Box width="495px" gridArea='skill'>
                        <Text gridArea="skill" size="20px" className="about" wordBreak="break-word">Html Css Javascript Jquery Sql Mongo Express React Node Handlebars</Text>
                        </Box>
                        <Box width="495px" gridArea='contact'>
                        <Text gridArea="contact" size="25px" className="text" wordBreak="break-word">Contact Me:</Text>
                        </Box>
                        <Box width="495px" gridArea='contactText'>
                        <Text gridArea="contactText" size="20px" className="about" wordBreak="break-word">Test</Text>
                        </Box>
                    </Grid>
                </Box>



            </Grid>
        )
    }
}

export default Profile;