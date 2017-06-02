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
                id: 'aaron-fora-01',
                type: 'image',
                rect: ['-121px', '0px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/aaron-fora-01.svg','0px','0px']
            },
            {
                id: 'aaron-dentro-01',
                type: 'image',
                rect: ['-18px', '0px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/aaron-dentro-01.svg','0px','0px']
            },
            {
                id: 'aaron-duplo-fora-01',
                type: 'image',
                rect: ['257px', '0px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/aaron-duplo-fora-01.svg','0px','0px']
            },
            {
                id: 'aaron-duplo-dentro-01',
                type: 'image',
                rect: ['257px', '0px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/aaron-duplo-dentro-01.svg','0px','0px']
            },
            {
                id: 'aaron-chao-012',
                type: 'image',
                rect: ['-103px', '1px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/aaron-chao-01.svg','0px','0px']
            },
            {
                id: 'nuvem2-01',
                type: 'image',
                rect: ['0px', '-21px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/nuvem2-01.svg','0px','0px']
            },
            {
                id: 'nuvem1-01',
                type: 'image',
                rect: ['17px', '19px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,0)",'SVG/nuvem1-01.svg','0px','0px']
            },
            {
                id: 'nuvem1-01Copy',
                type: 'image',
                rect: ['17px', '0px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0.7,
                fill: ["rgba(0,0,0,0)",'SVG/nuvem1-01.svg','0px','0px']
            },
            {
                id: 'nuvem1-01Copy2',
                type: 'image',
                rect: ['6px', '31px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/nuvem1-01.svg','0px','0px']
            },
            {
                id: 'nuvem1-01Copy3',
                type: 'image',
                rect: ['11px', '-34px','600px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/nuvem1-01.svg','0px','0px']
            },
            {
                id: 'degrades-lado-01',
                type: 'image',
                rect: ['0px', '0px','400px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",'SVG/degrades-lado-01.svg','0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['55px', '20px','269px','160px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_degrades-lado-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '200px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_aaron-chao-012}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '200px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-103px'],
                ["style", "width", '600px']
            ],
            "${_nuvem1-01}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.8'],
                ["style", "left", '-81px'],
                ["style", "width", '600px'],
                ["style", "top", '13px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '200px'],
                ["style", "cursor", 'pointer']
            ],
            "${_aaron-duplo-fora-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "left", '62px'],
                ["style", "width", '600px']
            ],
            "${_nuvem1-01Copy2}": [
                ["style", "top", '35px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '200px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-92px'],
                ["style", "width", '600px']
            ],
            "${_aaron-fora-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '200px'],
                ["style", "opacity", '1'],
                ["style", "left", '-121px'],
                ["style", "width", '600px']
            ],
            "${_aaron-duplo-dentro-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '200px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '172px'],
                ["style", "width", '600px']
            ],
            "${_nuvem2-01}": [
                ["style", "top", '-18px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '200px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-97px'],
                ["style", "width", '600px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(25,25,25,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '200px'],
                ["style", "width", '400px']
            ],
            "${_aaron-dentro-01}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '200px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-121px'],
                ["style", "width", '600px']
            ],
            "${_Rectangle}": [
                ["style", "top", '20px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '160px'],
                ["style", "left", '55px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '269px']
            ],
            "${_nuvem1-01Copy3}": [
                ["style", "top", '-31px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '200px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-89px'],
                ["style", "width", '600px']
            ],
            "${_nuvem1-01Copy}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.7'],
                ["style", "left", '-86px'],
                ["style", "width", '600px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '200px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            labels: {
                "inicio": 0,
                "i2": 394
            },
            timeline: [
                { id: "eid101", tween: [ "style", "${_nuvem1-01}", "top", '12px', { fromValue: '13px'}], position: 3309, duration: 58, easing: "easeInOutQuad" },
                { id: "eid111", tween: [ "style", "${_nuvem1-01}", "top", '23px', { fromValue: '12px'}], position: 3365, duration: 269, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_nuvem2-01}", "top", '-13px', { fromValue: '-18px'}], position: 2990, duration: 83, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_nuvem2-01}", "top", '-15px', { fromValue: '-13px'}], position: 3070, duration: 91, easing: "easeInOutQuad" },
                { id: "eid108", tween: [ "style", "${_nuvem2-01}", "top", '-14px', { fromValue: '-15px'}], position: 3161, duration: 222, easing: "easeInOutQuad" },
                { id: "eid109", tween: [ "style", "${_nuvem2-01}", "top", '-22px', { fromValue: '-14px'}], position: 3382, duration: 254, easing: "easeInOutQuad" },
                { id: "eid63", tween: [ "transform", "${_nuvem1-01}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 3045, duration: 171, easing: "easeInOutQuad" },
                { id: "eid64", tween: [ "transform", "${_nuvem1-01}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 3216, duration: 149, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "transform", "${_nuvem1-01}", "rotateZ", '1deg', { fromValue: '-6deg'}], position: 3365, duration: 171, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "transform", "${_nuvem1-01}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 3533, duration: 249, easing: "easeInOutQuad" },
                { id: "eid51", tween: [ "transform", "${_nuvem2-01}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 2728, duration: 171, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "transform", "${_nuvem2-01}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 2896, duration: 149, easing: "easeInOutQuad" },
                { id: "eid53", tween: [ "transform", "${_nuvem2-01}", "rotateZ", '1deg', { fromValue: '-6deg'}], position: 3045, duration: 171, easing: "easeInOutQuad" },
                { id: "eid54", tween: [ "transform", "${_nuvem2-01}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 3214, duration: 249, easing: "easeInOutQuad" },
                { id: "eid62", tween: [ "transform", "${_nuvem1-01}", "scaleY", '1', { fromValue: '0'}], position: 3045, duration: 534, easing: "easeInOutQuad" },
                { id: "eid130", tween: [ "transform", "${_nuvem1-01}", "scaleY", '0', { fromValue: '1'}], position: 3783, duration: 164, easing: "easeInOutQuad" },
                { id: "eid44", tween: [ "style", "${_aaron-dentro-01}", "left", '-93px', { fromValue: '-121px'}], position: 2582, duration: 335, easing: "easeInOutCubic" },
                { id: "eid91", tween: [ "style", "${_nuvem1-01Copy2}", "left", '6px', { fromValue: '-92px'}], position: 3881, duration: 65, easing: "easeInOutQuad" },
                { id: "eid7", tween: [ "style", "${_aaron-duplo-fora-01}", "left", '-110px', { fromValue: '62px'}], position: 0, duration: 1763, easing: "easeInOutCubic" },
                { id: "eid87", tween: [ "style", "${_aaron-chao-012}", "opacity", '1', { fromValue: '0.000000'}], position: 3365, duration: 65, easing: "easeInOutCubic" },
                { id: "eid61", tween: [ "transform", "${_nuvem1-01}", "scaleX", '1', { fromValue: '0'}], position: 3045, duration: 534, easing: "easeInOutQuad" },
                { id: "eid129", tween: [ "transform", "${_nuvem1-01}", "scaleX", '0', { fromValue: '1'}], position: 3783, duration: 164, easing: "easeInOutQuad" },
                { id: "eid92", tween: [ "style", "${_nuvem1-01Copy2}", "top", '34px', { fromValue: '35px'}], position: 3881, duration: 65, easing: "easeInOutQuad" },
                { id: "eid96", tween: [ "style", "${_nuvem1-01Copy3}", "top", '-27px', { fromValue: '-31px'}], position: 3259, duration: 123, easing: "easeInOutQuad" },
                { id: "eid74", tween: [ "transform", "${_nuvem1-01Copy2}", "scaleY", '0.8', { fromValue: '0'}], position: 2987, duration: 534, easing: "easeInOutQuad" },
                { id: "eid120", tween: [ "transform", "${_nuvem1-01Copy2}", "scaleY", '0', { fromValue: '0.8'}], position: 3533, duration: 60, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_aaron-duplo-fora-01}", "opacity", '0', { fromValue: '1'}], position: 1763, duration: 78, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "transform", "${_nuvem1-01Copy}", "scaleY", '1', { fromValue: '0'}], position: 2896, duration: 534, easing: "easeInOutQuad" },
                { id: "eid116", tween: [ "transform", "${_nuvem1-01Copy}", "scaleY", '0', { fromValue: '1'}], position: 3881, duration: 149, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_aaron-dentro-01}", "opacity", '1', { fromValue: '0.000000'}], position: 1763, duration: 78, easing: "easeInOutQuad" },
                { id: "eid136", tween: [ "style", "${_aaron-dentro-01}", "opacity", '0', { fromValue: '1'}], position: 3365, duration: 65, easing: "easeInOutQuad" },
                { id: "eid80", tween: [ "transform", "${_nuvem1-01Copy3}", "scaleY", '0.6', { fromValue: '0'}], position: 2987, duration: 534, easing: "easeInOutQuad" },
                { id: "eid124", tween: [ "transform", "${_nuvem1-01Copy3}", "scaleY", '0', { fromValue: '0.6'}], position: 3725, duration: 224, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "transform", "${_nuvem1-01Copy}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 2896, duration: 171, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "transform", "${_nuvem1-01Copy}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 3068, duration: 149, easing: "easeInOutQuad" },
                { id: "eid71", tween: [ "transform", "${_nuvem1-01Copy}", "rotateZ", '1deg', { fromValue: '-6deg'}], position: 3214, duration: 171, easing: "easeInOutQuad" },
                { id: "eid72", tween: [ "transform", "${_nuvem1-01Copy}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 3385, duration: 249, easing: "easeInOutQuad" },
                { id: "eid35", tween: [ "style", "${_aaron-duplo-dentro-01}", "left", '-110px', { fromValue: '172px'}], position: 0, duration: 1763, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "style", "${_aaron-duplo-dentro-01}", "left", '-144px', { fromValue: '-110px'}], position: 2582, duration: 335, easing: "easeInOutCubic" },
                { id: "eid138", tween: [ "style", "${_aaron-duplo-dentro-01}", "left", '-382px', { fromValue: '-144px'}], position: 4171, duration: 1829, easing: "easeInOutCubic" },
                { id: "eid73", tween: [ "transform", "${_nuvem1-01Copy2}", "scaleX", '1', { fromValue: '0'}], position: 2987, duration: 534, easing: "easeInOutQuad" },
                { id: "eid119", tween: [ "transform", "${_nuvem1-01Copy2}", "scaleX", '0', { fromValue: '1'}], position: 3533, duration: 60, easing: "easeInOutQuad" },
                { id: "eid75", tween: [ "transform", "${_nuvem1-01Copy2}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 2987, duration: 171, easing: "easeInOutQuad" },
                { id: "eid76", tween: [ "transform", "${_nuvem1-01Copy2}", "rotateZ", '-6deg', { fromValue: '6deg'}], position: 3158, duration: 149, easing: "easeInOutQuad" },
                { id: "eid77", tween: [ "transform", "${_nuvem1-01Copy2}", "rotateZ", '1deg', { fromValue: '-6deg'}], position: 3305, duration: 171, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "transform", "${_nuvem1-01Copy2}", "rotateZ", '-8deg', { fromValue: '1deg'}], position: 3475, duration: 161, easing: "easeInQuad" },
                { id: "eid85", tween: [ "transform", "${_nuvem1-01Copy2}", "rotateZ", '5deg', { fromValue: '-8deg'}], position: 3637, duration: 88, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "transform", "${_nuvem2-01}", "scaleX", '1', { fromValue: '0'}], position: 2728, duration: 534, easing: "easeInOutQuad" },
                { id: "eid133", tween: [ "transform", "${_nuvem2-01}", "scaleX", '0', { fromValue: '1'}], position: 3637, duration: 149, easing: "easeInOutQuad" },
                { id: "eid79", tween: [ "transform", "${_nuvem1-01Copy3}", "scaleX", '0.6', { fromValue: '0'}], position: 2987, duration: 534, easing: "easeInOutQuad" },
                { id: "eid123", tween: [ "transform", "${_nuvem1-01Copy3}", "scaleX", '0', { fromValue: '0.6'}], position: 3725, duration: 224, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "style", "${_aaron-fora-01}", "opacity", '0', { fromValue: '1'}], position: 1763, duration: 78, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "style", "${_nuvem1-01Copy}", "left", '-100px', { fromValue: '-86px'}], position: 3521, duration: 116, easing: "easeInOutQuad" },
                { id: "eid112", tween: [ "style", "${_nuvem1-01Copy}", "left", '-76px', { fromValue: '-100px'}], position: 3637, duration: 246, easing: "easeInOutQuad" },
                { id: "eid49", tween: [ "transform", "${_nuvem2-01}", "scaleY", '1', { fromValue: '0'}], position: 2728, duration: 534, easing: "easeInOutQuad" },
                { id: "eid134", tween: [ "transform", "${_nuvem2-01}", "scaleY", '0', { fromValue: '1'}], position: 3637, duration: 149, easing: "easeInOutQuad" },
                { id: "eid81", tween: [ "transform", "${_nuvem1-01Copy3}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 2987, duration: 171, easing: "easeInOutQuad" },
                { id: "eid82", tween: [ "transform", "${_nuvem1-01Copy3}", "rotateZ", '3deg', { fromValue: '6deg'}], position: 3158, duration: 149, easing: "easeInOutQuad" },
                { id: "eid83", tween: [ "transform", "${_nuvem1-01Copy3}", "rotateZ", '-1deg', { fromValue: '3deg'}], position: 3305, duration: 171, easing: "easeInOutQuad" },
                { id: "eid84", tween: [ "transform", "${_nuvem1-01Copy3}", "rotateZ", '10deg', { fromValue: '-1deg'}], position: 3475, duration: 249, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "style", "${_aaron-duplo-dentro-01}", "opacity", '1', { fromValue: '0.000000'}], position: 1763, duration: 78, easing: "easeInOutCubic" },
                { id: "eid105", tween: [ "style", "${_nuvem2-01}", "left", '-92px', { fromValue: '-97px'}], position: 3070, duration: 91, easing: "easeInOutQuad" },
                { id: "eid107", tween: [ "style", "${_nuvem2-01}", "left", '-86px', { fromValue: '-92px'}], position: 3161, duration: 222, easing: "easeInOutQuad" },
                { id: "eid110", tween: [ "style", "${_nuvem1-01}", "left", '-86px', { fromValue: '-81px'}], position: 3309, duration: 327, easing: "easeInOutQuad" },
                { id: "eid95", tween: [ "style", "${_nuvem1-01Copy3}", "left", '-86px', { fromValue: '-89px'}], position: 3259, duration: 123, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "transform", "${_nuvem1-01Copy}", "scaleX", '1', { fromValue: '0'}], position: 2896, duration: 534, easing: "easeInOutQuad" },
                { id: "eid115", tween: [ "transform", "${_nuvem1-01Copy}", "scaleX", '0', { fromValue: '1'}], position: 3881, duration: 149, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-78272883");
