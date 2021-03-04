import React from "react";
import { Main, Grid, Box, Stack } from 'grommet';
import Profile from '../profile/index'
import Particle from '../particles/Particle'
import ProjectCard from '../ProjectCard/index'
import projectData from '../../data'

function Projects() {
  return (
    <Stack>
      <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }}>
        <Particle />
      </Box>
      <Box margin="25px" align="center"  >
        {projectData.map(data => <ProjectCard props={data}/>)}
      </Box>
    </Stack>
  );
}

export default Projects;
