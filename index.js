// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    }
    function destructivelyPrependCat(name) {
        cats.unshift(name);
        }
        function destructivelyRemoveLastCat(name) {
            let lastCat = cats.pop();
            return lastCat;

        }
        destructivelyRemoveFirstCat(); {
        let firstCat = cats.shift();
    };
