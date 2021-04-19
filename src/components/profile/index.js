import React, { Component } from 'react';
import { Box, Avatar, Anchor, Grid, Text, Heading} from 'grommet';
import './style.css'
import { Github, Linkedin} from 'grommet-icons';

const nolanIcon = '/assets/nolan-picture.png';

class Profile extends Component {
    render() {
        return (
            <Box >
            <Grid
                areas={[
                    ['main', 'main', 'text', 'blank'],
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
                <div>
                    <Heading size="22px">My name is <Text color="white" size="25px">Nolan Stucky</Text></Heading>
                    <br/>
                    <Heading size="18px" > I am a :</Heading>
                  
                    <Heading size="26px" margin={{left:"100px"}} color="white"> Web Developer</Heading>
                </div>
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
                        <Text gridArea="about" size="20px" className="about" wordBreak="break-word" color="white">I am a full stack web developer that absolutly loves the world of technology. I have a passion for learning especially when it comes to things that interest me. Such as full stack web development and game development. Otherwise my hobbies would include snowboarding and surfing. </Text>
                        </Box>
                        <Box width="495px" gridArea='lang'>
                        <Text gridArea="lang" size="25px" className="text" wordBreak="break-word">Skillset:</Text>
                        </Box>
                        <Box width="495px" gridArea='skill'>
                        <Text gridArea="skill" size="20px" className="about" wordBreak="break-word" color="white">Html Css Javascript Jquery Sql Mongo Express React Node Handlebars</Text>
                        </Box>
                        <Box width="495px" gridArea='contact'>
                        <Text gridArea="contact" size="25px" className="text" wordBreak="break-word">Contact Me:</Text>
                        </Box>
                        <Box width="495px" gridArea='contactText'>
                        <Text gridArea="contactText" size="20px" className="about" wordBreak="break-word" color="white">Email: Nolan@Stucky.Net</Text>
                        <Text gridArea="contactText" size="20px" className="about" wordBreak="break-word" color="white">Number: 425-802-7715</Text>
                        <Text gridArea="contactText" size="20px" className="about" wordBreak="break-word" color="white"><Anchor href="https://github.com/nolanstucky?tab=repositories"  color="white">Github: nolanstucky <Github/></Anchor></Text>
                        <Text gridArea="contactText" size="20px" className="about" wordBreak="break-word" color="white"> <Anchor href="https://www.linkedin.com/in/nolan-stucky/" color="white">Linkedin: nolanstucky<Linkedin/></Anchor></Text>
                        </Box>
                    </Grid>
                </Box>



            </Grid>
            </Box>
        )
    }
}

export default Profile;