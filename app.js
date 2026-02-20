let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


 // EURO A DOLLAR
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
};
 

// DOLLAR A YEN
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;

    let valueInYen = valueInEuro * oneEuroIs.JPY;

    return valueInYen;
    

}

// YEN A BRITISH

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { 
    sum,
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};