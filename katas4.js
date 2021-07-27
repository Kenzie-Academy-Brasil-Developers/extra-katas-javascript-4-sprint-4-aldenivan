const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(titulo, resultado) {
    const result = document.getElementById("resultKatas");
 
    const tituloKata = document.createElement('h2');
    const resultKata = document.createElement('li');

    const kataTitle = document.createTextNode(titulo)
    tituloKata.appendChild(kataTitle);
    const kataText = document.createTextNode(resultado);
    resultKata.appendChild(kataText);

    result.appendChild(tituloKata);
    result.appendChild(resultKata);
}


function kata1() {

    let title = "Kata 1";
    let result = gotCitiesCSV.split(",");

    showResults(title, result.join(", "));

    return result;
}

function kata2() {

    let title = "Kata 2";
    let result = bestThing.split(" ");

    showResults(title, result.join(", "));

    return result
}

function kata3() {

    let title = "Kata 3";
    let result = gotCitiesCSV.split(",");

    showResults(title, result.join("; "))

    return result
}

function kata4 () {

    let title = "Kata 4";
    let result = lotrCitiesArray.join(", ");

    showResults(title, result);

    return result;
}

function kata5() {

    let title = "Kata 5";
    let result = lotrCitiesArray.slice(0, 5);

    showResults(title, result.join(", "));

    return result;
}

function kata6 () {

    let title = "Kata 6";
    let result = lotrCitiesArray.slice(-5);

    showResults(title, result.join(", "));

    return result;
}

function kata7 () {

    let title = "Kata 7";
    let result = lotrCitiesArray.slice(2, 5)
    let removed = result.splice(1,1);

    showResults(title, result.join(", "));

    return result;
}

function kata8() {

    let title = "Kata 8";
    let result = lotrCitiesArray;
    let removed = result.splice(2, 1);

    showResults(title, result.join(", "));

    return result;
}

function kata9() {

    let title = "Kata 9";
    let result = lotrCitiesArray;
    let removed = result.splice(5);

    showResults(title, result.join(", "));

    return result;
}

function kata10() {

    let title = "Kata 10";
    let result = lotrCitiesArray;
    let add = result.splice(2, 0, "Rohan");

    showResults(title, result.join(", "));

    return result;
}

function kata11() {

    let title = "Kata 11";
    let result = lotrCitiesArray;
    let add = result.splice(5, 1, "Deadest Marshes");

    showResults(title, result.join(", "));

    return result;
}

function kata12() {

    let title = "Kata 12"
    let result = bestThing.slice(0, 14);

    showResults(title, result);

    return result;
}

function kata13() {

    let title = "Kata 13"
    let result = bestThing.slice(-12);

    showResults(title, result);

    return result;
}

function kata14() {

    let title = "Kata 14"
    let result = bestThing.slice(23, 38);

    showResults(title, result);

    return result;
}

function kata15() {

    let title = "Kata 15"
    let result = bestThing.substring(bestThing.length -12);

    showResults(title, result);

    return result;
}

function kata16() {

    let title = "Kata 16"
    let result = bestThing.substring(23, 38);

    showResults(title, result);

    return result;
}

function kata17() {

    let title = "Kata 17";
    result = lotrCitiesArray;
    let removed = result.pop();

    showResults(title, result.join(", "));

    return result;
}

function kata18() {
    
    let title = "Kata 18";
    result = lotrCitiesArray;

    result.push("Harad")

    showResults(title, result.join(", "));

    return result;
}

function kata19() {

    let title = "Kata 19";
    result = lotrCitiesArray;
    let removed = result.shift();

    showResults(title, result.join(", "));

    return result;
}

function kata20() {

    let title = "Kata 20";
    result = lotrCitiesArray;
    let removed = result.unshift("Mordon");

    showResults(title, result.join(", "));

    return result;
}

function bonus1() {

    let title = "Bonus 1";
    let result = bestThing.split(" ");
    let indice = 0;

    for(let i = 0; i < result.length; i++) {
        if(result[i] === "only") {
            indice = i;
        }
    }

    showResults(title, indice);

    return indice;
}

