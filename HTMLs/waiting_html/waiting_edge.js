/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'fundo-012',
                type: 'image',
                rect: ['0px', '0px','400px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fundo-012.svg",'0px','0px']
            },
            {
                id: 'b2-alto',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'b1-baixo-01',
                type: 'image',
                rect: ['0px', '0px','400px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"b1-baixo-01.svg",'0px','0px']
            },
            {
                id: 'a2-alto',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'a1-01',
                type: 'image',
                rect: ['0px', '0px','400px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"a1-01.svg",'0px','0px']
            },
            {
                id: 'cima-01',
                type: 'image',
                rect: ['0px', '0px','400px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"cima-01.svg",'0px','0px']
            },
            {
                id: 'luz',
                type: 'rect',
                rect: ['194px', '51px','11px','2px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(156,227,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 0, 0, 5, 0, "rgba(156,227,255,1.00)"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['126px', '53px','17px','17px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,227,255,0)"],
                stroke: [1,"rgba(255,255,255,0.11)","solid"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['135px', '55px','1px','7px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,0.28)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"]
            },
            {
                id: 'brilho1',
                type: 'ellipse',
                rect: ['154px', '111px','1px','1px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(23,130,181,0.85)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"],
                boxShadow: ["", 0, 0, 2, 0, "rgba(156,227,255,1.00)"]
            },
            {
                id: 'brilho1Copy2',
                type: 'ellipse',
                rect: ['174px', '125px','1px','1px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(23,130,181,0.85)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"],
                boxShadow: ["", 0, 0, 2, 0, "rgba(156,227,255,1.00)"]
            },
            {
                id: 'brilho1Copy3',
                type: 'ellipse',
                rect: ['261px', '111px','1px','1px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(23,130,181,0.85)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"],
                boxShadow: ["", 0, 0, 2, 0, "rgba(156,227,255,1.00)"]
            },
            {
                id: 'brilho1Copy4',
                type: 'ellipse',
                rect: ['227px', '123px','1px','1px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(23,130,181,0.85)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"],
                boxShadow: ["", 0, 0, 2, 0, "rgba(156,227,255,1.00)"]
            },
            {
                id: 'brilho1Copy5',
                type: 'ellipse',
                rect: ['134px', '134px','1px','1px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(23,130,181,0.85)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"],
                boxShadow: ["", 0, 0, 2, 0, "rgba(156,227,255,1.00)"]
            },
            {
                id: 'cover',
                type: 'rect',
                rect: ['122px', '51px','155px','99px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(170,226,255,1.00)"],
                stroke: [0,"rgba(255, 255, 255, 0.168627)","solid"]
            }],
            symbolInstances: [
            {
                id: 'b2-alto',
                symbolName: 'b2-alto',
                autoPlay: {

                }
            },
            {
                id: 'a2-alto',
                symbolName: 'a2-alto',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "right", 'auto'],
                ["style", "border-width", '0px'],
                ["style", "width", '1px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(255,255,255,0.13)'],
                ["motion", "location", '135.5px 62px'],
                ["style", "height", '7px'],
                ["style", "cursor", 'pointer'],
                ["style", "bottom", 'auto']
            ],
            "${_a1-01}": [
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ],
            "${_brilho1}": [
                ["color", "background-color", 'rgba(17,101,141,0.85)'],
                ["subproperty", "boxShadow.color", 'rgba(156,227,255,1.00)'],
                ["style", "left", '154px'],
                ["style", "top", '111px'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_cima-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '200px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ],
            "${_brilho1Copy5}": [
                ["color", "background-color", 'rgba(17,101,141,0.851)'],
                ["subproperty", "boxShadow.color", 'rgba(156,227,255,1)'],
                ["style", "left", '134px'],
                ["style", "top", '134px'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_luz}": [
                ["color", "background-color", 'rgba(156,227,255,1.00)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["subproperty", "boxShadow.color", 'rgba(156,227,255,1.00)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '194px']
            ],
            "${_fundo-012}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '200px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ],
            "${_brilho1Copy4}": [
                ["color", "background-color", 'rgba(17,101,141,0.851)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '227px'],
                ["style", "top", '123px'],
                ["subproperty", "boxShadow.color", 'rgba(156,227,255,1)'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_b2-alto}": [
                ["style", "cursor", 'pointer']
            ],
            "${_a2-alto}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Ellipse}": [
                ["style", "border-style", 'solid'],
                ["style", "left", '126px'],
                ["style", "width", '17px'],
                ["style", "top", '53px'],
                ["style", "border-width", '1px'],
                ["style", "height", '17px'],
                ["color", "border-color", 'rgba(255,255,255,0.11)'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_cover}": [
                ["style", "height", '99px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(170,226,255,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(25,25,25,1.00)'],
                ["style", "width", '400px'],
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_brilho1Copy3}": [
                ["color", "background-color", 'rgba(17,101,141,0.851)'],
                ["subproperty", "boxShadow.color", 'rgba(156,227,255,1)'],
                ["style", "left", '261px'],
                ["style", "top", '111px'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_b1-baixo-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '200px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '400px']
            ],
            "${_brilho1Copy2}": [
                ["color", "background-color", 'rgba(17,101,141,0.851)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '174px'],
                ["style", "top", '125px'],
                ["subproperty", "boxShadow.color", 'rgba(156,227,255,1)'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1635,
            autoPlay: true,
            labels: {
                "inicio": 0,
                "relogio": 250
            },
            timeline: [
                { id: "eid231", tween: [ "subproperty", "${_brilho1}", "boxShadow.blur", '2px', { fromValue: '0px'}], position: 0, duration: 370 },
                { id: "eid232", tween: [ "subproperty", "${_brilho1}", "boxShadow.blur", '0px', { fromValue: '2px'}], position: 370, duration: 295 },
                { id: "eid253", tween: [ "subproperty", "${_brilho1Copy2}", "boxShadow.blur", '2px', { fromValue: '0px'}], position: 370, duration: 370 },
                { id: "eid254", tween: [ "subproperty", "${_brilho1Copy2}", "boxShadow.blur", '0px', { fromValue: '2px'}], position: 740, duration: 295 },
                { id: "eid297", tween: [ "subproperty", "${_brilho1Copy5}", "boxShadow.blur", '2px', { fromValue: '0px'}], position: 740, duration: 370 },
                { id: "eid298", tween: [ "subproperty", "${_brilho1Copy5}", "boxShadow.blur", '0px', { fromValue: '2px'}], position: 1110, duration: 295 },
                { id: "eid129", tween: [ "motion", "${_Rectangle2}", [[135.5, 62, 0, 0],[135.5, 62, 0, 0]]], position: 0, duration: 0 },
                { id: "eid48", tween: [ "transform", "${_Rectangle2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid166", tween: [ "transform", "${_Rectangle2}", "rotateZ", '1080deg', { fromValue: '360deg'}], position: 250, duration: 1230 },
                { id: "eid279", tween: [ "subproperty", "${_brilho1Copy4}", "boxShadow.blur", '2px', { fromValue: '0px'}], position: 500, duration: 370 },
                { id: "eid280", tween: [ "subproperty", "${_brilho1Copy4}", "boxShadow.blur", '0px', { fromValue: '2px'}], position: 870, duration: 295 },
                { id: "eid169", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid337", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 1405, duration: 185 },
                { id: "eid47", tween: [ "style", "${_Rectangle2}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid408", tween: [ "style", "${_Rectangle2}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid409", tween: [ "style", "${_Rectangle2}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Rectangle2}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid411", tween: [ "style", "${_Rectangle2}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid265", tween: [ "subproperty", "${_brilho1Copy3}", "boxShadow.blur", '2px', { fromValue: '0px'}], position: 200, duration: 370 },
                { id: "eid266", tween: [ "subproperty", "${_brilho1Copy3}", "boxShadow.blur", '0px', { fromValue: '2px'}], position: 570, duration: 295 },
                { id: "eid168", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid347", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 1480, duration: 155 },
                { id: "eid116", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,255,255,0.13)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.13)'}], position: 0, duration: 0 }            ]
        }
    }
},
"a2-alto": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'a2-01-alto',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2-01.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a2-01-alto}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '200px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1590,
            autoPlay: true,
            timeline: [
                { id: "eid146", tween: [ "style", "${_a2-01-alto}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 854 },
                { id: "eid147", tween: [ "style", "${_a2-01-alto}", "opacity", '0', { fromValue: '1'}], position: 854, duration: 736 }            ]
        }
    }
},
"b2-alto": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'b2-alto-01',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2-alto-01.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '400px']
            ],
            "${_b2-alto-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '200px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1590,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_b2-alto-01}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 854 },
                { id: "eid28", tween: [ "style", "${_b2-alto-01}", "opacity", '0', { fromValue: '1'}], position: 854, duration: 736 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-25655664");
