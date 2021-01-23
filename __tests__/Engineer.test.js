const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    // create new engineer object
    const engineer = new Engineer('Matt', 2, 'mattdamron@msn.com', 'matthewdamron');

    // run test for name, id, email
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toBeGreaterThan(0);
    expect(engineer.email).toContain('@');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer name value', () => {
    // create new Engineer object
    const engineer = new Engineer('Matt', 2, 'mattdamron@msn.com', 'matthewdamron');

    // run test to get name value
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('get engineer id value', () => {
    // create new Engineer object
    const engineer = new Engineer('Matt', 2, 'mattdamron@msn.com', 'matthewdamron');

    // run test to get id value
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('get engineer email value', () => {
    // create new Engineer object
    const engineer = new Engineer('Matt', 2, 'mattdamron@msn.com', 'matthewdamron');

    // run test to get email value
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('get engineer role', () => {
    // create new Engineer object
    const engineer = new Engineer('Matt', 2, 'mattdamron@msn.com', 'matthewdamron');

    // run test to get engineer role
    expect(engineer.getRole()).toEqual('Engineer');
});

test('get engineer github username', () => {
    // create new Engineer object
    const engineer = new Engineer('Matt', 2, 'mattdamron@msn.com', 'matthewdamron');

    // run test to get engineer role
    expect(engineer.getGithub()).toEqual(expect.any(String));
});