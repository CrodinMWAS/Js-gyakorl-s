function make() {
    a = parseInt(aInp.value);
    b = parseInt(bInp.value);
    c = parseInt(cInp.value);
    if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
        alert("A háromszög megszerkezthető!");
    }
    else{
        alert("A háromszög NEM szerkezthető meg!");
    }
}

function gen() {
    aInp.value = Math.floor(Math.random() * 90)+10;
    bInp.value = Math.floor(Math.random() * 90)+10;
    cInp.value = Math.floor(Math.random() * 90)+10;
}

function hypo() {
    temp = Math.sqrt(Math.pow(aInp.value,2) + Math.pow(bInp.value,2));
    cInp.value = temp.toFixed(3);
}