function cityTaxes(name, population, treasury){
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            city.treasury += Math.floor(city.population*city.taxRate); 
        },

        applyGrowth(percentage) {
            city.population = Math.floor(city.population*(1 + (percentage/100)));
        },

        applyRecession(percentage) {
            city.treasury = Math.floor(city.treasury*(1 - (percentage/100)));
        }
    }
}

const city =

cityTaxes('Tortuga',

7000,

15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);

city.applyRecession(10);

console.log(city.treasury);