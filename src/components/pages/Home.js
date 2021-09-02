import { React, useEffect, useState, useRef } from 'react'
import { Main, Grid, Box, Stack, Anchor, Image, Text, Heading, Carousel } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';
import Particle from '../particles/Particle'
import MediaQuery from 'react-responsive'
import MobileNavbar from '../mobileNavbar'
import Navbar from '../navbar';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const nolanSnow = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanSnow.jpg?raw=true'
const nolanTree = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolan%20stucky.jpg?raw=true'

export default function Home() {

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom")
        }
    }

    const controls = useAnimation();

    const [ref, inView] = useInView({
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });


    console.log(inView)

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);


    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()

    return (

        <Stack>
            <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }} >
                <Particle />
            </Box>

            <MediaQuery minWidth={1920}>
                <Navbar />
                <Box>

                </Box>
            </MediaQuery>

            <MediaQuery maxWidth={1919}>
                <Box>

                </Box>
            </MediaQuery>

            <MediaQuery maxWidth={5000} maxHeight={5000}>
                <MobileNavbar />

                <Box>
                    <Grid
                        areas={[
                            ['main'],
                            ['about'],
                            ['languages'],
                            ['contact']
                        ]}
                        columns={['flex']}
                        rows={['flex']}

                        responsive="true"
                    >
                        <Box gridArea="main">
                            <motion.div
                            // animate={{ rotateX: 90, scale: 0.9}}
                            // transition={{ duration: 2}}

                            >
                                <Box onScroll={handleScroll} align="center" width="100%" height="100vh">
                                    <Heading color="white" size="125px" margin={{ top: "200px", bottom: "-100px" }}>Hello there!</Heading>
                                    <Heading color="white" size="125px" margin={{ bottom: "-100px" }}>I'm</Heading>
                                    <Heading color="#FCE181" size="125px">Nolan Stucky!</Heading>

                                    <Anchor onClick={executeScroll} color="white"><Text size="25px">Learn More About Me</Text></Anchor>
                                </Box>
                            </motion.div>

                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                transition={{ duration: 0.3 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}

                            >
                                <Box ref={myRef} align="center" width="100%" height="100vh">

                                    <Grid
                                        areas={[
                                            ['picture', 'about'],
                                        ]}
                                        columns={['flex']}
                                        rows={['flex']}

                                        responsive="true"
                                    >



                                        <Box gridArea="picture" height="375px" width="375px" margin={{ top: "250px", right: "250px" }}>
                                            <Carousel play={5000} >
                                                <Image  fill="true" src={nolanSnow} />
                                                <Image  fill="true" src={nolanTree}  />                                            
                                            </Carousel>
                                        </Box>

                                        <Box gridArea="about" height="medium" width="medium" margin={{ top: "250px", right: "50px" }}>

                                        </Box>
                                    </Grid>

                                </Box>
                            </motion.div>

                        </Box>

                    </Grid>
                </Box>

            </MediaQuery>
        </Stack>

    );
}

