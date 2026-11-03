async function getUser() {
    console.log('A');
    const user = await Promise.resolve({ name: 'Ana' });
    console.log('B', user.name);
    return user;
}

console.log('1');
const u = getUser();
console.log('2', u.name);
u.then(user => console.log('3', user.name));
console.log('4');