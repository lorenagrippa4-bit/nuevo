//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=7; messageOk="Has demostrado una gran comprensión de los conceptos clave sobre la arquitectura de la computadora y el funcionamiento de sus componentes. ¡Sigue así!"; messageTime="El límite de tiempo para esta actividad ha finalizado.Puedes volver a iniciar la actividad para poner a prueba tu velocidad y afianzar los conceptos aprendidos."; messageError="Revisa nuevamente las funciones de cada componente o el recorrido que realizan los datos dentro del sistema e inténtalo de nuevo. "; messageAttempts="Has alcanzado el límite de tiempo asignado para completar esta actividad.Revisa nuevamente los conceptos clave del módulo, organiza tus ideas e inténtalo una ve"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#009F00"; borderTime="#FFA4A4";borderError="#FFA4A4"; borderAttempts="#FFA4A4";
var texSel=0; var doneA=["0","0","0","0","0","0"];
var posX=[8,191,134,409,264,169]; var posY=[94,82,29,49,210,343];
var coorx=["MTA3", "MjI5", "MTYy", "NDQ3", "MzE4", "MTc0"]; var coory=["OTA=", "OTY=", "Mzg=", "Njk=", "MjI1", "Mzcx"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", ""]; var al2=["", "", "", "", "", ""]; var al3=["", "", "", "", "", ""]; var al4=["", "", "", "", "", ""]; answers=["Unidad de Control", "ALU", "CPU", "RAM", "Cache", "Dispositivo de Salida"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="R1JBRklDTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
