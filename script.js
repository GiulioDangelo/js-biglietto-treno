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
   console.log(price - discountMinor );
}
else if(age > 65){
    console.log((price - discountOver));
}
else{
    console.log(price)
}