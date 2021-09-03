import React, { Component } from 'react';
import { Footer, Text, Anchor, Box, Button, Card, CardBody, CardFooter, Collapsible, Heading, Grommet, Image,Paragraph} from 'grommet';
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

  export default function ProjectCard(props) {
        console.log("logging projectcard object")
        
        return (
            <Grommet theme={theme}>
            <Box pad="medium" align="start">
              <Card elevation="large" width="medium"  style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <CardBody height="small">
                  <Image
                    fit="cover"
                    src={props.props.image}
                    a11yTitle="bridge"
                  />
                </CardBody>
                <Box pad={{ horizontal: 'medium' }} responsive={false}>
                  <Heading level="3" margin={{ vertical: 'medium' }} color="white">
                    {props.props.projectTitle}
                  </Heading>
                  <Paragraph margin={{ top: 'none' }} color="white">
                    {props.props.description}
                  </Paragraph>
                  <Text color="white" margin={{"bottom":"20px"}}>{props.props.technologies}</Text>
                </Box>
                <Box alignContent="center" direction="row">
                  <Button href={props.props.deployedLink}><Heroku/><Text color="white">Deployed Link</Text></Button>
                  <Button href={props.props.githubLink}><Github/><Text color="white">Github Link</Text></Button>
                </Box>
              </Card>
            </Box>
          </Grommet>
        )
    
}

