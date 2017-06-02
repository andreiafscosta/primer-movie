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
                id: 'frente-back-garagem-012',
                type: 'image',
                rect: ['0px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"frente-back-garagem-01.svg",'0px','0px']
            },
            {
                id: 'porta-aberta-012',
                type: 'image',
                rect: ['0px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"porta-aberta-01.svg",'0px','0px']
            },
            {
                id: 'porta-fechada-012',
                type: 'image',
                rect: ['0px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"porta-fechada-01.svg",'0px','0px']
            },
            {
                id: 'abe-013',
                type: 'image',
                rect: ['-17px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abe-01.svg",'0px','0px']
            },
            {
                id: 'aaron-013',
                type: 'image',
                rect: ['24px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"aaron-01.svg",'0px','0px']
            },
            {
                id: 'frente-garagem7-01',
                type: 'image',
                rect: ['0px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"frente-garagem7-01.svg",'0px','0px']
            },
            {
                id: 'luz-do-tecto3-01',
                type: 'image',
                rect: ['0px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz-do-tecto3-01.svg",'0px','0px']
            },
            {
                id: 'luz-apagada-garagem-012',
                type: 'image',
                rect: ['0px', '-100px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz-apagada-garagem-01.svg",'0px','0px']
            },
            {
                id: 'luz-candeeiro',
                type: 'ellipse',
                rect: ['454px', '300px','6px','2px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(252,252,202,1)"],
                stroke: [0,"rgba(0, 0, 0, 0)","none"],
                boxShadow: ["", 0, 0, 5, 1, "rgba(238,239,191,1.00)"],
                transform: [[],['-30']]
            },
            {
                id: 'luz-tecto',
                type: 'rect',
                rect: ['225px', '213px','139px','4px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(252,252,202,1.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"],
                boxShadow: ["", 0, 0, 8, 0.5, "rgba(252,252,202,1.00)"]
            },
            {
                id: 'porta-garagem-013',
                type: 'image',
                rect: ['0px', '-181px','800px','521px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"porta-garagem-01.svg",'0px','0px']
            },
            {
                id: 'exterior-garagem2-01x-012',
                type: 'image',
                rect: ['-1703px', '-1204px','4143px','2964px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exterior-garagem2-01x-01.svg",'0px','0px'],
                transform: [[],[],[],['0.14','0.14']]
            },
            {
                id: 'luz-efeito-rua',
                type: 'rect',
                rect: ['0', '-240','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'estrelas',
                type: 'rect',
                rect: ['101', '38','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'estrelas',
                symbolName: 'estrelas',
                autoPlay: {

                }
            },
            {
                id: 'luz-efeito-rua',
                symbolName: 'luz-efeito-rua',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_luz-efeito-rua}": [
                ["style", "cursor", 'pointer']
            ],
            "${_frente-back-garagem-012}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_luz-candeeiro}": [
                ["subproperty", "boxShadow.blur", '5px'],
                ["transform", "rotateZ", '-30deg'],
                ["style", "left", '454px'],
                ["style", "width", '6px'],
                ["style", "top", '300px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '2px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(238,239,191,1.00)']
            ],
            "${_luz-tecto}": [
                ["color", "background-color", 'rgba(252,252,202,1)'],
                ["subproperty", "boxShadow.color", 'rgb(252,252,202)'],
                ["style", "opacity", '1'],
                ["style", "left", '225px'],
                ["style", "width", '139px'],
                ["style", "top", '213px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgba(0, 0, 0, 0)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '8px']
            ],
            "${_abe-013}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-17px'],
                ["style", "width", '800px']
            ],
            "${_exterior-garagem2-01x-012}": [
                ["style", "top", '-1204px'],
                ["transform", "scaleY", '0.14'],
                ["transform", "scaleX", '0.14'],
                ["style", "height", '2964px'],
                ["style", "left", '-1703px'],
                ["style", "width", '4143px']
            ],
            "${_porta-garagem-013}": [
                ["style", "top", '-274px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '521px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_frente-garagem7-01}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(25,25,25,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '800px']
            ],
            "${_luz-apagada-garagem-012}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_porta-aberta-012}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_estrelas}": [
                ["style", "cursor", 'pointer']
            ],
            "${_aaron-013}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '24px'],
                ["style", "width", '800px']
            ],
            "${_luz-do-tecto3-01}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_porta-fechada-012}": [
                ["style", "top", '-100px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '521px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7139,
            autoPlay: true,
            timeline: [
                { id: "eid43", tween: [ "style", "${_frente-back-garagem-012}", "opacity", '0', { fromValue: '1'}], position: 5769, duration: 25 },
                { id: "eid16", tween: [ "style", "${_aaron-013}", "left", '24px', { fromValue: '24px'}], position: 448, duration: 0 },
                { id: "eid19", tween: [ "style", "${_aaron-013}", "left", '-36px', { fromValue: '24px'}], position: 1221, duration: 461 },
                { id: "eid25", tween: [ "style", "${_aaron-013}", "left", '-88px', { fromValue: '-36px'}], position: 2524, duration: 358 },
                { id: "eid27", tween: [ "style", "${_aaron-013}", "left", '17px', { fromValue: '-88px'}], position: 3874, duration: 565 },
                { id: "eid45", tween: [ "style", "${_frente-garagem7-01}", "opacity", '0', { fromValue: '1'}], position: 5769, duration: 25 },
                { id: "eid41", tween: [ "style", "${_luz-apagada-garagem-012}", "opacity", '1', { fromValue: '0.000000'}], position: 5769, duration: 25 },
                { id: "eid11", tween: [ "style", "${_aaron-013}", "opacity", '1', { fromValue: '0.000000'}], position: 448, duration: 473 },
                { id: "eid29", tween: [ "style", "${_aaron-013}", "opacity", '0', { fromValue: '1'}], position: 4439, duration: 231 },
                { id: "eid53", tween: [ "style", "${_luz-tecto}", "opacity", '0', { fromValue: '1'}], position: 5769, duration: 25 },
                { id: "eid14", tween: [ "style", "${_abe-013}", "opacity", '1', { fromValue: '0.000000'}], position: 1797, duration: 473 },
                { id: "eid37", tween: [ "style", "${_abe-013}", "opacity", '0', { fromValue: '1'}], position: 4001, duration: 231 },
                { id: "eid23", tween: [ "style", "${_abe-013}", "left", '35px', { fromValue: '-17px'}], position: 1797, duration: 727 },
                { id: "eid31", tween: [ "style", "${_abe-013}", "left", '-79px', { fromValue: '35px'}], position: 2951, duration: 335 },
                { id: "eid34", tween: [ "style", "${_abe-013}", "left", '-13px', { fromValue: '-79px'}], position: 3540, duration: 461 },
                { id: "eid48", tween: [ "style", "${_luz-do-tecto3-01}", "opacity", '0', { fromValue: '1'}], position: 5769, duration: 25 },
                { id: "eid3", tween: [ "style", "${_porta-garagem-013}", "top", '-100px', { fromValue: '-274px'}], position: 6124, duration: 1015 },
                { id: "eid8", tween: [ "style", "${_porta-fechada-012}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 300 },
                { id: "eid39", tween: [ "style", "${_porta-fechada-012}", "opacity", '0', { fromValue: '1'}], position: 5399, duration: 369 },
                { id: "eid152", tween: [ "style", "${_porta-aberta-012}", "opacity", '0.4', { fromValue: '1'}], position: 5769, duration: 25 }            ]
        }
    }
},
"r": {
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
                    rect: ['0px', '0px', '43px', '39px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(252,252,202,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '43px']
            ],
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"estrelas": {
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
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['168px', '46px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy10',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['22px', '26px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy2',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3Copy11',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    rect: ['234px', '-17px', '1px', '1px', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    type: 'ellipse',
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['528px', '60px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy12',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['451px', '34px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy13',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['41px', '48px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy14',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['168px', '46px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy17',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    transform: [[0, 0], [], [], ['0.7', '0.7']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3Copy16',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    rect: ['22px', '26px', '1px', '1px', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    type: 'ellipse',
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['234px', '-17px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy15',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    transform: [[0, 0], [], [], ['0.8', '0.8']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3Copy9',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    rect: ['528px', '60px', '1px', '1px', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    type: 'ellipse',
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    transform: [[0, 0], [], [], ['0.7', '0.7']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse3Copy8',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    rect: ['451px', '34px', '1px', '1px', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    type: 'ellipse',
                    fill: ['rgba(252,252,202,1)']
                },
                {
                    boxShadow: ['', 0, 0, 3, 1, 'rgba(233,233,186,1.00)'],
                    rect: ['578px', '3px', '1px', '1px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse3Copy7',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    cursor: ['ns-resize'],
                    fill: ['rgba(252,252,202,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse3Copy9}": [
                ["subproperty", "boxShadow.blur", '0px'],
                ["transform", "scaleX", '0.8'],
                ["style", "left", '318px'],
                ["style", "width", '1px'],
                ["style", "top", '76px'],
                ["style", "cursor", 'ns-resize'],
                ["transform", "scaleY", '0.8'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1)']
            ],
            "${_Ellipse3Copy7}": [
                ["subproperty", "boxShadow.color", 'rgb(233,233,186)'],
                ["style", "opacity", '0.7'],
                ["style", "left", '588px'],
                ["style", "width", '1px'],
                ["style", "top", '25px'],
                ["style", "cursor", 'ns-resize'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_Ellipse3Copy8}": [
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1)'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '376px'],
                ["style", "width", '1px'],
                ["style", "top", '17px'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["transform", "scaleY", '0.7'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_Ellipse3Copy15}": [
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1)'],
                ["style", "left", '276px'],
                ["style", "width", '1px'],
                ["style", "top", '28px'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_Ellipse3Copy17}": [
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1)'],
                ["style", "left", '184px'],
                ["style", "width", '1px'],
                ["style", "top", '18px'],
                ["style", "cursor", 'ns-resize'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_Ellipse3Copy16}": [
                ["subproperty", "boxShadow.blur", '0px'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '63px'],
                ["style", "width", '1px'],
                ["style", "top", '55px'],
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1)'],
                ["transform", "scaleY", '0.7'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_Ellipse3Copy12}": [
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1.00)'],
                ["style", "left", '528px'],
                ["style", "width", '1px'],
                ["style", "top", '60px'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_Ellipse3Copy11}": [
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1.00)'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '234px'],
                ["style", "width", '1px'],
                ["style", "top", '5px'],
                ["style", "cursor", 'ns-resize'],
                ["transform", "scaleY", '0.5'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '82px'],
                ["style", "width", '568px']
            ],
            "${_Ellipse3Copy14}": [
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '558px'],
                ["style", "width", '1px'],
                ["style", "top", '6px'],
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1.00)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_Ellipse3Copy2}": [
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1.00)'],
                ["style", "left", '22px'],
                ["style", "width", '1px'],
                ["style", "top", '26px'],
                ["style", "cursor", 'ns-resize'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_Ellipse3Copy13}": [
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '451px'],
                ["style", "width", '1px'],
                ["style", "top", '34px'],
                ["style", "cursor", 'ns-resize'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1.00)']
            ],
            "${_Ellipse3Copy10}": [
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '136px'],
                ["style", "width", '1px'],
                ["style", "top", '46px'],
                ["subproperty", "boxShadow.color", 'rgba(233,233,186,1.00)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '1px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5086,
            autoPlay: true,
            timeline: [
                { id: "eid423", tween: [ "subproperty", "${_Ellipse3Copy11}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 401, duration: 395 },
                { id: "eid424", tween: [ "subproperty", "${_Ellipse3Copy11}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 797, duration: 186 },
                { id: "eid426", tween: [ "subproperty", "${_Ellipse3Copy11}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2001, duration: 342 },
                { id: "eid427", tween: [ "subproperty", "${_Ellipse3Copy11}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2343, duration: 461 },
                { id: "eid428", tween: [ "subproperty", "${_Ellipse3Copy11}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3695, duration: 395 },
                { id: "eid429", tween: [ "subproperty", "${_Ellipse3Copy11}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4090, duration: 186 },
                { id: "eid611", tween: [ "style", "${_Ellipse3Copy11}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid626", tween: [ "style", "${_Ellipse3Copy17}", "left", '184px', { fromValue: '184px'}], position: 480, duration: 0 },
                { id: "eid539", tween: [ "subproperty", "${_Ellipse3Copy7}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 480, duration: 395 },
                { id: "eid540", tween: [ "subproperty", "${_Ellipse3Copy7}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 875, duration: 186 },
                { id: "eid542", tween: [ "subproperty", "${_Ellipse3Copy7}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2080, duration: 342 },
                { id: "eid543", tween: [ "subproperty", "${_Ellipse3Copy7}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2421, duration: 461 },
                { id: "eid544", tween: [ "subproperty", "${_Ellipse3Copy7}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3774, duration: 395 },
                { id: "eid545", tween: [ "subproperty", "${_Ellipse3Copy7}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4169, duration: 186 },
                { id: "eid625", tween: [ "style", "${_Ellipse3Copy10}", "left", '136px', { fromValue: '136px'}], position: 480, duration: 0 },
                { id: "eid416", tween: [ "subproperty", "${_Ellipse3Copy13}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 0, duration: 395 },
                { id: "eid417", tween: [ "subproperty", "${_Ellipse3Copy13}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 395, duration: 186 },
                { id: "eid419", tween: [ "subproperty", "${_Ellipse3Copy13}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 1599, duration: 342 },
                { id: "eid420", tween: [ "subproperty", "${_Ellipse3Copy13}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 1941, duration: 461 },
                { id: "eid421", tween: [ "subproperty", "${_Ellipse3Copy13}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3294, duration: 395 },
                { id: "eid422", tween: [ "subproperty", "${_Ellipse3Copy13}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 3689, duration: 186 },
                { id: "eid598", tween: [ "style", "${_Ellipse3Copy15}", "top", '28px', { fromValue: '28px'}], position: 1485, duration: 0 },
                { id: "eid444", tween: [ "subproperty", "${_Ellipse3Copy10}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 581, duration: 395 },
                { id: "eid445", tween: [ "subproperty", "${_Ellipse3Copy10}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 976, duration: 186 },
                { id: "eid447", tween: [ "subproperty", "${_Ellipse3Copy10}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2181, duration: 342 },
                { id: "eid448", tween: [ "subproperty", "${_Ellipse3Copy10}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2523, duration: 461 },
                { id: "eid449", tween: [ "subproperty", "${_Ellipse3Copy10}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3875, duration: 395 },
                { id: "eid450", tween: [ "subproperty", "${_Ellipse3Copy10}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4270, duration: 186 },
                { id: "eid430", tween: [ "subproperty", "${_Ellipse3Copy12}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 1061, duration: 395 },
                { id: "eid431", tween: [ "subproperty", "${_Ellipse3Copy12}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 1457, duration: 186 },
                { id: "eid433", tween: [ "subproperty", "${_Ellipse3Copy12}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2661, duration: 342 },
                { id: "eid434", tween: [ "subproperty", "${_Ellipse3Copy12}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 3003, duration: 461 },
                { id: "eid435", tween: [ "subproperty", "${_Ellipse3Copy12}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 4355, duration: 395 },
                { id: "eid436", tween: [ "subproperty", "${_Ellipse3Copy12}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4750, duration: 186 },
                { id: "eid560", tween: [ "subproperty", "${_Ellipse3Copy16}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 864, duration: 395 },
                { id: "eid561", tween: [ "subproperty", "${_Ellipse3Copy16}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 1259, duration: 186 },
                { id: "eid563", tween: [ "subproperty", "${_Ellipse3Copy16}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2463, duration: 342 },
                { id: "eid564", tween: [ "subproperty", "${_Ellipse3Copy16}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2805, duration: 461 },
                { id: "eid565", tween: [ "subproperty", "${_Ellipse3Copy16}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 4158, duration: 395 },
                { id: "eid566", tween: [ "subproperty", "${_Ellipse3Copy16}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4553, duration: 186 },
                { id: "eid627", tween: [ "style", "${_Ellipse3Copy17}", "top", '18px', { fromValue: '18px'}], position: 480, duration: 0 },
                { id: "eid546", tween: [ "subproperty", "${_Ellipse3Copy8}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 283, duration: 395 },
                { id: "eid547", tween: [ "subproperty", "${_Ellipse3Copy8}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 678, duration: 186 },
                { id: "eid549", tween: [ "subproperty", "${_Ellipse3Copy8}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 1882, duration: 342 },
                { id: "eid550", tween: [ "subproperty", "${_Ellipse3Copy8}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2224, duration: 461 },
                { id: "eid551", tween: [ "subproperty", "${_Ellipse3Copy8}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3576, duration: 395 },
                { id: "eid552", tween: [ "subproperty", "${_Ellipse3Copy8}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 3971, duration: 186 },
                { id: "eid567", tween: [ "subproperty", "${_Ellipse3Copy15}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 95, duration: 395 },
                { id: "eid568", tween: [ "subproperty", "${_Ellipse3Copy15}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 490, duration: 186 },
                { id: "eid570", tween: [ "subproperty", "${_Ellipse3Copy15}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 1694, duration: 342 },
                { id: "eid571", tween: [ "subproperty", "${_Ellipse3Copy15}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2036, duration: 461 },
                { id: "eid572", tween: [ "subproperty", "${_Ellipse3Copy15}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3388, duration: 395 },
                { id: "eid573", tween: [ "subproperty", "${_Ellipse3Copy15}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 3783, duration: 186 },
                { id: "eid574", tween: [ "subproperty", "${_Ellipse3Copy17}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 769, duration: 395 },
                { id: "eid575", tween: [ "subproperty", "${_Ellipse3Copy17}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 1164, duration: 186 },
                { id: "eid577", tween: [ "subproperty", "${_Ellipse3Copy17}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2369, duration: 342 },
                { id: "eid578", tween: [ "subproperty", "${_Ellipse3Copy17}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2711, duration: 461 },
                { id: "eid579", tween: [ "subproperty", "${_Ellipse3Copy17}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 4063, duration: 395 },
                { id: "eid580", tween: [ "subproperty", "${_Ellipse3Copy17}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4458, duration: 186 },
                { id: "eid134", tween: [ "subproperty", "${_Ellipse3Copy14}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 1211, duration: 395 },
                { id: "eid410", tween: [ "subproperty", "${_Ellipse3Copy14}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 1606, duration: 186 },
                { id: "eid412", tween: [ "subproperty", "${_Ellipse3Copy14}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2810, duration: 342 },
                { id: "eid135", tween: [ "subproperty", "${_Ellipse3Copy14}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 3152, duration: 461 },
                { id: "eid413", tween: [ "subproperty", "${_Ellipse3Copy14}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 4504, duration: 395 },
                { id: "eid414", tween: [ "subproperty", "${_Ellipse3Copy14}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4899, duration: 186 },
                { id: "eid437", tween: [ "subproperty", "${_Ellipse3Copy2}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 188, duration: 395 },
                { id: "eid438", tween: [ "subproperty", "${_Ellipse3Copy2}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 583, duration: 186 },
                { id: "eid440", tween: [ "subproperty", "${_Ellipse3Copy2}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 1787, duration: 342 },
                { id: "eid441", tween: [ "subproperty", "${_Ellipse3Copy2}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2129, duration: 461 },
                { id: "eid442", tween: [ "subproperty", "${_Ellipse3Copy2}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3482, duration: 395 },
                { id: "eid443", tween: [ "subproperty", "${_Ellipse3Copy2}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 3877, duration: 186 },
                { id: "eid620", tween: [ "style", "${_Ellipse3Copy7}", "opacity", '0.7', { fromValue: '0.7'}], position: 0, duration: 0 },
                { id: "eid622", tween: [ "style", "${_Ellipse3Copy7}", "opacity", '1', { fromValue: '0.700000'}], position: 446, duration: 34 },
                { id: "eid599", tween: [ "style", "${_Ellipse3Copy15}", "left", '276px', { fromValue: '276px'}], position: 1485, duration: 0 },
                { id: "eid126", tween: [ "style", "${_Ellipse3Copy14}", "top", '6px', { fromValue: '6px'}], position: 3242, duration: 0 },
                { id: "eid553", tween: [ "subproperty", "${_Ellipse3Copy9}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 401, duration: 395 },
                { id: "eid554", tween: [ "subproperty", "${_Ellipse3Copy9}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 797, duration: 186 },
                { id: "eid556", tween: [ "subproperty", "${_Ellipse3Copy9}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 2001, duration: 342 },
                { id: "eid557", tween: [ "subproperty", "${_Ellipse3Copy9}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 2343, duration: 461 },
                { id: "eid558", tween: [ "subproperty", "${_Ellipse3Copy9}", "boxShadow.blur", '5px', { fromValue: '0px'}], position: 3695, duration: 395 },
                { id: "eid559", tween: [ "subproperty", "${_Ellipse3Copy9}", "boxShadow.blur", '0px', { fromValue: '5px'}], position: 4090, duration: 186 }            ]
        }
    }
},
"luz-efeito-rua": {
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
                    id: 'Group',
                    type: 'group',
                    rect: ['0', '0', '800', '800', 'auto', 'auto'],
                    c: [
                    {
                        boxShadow: ['', 0, 0, 8, 0.5, 'rgba(252,252,202,1.00)'],
                        rect: ['629px', '426px', '11px', '4px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz-rua',
                        stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                        cursor: ['ns-resize'],
                        fill: ['rgba(252,252,202,1.00)']
                    },
                    {
                        id: 'luz-rua-01',
                        type: 'image',
                        rect: ['0px', '0px', '800px', '800px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/luz-rua-01.svg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "opacity", '1']
            ],
            "${_luz-rua-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '800px'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_luz-rua}": [
                ["color", "background-color", 'rgba(252,252,202,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(252,252,202,1.00)'],
                ["style", "left", '629px'],
                ["style", "width", '11px'],
                ["style", "top", '426px'],
                ["subproperty", "boxShadow.blur", '8px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.spread", '0.5px'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${symbolSelector}": [
                ["style", "height", '800px'],
                ["style", "width", '800px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4375,
            autoPlay: true,
            timeline: [
                { id: "eid631", tween: [ "style", "${_Group}", "opacity", '0.38211382113821', { fromValue: '1'}], position: 500, duration: 17 },
                { id: "eid633", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0.38211382113821'}], position: 517, duration: 17 },
                { id: "eid639", tween: [ "style", "${_Group}", "opacity", '0.4390243902439', { fromValue: '1'}], position: 1000, duration: 17 },
                { id: "eid640", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0.4390243902439'}], position: 1017, duration: 17 },
                { id: "eid635", tween: [ "style", "${_Group}", "opacity", '0.47154471544715', { fromValue: '1'}], position: 3000, duration: 17 },
                { id: "eid636", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0.47154471544715'}], position: 3017, duration: 17 }            ]
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
})(jQuery, AdobeEdge, "EDGE-64560012");
