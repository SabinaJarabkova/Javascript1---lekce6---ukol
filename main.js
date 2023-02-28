console.log('nalinkovan');

//UKOL 1
const parseDate = (date) => {
    const day = date.slice(0,2);
    const month = date.slice(3,5);
    const year = date.slice(6)

    const newDate = {
        day: day,
        month: month,
        year: year
    }

    //console.log(newDate)
    return newDate
}

console.log(parseDate('28.02.2023'));



//UKOL 2
const formatDate = (date) => {
    const day = date.day.padStart(2, '0');
    const month = date.month.padStart(2, '0');
    //const year = date.year.padStart(4, '20');
    const year = date.year;

    const newDate = `${day}.${month}.${year}`;

    return newDate
}
//const datum = {day: '8', month: '2', year: '23'};

console.log(formatDate({day: '8', month: '2', year: '2023'}));



//UKOL 3
const round = (number) => {

    const newNumber = Number(number);
    //console.log(newNumber);

    const integerPart = Math.trunc(newNumber);
    //console.log(integerPart);

    const decimalPart = newNumber - integerPart;
    //console.log(decimalPart)

    if (newNumber < 0) {
        if (decimalPart === -0.5) {
            //console.log(newNumber);
            const x = Math.floor(newNumber);
            //console.log(x);
    
            const y = x % 2;
            //console.log(y);
    
            if (y === 0) {
                return x;
            } else {
                return x + 1
            }
        }
    } else {
        if (decimalPart > 0.5 || decimalPart < 0.5) {
            //console.log(Math.round(newNumber));
            const result = Math.round(newNumber);
            return result
        } 
    
        if (decimalPart === 0.5) {
            //console.log(newNumber);
            const x = Math.floor(newNumber);
            //console.log(x);
    
            const y = x % 2;
            //console.log(y);
    
            if (y === 0) {
                return x;
            } else {
                return x + 1
            }
        }
    }
}

console.log(round(-0.5));