function bonus2() {

    let title = "Bonus 2";
    let result = bestThing.split(" ");
    let indice = result.length - 1;
    
    showResults(title, indice);

    return indice;
}

function bonus3() {
   
    let title = "Bonus 3";
    let city = gotCitiesCSV.split(",");
    let result = [];

    for(let i = 0; i < city.length; i++) {
        
        let compara = city[i]; 
        let vogA = 0;
        let vogE = 0;
        let vogI = 0;
        let vogO = 0;
        let vogU = 0;
        
        for(let j = 0; j < compara.length; j++) {
        
            if(compara[j] === "a") {
                vogA += 1;
            }
            if(compara[j] === "e") {
                vogE += 1;
            }
            if(compara[j] === "i") {
                vogI += 1;
            }
            if(compara[j] === "o") {
                vogO += 1;
            }
            if(compara[j] === "u") {
                vogU += 1;
            }

        }

        if(vogA >= 2 || vogE >= 2 || vogI >= 2 || vogO >= 2 || vogU >= 2) {
            result.push(compara)
        }
    }
    showResults(title, result.join(", "));

    return result
} 

function bonus4() {

    let title = "Bonus 4";
    let city = lotrCitiesArray;
    let result = [];

    for(let i = 0; i < city.length; i++) {

        let compara = city[i];

        if(compara[compara.length - 2] === "o" && compara[compara.length - 1] === "r") {
          
            result.push(compara);
        }
    }

    showResults(title, result.join(", "));

    return result
}

function bonus5() {

    let title = "Bonus 5";
    let strings = bestThing.split(" ");
    let result = [];

    for(let i = 0; i < strings.length; i++) {

        let compara = strings[i];

        if(compara[0] === "b") {
            result.push(compara)
        }
    }
    
    showResults(title, result.join(", "));

    return result;
}

function bonus6() {

    let title = "Bonus 6";
    let city = lotrCitiesArray;
    let result = "Não";

    if(city.includes("Mirkwood") == true){
        result = "Sim"
    }

    showResults(title, result);

    return result;
} 

function bonus7() {

    let title = "Bonus 7";
    let city = lotrCitiesArray;
    let result = "Não";

    if(city.includes("Hollywood") == true){
        result = "Sim"
    }

    showResults(title, result);

    return result;
} 

function bonus8() {

    let title = "Bonus 8";
    let city = lotrCitiesArray;
    let result = 0;

    for(let i = 0; i < city.length; i++) {

        let compara = city[i]

        if(compara == "Mirkwood"){
            result = i;
        }
    
    }

    showResults(title, result);

    return result;
} 

function bonus9() {

    let title = "Bonus 9";
    let city = lotrCitiesArray;
    let result = 0;

    for(let i = 0; i < city.length; i++) {

        let compara = city[i]

        if(compara.includes(" ") == true){
            result = compara;
        }
    
    }

    showResults(title, result);

    return result;
} 

function bonus10() {

    let title = "Bonus 10";
    let city = lotrCitiesArray;
    let result = [];
    
    for(let i = city.length - 1; i >= 0; i--) {
        result.push(city[i])
    }

    showResults(title, result.join(", "));

    return result;
} 

function bonus11() {

    let title = "Bonus 11";
    let city = lotrCitiesArray;
    let result = lotrCitiesArray.sort();

    showResults(title, result.join(", "));

    return result;
} 

function bonus12() {

    let title = "Bonus 12";
    let city = lotrCitiesArray;
    let result = [];
    
    for(let i = 0; i < city.length; i++) {
        result.push(city[i].length)
    }

    result = result.sort((a, b) => a - b);

    showResults(title, result.join(", "));

    return result;
} 


kata1();
kata2();
kata3();
kata4();
kata5();
kata6();
kata7();
kata8();
kata9();
kata10();
kata11();
kata12();
kata13();
kata14();
kata15();
kata16();
kata17();
kata18();
kata19();
kata20();
bonus1();
bonus2();
bonus3();
bonus4();
bonus5();
bonus6();
bonus7();
bonus8();
bonus9();
bonus10();
bonus11();
bonus12();