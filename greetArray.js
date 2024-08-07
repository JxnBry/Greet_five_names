function greet(name) {
    console.log(`Hello, ${name}.`);
}

function greetNamesInArray(array) {
    array.forEach(name => {
    greet(name);
});
}

const namesArray =  ["Jamal", "Myles", "Travis", "Jerimus", "Bartholomew"];
const namesArray2 =  ["Jama", "Myle", "Travi", "Jerimu", "Bartholome"];

global.namesArr = namesArray;
global.greetingNamesInArray = greetNamesInArray;

global.namesArr2 = namesArray2;
global.greetingNamesInArray = greetNamesInArray;