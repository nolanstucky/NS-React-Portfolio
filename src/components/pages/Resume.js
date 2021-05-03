import React from "react";
import { Grommet, Grid, Box, Stack, Heading, Text} from 'grommet';
import Profile from '../profile/index'
import Particle from '../particles/Particle'
import ProjectCard from '../ProjectCard/index'
import projectData from '../../data'

const customTheme = {
    text: {
        font: {
            family: 'Times New Roman',
        },
    },
    heading: {
        font: {
            family: 'Times New Roman'
        }
    }
};

function Resume() {
    return (
        <Grommet theme={customTheme}>
        <Stack >
            <Box  justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }} >
                <Particle />
            </Box>
            <Box color="text">
            <Grid
                areas={[
                    ['blank1', 'resume', 'blank2'],
                   
                ]}
                columns={['450px', 'flex', '450px']}
                rows={['20px']}
                gap="3px"
                responsive="true"
            >
                <Box gridArea="blank1" style={{ background: 'rgba(0, 0, 0, 0.3)' }} height="1350px"></Box>
                <Box gridArea="blank2" style={{ background: 'rgba(0, 0, 0, 0.3)' }} height="1350px"></Box>

                <Box gridArea="resume" style={{ background: 'rgba(0, 0, 0, 0.4)' }} height="1350px" align="center" margin={{ "top": "50px",}}>
                  
                    <Heading color="white" size="30px"> Nolan Stucky</Heading>
                    <Box align="center">
                        <Text color="white" size="15px">Bothell, WA 98021</Text>
                        <Text color="white" size="15px">425-802-7715 | nolan@stucky.net</Text>
                        <Text color="white" size="15px" >https://www.linkedin.com/in/nolan-stucky/ | https://github.com/nolanstucky </Text>

                        <Text color="white" size="15px" margin={{"top":"15px"}}><span style={{fontWeight:"bold"}}>Summary</span></Text>

                        <Text color="white" size="15px"margin={{"top":"5px"}}>Creative Full Stack Web Developer with a personal background of design allowing a different perspective on both the design and technical aspect of Front End Development. With an AA in Integrated Studies in Computer Science and a professional certification in Full Stack Web Development where over 200 classroom hours were devoted to hands-on programming.   </Text>

                        <Text color="white" size="15px" margin={{"top":"15px"}}><span style={{fontWeight:"bold"}}>Technical Skills</span> </Text>

                        <Text color="white" size="15px" margin={{"top":"15px"}} alignSelf="start">Languages: Javascript, HTML, CSS, Typescript, C#, Python, UNIX shell </Text>
                        <Text color="white" size="15px" alignSelf="start">Applications: React, Express, MySql, MongoDb, Node Handlebars, Unity, Blender, Microsoft Excel </Text>

                        <Text color="white" size="15px" margin={{"top":"15px"}}><span style={{fontWeight:"bold"}}>Projects</span> </Text>
    
                        <Text color="white" size="15px" alignSelf="start"><span style={{fontWeight:"bold"}}>KnowledgeForHigher</span> | https://github.com/nolanstucky/KnowledgeForHigher | https://knowledge4hire.herokuapp.com/home  </Text>
                        <Text color="white" size="15px" alignSelf="start">This is a web application that allows the users to come together and share knowledge and information. Additionally, the users are able to employ certified experts in their fields. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="15px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">Front End Developer - created the React components as well as the theme and design for the application focused around mobile responsiveness. </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                            </li>
                        </ul>
                       
                        <Text color="white" size="15px" alignSelf="start"><span style={{fontWeight:"bold"}}>PokeBatEx</span>  | https://github.com/nolanstucky/PokeBatEx | https://tyrannofloresrex.github.io/PokeBatEx/ </Text>
                        <Text color="white" size="15px" alignSelf="start">This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="15px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">Front End Developer - created the React components as well as the theme and design for the application focused around mobile responsiveness. </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                            </li>
                        </ul>

                        <Text color="white" size="15px" alignSelf="start"><span style={{fontWeight:"bold"}}>Check-Your-Fridge</span>  | https://github.com/nolanstucky/check-your-fridge | https://cryptic-shore-39350.herokuapp.com/ </Text>
                        <Text color="white" size="15px" alignSelf="start">This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="15px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">Front End Developer - created the React components as well as the theme and design for the application focused around mobile responsiveness. </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                            </li>
                        </ul>

                        <Text color="white" size="15px" margin={{"top":"15px"}}> <span style={{fontWeight:"bold"}}>Experience</span> </Text>
                        <Text color="white" size="15px" alignSelf="start"><span style={{fontWeight:"bold"}}>Check-Your-Fridge</span>  | https://github.com/nolanstucky/check-your-fridge | https://cryptic-shore-39350.herokuapp.com/ </Text>
                        <Text color="white" size="15px" alignSelf="start">This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="15px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">Front End Developer - created the React components as well as the theme and design for the application focused around mobile responsiveness. </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                            </li>
                        </ul>

                        <Text color="white" size="15px" margin={{"top":"15px"}}> <span style={{fontWeight:"bold"}}>Education</span> </Text>
                        <Text color="white" size="15px" alignSelf="start"><span style={{fontWeight:"bold"}}>Bootcamp Certificate:</span>  Universitiy of Washington, Seattle, WA</Text>
                        <Text color="white" size="15px" alignSelf="start" >This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="15px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px">Front End Developer - created the React components as well as the theme and design for the application focused around mobile responsiveness. </Text>
                            </li>
                            <li>
                                <Text color="white" size="15px" >React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                            </li>
                        </ul>
                    </Box>

                </Box >

            </Grid>
            </Box>
        </Stack>
        </Grommet>
    );
}

export default Resume;
