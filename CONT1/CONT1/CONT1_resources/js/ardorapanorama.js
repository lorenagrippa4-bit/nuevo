//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var embed1='<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oYxE3L-6-a8?si=t_nVxk8d0g5yWs5y&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
var incre=0; timerMove=0;var hideTimer;var scaleFactor=1;$(document).ready(function () {
initZoom();
$("#area_1").on("click touchstart", function (e) {embedPopUp(embed1,"HARDWARE",850,900);});
$("#area_1").keydown(function(e){if (e.which!=9){$("#area_1").click();}});
$("#area_2").on("click touchstart", function (e) {window.open("https://rincondelatecnologia.com/modelo-de-von-neumann/", "_blank", "height=900,width=850,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");});
$("#area_2").keydown(function(e){if (e.which!=9){$("#area_2").click();}});
jQuery.event.special.touchstart = {setup: function( _, ns, handle ) {this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault")});}};
jQuery.event.special.touchmove = {setup: function( _, ns, handle ) {this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault")});}};
do_responsivePC();
});
function initZoom() {$("#zoomer img").css({top:0,left:0});var maskWidth=$("#zoomer").width();var maskHeight=$("#zoomer").height();var imgPos=$("#zoomer img").offset();var imgWidth = $("#zoomer img").width();
var imgHeight=$("#zoomer img").height();var x1=(imgPos.left+maskWidth)-imgWidth;var y1=(imgPos.top+maskHeight)-imgHeight;var x2 = imgPos.left;var y2 = imgPos.top;
var regionPos=$("#zoomer img").offset();var thumbPos=$("#zoomer img").parent().offset();var areaPos={top: (regionPos.top - thumbPos.top) * (-1),left: (regionPos.left-thumbPos.left)*(-1)}
$("#zoomer img").draggable({containment: [x1, y1, x2, y2],drag: function () {$("#zoomer img").css({cursor: "move"});},stop: function(){$("#zoomer img").css({cursor: "default"});}});
$("#zoomer").attr("tabindex","0");$("#zoomer").keydown(function(e){if (e.which!=9){var maskWidth = $("#zoomer").width();var maskHeight = $("#zoomer").height();var imgPos = $("#zoomer img").offset();var imgWidth = $("#zoomer img").width();var imgHeight = $("#zoomer img").height();var x1 = (imgPos.left + maskWidth) - imgWidth;var y1 = (imgPos.top + maskHeight) - imgHeight;var x2 = imgPos.left;var y2 = imgPos.top;
var x=parseInt($("#zoomer img").css("left").replace("px",""));if (e.which==39){if (Math.abs(x-2)+maskWidth<x2){x=x-2;}};if (e.which==37){if (x+2<=0){x=x+2;}};$("#zoomer img").css("left",x.toString()+"px");var y=parseInt($("#zoomer img").css("top").replace("px",""));
if (e.which==40){if (Math.abs(y-2)+maskHeight<imgHeight){y=y-2;}};if (e.which==38){if (y+2<=0){y=y+2;}};$("#zoomer img").css("top",y.toString()+"px");e.preventDefault();
}});
}
function embedPopUp(embedURL,eti,imaW,imaH){popup=window.open("text/html","video","height="+(imaH+40).toString()+",width="+(imaW+20).toString()+",toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
with (popup.document){writeln("<html><head><title>"+eti+"<\/title><style>body{margin:0px;}<\/style>");writeln("<\/head><body style='padding:10px;'>");
writeln("<p>"+eti+"</p><br>"+embedURL+"<\/body><\/html>");close();}popup.focus();}
function playIt(sound){$("audio").each(function(){this.pause();}); var file = document.getElementById(sound);file.load();file.play();}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
function showTooltip($tooltip,position) { $(".tooltip.active").removeClass("active").addClass("out");clearTimeout(hideTimer);$tooltip.css({top: position.top - $tooltip.outerHeight() - 13,left: position.left - ($tooltip.width() / 2)}).addClass("active").removeClass("out");}
function hideTooltip($tooltip) {hideTimer = setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);}
function do_responsivePC(){const baseWidth=900;const baseHeight=800;const windowWidth = $(window).width();const windowHeight = $(window).height();scaleFactor = Math.min(windowWidth / baseWidth, windowHeight / baseHeight);
$("#ardoraMain").css({"transform-origin": "top left","transform": "scale(" + scaleFactor + ")","position": "absolute","top": "50%","left": "50%","margin-left": -(baseWidth * scaleFactor / 2) + "px","margin-top": -(baseHeight * scaleFactor / 2) + "px"});paintpoints();}
