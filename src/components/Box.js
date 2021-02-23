import React, { Component } from 'react';
import { Box, Nav, Anchor } from 'grommet';

class TestBox extends Component {
    render() {
        return (
            <Box
                direction="row"
                border={{ color: '#222E42', size: 'large' }}
                pad="medium"
                animation={{type: "fadeIn", duration: "1000"}}
            >

            </Box>
        )
    }
}

export default TestBox;