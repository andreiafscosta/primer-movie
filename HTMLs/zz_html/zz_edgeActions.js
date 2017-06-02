/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 353, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 765, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ABEE}", "mouseover", function(sym, e) {
         //sym.play("abe");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ABEE}", "mouseout", function(sym, e) {
         //sym.play("abe2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 145, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 306, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AARON}", "mouseover", function(sym, e) {
         //sym.play("aaron");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AARON}", "mouseout", function(sym, e) {
         //sym.play("aaron2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //yepnope({load:"http://cdn.edgecommons.org/an/1.4.0/js/min/EdgeCommons.js",
         //callback:function(){
         //EC.centerStage(sym);
         //EC.Parallax.setup(sym);}});
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage
         
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         
         // Rescale the stage!
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope({
             nope:['edge_includes/hammer.js'] ,
             complete: init
         });
         
         function init (){
         
             var element = sym.element[0];
             var hammer = Hammer(element);
         
              hammer.on("swipeleft", function(event) {
                   sym.play();
             });
         
             hammer.on("swiperight", function(event) {
                   sym.playReverse();
             });
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-38372371");