import React, { Component } from 'react';
import { Box, Nav, Anchor, Header, Avatar, Grommet} from 'grommet';
import { Home, Projects } from 'grommet-icons'
import { Link } from 'react-router-dom'
import myPDF from './Nolan_Stucky_Resume.pdf'


const nolanIcon = 'https://avatars.githubusercontent.com/u/59997535?s=460&u=2afb177181195736519ec2943467b191069bd40d&v=4';

class Navbar extends Component {
    render() {
        return (
            <Box style={{ position: "fixed", top: 0, width: "100%" , zIndex: 10}}>
            <Header background="#222E42" animation={{ type: "fadeIn", duration: "1000" }} elevation="large">
                <Box direction="row" align="center" gap="small">
                    <Anchor color="white" href="https://github.com/nolanstucky">
                        <Avatar src={nolanIcon} />
                    </Anchor>
                </Box>

                <Nav direction="row">

                    <Box direction="row" align="center" gap="small" pad="small">
                        <Anchor>
                            <Link to='/' style={{ color: '#FCE181', textDecoration: 'inherit' }}>Home</Link>
                        </Anchor>
                        
                    </Box>

                    {/* <Box direction="row" align="center" gap="small" pad="small">
                        <Anchor>
                        <Link to='/projects' style={{ color: '#FCE181', textDecoration: 'inherit' }}>Projects</Link>
                        </Anchor>
                    </Box> */}

                    <Box direction="row" align="center" gap="small" pad="small" margin={{"right":"15px"}}>
                        <Anchor>
                        <a href={myPDF} download="Nolan_Stucky_Resume.pdf" style={{ color: '#FCE181', textDecoration: 'inherit' }}> Resume </a>
                        </Anchor>
                    </Box>

                </Nav>

            </Header>
            </Box>


        )
    }
}

export default Navbar;