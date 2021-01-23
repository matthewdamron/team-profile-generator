const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    // create new manager object
    const manager = new Manager('Matt', 2, 'mattdamron@msn.com', 4);

    // run test for name, id, email
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toBeGreaterThan(0);
    expect(manager.email).toContain('@');
    expect(manager.officeNumber).toBeGreaterThan(0);
});

test('get manager name value', () => {
    // create new Manager object
    const manager = new Manager('Matt', 2, 'mattdamron@msn.com', 4);

    // run test to get name value
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('get manager id value', () => {
    // create new Manager object
    const manager = new Manager('Matt', 2, 'mattdamron@msn.com', 4);

    // run test to get id value
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('get manager email value', () => {
    // create new Manager object
    const manager = new Manager('Matt', 2, 'mattdamron@msn.com', 4);

    // run test to get email value
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('get manager role', () => {
    // create new Manager object
    const manager = new Manager('Matt', 2, 'mattdamron@msn.com', 4);

    // run test to get manager role
    expect(manager.getRole()).toEqual('Manager');
});

test('get manager office number', () => {
    // create new Manager object
    const manager = new Manager('Matt', 2, 'mattdamron@msn.com', 4);

    // run test to get manager role
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});