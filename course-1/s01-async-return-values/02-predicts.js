async function getNumber() {
    return 1;
}

const result = getNumber();
console.log(1, result);
console.log(2, typeof result);
console.log(3, result === 1);

result.then(value => console.log(4, value));
console.log(5, 'end');