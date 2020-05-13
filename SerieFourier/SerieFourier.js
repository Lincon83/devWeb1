function SerieFourier(n) {
    var sf = [];
    for (let i = 1; i < n; i++) {    
        sf[i] = (2*Math.pow(Math.PI,2)/3) + Math.pow(-1,i)*(4/Math.pow(i,2)) + 0;    
    }
    return sf;
}
sf = SerieFourier(25);
for (let i = 0; i < sf.length; i++) {
    console.log(sf[i]);
}