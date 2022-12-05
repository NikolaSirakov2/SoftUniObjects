function population(arr){
    let towns = {};

    for (let el of arr){
        [nam, people] = el.split(' <-> ')

        if(!towns.hasOwnProperty(nam)){
            towns[nam] = people;
        } else {
            // towns[nam] = towns[people] + people;
        }
        
    }

    let newArr = Object.entries(towns)
    

    for (let [name, popi] of newArr){
        console.log(`${name} : ${popi}`);
    }
}

population(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])