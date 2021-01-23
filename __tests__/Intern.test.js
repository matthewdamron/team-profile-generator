const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    // create new intern object
    const intern = new Intern('Matt', 2, 'mattdamron@msn.com', 'UofU');

    // run test for name, id, email
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toBeGreaterThan(0);
    expect(intern.email).toContain('@');
    expect(intern.school).toEqual(expect.any(String));
});

test('get intern name value', () => {
    // create new Intern object
    const intern = new Intern('Matt', 2, 'mattdamron@msn.com', 'UofU');

    // run test to get name value
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('get intern id value', () => {
    // create new Intern object
    const intern = new Intern('Matt', 2, 'mattdamron@msn.com', 'UofU');

    // run test to get id value
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('get intern email value', () => {
    // create new Intern object
    const intern = new Intern('Matt', 2, 'mattdamron@msn.com', 'UofU');

    // run test to get email value
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('get intern role', () => {
    // create new Intern object
    const intern = new Intern('Matt', 2, 'mattdamron@msn.com', 'UofU');

    // run test to get intern role
    expect(intern.getRole()).toEqual('Intern');
});

test('get intern school name', () => {
    // create new Intern object
    const intern = new Intern('Matt', 2, 'mattdamron@msn.com', 'UofU');

    // run test to get intern role
    expect(intern.getSchool()).toEqual(expect.any(String));
});