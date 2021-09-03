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
};


export default function ProjectModal() {

    return (
        <Grommet theme={theme}>

            <Box width="75vw" height="75vh" style={{ background:"#222E42" }}>
                <Box style={{ background: 'rgba(0, 0, 0, 0.3)' }}>

                </Box>
            </Box>

        </Grommet>
    )

}