
async function load(label) {
    console.log(label, 'start');
    await null;
    console.log(label, 'end');
    return label;
}

console.log('x');
const a = load('A');
const b = load('B');
console.log('y', a === 'A');
b.then(value => console.log('z', value));