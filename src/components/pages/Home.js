import { React, useEffect, useState, useRef } from 'react'
import { Main, Grid, Box, Stack, Anchor, Image, Text, Heading, Carousel, Paragraph, Layer, Button } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';
import Particle from '../particles/Particle'
import MediaQuery from 'react-responsive'
import MobileNavbar from '../mobileNavbar'
import Navbar from '../navbar';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import ProjectCard from '../ProjectCard/index'
import projectData from '../../data'
import ProjectPictureCard from '../ProjectPictureCard';
import ProjectModal from '../ProjectModal';

const nolanSnow = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanSnow.jpg?raw=true'
const nolanTree = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanTree.jpg?raw=true'
const nolanDog = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanDog.JPG?raw=true'

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


    const myAboutMe = useRef(null)
    const myProjects = useRef(null)


    const executeScrollToAboutMe = () => myAboutMe.current.scrollIntoView()
    const executeScrollToProjects = () => myProjects.current.scrollIntoView()

    const [show, setShow] = useState();



    return (

        <Stack>
            <Box height="small" justify='evenly' overflow={{ horizontal: 'hidden', vertical: 'hidden' }} >
                <Particle />
            </Box>

            {/* <MediaQuery minWidth={1920}>
                <Navbar />
                <Box>

                </Box>
            </MediaQuery>

            <MediaQuery maxWidth={1919}>
                <Box>

                </Box>
            </MediaQuery> */}

            <MediaQuery minWidth={1531} minHeight={863}>
                <MobileNavbar />

                <Box>
                    <Grid
                        areas={[
                            ['main'],
                            ['about'],
                            ['projects'],
                            ['contact']
                        ]}
                        columns={['flex']}
                        rows={['flex']}

                        responsive="true"
                    >
                        <Box gridArea="main" width="100%" height="100vh" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                            <motion.div
                            // animate={{ rotateX: 90, scale: 0.9}}
                            // transition={{ duration: 2}}

                            >
                                <Box onScroll={handleScroll} align="center">
                                    <Heading color="white" size="125px" margin={{ top: "200px", bottom: "-100px" }}>Hello there!</Heading>
                                    <Heading color="white" size="125px" margin={{ bottom: "-100px" }}>I'm</Heading>
                                    <Heading color="#FCE181" size="125px">Nolan Stucky!</Heading>

                                    <Anchor onClick={executeScrollToAboutMe} color="white"><Text size="25px">Learn More About Me</Text></Anchor>
                                </Box>
                            </motion.div>


                        </Box>

                        <Box gridArea="about" ref={myAboutMe} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="100vh">
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
                                <Box align="center" >

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
                                                <Image fill="true" src={nolanSnow} />
                                                <Image fill="true" src={nolanTree} />
                                                <Image fill="true" src={nolanDog} />
                                            </Carousel>
                                        </Box>

                                        <Box gridArea="about" height="medium" width="medium" margin={{ top: "250px", right: "50px" }}>
                                            <Paragraph margin={{ "left": "-50px", }} color="white">
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", }} color="white">
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", }} color="white">
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", }} color="white">
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>

                                            <Anchor onClick={executeScrollToProjects} color="white"><Text size="25px">See my Projects!</Text></Anchor>
                                        </Box>
                                    </Grid>

                                </Box>
                            </motion.div>

                        </Box>

                        <MediaQuery minWidth={1531} minHeight={863}>
                            <Box gridArea="projects" ref={myProjects} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="100vh">
                                <motion.div

                                >
                                    <Box margin={{ top: "100px" }} align="center">

                                        <Grid
                                            areas={[
                                                ['blank1', 'project1', 'project2', 'project3'],
                                                ['blank2', 'project4', 'project5', 'blank3']
                                            ]}
                                            columns={['25px', 'flex', 'flex', 'flex']}


                                            responsive="true"
                                        >
                                            <Box gridArea="project1" pad="medium" label="show" onClick={() => setShow(true)} >
                                                {show && (
                                                    <Layer
                                                        onEsc={() => setShow(false)}
                                                        onClickOutside={() => setShow(false)}
                                                    >
                                                        <ProjectModal />

                                                    </Layer>
                                                )}

                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    onHoverStart={() => console.log('Hover starts')}
                                                    onHoverEnd={e => { }}

                                                >
                                                    <ProjectPictureCard props={projectData[0]} />
                                                </motion.div>
                                            </Box>

                                            <Box gridArea="project2" pad="medium" label="show" onClick={() => setShow(true)}>
                                                {show && (
                                                    <Layer
                                                        onEsc={() => setShow(false)}
                                                        onClickOutside={() => setShow(false)}
                                                    >
                                                        <ProjectModal />

                                                    </Layer>
                                                )}

                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    onHoverStart={() => console.log('Hover starts')}
                                                    onHoverEnd={e => { }}

                                                >
                                                    <ProjectPictureCard props={projectData[1]} />
                                                </motion.div>
                                            </Box>

                                            <Box gridArea="project3" pad="medium" label="show" onClick={() => setShow(true)}>
                                                {show && (
                                                    <Layer
                                                        onEsc={() => setShow(false)}
                                                        onClickOutside={() => setShow(false)}
                                                    >
                                                        <ProjectModal />

                                                    </Layer>
                                                )}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    onHoverStart={() => console.log('Hover starts')}
                                                    onHoverEnd={e => { }}

                                                >
                                                    <ProjectPictureCard props={projectData[3]} />
                                                </motion.div>
                                            </Box>

                                            <Box gridArea="project4" pad="medium" label="show" onClick={() => setShow(true)}>
                                                {show && (
                                                    <Layer
                                                        onEsc={() => setShow(false)}
                                                        onClickOutside={() => setShow(false)}
                                                    >
                                                        <ProjectModal />

                                                    </Layer>
                                                )}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    onHoverStart={() => console.log('Hover starts')}
                                                    onHoverEnd={e => { }}

                                                >
                                                    <ProjectPictureCard props={projectData[5]} />
                                                </motion.div>
                                            </Box>

                                            <Box gridArea="project5" pad="medium" label="show" onClick={() => setShow(true)}>
                                                {show && (
                                                    <Layer
                                                        onEsc={() => setShow(false)}
                                                        onClickOutside={() => setShow(false)}
                                                    >
                                                        <ProjectModal />

                                                    </Layer>
                                                )}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    onHoverStart={() => console.log('Hover starts')}
                                                    onHoverEnd={e => { }}

                                                >
                                                    <ProjectPictureCard props={projectData[5]} />
                                                </motion.div>
                                            </Box>
                                            {/* 
                                            <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            onHoverStart={() => console.log('Hover starts')}
                                            onHoverEnd={e => {}}
                                
                                            >

                                                <Box width="200px" height="200px">
                                                    <Image fill="true" src={nolanSnow}  label="show" onClick={() => setShow(true)}/>
                                                    {show && (
                                                        <Layer
                                                            onEsc={() => setShow(false)}
                                                            onClickOutside={() => setShow(false)}
                                                        >
                                                            <Box width="50vw" height="50vh">
                                                                
                                                            </Box>
                    
                                                        </Layer>
                                                    )}
                                                </Box>
                                            </motion.div> */}



                                        </Grid>

                                    </Box>
                                </motion.div>

                            </Box>
                        </MediaQuery>

                    </Grid>
                </Box>

            </MediaQuery>

            <MediaQuery maxWidth={1531} >
                <MobileNavbar />

                <Box>
                    <Grid
                        areas={[
                            ['main'],
                            ['about'],
                            ['projects'],
                            ['contact']
                        ]}
                        columns={['flex']}
                        rows={['flex']}

                        responsive="true"
                    >
                        <Box gridArea="main" width="100%" height="100vh" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                            <motion.div
                            // animate={{ rotateX: 90, scale: 0.9}}
                            // transition={{ duration: 2}}

                            >
                                <Box onScroll={handleScroll} align="center">
                                    <Heading color="white" size="50px" margin={{ top: "200px", bottom: "-1px" }}>Hello there!</Heading>
                                    <Heading color="white" size="50px" margin={{ bottom: "-1px" }}>I'm</Heading>
                                    <Heading color="#FCE181" size="50px">Nolan Stucky!</Heading>

                                    <Anchor onClick={executeScrollToAboutMe} color="white"><Text size="25px">Learn More About Me</Text></Anchor>
                                </Box>
                            </motion.div>


                        </Box>

                        <Box gridArea="about" ref={myAboutMe} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="150vh">
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
                                <Box align="center" >

                                    <Grid
                                        areas={[
                                            ['picture'],
                                            ['about']
                                        ]}
                                        columns={['flex']}
                                        rows={['flex']}

                                        responsive="true"
                                    >



                                        <Box gridArea="picture" height="250px" width="250px" margin={{ top: "50px", right: "0px", left: "75px" }}>
                                            <Carousel play={5000} >
                                                <Image fill="true" src={nolanSnow} />
                                                <Image fill="true" src={nolanTree} />
                                                <Image fill="true" src={nolanDog} />
                                            </Carousel>
                                        </Box>

                                        <Box gridArea="about" height="150px" width="150px" margin={{ top: "100px", right: "-50px" }}>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>

                                            <Anchor onClick={executeScrollToProjects} color="white"><Text size="25px">See my Projects!</Text></Anchor>
                                        </Box>
                                    </Grid>

                                </Box>
                            </motion.div>

                        </Box>


                        <Box gridArea="projects" ref={myProjects} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="100vh">
                            <motion.div

                            >
                                <Box margin={{ top: "100px" }} align="center">

                                    <Grid
                                        areas={[
                                            ['project1'],
                                            ['project2'],
                                            ['project3'],
                                            ['project4'],
                                            ['project5'],
                                        ]}
                                        columns={['flex']}


                                        responsive="true"
                                    >
                                        <Box gridArea="project1" pad="medium" label="show" onClick={() => setShow(true)} >
                                            {show && (
                                                <Layer
                                                    onEsc={() => setShow(false)}
                                                    onClickOutside={() => setShow(false)}
                                                >
                                                    <ProjectModal />

                                                </Layer>
                                            )}

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[0]} />
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project2" pad="medium" label="show" onClick={() => setShow(true)}>
                                            {show && (
                                                <Layer
                                                    onEsc={() => setShow(false)}
                                                    onClickOutside={() => setShow(false)}
                                                >
                                                    <ProjectModal />

                                                </Layer>
                                            )}

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[1]} />
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project3" pad="medium" label="show" onClick={() => setShow(true)}>
                                            {show && (
                                                <Layer
                                                    onEsc={() => setShow(false)}
                                                    onClickOutside={() => setShow(false)}
                                                >
                                                    <ProjectModal />

                                                </Layer>
                                            )}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[3]} />
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project4" pad="medium" label="show" onClick={() => setShow(true)}>
                                            {show && (
                                                <Layer
                                                    onEsc={() => setShow(false)}
                                                    onClickOutside={() => setShow(false)}
                                                >
                                                    <ProjectModal />

                                                </Layer>
                                            )}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[5]} />
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project5" pad="medium" label="show" onClick={() => setShow(true)}>
                                            {show && (
                                                <Layer
                                                    onEsc={() => setShow(false)}
                                                    onClickOutside={() => setShow(false)}
                                                >
                                                    <ProjectModal />

                                                </Layer>
                                            )}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[5]} />
                                            </motion.div>
                                        </Box>
                                        {/* 
                                            <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            onHoverStart={() => console.log('Hover starts')}
                                            onHoverEnd={e => {}}
                                
                                            >

                                                <Box width="200px" height="200px">
                                                    <Image fill="true" src={nolanSnow}  label="show" onClick={() => setShow(true)}/>
                                                    {show && (
                                                        <Layer
                                                            onEsc={() => setShow(false)}
                                                            onClickOutside={() => setShow(false)}
                                                        >
                                                            <Box width="50vw" height="50vh">
                                                                
                                                            </Box>
                    
                                                        </Layer>
                                                    )}
                                                </Box>
                                            </motion.div> */}



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

