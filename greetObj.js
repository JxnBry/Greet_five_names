const greet = require('./greet.js');
const goodbye = require('./goodbye.js');
const nameObj = {
    Name1: "Jamal",
    Name2: "Myles",
    Name3: "Travis",
    Name4: "Jerimus",
    Name5: "Bartholomew"
}

const nameObj2 = {
    Name1: "Jama",
    Name2: "Myle",
    Name3: "Travi",
    Name4: "Jerinu",
    Name5: "Bartholome"
}

function gg(obj) {
    for (let name in obj) {
        greet(obj[name]);
        goodbye(obj[name]);
    }
}

gg(nameObj);
gg(nameObj2);