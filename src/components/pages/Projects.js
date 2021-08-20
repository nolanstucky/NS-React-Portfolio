import React from "react";
import { Main, Grid, Box, Stack, Heading } from 'grommet';
import Profile from '../profile/index'
import Particle from '../particles/Particle'
import ProjectCard from '../ProjectCard/index'
import projectData from '../../data'
import MediaQuery from 'react-responsive'
import Navbar from '../navbar';
import MobileNavbar from '../mobileNavbar'

function Projects() {
  return (
    <Stack>
      <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }}>
        <Particle />
      </Box>

      <MediaQuery minDeviceWidth={1920}>
        <Navbar />
        <Grid
          areas={[
            ['blank1', 'projects', 'blank2'],
          ]}
          columns={['50px', 'flex', '50px']}
          rows={['50px']}
          gap="small"
          responsive="true"
        >
          <Box gridArea="blank1" />
          <Box gridArea="blank2" />

          <Box gridArea="projects">
            {/* {projectData.map(data => <ProjectCard props={data} />)} */}
            <Box margin={{ "top": "25px" }} align="center">
              <Heading color="white"> My <span style={{ color: "#FCE181" }}>Projects</span></Heading>
            </Box>
            <Box margin={{ "top": "125px" }}>
              <Grid
                areas={[
                  ['blank1', 'project1', 'project2', 'project3'],

                ]}
                columns={['105px', 'flex', 'flex', 'flex']}
                rows={['50px']}
                gap="small"
                responsive="true"
              >
                <Box gridArea="project1">
                  <ProjectCard props={projectData[0]} />
                </Box>
                <Box gridArea="project2">
                  <ProjectCard props={projectData[1]} />
                </Box>
                <Box gridArea="project3">
                  <ProjectCard props={projectData[3]} />
                </Box>
                <Box gridArea="project4">
                    <ProjectCard props={projectData[5]} />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </MediaQuery>

      <MediaQuery minDeviceWidth={360} minDeviceHeight={640} maxDeviceWidth={1919} maxDeviceHeight={1079}>
        <MobileNavbar/>
          <Box align="center">
            <Grid
              areas={[
                ['projects'],
              ]}
              columns={['flex']}
              rows={['small']}
              gap="small"
              responsive="true"
            >

              <Box gridArea="projects">
                {/* {projectData.map(data => <ProjectCard props={data} />)} */}
                <Box margin={{ "top": "50px" }} align="center">
                  <Heading color="white"> My <span style={{ color: "#FCE181" }}>Projects</span></Heading>
                </Box>
                <Box margin={{ "top": "115px" }}>
                  <Grid
                    areas={[
                      ['project1'],
                      ['project2'],
                      ['project3'],
                      ['project4']

                    ]}
                    columns={['flex']}
                    gap="small"
                    responsive="true"
                  >
                    <Box gridArea="project1">
                      <ProjectCard props={projectData[0]} />
                    </Box>
                    <Box gridArea="project2">
                      <ProjectCard props={projectData[1]} />
                    </Box>
                    <Box gridArea="project3">
                      <ProjectCard props={projectData[3]} />
                    </Box>
                    <Box gridArea="project4">
                      <ProjectCard props={projectData[5]} />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Box>

      </MediaQuery>

    </Stack>
  );
}

export default Projects;
