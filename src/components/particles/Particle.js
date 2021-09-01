  
import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      params={{
        "background": {
            // "image": "url('https://github.com/nolanstucky/NS-React-Portfolio/blob/main/public/assets/backgroundmountain3darker.png?raw=true')",
            "width": 100,
            "height": 100,
            "color":{
              "value": "#0c101e"
            }
        },

        "interactivity": {
          "events": {
            "onClick": {
              "enable": false,
              "mode": "repulse"
            },
            "onHover": {
              "enable": false,
              "mode": "bubble"
            }
          },
          "modes": {
            "bubble": {
              "distance": 400,
              "duration": 0.3,
              "opacity": 1,
              "size": 4
            },
            "grab": {
              "distance": 400,
              "links": {
                "opacity": 0.5
              }
            }
          }
        },
        "particles": {
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 500,
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "direction": "bottom",
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            }
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 400
          },
          "opacity": {
            "random": {
              "enable": true
            },
            "value": 0.5,
            "animation": {
              "minimumValue": 0.1,
              "speed": 0.1
            }
          },
          "size": {
            "random": {
              "enable": true
            },
            "value": 1,
            "animation": {
              "minimumValue": 0.1,
              "speed": 1
            }
          }
        }
      }}
    />
  );
}

export default Particle;