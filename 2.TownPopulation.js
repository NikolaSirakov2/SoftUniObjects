function population(arr){
    let towns = {};

    for (let el of arr){
        let [nam, people] = el.split(' <-> ')
        people = Number(people);

        if((towns[nam] != undefined)){
            people += towns[nam];
        } 

        towns[nam] = people;
        
    }

    

    let newArr = Object.entries(towns)
    

    for (let [name, popi] of newArr){
        console.log(`${name} : ${popi}`);
    }
}

population(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])