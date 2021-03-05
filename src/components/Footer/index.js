import React, { Component } from 'react';
import { Footer, Text, Anchor} from 'grommet';
import './style.css'
import { Github, Linkedin} from 'grommet-icons';
class Footbar extends Component {
    render() {
        return (
            <Footer background="light-4" justify="center" pad="small" className="footer">
                <Text textAlign="center" size="small">
                <Anchor href="https://github.com/nolanstucky?tab=repositories"  color="white"> <Github/></Anchor>
                <Anchor href="https://www.linkedin.com/in/nolan-stucky/" color="white"><Linkedin/></Anchor>
            </Text>
            </Footer>

        )
    }
}

export default Footbar;