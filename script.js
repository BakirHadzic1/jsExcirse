// zadatak 1

function reversString(str){
    let newWord = "";
    for(let i = str.length -1;i >= 0 ;i--){
        newWord + str[i];
    };
    console.log(newWord);
}
reversString("Bakir");

//zadatak 2

function multiplyAndAdd5(num1,num2){
    const multipy = num1 * num2;
    const add5 = multipy+5;
    console.log(add5);
}
multiplyAndAdd5(103,19);

//zadatak 3 

function ToLowecase(){
    const object = {
        name: "Bakir",
    }
    object.name.forEach(element => {
        element = element.toLowerCase()
    });
    console.log(object)
}
ToLowecase()

//zadatak 4

function getLastElement(arr) {
    return arr.at(-1);
}

let exampleArray = ["bakir", "javascript", "laptop", "maliprogramer"];
let lastElement = getLastElement(exampleArray);
console.log(lastElement); 