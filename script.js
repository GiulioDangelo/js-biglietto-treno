/* calcolo prezzo biglietto
prezzo al km = 0.21 euro
sconto 20% per minorenni
sconto 40% per over 65*/


const km = parseInt(prompt("quanti km devi percorrere?"));
const age = parseInt(prompt("quanti anni hai?")) ;
const pricePerKm = 0.21;
const price= (pricePerKm * km);
const discountMinor=( (price * 20) / 100 )
const discountOver=( (price * 40) / 100 )


if (age < 18) {
    document.getElementById("final-price").innerHTML= (price - discountMinor.toPrecision(2))
}
else if(age > 65){
    document.getElementById("final-price").innerHTML= (price - discountOver.toPrecision(2))
}
else if(isNaN(age) || isNaN(km)){
    document.getElementById("final-price").innerHTML= "please,enter a numbers"
}
else{
    document.getElementById("final-price").innerHTML= price.toPrecision(2)
}

