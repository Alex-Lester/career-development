const original = { name: 'Ana', address: { city: 'Leeds' }, tags: ['a'] };
const copy = { ...original };

copy.name = 'Bea';
copy.address = { city: 'York' };
copy.tags.push('b');

console.log(original.name, original.address.city, original.tags);

const items = [{ qty: 2 }, { qty: 3 }, { qty: 4 }];
console.log(items.reduce((sum, item) => sum + item.qty, 0));