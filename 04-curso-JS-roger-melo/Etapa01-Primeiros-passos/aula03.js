// ARRAY

    // Array com valores em string
    const heroes = ['Batman', 'Homem-aranha', 'Homem-de-ferro'];

    // Array com valores numéricos
    const ages = [19, 20, 25, 19, 30];

    // Array com valores diversos
    const randomArray = ['Batman', 'Bernardo', 20, 19];

    // MÉTODOS DE ARRAY 
        //.join
        const arrayJoin = heroes.join(";"); 
        console.log(arrayJoin);

        //.push
        const arrayPush = heroes.push('Wanda');
        console.log(arrayPush);

        //.pop
        const arrayPop = heroes.pop();
        console.log(arrayPop, heroes);

        //.concat
        const arrayConcat = heroes.concat(['Hulk']);
        console.log(arrayConcat);
        