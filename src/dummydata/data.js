import faker from 'faker';
let database = [];

// utils function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomYear() {
    return Math.floor(Math.random() * 30 + 1986);
}

function getListOfPeople() {
    const count = Math.floor(Math.random() * 10 + 3);
    const list = [];

    for (let i = 0; i < count; i++) {
        list.push(`${faker.name.findName()} ${faker.name.lastName()}`);
    }

    return list;
}

function getRandomTitle() {
    return faker.lorem.words();
}

for (let i = 0; i < 20; i++) {
    database.push({
        id: i,
        title: getRandomTitle(),
        subtitle: faker.random.words(),
        description: faker.lorem.paragraphs(),
        director: `${faker.name.findName()} ${faker.name.lastName()}`,
        cast: getListOfPeople(),
        year: getRandomYear(),
        img: `http://via.placeholder.com/350x500/${getRandomColor()}`,
        category: faker.random.word(),
        rating: faker.random.number(),
    });
}

console.log('database', database);

export default database;
