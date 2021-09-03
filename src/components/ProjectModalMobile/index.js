import React, { Component } from 'react';
import { Text, Box, Button, Heading, Grommet, Image, Grid } from 'grommet';
import { Github, Heroku } from 'grommet-icons';

const theme = {
    global: {
        font: {
            family: `Times New Roman, -apple-system,
           BlinkMacSystemFont, 
           "Segoe UI", 
           Roboto`,
        },
    },
};


export default function ProjectModalMobile(props) {
    console.log("props for modal")
    console.log(props.props.description)
    return (
        <Grommet theme={theme}>

            <Box width="50px" height="50px" round="medium" fill background="light-4">
                <Grid
                    areas={[
                        ['picture'],
                        ['links'],
                        ['button']
                    ]}
                    columns={['flex', 'flex']}
                    responsive="true"
                >
                    <Box gridArea="picture" align="center" width="50px" height="50px">
                        <Image
                            fit="cover"
                            src={props.props.image}
                        />
                    </Box>

                    {/* <Box gridArea="picture">
                        <Heading level="3" margin={{ vertical: 'medium' }} color="white" alignSelf="center">
                            {props.props.projectTitle}
                        </Heading>
                        <Box width="450px" height="300px" pad="medium">
                            <Image
                                fit="cover"
                                src={props.props.image}
                            />
                        </Box>
                    </Box>

                    <Box gridArea="description">
                        <Text margin={{ top: '100px' }} color="white" size="25px">
                            {props.props.description}
                        </Text>
                        <Text margin={{ top: '65px' }} color="white" size="25px">
                            {props.props.technologies}
                        </Text>
                    </Box>

                    <Box gridArea="links" alignContent="center" direction="row" margin={{left:"60px"}}>
                        <Button href={props.props.deployedLink}><Heroku /><Text color="white">Deployed Link</Text></Button>
                        <Button href={props.props.githubLink} margin={{left:"50px"}}><Github /><Text color="white">Github Link</Text></Button>
                    </Box> */}
                </Grid>
            </Box>

        </Grommet>
    )

}