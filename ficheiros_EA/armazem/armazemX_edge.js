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
                id: 'boxes-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"boxes-01.svg",'0px','0px']
            },
            {
                id: 'abe-costas-01',
                type: 'image',
                rect: ['-105px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abe-costas-01.svg",'0px','0px']
            },
            {
                id: 'aaron-costas-01',
                type: 'image',
                rect: ['-185px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"aaron-costas-01.svg",'0px','0px']
            },
            {
                id: 'luz-azul-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"luz-azul-01.svg",'0px','0px']
            },
            {
                id: 'luz-pagada-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"luz-pagada-01.svg",'0px','0px']
            },
            {
                id: 'area-luz-012',
                type: 'image',
                rect: ['-1px', '85px','800px','308px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"area-luz-01.svg",'0px','0px']
            },
            {
                id: 'LUZ-azul',
                type: 'rect',
                rect: ['350px', '174px','8px','3px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(174,219,255,1.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"],
                boxShadow: ["", 0, 0, 3, 1, "rgba(138,214,255,1.00)"]
            },
            {
                id: 'abre-porta-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abre-porta-01.svg",'0px','0px']
            },
            {
                id: 'fundo-armz-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fundo-armz-01.svg",'0px','0px']
            },
            {
                id: 'degrade-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"degrade-01.svg",'0px','0px']
            },
            {
                id: 'sombra-01',
                type: 'image',
                rect: ['370px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"sombra-01.svg",'0px','0px']
            },
            {
                id: 'sombra-01Copy',
                type: 'image',
                rect: ['358px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"sombra-01.svg",'0px','0px']
            },
            {
                id: 'abe-01',
                type: 'image',
                rect: ['437px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abe-01.svg",'0px','0px']
            },
            {
                id: 'aaron-01',
                type: 'image',
                rect: ['184px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"aaron-01.svg",'0px','0px']
            },
            {
                id: 'abe-costas-01Copy',
                type: 'image',
                rect: ['-8px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"abe-costas-01.svg",'0px','0px']
            },
            {
                id: 'aaron-costas-01Copy',
                type: 'image',
                rect: ['-185px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"aaron-costas-01.svg",'0px','0px']
            },
            {
                id: 'luzes-tremem',
                type: 'rect',
                rect: ['-13', '0','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'frente-bonecos-01',
                type: 'image',
                rect: ['0px', '0px','800px','472px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"frente-bonecos-01.svg",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'luzes-tremem',
                symbolName: 'luzes-tremem',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_LUZ-azul}": [
                ["color", "background-color", 'rgba(174,219,255,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '350px'],
                ["style", "width", '8px'],
                ["style", "top", '174px'],
                ["subproperty", "boxShadow.color", 'rgba(138,214,255,1.00)'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_area-luz-012}": [
                ["style", "top", '85px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-1px'],
                ["style", "height", '308px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_luz-pagada-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "height", '472px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_sombra-01}": [
                ["style", "top", '0px'],
                ["style", "height", '472px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '370px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_abe-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '437px'],
                ["style", "height", '472px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_abe-costas-01Copy}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-8px'],
                ["style", "height", '472px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_aaron-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '184px'],
                ["style", "height", '472px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_degrade-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '472px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_fundo-armz-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '472px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_luz-azul-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '472px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_abe-costas-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-48px'],
                ["style", "height", '472px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_sombra-01Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '472px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '377px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_abre-porta-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '472px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_area-luz-01}": [
                ["style", "top", '-1202px'],
                ["style", "left", '-3506px']
            ],
            "${_luzes-tremem}": [
                ["style", "cursor", 'pointer']
            ],
            "${_aaron-costas-01}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-245px'],
                ["style", "height", '472px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(25,25,25,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '800px']
            ],
            "${_aaron-costas-01Copy}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '-184px'],
                ["style", "height", '472px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_boxes-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '472px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ],
            "${_frente-bonecos-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '472px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '800px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid70", tween: [ "style", "${_LUZ-azul}", "opacity", '1', { fromValue: '0'}], position: 4433, duration: 118 },
                { id: "eid46", tween: [ "style", "${_abe-costas-01}", "opacity", '1', { fromValue: '0.000000'}], position: 4844, duration: 52, easing: "easeInOutQuad" },
                { id: "eid74", tween: [ "style", "${_sombra-01}", "left", '-46px', { fromValue: '370px'}], position: 722, duration: 2663, easing: "easeInOutQuad" },
                { id: "eid100", tween: [ "style", "${_sombra-01}", "left", '-75px', { fromValue: '-46px'}], position: 4390, duration: 161, easing: "easeInQuad" },
                { id: "eid109", tween: [ "style", "${_sombra-01}", "left", '-104px', { fromValue: '-75px'}], position: 4551, duration: 195, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_area-luz-012}", "opacity", '1', { fromValue: '0.000000'}], position: 4433, duration: 118, easing: "easeInOutQuad" },
                { id: "eid72", tween: [ "style", "${_sombra-01Copy}", "left", '-6px', { fromValue: '377px'}], position: 1215, duration: 2516, easing: "easeInOutQuad" },
                { id: "eid102", tween: [ "style", "${_sombra-01Copy}", "left", '-47px', { fromValue: '-6px'}], position: 4531, duration: 313, easing: "easeInOutQuad" },
                { id: "eid58", tween: [ "style", "${_aaron-costas-01}", "top", '1px', { fromValue: '1px'}], position: 4895, duration: 0, easing: "easeInOutQuad" },
                { id: "eid5", tween: [ "style", "${_abe-01}", "left", '50px', { fromValue: '437px'}], position: 1352, duration: 2223, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_sombra-01Copy}", "opacity", '0', { fromValue: '1'}], position: 4844, duration: 137, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "style", "${_aaron-costas-01}", "opacity", '1', { fromValue: '0'}], position: 4895, duration: 53, easing: "easeInOutQuad" },
                { id: "eid57", tween: [ "style", "${_aaron-costas-01}", "left", '-245px', { fromValue: '-245px'}], position: 4895, duration: 0, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_aaron-costas-01Copy}", "top", '1px', { fromValue: '1px'}], position: 1132, duration: 0, easing: "easeInOutQuad" },
                { id: "eid38", tween: [ "style", "${_aaron-costas-01Copy}", "top", '1px', { fromValue: '1px'}], position: 4746, duration: 0, easing: "easeInOutQuad" },
                { id: "eid17", tween: [ "style", "${_abe-01}", "opacity", '0', { fromValue: '1'}], position: 3694, duration: 18, easing: "easeInOutQuad" },
                { id: "eid108", tween: [ "style", "${_sombra-01}", "opacity", '0', { fromValue: '1'}], position: 4981, duration: 114, easing: "easeInOutQuad" },
                { id: "eid8", tween: [ "style", "${_aaron-costas-01Copy}", "left", '-184px', { fromValue: '-184px'}], position: 1132, duration: 0, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_aaron-costas-01Copy}", "left", '-245px', { fromValue: '-184px'}], position: 4390, duration: 356, easing: "easeInOutQuad" },
                { id: "eid48", tween: [ "style", "${_abe-costas-01}", "left", '-48px', { fromValue: '-48px'}], position: 4844, duration: 0, easing: "easeInOutQuad" },
                { id: "eid42", tween: [ "style", "${_luz-pagada-01}", "opacity", '0', { fromValue: '1'}], position: 4433, duration: 118, easing: "easeInOutQuad" },
                { id: "eid9", tween: [ "style", "${_abe-costas-01Copy}", "top", '0px', { fromValue: '0px'}], position: 1132, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_aaron-01}", "left", '-234px', { fromValue: '184px'}], position: 824, duration: 2405, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "style", "${_abre-porta-01}", "top", '-97px', { fromValue: '0px'}], position: 3269, duration: 1121, easing: "easeInOutQuad" },
                { id: "eid62", tween: [ "style", "${_abre-porta-01}", "top", '0px', { fromValue: '-97px'}], position: 5074, duration: 926, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "style", "${_aaron-01}", "opacity", '0', { fromValue: '1'}], position: 3694, duration: 18, easing: "easeInOutQuad" },
                { id: "eid13", tween: [ "style", "${_abe-costas-01Copy}", "opacity", '1', { fromValue: '0'}], position: 3694, duration: 18, easing: "easeInOutQuad" },
                { id: "eid44", tween: [ "style", "${_abe-costas-01Copy}", "opacity", '0', { fromValue: '1'}], position: 4844, duration: 105, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_aaron-costas-01Copy}", "opacity", '1', { fromValue: '0'}], position: 3694, duration: 18, easing: "easeInOutQuad" },
                { id: "eid50", tween: [ "style", "${_aaron-costas-01Copy}", "opacity", '0', { fromValue: '1'}], position: 4949, duration: 93, easing: "easeInOutQuad" },
                { id: "eid10", tween: [ "style", "${_abe-costas-01Copy}", "left", '-8px', { fromValue: '-8px'}], position: 1132, duration: 0, easing: "easeInOutQuad" },
                { id: "eid40", tween: [ "style", "${_abe-costas-01Copy}", "left", '-48px', { fromValue: '-8px'}], position: 4531, duration: 313, easing: "easeInOutQuad" }            ]
        }
    }
},
"luzes-tremem": {
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
                    id: 'Group2',
                    type: 'group',
                    rect: ['0px', '0px', '813', '472', 'auto', 'auto'],
                    c: [
                    {
                        fill: ['rgba(252,252,202,1.00)'],
                        rect: ['139px', '138px', '128px', '3px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz1',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        cursor: ['ns-resize'],
                        boxShadow: ['', 0, 0, 6, 1, 'rgba(252,252,202,1.00)']
                    },
                    {
                        fill: ['rgba(252,252,202,1.00)'],
                        rect: ['549px', '138px', '128px', '3px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz1Copy3',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        cursor: ['ns-resize'],
                        boxShadow: ['', 0, 0, 6, 1, 'rgba(252,252,202,1.00)']
                    },
                    {
                        fill: ['rgba(252,252,202,1.00)', [0, [['rgba(252,252,202,1.00)', 0], ['rgba(25,25,25,1.00)', 100]]]],
                        rect: ['685px', '138px', '128px', '3px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz1Copy4',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        cursor: ['ns-resize'],
                        boxShadow: ['', 0, 0, 6, 1, 'rgba(252,252,202,1.00)']
                    },
                    {
                        fill: ['rgba(252,252,202,1.00)'],
                        rect: ['0px', '138px', '128px', '3px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz1Copy5',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        cursor: ['ns-resize'],
                        boxShadow: ['', 0, 0, 6, 1, 'rgba(252,252,202,1.00)']
                    },
                    {
                        fill: ['rgba(252,252,202,1.00)'],
                        rect: ['275px', '138px', '128px', '3px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz1Copy',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        cursor: ['ns-resize'],
                        boxShadow: ['', 0, 0, 6, 1, 'rgba(252,252,202,1.00)']
                    },
                    {
                        fill: ['rgba(252,252,202,1.00)'],
                        rect: ['413px', '138px', '128px', '3px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        type: 'rect',
                        id: 'luz1Copy2',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        cursor: ['ns-resize'],
                        boxShadow: ['', 0, 0, 6, 1, 'rgba(252,252,202,1.00)']
                    },
                    {
                        id: 'luzes-efeito-01',
                        type: 'image',
                        rect: ['13px', '0px', '800px', '472px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/luzes-efeito-01.svg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_luz1Copy}": [
                ["color", "background-color", 'rgba(252,252,202,1)'],
                ["subproperty", "boxShadow.color", 'rgb(252,252,202)'],
                ["style", "left", '275px'],
                ["style", "width", '128px'],
                ["style", "top", '138px'],
                ["subproperty", "boxShadow.blur", '6px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_luz1Copy5}": [
                ["color", "background-color", 'rgba(252,252,202,1)'],
                ["subproperty", "boxShadow.blur", '6px'],
                ["style", "left", '0px'],
                ["style", "width", '128px'],
                ["style", "top", '138px'],
                ["subproperty", "boxShadow.color", 'rgb(252,252,202)'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_luz1Copy3}": [
                ["color", "background-color", 'rgba(252,252,202,1)'],
                ["subproperty", "boxShadow.blur", '6px'],
                ["style", "left", '549px'],
                ["style", "width", '128px'],
                ["style", "top", '138px'],
                ["subproperty", "boxShadow.color", 'rgb(252,252,202)'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "cursor", 'ns-resize']
            ],
            "${_Group2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_luz1Copy4}": [
                ["color", "background-color", 'rgba(252,252,202,1)'],
                ["subproperty", "boxShadow.color", 'rgb(252,252,202)'],
                ["gradient", "background-image", [0,[['rgba(252,252,202,1.00)',0],['rgba(25,25,25,1.00)',100]]]],
                ["style", "left", '685px'],
                ["style", "width", '128px'],
                ["style", "top", '138px'],
                ["style", "cursor", 'ns-resize'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '6px']
            ],
            "${_luzes-efeito-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '472px'],
                ["style", "left", '13px'],
                ["style", "width", '800px']
            ],
            "${_luz1}": [
                ["color", "background-color", 'rgba(252,252,202,1.00)'],
                ["subproperty", "boxShadow.blur", '6px'],
                ["style", "cursor", 'ns-resize'],
                ["style", "width", '128px'],
                ["style", "top", '138px'],
                ["style", "left", '139px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(252,252,202,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '472px'],
                ["style", "width", '813px']
            ],
            "${_luz1Copy2}": [
                ["color", "background-color", 'rgba(252,252,202,1)'],
                ["subproperty", "boxShadow.color", 'rgb(252,252,202)'],
                ["style", "left", '413px'],
                ["style", "width", '128px'],
                ["style", "top", '138px'],
                ["style", "cursor", 'ns-resize'],
                ["subproperty", "boxShadow.spread", '1px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: true,
            timeline: [
                { id: "eid84", tween: [ "style", "${_Group2}", "opacity", '0.79674796747967', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid85", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0.79674796747967'}], position: 250, duration: 113 },
                { id: "eid87", tween: [ "style", "${_Group2}", "opacity", '0.79674767479675', { fromValue: '1'}], position: 1000, duration: 124 },
                { id: "eid88", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0.79674767479675'}], position: 1124, duration: 126 },
                { id: "eid90", tween: [ "style", "${_Group2}", "opacity", '0.78048748780488', { fromValue: '1'}], position: 1712, duration: 110 },
                { id: "eid91", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0.78048748780488'}], position: 1822, duration: 178 },
                { id: "eid96", tween: [ "style", "${_Group2}", "opacity", '0.85365853658537', { fromValue: '1'}], position: 2500, duration: 124 },
                { id: "eid97", tween: [ "style", "${_Group2}", "opacity", '1', { fromValue: '0.85365853658537'}], position: 2624, duration: 126 }            ]
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
})(jQuery, AdobeEdge, "EDGE-175129181");
