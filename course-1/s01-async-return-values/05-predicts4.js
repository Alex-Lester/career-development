async function failSoon() {
    throw new Error('boom');
}

try {
    const p = failSoon();
    console.log('1', p instanceof Promise);
} catch (err) {
    console.log('2 caught', err.message);
}

console.log('3 after');