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
      <Grid
        areas={[
          ['blank1', 'search', 'blank2'],
        ]}
        columns={['50px', 'flex', '50px']}
        rows={['50px']}
        gap="small"
        responsive="true"
      >
        <Box gridArea="blank1" />
        <Box gridArea="blank2" />

        <Box margin="25px"  direction="row" gridArea="search">
          {projectData.map(data => <ProjectCard props={data} />)}
        </Box>
      </Grid>
    </Stack>
  );
}

export default Projects;
