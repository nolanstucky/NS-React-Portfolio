import React from "react";
import { Grommet, Grid, Box, Stack, Heading, Text, Anchor} from 'grommet';
import { Link } from "react-router-dom";
import Particle from '../particles/Particle'
import myPDF from './Nolan_Stucky_Resume.pdf'
import Navbar from '../navbar';

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
            <Navbar />
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
                <Box gridArea="blank1" style={{ background: 'rgba(0, 0, 0, 0.3)' }} height="1750px"></Box>
                <Box gridArea="blank2" style={{ background: 'rgba(0, 0, 0, 0.3)' }} height="1750px"></Box>

                <Box gridArea="resume" style={{ background: 'rgba(0, 0, 0, 0.4)' }} height="1750px" align="center" margin={{ "top": "50px",}}>

                    <a href={myPDF} download="Nolan_Stucky_Resume.pdf" style={{ color: '#FCE181', textDecoration: 'inherit' }}> Download Resume </a>

                    <Heading color="white" size="30px"> Nolan Stucky</Heading>
                    <Box align="center">
                        <Text color="white" size="18px">Bothell, WA 98021</Text>
                        <Text color="white" size="18px">425-802-7718 | nolan@stucky.net</Text>
                        <Text color="white" size="18px" >https://www.linkedin.com/in/nolan-stucky/ | https://github.com/nolanstucky </Text>

                        <Text color="white" size="18px" margin={{"top":"18px"}}><span style={{fontWeight:"bold"}}>Summary</span></Text>

                        <Text color="white" size="18px"margin={{"top":"5px"}}>Determined Front-End Web Developer with a passion for the latest in modern web development. Exceptional JavaScript skills with strong fundamental knowledge. As well as strong fundamentals in React.js. With an AA in Integrated Studies in Computer Science and a professional certification in Full Stack Web Development where over 200 classroom hours were devoted to hands-on programming. Continuing to keep knowledge of web development relevant by educating on the latest of web technologies.    </Text>

                        <Text color="white" size="18px" margin={{"top":"18px"}}><span style={{fontWeight:"bold"}}>Technical Skills</span> </Text>

                        <Text color="white" size="18px" margin={{"top":"5px"}} alignSelf="start">Languages: Javascript, HTML, CSS, Typescript, C#, Python, UNIX shell </Text>
                        <Text color="white" size="18px" alignSelf="start">Applications: React, Express, MySql, MongoDb, Node Handlebars, Unity, Blender, Microsoft Excel </Text>


                        <Box margin={{"top":"15px"}}>
                        <Text color="white" size="18px" margin={{"bottom":"5px"}} alignSelf="center"><span style={{fontWeight:"bold"}}>Projects</span> </Text>
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>KnowledgeForHigher</span> | https://github.com/nolanstucky/KnowledgeForHigher | https://knowledge4hire.herokuapp.com/home  </Text>
                        <Text color="white" size="18px" alignSelf="start" >This is a web application that allows the users to come together and share knowledge and information. Additionally, the users are able to employ certified experts in their fields. </Text>
                       
                            <ul>
                                <li>
                                    <Text color="white" size="18px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.   </Text>
                                </li>
                                <li>
                                    <Text color="white" size="18px">Created wireframes and the first prototype of the application. </Text>
                                </li>
                                <li>
                                    <Text color="white" size="18px">Built reusable components using Grommet React as the framework. </Text>
                                </li>
                                <li>
                                    <Text color="white" size="18px">Developed around responsiveness and interactiveness across all devices.  </Text>
                                </li>
                                <li>
                                    <Text color="white" size="18px">Coded consistently and efficiently with maintainability as the focus.  </Text>
                                </li>
                                <li>
                                    <Text color="white" size="18px">React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                                </li>
                            </ul>
                        
                        </Box>

                        <Box margin={{"top":"15px"}}>
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>PokeBatEx</span>  | https://github.com/nolanstucky/PokeBatEx | https://tyrannofloresrex.github.io/PokeBatEx/ </Text>
                        <Text color="white" size="18px" alignSelf="start">This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="18px">Managed a group of 3 through all aspects of the development process, including the front end design, back end structure and debugging.   </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Created consistent and concise game logic written in JavaScript. </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Navigated an API that was effortlessly woven into the logic to create a smooth game experience. </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Supervised the front end design process as well as the front end development. </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Tested bugs manually until user experience was completely optimal.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Javascript, CSS, HTML, PokeApi, NesCSS. </Text>
                            </li>
                        </ul>
                        </Box>
                        
                        <Box margin={{"top":"15px"}}>
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>Check-Your-Fridge</span>  | https://github.com/nolanstucky/check-your-fridge | https://cryptic-shore-39350.herokuapp.com/ </Text>
                        <Text color="white" size="18px" alignSelf="start">This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="18px">Worked alongside 3 others focusing on the back end of this MERN stack application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Integrated spoonacular API into web application for a seamless user experience. </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Developed the models for the MongoDB used. </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Node, Express, MySQL, Sequelize, Node Handlebars, Materialize, SpoonacularApi. </Text>
                            </li>
                        </ul>
                        </Box>
                        <Text color="white" size="18px" margin={{"top":"18px"}}> <span style={{fontWeight:"bold"}}>Experience</span> </Text>
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>Lead Dog Trainer</span><span style={{marginLeft:"690px"}}>2016-2020</span> </Text>
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>Petco</span><span style={{marginLeft:"780px"}}> Bothell, Wa</span> </Text>
                        <Text color="white" size="18px" alignSelf="start">This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="18px">Collaborated with a group of 3 as the design manager in charge of the UI/UX of the web application.  </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">Front End Developer - created the React components as well as the theme and design for the application focused around mobile responsiveness. </Text>
                            </li>
                            <li>
                                <Text color="white" size="18px">React, Node, Express, MySQL, Sequelize, Grommet, Cloudinary, Bad-Words, Bycript, JSON Web Tokens. </Text>
                            </li>
                        </ul>

                        <Text color="white" size="18px" margin={{"top":"18px","bottom":"5px"}}> <span style={{fontWeight:"bold"}}>Education</span> </Text>
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>Bootcamp Certificate:</span>  Universitiy of Washington, Seattle, WA</Text>
                        <Text color="white" size="18px" alignSelf="start" >This is a web application that allows the users to enjoy a simplified version of the renowned game of Pokemon. Including battling other pokemon with user caught pokemon. </Text>
                        <ul>
                            <li>
                                <Text color="white" size="18px">A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.  </Text>
                            </li>
                        </ul>
                        <Box alignSelf="start">
                        <Text color="white" size="18px" alignSelf="start"><span style={{fontWeight:"bold"}}>Associates Degree:</span>  Cascadia College, Bothell, WA</Text>
                        <ul>
                            <li>
                                <Text color="white" size="18px">Integrated Studies in Computer Science </Text>
                            </li>
                        </ul>
                        </Box>
                    </Box>

                </Box >

            </Grid>
            </Box>
        </Stack>
        </Grommet>
    );
}

export default Resume;
