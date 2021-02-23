import React, { Component } from 'react';
import { Box, Nav, Anchor, Header, Avatar } from 'grommet';
import { Home, Projects } from 'grommet-icons'
import { Link } from 'react-router-dom'


const nolanIcon = 'https://avatars.githubusercontent.com/u/59997535?s=460&u=2afb177181195736519ec2943467b191069bd40d&v=4';

class Navbar extends Component {
    render() {
        return (
            <Header background="#222E42" animation={{ type: "fadeIn", duration: "1000" }} elevation="large">
                <Box direction="row" align="center" gap="small">
                    <Anchor color="white" href="https://github.com/nolanstucky">
                        <Avatar src={nolanIcon} />
                    </Anchor>
                </Box>

                <Nav direction="row">

                    <Box direction="row" align="center" gap="small" pad="small">
                        <Anchor>
                            <Link to='/'>{<Home />}</Link>
                        </Anchor>
                    </Box>

                    <Box direction="row" align="center" gap="small" pad="small">
                        <Anchor>
                            <Link to='/projects'>{<Projects />}</Link>
                        </Anchor>
                    </Box>

                </Nav>

            </Header>


        )
    }
}

export default Navbar;