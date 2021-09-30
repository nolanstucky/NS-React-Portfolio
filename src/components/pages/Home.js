import { React, useEffect, useState, useRef } from 'react'
import { Main, Grid, Box, Stack, Anchor, Image, Text, Heading, Carousel, Paragraph, Layer, Collapsible, Button } from 'grommet';
import { Github, Heroku } from 'grommet-icons';
import Particle from '../particles/Particle'
import MediaQuery from 'react-responsive'
import MobileNavbar from '../mobileNavbar'
import Navbar from '../navbar';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Typical from 'react-typical'
import ProjectCard from '../ProjectCard/index'
import projectData from '../../data'
import ProjectPictureCard from '../ProjectPictureCard';
import ProjectModal from '../ProjectModal';
import ProjectModalMobile from '../ProjectModalMobile';

const nolanSnow = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanSnow.jpg?raw=true'
const nolanTree = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanTree.jpg?raw=true'
const nolanDog = 'https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/nolanDog.JPG?raw=true'

export default function Home() {

    const data = projectData

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom")
        }
    }

    const controls = useAnimation();
    const controlsTitle = useAnimation();
    const controlsProjects = useAnimation();

    // controller for title animation
    const [refTitle, inViewTitle] = useInView({
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });

    useEffect(() => {
        if (inViewTitle) {
            controlsTitle.start("visible");
        }
        if (!inViewTitle) {
            controlsTitle.start("hidden");
        }
    }, [controlsTitle, inViewTitle]);

    // controller for about me animation
    const [ref, inView] = useInView({
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    // controller for project animation
    const [refProjects, inViewProjects] = useInView({
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });

    useEffect(() => {
        if (inViewProjects) {
            controlsProjects.start("visible");
        }
        if (!inViewProjects) {
            controlsProjects.start("hidden");
        }
    }, [controlsProjects, inViewProjects]);

    // variables for click to scroll 
    const myTitle = useRef(null)
    const myAboutMe = useRef(null)
    const myProjects = useRef(null)


    const executeScrollToAboutMe = () => myAboutMe.current.scrollIntoView()
    const executeScrollToProjects = () => myProjects.current.scrollIntoView()

    // modal hooks 
    const [show1, setShow1] = useState();
    const [show2, setShow2] = useState();
    const [show3, setShow3] = useState();
    const [show4, setShow4] = useState();
    const [show5, setShow5] = useState();

    //footer hooks 
    const [open1, setOpen1] = useState();
    const [open2, setOpen2] = useState();
    const [open3, setOpen3] = useState();
    const [open4, setOpen4] = useState();
    const [open5, setOpen5] = useState();

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
                        <Box gridArea="main" ref={myTitle} width="100%" height="100vh" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                            <motion.div
                                ref={refTitle}
                                animate={controlsTitle}
                                initial="hidden"
                                transition={{ duration: 0.3 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}

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
                                transition={{ duration: 0.1 }}
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



                                        <Box gridArea="picture" height="375px" width="375px" margin={{ top: "230px", right: "250px" }}>
                                            <Carousel play={5000} >
                                                <Image fill="true" src={nolanSnow} />
                                                <Image fill="true" src={nolanTree} />
                                                <Image fill="true" src={nolanDog} />
                                            </Carousel>
                                            <Box align="center">
                                                <Text color="#FCE181">
                                                <Typical
                                                    steps={[
                                                        'Front End Developer', 15000,
                                                        'Back End Developer', 15000,
                                                        'Software Developer', 15000,
                                                        'Game Designer', 15000,
                                                    ]}
                                                    loop={Infinity}
                                                    wrapper="h1"
                                                    color="#FCE181"
                                                />
                                                </Text>
                                            </Box>
                                        </Box>

                                        <Box gridArea="about" height="medium" width="medium" margin={{ top: "200px", right: "50px" }}>
                                            <Paragraph margin={{ "left": "-50px", "bottom":"-5px" }} color="white" style={{fontSize:"23px"}}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", "bottom":"-5px"}} color="white" style={{fontSize:"23px"}}>
                                                I have a passion for learning especially when it comes to things that interest me.
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", "bottom":"-5px"}} color="white" style={{fontSize:"23px"}}>
                                                Which includes <span style={{ color: "#FCE181" }}>React.js</span>, <span style={{ color: "#FCE181" }}>JavaScript</span>, and <span style={{ color: "#FCE181" }}>Unity.</span>
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", "bottom":"-5px"}} color="white" style={{fontSize:"23px"}}>
                                                Always trying to create aesthetically pleasing applications for users to enjoy. 
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", "bottom":"-5px"}} color="white" style={{fontSize:"23px"}}>
                                                That means I am fascinated in the latest in modern web development as I continue to sharpen my skills in that field.
                                            </Paragraph>
                                            <Paragraph margin={{ "left": "-50px", "bottom":"-5px"}} color="white" style={{fontSize:"23px"}}>
                                                I also love to snowboard and hope that you enjoy this serene background as much as I do!
                                            </Paragraph>
                                            <Box margin={{left:"50px",top:"50px"}}>
                                                <Anchor onClick={executeScrollToProjects} color="white"><Text size="25px">See my Projects!</Text></Anchor>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Box>
                            </motion.div>

                        </Box>

                        <MediaQuery minWidth={1531} minHeight={863}>
                            <Box gridArea="projects" ref={myProjects} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="100vh">
                                <motion.div
                                    ref={refProjects}
                                    animate={controlsProjects}
                                    initial="hidden"
                                    transition={{ duration: 0.1 }}
                                    variants={{
                                        visible: { opacity: 1, scale: 1 },
                                        hidden: { opacity: 0, scale: 0 }
                                    }}
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
                                            <Box gridArea="project1" pad="medium" label="show1" onClick={() => setShow1(true)} >
                                                {show1 && (
                                                    <Layer
                                                        onEsc={() => setShow1(false)}
                                                        onClickOutside={() => setShow1(false)}
                                                        background={{ opacity: "50%", color: "#0c101e" }}
                                                        round="medium"
                                                    >
                                                        <ProjectModal props={projectData[0]} />
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

                                            <Box gridArea="project2" pad="medium" label="show2" onClick={() => setShow2(true)}>
                                                {show2 && (
                                                    <Layer
                                                        onEsc={() => setShow2(false)}
                                                        onClickOutside={() => setShow2(false)}
                                                        round="medium"
                                                        background={{ opacity: "50%", color: "#0c101e" }}
                                                        round="medium"
                                                    >
                                                        <ProjectModal props={projectData[1]} />

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

                                            <Box gridArea="project3" pad="medium" label="show3" onClick={() => setShow3(true)}>
                                                {show3 && (
                                                    <Layer
                                                        onEsc={() => setShow3(false)}
                                                        onClickOutside={() => setShow3(false)}
                                                        background={{ opacity: "50%", color: "#0c101e" }}
                                                        round="medium"
                                                    >
                                                        <ProjectModal props={projectData[3]} />

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

                                            <Box gridArea="project4" pad="medium" label="show4" onClick={() => setShow4(true)}>
                                                {show4 && (
                                                    <Layer
                                                        onEsc={() => setShow4(false)}
                                                        onClickOutside={() => setShow4(false)}
                                                        background={{ opacity: "50%", color: "#0c101e" }}
                                                        round="medium"
                                                    >
                                                        <ProjectModal props={projectData[5]} />

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

                                            <Box gridArea="project5" pad="medium" label="show5" onClick={() => setShow5(true)}>
                                                {show5 && (
                                                    <Layer
                                                        onEsc={() => setShow5(false)}
                                                        onClickOutside={() => setShow5(false)}
                                                        background={{ opacity: "50%", color: "#0c101e" }}
                                                        round="medium"
                                                    >
                                                        <ProjectModal props={projectData[6]} />

                                                    </Layer>
                                                )}
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    onHoverStart={() => console.log('Hover starts')}
                                                    onHoverEnd={e => { }}

                                                >
                                                    <ProjectPictureCard props={projectData[6]} />
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

            <MediaQuery maxWidth={1531} minHeight={725}>
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
                                ref={refTitle}
                                animate={controlsTitle}
                                initial="hidden"
                                transition={{ duration: 0.3 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}

                            >
                                <Box onScroll={handleScroll} align="center">
                                    <Heading color="white" size="50px" margin={{ top: "200px", bottom: "-1px" }}>Hello there!</Heading>
                                    <Heading color="white" size="50px" margin={{ bottom: "-1px" }}>I'm</Heading>
                                    <Heading color="#FCE181" size="50px">Nolan Stucky!</Heading>

                                    <Anchor onClick={executeScrollToAboutMe} color="white"><Text size="25px">Learn More About Me</Text></Anchor>
                                </Box>
                            </motion.div>


                        </Box>

                        <Box gridArea="about" ref={myAboutMe} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="130vh">
                            <motion.div
                            // ref={ref}
                            // animate={controls}
                            // initial="hidden"
                            // transition={{ duration: 0.3 }}
                            // variants={{
                            //     visible: { opacity: 1, scale: 1 },
                            //     hidden: { opacity: 0, scale: 0 }
                            // }}

                            >
                                <Box align="center">

                                    <Grid
                                        areas={[
                                            ['picture'],
                                            ['about'],

                                        ]}
                                        columns={['flex']}
                                        rows={['flex']}

                                        responsive="true"
                                    >



                                        <Box gridArea="picture" height="250px" width="250px" margin={{ top: "50px", right: "0px" }}>
                                            <Carousel play={5000} >
                                                <Image fill="true" src={nolanSnow} />
                                                <Image fill="true" src={nolanTree} />
                                                <Image fill="true" src={nolanDog} />
                                            </Carousel>
                                        </Box>

                                        <Box gridArea="about" height="150px" width="150px" margin={{ top: "100px", left: "-25px", bottom: "50px" }}>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I have a passion for learning especially when it comes to things that interest me.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                Always trying to create aesthetically pleasing applications for users to enjoy. That means I am fascinated in the latest in modern web development as I continue to sharpen my skills in that field.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I also love to snowboard and hope that you enjoy this serene background as much as I do!
                                            </Paragraph>

                                            <Box>
                                                <Anchor onClick={executeScrollToProjects} color="white"><Text size="20px">See my Projects!</Text></Anchor>
                                            </Box>

                                        </Box>
                                    </Grid>

                                </Box>
                            </motion.div>

                        </Box>


                        <Box gridArea="projects" ref={myProjects} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="100vh">
                            <motion.div
                            // ref={refProjects}
                            // animate={controlsProjects}
                            // initial="visible"
                            // transition={{ duration: 0.1 }}
                            // variants={{
                            //     visible: { opacity: 1, scale: 1 },
                            //     hidden: { opacity: 0, scale: 0 }
                            // }}
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
                                        <Box gridArea="project1" pad="large" label="show1" onClick={() => setOpen1(!open1)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[0]} />
                                                <Collapsible open={open1}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[0].description}
                                                    </Paragraph>
                                                </Collapsible>

                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project2" pad="large" label="show2" onClick={() => setOpen2(!open2)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[1]} />
                                                <Collapsible open={open2}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[1].description}
                                                    </Paragraph>
                                                    <Box align="center">
                                                        <Button href={projectData[1].deployedLink}><Heroku /><Text color="white">Deployed Link</Text></Button>
                                                        <Button href={projectData[1].githubLink} margin={{ left: "px", }}><Github /><Text color="white">Github Link</Text></Button>
                                                    </Box>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project3" pad="large" label="show3" onClick={() => setOpen3(!open3)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[3]} />
                                                <Collapsible open={open3}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[3].description}
                                                    </Paragraph>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project4" pad="large" label="show4" onClick={() => setOpen4(!open4)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[5]} />
                                                <Collapsible open={open4}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[4].description}
                                                    </Paragraph>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project5" pad="large" label="show5" onClick={() => setOpen5(!open5)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[5]} />
                                                <Collapsible open={open5}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[5].description}
                                                    </Paragraph>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Box>
                    </Grid>
                </Box>
            </MediaQuery>

            <MediaQuery maxHeight={724} >
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
                                ref={refTitle}
                                animate={controlsTitle}
                                initial="hidden"
                                transition={{ duration: 0.3 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}

                            >
                                <Box onScroll={handleScroll} align="center">
                                    <Heading color="white" size="45px" margin={{ top: "200px", bottom: "-1px" }}>Hello there!</Heading>
                                    <Heading color="white" size="45px" margin={{ bottom: "-1px" }}>I'm</Heading>
                                    <Heading color="#FCE181" size="45px">Nolan Stucky!</Heading>

                                    <Anchor onClick={executeScrollToAboutMe} color="white"><Text size="25px">Learn More About Me</Text></Anchor>
                                </Box>
                            </motion.div>


                        </Box>

                        <Box gridArea="about" ref={myAboutMe} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="180vh">
                            <motion.div
                            // ref={ref}
                            // animate={controls}
                            // initial="hidden"
                            // transition={{ duration: 0.3 }}
                            // variants={{
                            //     visible: { opacity: 1, scale: 1 },
                            //     hidden: { opacity: 0, scale: 0 }
                            // }}

                            >
                                <Box align="center">

                                    <Grid
                                        areas={[
                                            ['picture'],
                                            ['about'],

                                        ]}
                                        columns={['flex']}
                                        rows={['flex']}

                                        responsive="true"
                                    >



                                        <Box gridArea="picture" height="250px" width="250px" margin={{ top: "50px", right: "0px" }}>
                                            <Carousel play={5000} >
                                                <Image fill="true" src={nolanSnow} />
                                                <Image fill="true" src={nolanTree} />
                                                <Image fill="true" src={nolanDog} />
                                            </Carousel>
                                        </Box>

                                        <Box gridArea="about" height="150px" width="150px" margin={{ top: "100px", left: "-25px", bottom: "50px" }}>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I am a full stack web developer that absolutely loves the world of technology ever since I built my own computer when I was a child.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I have a passion for learning especially when it comes to things that interest me.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                Always trying to create aesthetically pleasing applications for users to enjoy. That means I am fascinated in the latest in modern web development as I continue to sharpen my skills in that field.
                                            </Paragraph>
                                            <Paragraph color="white" margin={{ right: "-175px" }}>
                                                I also love to snowboard and hope that you enjoy this serene background as much as I do!
                                            </Paragraph>

                                            <Box>
                                                <Anchor onClick={executeScrollToProjects} color="white"><Text size="20px">See my Projects!</Text></Anchor>
                                            </Box>

                                        </Box>
                                    </Grid>

                                </Box>
                            </motion.div>

                        </Box>


                        <Box gridArea="projects" ref={myProjects} style={{ background: 'rgba(0, 0, 0, 0.3)' }} margin={{ top: "15px" }} width="100%" height="100vh">
                            <motion.div
                            // ref={refProjects}
                            // animate={controlsProjects}
                            // initial="visible"
                            // transition={{ duration: 0.1 }}
                            // variants={{
                            //     visible: { opacity: 1, scale: 1 },
                            //     hidden: { opacity: 0, scale: 0 }
                            // }}
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
                                        <Box gridArea="project1" pad="large" label="show1" onClick={() => setOpen1(!open1)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[0]} />
                                                <Collapsible open={open1}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[0].description}
                                                    </Paragraph>
                                                </Collapsible>

                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project2" pad="large" label="show2" onClick={() => setOpen2(!open2)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[1]} />
                                                <Collapsible open={open2}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[1].description}
                                                    </Paragraph>
                                                    <Box align="center">
                                                        <Button href={projectData[1].deployedLink}><Heroku /><Text color="white">Deployed Link</Text></Button>
                                                        <Button href={projectData[1].githubLink} margin={{ left: "px", }}><Github /><Text color="white">Github Link</Text></Button>
                                                    </Box>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project3" pad="large" label="show3" onClick={() => setOpen3(!open3)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[3]} />
                                                <Collapsible open={open3}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[3].description}
                                                    </Paragraph>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project4" pad="large" label="show4" onClick={() => setOpen4(!open4)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[5]} />
                                                <Collapsible open={open4}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[4].description}
                                                    </Paragraph>
                                                </Collapsible>
                                            </motion.div>
                                        </Box>

                                        <Box gridArea="project5" pad="large" label="show5" onClick={() => setOpen5(!open5)}>

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => console.log('Hover starts')}
                                                onHoverEnd={e => { }}

                                            >
                                                <ProjectPictureCard props={projectData[5]} />
                                                <Collapsible open={open5}>
                                                    <Paragraph margin="medium" color="white">
                                                        {projectData[5].description}
                                                    </Paragraph>
                                                </Collapsible>
                                            </motion.div>
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

