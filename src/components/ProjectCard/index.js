import React, { Component } from 'react';
import { Footer, Text, Anchor, Box, Button, Card, CardBody, CardFooter, Collapsible, Heading, Grommet, Image,Paragraph} from 'grommet';
import { Github, Heroku } from 'grommet-icons';

const theme = {
    global: {
      font: {
        family: `Comic Sans MS, -apple-system,
           BlinkMacSystemFont, 
           "Segoe UI", 
           Roboto`,
      },
    },
    card: {
      elevation: 'none',
      background: 'light-2',
      footer: {
        pad: 'medium',
      },
    },
  };

  export default function ProjectCard(props) {
        console.log("logging projectcard object")
        console.log(props.props);
        return (
            <Grommet theme={theme}>
            <Box pad="medium" align="start">
              <Card elevation="large" width="medium">
                <CardBody height="small">
                  <Image
                    fit="cover"
                    src={props.props.image}
                    a11yTitle="bridge"
                  />
                </CardBody>
                <Box pad={{ horizontal: 'medium' }} responsive={false}>
                  <Heading level="3" margin={{ vertical: 'medium' }}>
                    {props.props.projectTitle}
                  </Heading>
                  <Paragraph margin={{ top: 'none' }}>
                    {props.props.description}
                  </Paragraph>
                </Box>
                <Box alignContent="center" direction="row">
                  <Button href={props.props.deployedLink}><Heroku/><Text>Deployed Link</Text></Button>
                  <Button href={props.props.githubLink}><Github/><Text>Github Link</Text></Button>
                </Box>
              </Card>
            </Box>
          </Grommet>
        )
    
}

