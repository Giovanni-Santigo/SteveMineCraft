//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var fondo = document.getElementById("fondo");
var cv;
var obj;
var ang = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        obj = new Obj3D();
        if (obj.read(contenido)) {
            //sDir = sDir1;
            cv = new CvHLines(graphics, canvas);
            cv.setObj(obj);
            cv.paint();
        }
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
            alert('datos no validos');
    }
    else
        alert('aun no has leido un archivo');
}
function eyeDownFunc() {
    vp(0, 0.1, 1);
}
function eyeUpFunc() {
    vp(0, -0.1, 1);
}
function eyeLeftFunc() {
    vp(-0.1, 0, 1);
}
function eyeRightFunc() {
    vp(0.1, 0, 1);
}
function incrDistFunc() {
    vp(0, 0, 2);
}
function decrDistFunc() {
    vp(0, 0, 0.5);
}
function pza1DerFunc() {
    var af = 10;
    Rota3D.initRotate(obj.w[139], obj.w[140], af * Math.PI / 180);
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza1IzqFunc() {
    var af = -10;
    Rota3D.initRotate(obj.w[139], obj.w[140], af * Math.PI / 180);
    for (var i = 201; i <= 238; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function pza12DerFunc() {
    var af = 10;
    var af2 = -10;
    if (litp1 <= 3) {
        //console.log(obj.w[29], obj.w[30]);
        Rota3D.initRotate(obj.w[200], obj.w[201], af * Math.PI / 180);
        for (var i = 1; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        litp1++;
        litp2--;
    }
    Rota3D.initRotate(obj.w[202], obj.w[203], af2 * Math.PI / 180);
    for (var i = 33; i <= 40; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    if (litp1 <= 3) {
        Rota3D.initRotate(obj.w[200], obj.w[201], af2 * Math.PI / 180);
        for (var i = 9; i <= 16; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        litp1++;
        litp2--;
    }
    Rota3D.initRotate(obj.w[202], obj.w[203], af * Math.PI / 180);
    for (var i = 25; i <= 32; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
var litp1 = 0, litp2 = 0;
function pza12IzqFunc() {
    var af = -10;
    var af2 = 10;
    //console.log(obj.w[29], obj.w[30]);
    if (litp2 <= 3) {
        Rota3D.initRotate(obj.w[200], obj.w[201], af * Math.PI / 180);
        for (var i = 1; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        litp2++;
        litp1--;
    }
    Rota3D.initRotate(obj.w[202], obj.w[203], af2 * Math.PI / 180);
    for (var i = 33; i <= 40; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    if (litp2 <= 3) {
        Rota3D.initRotate(obj.w[200], obj.w[201], af2 * Math.PI / 180);
        for (var i = 9; i <= 16; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        litp2++;
        litp1--;
    }
    Rota3D.initRotate(obj.w[202], obj.w[203], af * Math.PI / 180);
    for (var i = 25; i <= 32; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
}
function Arriba() {
    var tr = 0.1, af = 45;
    if (Rot4 <= 1) {
        Rota3D.initRotate(obj.w[204], obj.w[205], af * Math.PI / 180);
        for (var i_1 = 1; i_1 <= 48; i_1++) {
            obj.w[i_1] = Rota3D.rotate(obj.w[i_1]);
        }
        for (var i_2 = 70; i_2 <= 81; i_2++) {
            obj.w[i_2] = Rota3D.rotate(obj.w[i_2]);
        }
        for (var i_3 = 200; i_3 <= 205; i_3++) {
            obj.w[i_3] = Rota3D.rotate(obj.w[i_3]);
        }
        Rot3--;
        Rot4++;
    }
    for (var i = 1; i <= 48; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 70; i <= 81; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 200; i <= 205; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    cv.setObj(obj);
    cv.paint();
}
function Abajo() {
    var tr = -0.1;
    for (var i = 1; i <= 48; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 70; i <= 81; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    for (var i = 200; i <= 205; i++) {
        obj.w[i].x = obj.w[i].x + tr;
    }
    cv.setObj(obj);
    cv.paint();
}
var Rot = 0, Rot2 = 0, Rot3 = 0, Rot4 = 0;
function Izquierda() {
    var tr = -0.1, af = -45;
    if (Rot <= 1) {
        Rota3D.initRotate(obj.w[204], obj.w[205], af * Math.PI / 180);
        for (var i_4 = 1; i_4 <= 48; i_4++) {
            obj.w[i_4] = Rota3D.rotate(obj.w[i_4]);
        }
        for (var i_5 = 70; i_5 <= 81; i_5++) {
            obj.w[i_5] = Rota3D.rotate(obj.w[i_5]);
        }
        for (var i_6 = 200; i_6 <= 205; i_6++) {
            obj.w[i_6] = Rota3D.rotate(obj.w[i_6]);
        }
        Rot++;
        Rot2--;
        if (Rot4 >= 1) {
            Rot4--;
        }
    }
    for (var i = 1; i <= 48; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 70; i <= 81; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 200; i <= 205; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    cv.setObj(obj);
    cv.paint();
}
function Derecha() {
    var tr = 0.1, af = 45;
    if (Rot2 <= 1) {
        Rota3D.initRotate(obj.w[204], obj.w[205], af * Math.PI / 180);
        for (var i_7 = 1; i_7 <= 48; i_7++) {
            obj.w[i_7] = Rota3D.rotate(obj.w[i_7]);
        }
        for (var i_8 = 70; i_8 <= 81; i_8++) {
            obj.w[i_8] = Rota3D.rotate(obj.w[i_8]);
        }
        for (var i_9 = 200; i_9 <= 205; i_9++) {
            obj.w[i_9] = Rota3D.rotate(obj.w[i_9]);
        }
        Rot--;
        Rot2++;
        if (Rot4 >= 1) {
            Rot4--;
        }
    }
    for (var i = 1; i <= 48; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 70; i <= 81; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    for (var i = 200; i <= 205; i++) {
        obj.w[i].y = obj.w[i].y + tr;
    }
    cv.setObj(obj);
    cv.paint();
}
function Brincar() {
    var tr = 1;
    for (var i = 1; i <= 48; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    for (var i = 70; i <= 81; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    for (var i = 200; i <= 205; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
}
function Agacharce() {
    var tr = -1;
    for (var i = 1; i <= 48; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    for (var i = 70; i <= 81; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    for (var i = 200; i <= 205; i++) {
        obj.w[i].z = obj.w[i].z + tr;
    }
    cv.setObj(obj);
    cv.paint();
}
var up = false, jump = false, crouch = false, right = false, down = false, left = false, x = window.innerWidth / 2 - 130 / 2, y = window.innerHeight / 2 - 130 / 2;
document.addEventListener('keydown', press);
function press(e) {
    if (e.keyCode === 87 /* w */) {
        up = true;
    }
    if (e.keyCode === 68 /* d */) {
        right = true;
    }
    if (e.keyCode === 83 /* s */) {
        down = true;
    }
    if (e.keyCode === 65 /* a */) {
        left = true;
    }
    if (e.keyCode === 69 /* e "jump" */) {
        jump = true;
        Brincar();
    }
    if (e.keyCode === 70 /* f "crouch" */) {
        crouch = true;
    }
}
document.addEventListener('keyup', release);
function release(e) {
    if (e.keyCode === 87 /* w */) {
        up = false;
    }
    if (e.keyCode === 68 /* d */) {
        right = false;
    }
    if (e.keyCode === 83 /* s */) {
        down = false;
    }
    if (e.keyCode === 65 /* a */) {
        left = false;
    }
    if (e.keyCode === 69 /* e "jump" */) {
        jump = false;
        Agacharce();
    }
    if (e.keyCode === 70 /* f "crouch" */) {
        crouch = false;
    }
}
function gameLoop() {
    var div = document.querySelector('div');
    if (up) {
        pza12IzqFunc();
        Arriba();
    }
    if (right) {
        Derecha();
        pza12DerFunc();
    }
    if (down) {
        pza12DerFunc();
        Abajo();
    }
    if (left) {
        Izquierda();
        pza12IzqFunc();
    }
    if (jump) {
        //Brincar();
    }
    if (crouch) {
        Agacharce();
    }
    window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);
//movimiento de piezas
document.getElementById('pza1Izq').addEventListener('click', pza1IzqFunc, false);
document.getElementById('pza1Der').addEventListener('click', pza1DerFunc, false);
document.getElementById('pza12Izq').addEventListener('click', pza12IzqFunc, false);
document.getElementById('pza12Der').addEventListener('click', pza12DerFunc, false);
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
        vp(0, 0.1 * difY / 50, 1);
        Piy = Pfy;
        vp(0.1 * difX, 0 / 50, 1);
        Pix = Pfx;
        /*if( Piy>Pfy+1 ){
          phi += SensibilidadY;
          vp(0, 0.1*, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }
    
        if(Pfy>Piy+1){
          phi -= SensibilidadY;
          vp(0,-0.1, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }*/
        /*if (Pix > Pfx + 1) {
          theta += SensibilidadX;
          vp(0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }
            
        if (Pfx > Pix + 1) {
          theta -= SensibilidadX;
          vp(-0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }*/
    }
}
function noDraw() {
    flag = false;
}
canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);
