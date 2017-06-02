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
                id: 'fundo-01',
                type: 'image',
                rect: ['2px', '-77px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fundo-01.svg",'0px','0px']
            },
            {
                id: 'luz-entra-esq-01',
                type: 'image',
                rect: ['0px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz-entra-esq-01.svg",'0px','0px']
            },
            {
                id: 'luz2-entra-esq-01',
                type: 'image',
                rect: ['0px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz2-entra-esq-01.svg",'0px','0px']
            },
            {
                id: 'luz-entra-dir-01',
                type: 'image',
                rect: ['0px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz-entra-dir-01.svg",'0px','0px']
            },
            {
                id: 'luz2-entra-dir-01',
                type: 'image',
                rect: ['4px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz2-entra-dir-01.svg",'0px','0px']
            },
            {
                id: 'janela-esq',
                type: 'rect',
                rect: ['203px', '91px','86px','145px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 0, 0, 12, 2, "rgba(255,255,255,1.00)"]
            },
            {
                id: 'janela-dir',
                type: 'rect',
                rect: ['466px', '91px','86px','145px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 0, 0, 12, 2, "rgba(255,255,255,1.00)"]
            },
            {
                id: 'calhas-01',
                type: 'image',
                rect: ['2px', '-77px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"calhas-01.svg",'0px','0px']
            },
            {
                id: 'fecha-cort2-esq-01',
                type: 'image',
                rect: ['-41px', '-36px','800px','560px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fecha-cort2-esq-01.svg",'0px','0px']
            },
            {
                id: 'fecha-cort2-dir-01',
                type: 'image',
                rect: ['37px', '-36px','800px','560px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fecha-cort2-dir-01.svg",'0px','0px']
            },
            {
                id: 'fecha-cort1-esq-01',
                type: 'image',
                rect: ['-29px', '-36px','800px','560px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fecha-cort1-esq-01.svg",'0px','0px']
            },
            {
                id: 'fecha-cort1-dir-01',
                type: 'image',
                rect: ['30px', '-36px','800px','560px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fecha-cort1-dir-01.svg",'0px','0px']
            },
            {
                id: 'cortinas-01',
                type: 'image',
                rect: ['2px', '-113px','800px','560px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"cortinas-01.svg",'0px','0px']
            },
            {
                id: 'candeeiros-01',
                type: 'image',
                rect: ['2px', '-77px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"candeeiros-01.svg",'0px','0px']
            },
            {
                id: 'ecra2',
                type: 'rect',
                rect: ['661px', '182px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'abe-sombra-01',
                type: 'image',
                rect: ['-285px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abe-sombra-01.svg",'0px','0px']
            },
            {
                id: 'aaron-sombra-01',
                type: 'image',
                rect: ['295px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"aaron-sombra-01.svg",'0px','0px']
            },
            {
                id: 'abe-aberto-01',
                type: 'image',
                rect: ['0px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abe-aberto-01.svg",'0px','0px']
            },
            {
                id: 'aaron-aberto-01',
                type: 'image',
                rect: ['0px', '0px','800px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"aaron-aberto-01.svg",'0px','0px']
            },
            {
                id: 'degrades-lado-013',
                type: 'image',
                rect: ['-6px', '-77px','814px','500px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"degrades-lado-01.svg",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'ecra2',
                symbolName: 'ecra2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_luz2-entra-dir-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '6px'],
                ["style", "height", '500px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_luz-entra-esq-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '2px'],
                ["style", "height", '500px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_candeeiros-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '500px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_abe-aberto-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-17px'],
                ["style", "height", '500px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_luz-entra-dir-01}": [
                ["style", "top", '-47px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '22px'],
                ["style", "height", '456px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_janela-esq}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '12px'],
                ["style", "left", '203px'],
                ["style", "width", '86px'],
                ["style", "top", '91px'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '145px'],
                ["subproperty", "boxShadow.spread", '2px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_fundo-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '500px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_aaron-aberto-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-22px'],
                ["style", "height", '500px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_abe-sombra-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-297px'],
                ["style", "height", '500px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_degrades-lado-013}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '500px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-6px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '814px']
            ],
            "${_fecha-cort2-esq-01}": [
                ["style", "top", '-113px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '560px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-39px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_aaron-sombra-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '297px'],
                ["style", "height", '500px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_calhas-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '500px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_cortinas-01}": [
                ["style", "top", '-113px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '560px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_ecra2}": [
                ["style", "top", '182px'],
                ["style", "opacity", '1'],
                ["style", "left", '661px'],
                ["style", "cursor", 'pointer']
            ],
            "${_fecha-cort2-dir-01}": [
                ["style", "top", '-113px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '560px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '39px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(25,25,25,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '800px']
            ],
            "${_fecha-cort1-esq-01}": [
                ["style", "top", '-113px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '560px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-27px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_janela-dir}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.color", 'rgb(255,255,255)'],
                ["style", "left", '466px'],
                ["style", "width", '86px'],
                ["style", "top", '91px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '145px'],
                ["subproperty", "boxShadow.spread", '2px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '12px']
            ],
            "${_fecha-cort1-dir-01}": [
                ["style", "top", '-113px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '560px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '32px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_luz2-entra-esq-01}": [
                ["style", "top", '-77px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '2px'],
                ["style", "height", '500px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "stop": 5000
            },
            timeline: [
                { id: "eid59", tween: [ "style", "${_luz-entra-esq-01}", "opacity", '0', { fromValue: '1'}], position: 3002, duration: 537 },
                { id: "eid95", tween: [ "style", "${_fecha-cort1-dir-01}", "top", '-113px', { fromValue: '-113px'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_luz2-entra-esq-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_luz-entra-dir-01}", "top", '-47px', { fromValue: '-47px'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_abe-sombra-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_aaron-aberto-01}", "left", '-24px', { fromValue: '-22px'}], position: 0, duration: 2968 },
                { id: "eid61", tween: [ "style", "${_luz2-entra-esq-01}", "opacity", '1', { fromValue: '0.000000'}], position: 3002, duration: 537 },
                { id: "eid57", tween: [ "style", "${_luz-entra-dir-01}", "opacity", '0', { fromValue: '1'}], position: 3151, duration: 537 },
                { id: "eid88", tween: [ "style", "${_luz-entra-esq-01}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_aaron-aberto-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_fecha-cort1-esq-01}", "left", '-29px', { fromValue: '-27px'}], position: 0, duration: 3002 },
                { id: "eid68", tween: [ "style", "${_fecha-cort1-esq-01}", "left", '8px', { fromValue: '-29px'}], position: 3002, duration: 421 },
                { id: "eid89", tween: [ "style", "${_luz-entra-esq-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_fecha-cort2-esq-01}", "top", '-113px', { fromValue: '-113px'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_fecha-cort2-dir-01}", "left", '37px', { fromValue: '39px'}], position: 0, duration: 3245 },
                { id: "eid35", tween: [ "style", "${_fecha-cort2-dir-01}", "left", '4px', { fromValue: '37px'}], position: 3245, duration: 444 },
                { id: "eid28", tween: [ "style", "${_abe-sombra-01}", "opacity", '0', { fromValue: '1'}], position: 2614, duration: 0 },
                { id: "eid78", tween: [ "style", "${_abe-sombra-01}", "opacity", '1', { fromValue: '0'}], position: 4036, duration: 0 },
                { id: "eid2", tween: [ "style", "${_aaron-sombra-01}", "left", '107px', { fromValue: '297px'}], position: 0, duration: 919 },
                { id: "eid11", tween: [ "style", "${_aaron-sombra-01}", "left", '-24px', { fromValue: '107px'}], position: 1922, duration: 1046, easing: "easeInOutQuad" },
                { id: "eid80", tween: [ "style", "${_aaron-sombra-01}", "left", '294px', { fromValue: '-24px'}], position: 4296, duration: 650, easing: "easeInOutQuad" },
                { id: "eid102", tween: [ "style", "${_fecha-cort1-esq-01}", "top", '-113px', { fromValue: '-113px'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_luz2-entra-dir-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_abe-sombra-01}", "left", '-299px', { fromValue: '-297px'}], position: 0, duration: 806 },
                { id: "eid33", tween: [ "style", "${_abe-sombra-01}", "left", '-19px', { fromValue: '-299px'}], position: 806, duration: 769, easing: "easeInOutQuad" },
                { id: "eid82", tween: [ "style", "${_abe-sombra-01}", "left", '-284px', { fromValue: '-19px'}], position: 4327, duration: 673, easing: "easeInQuad" },
                { id: "eid13", tween: [ "style", "${_aaron-aberto-01}", "opacity", '1', { fromValue: '0.000000'}], position: 2968, duration: 0 },
                { id: "eid70", tween: [ "style", "${_aaron-aberto-01}", "opacity", '0', { fromValue: '1'}], position: 4152, duration: 25 },
                { id: "eid99", tween: [ "style", "${_fecha-cort2-dir-01}", "top", '-113px', { fromValue: '-113px'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_luz-entra-dir-01}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_fecha-cort2-esq-01}", "left", '-41px', { fromValue: '-39px'}], position: 0, duration: 3151 },
                { id: "eid31", tween: [ "style", "${_fecha-cort2-esq-01}", "left", '-6px', { fromValue: '-41px'}], position: 3151, duration: 506, easing: "easeInOutQuad" },
                { id: "eid94", tween: [ "style", "${_fecha-cort1-dir-01}", "left", '30px', { fromValue: '32px'}], position: 0, duration: 2968 },
                { id: "eid66", tween: [ "style", "${_fecha-cort1-dir-01}", "left", '0px', { fromValue: '30px'}], position: 2968, duration: 413 },
                { id: "eid103", tween: [ "style", "${_luz2-entra-esq-01}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_abe-aberto-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_luz2-entra-dir-01}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_luz2-entra-dir-01}", "opacity", '1', { fromValue: '0.000000'}], position: 3151, duration: 537 },
                { id: "eid20", tween: [ "style", "${_aaron-sombra-01}", "opacity", '0', { fromValue: '1'}], position: 2968, duration: 0 },
                { id: "eid74", tween: [ "style", "${_aaron-sombra-01}", "opacity", '1', { fromValue: '0'}], position: 4152, duration: 25 },
                { id: "eid100", tween: [ "style", "${_aaron-sombra-01}", "top", '-77px', { fromValue: '-77px'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_abe-aberto-01}", "left", '11px', { fromValue: '-17px'}], position: 0, duration: 1922 },
                { id: "eid112", tween: [ "style", "${_abe-aberto-01}", "left", '-19px', { fromValue: '11px'}], position: 1922, duration: 692 },
                { id: "eid24", tween: [ "style", "${_abe-aberto-01}", "opacity", '1', { fromValue: '0.000000'}], position: 2614, duration: 0 },
                { id: "eid76", tween: [ "style", "${_abe-aberto-01}", "opacity", '0', { fromValue: '1'}], position: 4036, duration: 0 },
                { id: "eid156", tween: [ "style", "${_ecra2}", "opacity", '0', { fromValue: '1'}], position: 1509, duration: 25 }            ]
        }
    }
},
"AA": {
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
                    id: 'grupinho',
                    type: 'group',
                    rect: ['0px', '0px', '76', '72', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['0px', '0px', '51px', '43px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['25px', '29px', '51px', '43px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        id: 'RoundRect',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(196,21,21,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '807deg']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(196,21,21,1.00)'],
                ["style", "left", '54px'],
                ["style", "top", '29px']
            ],
            "${_grupinho}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 109,
            autoPlay: true,
            timeline: [
                { id: "eid118", tween: [ "style", "${_RoundRect}", "left", '137px', { fromValue: '54px'}], position: 0, duration: 109 },
                { id: "eid120", tween: [ "transform", "${_Rectangle}", "rotateZ", '0deg', { fromValue: '807deg'}], position: 0, duration: 109 }            ]
        }
    }
},
"ecra2": {
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
                    type: 'rect',
                    borderRadius: ['8px 8px', '11px 11px', '9px 9px', '9px 9px'],
                    id: 'ecra',
                    opacity: 0.95,
                    cursor: ['ns-resize'],
                    rect: ['-2px', '77px', '21px', '15px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    boxShadow: ['', 0, 0, 7, 1, 'rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ecra}": [
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '7px'],
                ["style", "border-bottom-right-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'ns-resize'],
                ["style", "width", '21px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [9,9], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '15px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "border-top-right-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '15px'],
                ["style", "width", '21px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 789,
            autoPlay: true,
            timeline: [
                { id: "eid92", tween: [ "style", "${_ecra}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_ecra}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 0, duration: 58 },
                { id: "eid126", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 58, duration: 30 },
                { id: "eid128", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 88, duration: 21 },
                { id: "eid129", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 109, duration: 30 },
                { id: "eid130", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 139, duration: 39 },
                { id: "eid131", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 178, duration: 35 },
                { id: "eid132", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 213, duration: 21 },
                { id: "eid133", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 234, duration: 16 },
                { id: "eid134", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 249, duration: 36 },
                { id: "eid135", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 286, duration: 52 },
                { id: "eid136", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '2px', { fromValue: '1px'}], position: 338, duration: 21 },
                { id: "eid137", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '2px'}], position: 358, duration: 16 },
                { id: "eid139", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 374, duration: 58 },
                { id: "eid140", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 432, duration: 30 },
                { id: "eid141", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '2px', { fromValue: '1px'}], position: 462, duration: 21 },
                { id: "eid142", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '2px'}], position: 483, duration: 30 },
                { id: "eid143", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 513, duration: 39 },
                { id: "eid144", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 552, duration: 35 },
                { id: "eid145", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 587, duration: 21 },
                { id: "eid146", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 608, duration: 16 },
                { id: "eid147", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 623, duration: 36 },
                { id: "eid148", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 660, duration: 52 },
                { id: "eid149", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '2px', { fromValue: '1px'}], position: 712, duration: 21 },
                { id: "eid150", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '2px'}], position: 732, duration: 16 },
                { id: "eid152", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '3px', { fromValue: '1px'}], position: 748, duration: 14 },
                { id: "eid153", tween: [ "subproperty", "${_ecra}", "boxShadow.spread", '1px', { fromValue: '3px'}], position: 762, duration: 27 }            ]
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
})(jQuery, AdobeEdge, "EDGE-203436096");
