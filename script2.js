/* Máscaras ER */
function mascara(o,f){
    vz_objz=oz
    vz_funz=fz
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_objz.value=v_funz(v_objz.value)
}
function mtel(vz){
    vz=vz.replace(/\D/g,""); //Remove tudo o que não é dígito
   
    return vz;
}
function id( elz ){
    return document.getElementById( el );
}
window.onload = function(){
    id('idade').onkeyup = function(){
        mascara( this, mtel );
    }
}
