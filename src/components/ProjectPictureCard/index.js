import React, { Component } from 'react';
import { Footer, Text, Anchor, Box, Button, Card, CardBody, CardFooter, Collapsible, Heading, Grommet, Image, Grid, Stack, CardHeader, Avatar } from 'grommet';
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
    card: {
        elevation: 'none',
        background: 'light-4',
        footer: {
            pad: 'medium',
        },
    },
};


export default function ProjectPictureCard(props) {
    console.log("logging projectcard object")
    console.log(props.props);
    return (
        <Grommet theme={theme}>
            <Box>
                <Card width="450px" >
                    {/* Stacked CardBody and CardHeader on top of each other 
                            in that order */}
                    <Stack anchor="bottom-left">
                        <CardBody height="350px">
                            <Image
                                fit="cover"
                                src={props.props.image}
                                a11yTitle="scuba diving"
                            />
                        </CardBody>
                        <CardHeader
                            pad={{ horizontal: 'small', vertical: 'small' }}
                            // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                            background="#000000A0"
                            width="450px"
                            justify="start"
                        >

                            <Box>
                                <Heading level="3" margin="none">
                                    {props.props.projectTitle}
                                </Heading>
                            </Box>
                        </CardHeader>
                    </Stack>
                </Card>

            </Box>

        </Grommet>
    )

}