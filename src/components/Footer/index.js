import React, { Component } from 'react';
import { Footer, Text} from 'grommet';
import './style.css'
class Footbar extends Component {
    render() {
        return (
            <Footer background="light-4" justify="center" pad="small" className="footer">
                <Text textAlign="center" size="small">
                    © 2019 Copyright Grommet
            </Text>
            </Footer>

        )
    }
}

export default Footbar;