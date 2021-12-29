/*
const capitalizeName = function(name) {
    const names = name.split(' ')
    const namesUpper =[]
    for(const n of names){
    //namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())) // otra manera de hacerlo
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jorge alcala arriaga')
capitalizeName('jahazaiel u alcala frias jr')
capitalizeName('pedro lopez perez')
*/

// como ocultar los numero de la tarjetas de credito
const maskCreditCard = function(number){
    const str = number + ''; // esto convierte numeros en strings
    const last = str.slice(-4)// esto nos da los ultimos 4 
    return last.padStart(str.length, '*');
};



console.log(maskCreditCard(65235895));                    //****5895
console.log(maskCreditCard(45265389256125));        //**********6125
console.log(maskCreditCard(452689537865235895));//**************5900

const flights = '_Delayed_Departure;fao93766109;txl12133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766209;12:05+_Departure;foa93766109;list2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    // console.log(flight);
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36)
    console.log(output);
    /* 🛑 Delayed Departure FAO TXL (11h25)
                    Arrival BRU FAO (11h45)
       🛑 Delayed Arrival HEL FAO (12h05)
                Departure FOA LIS (12h30)
    */
}