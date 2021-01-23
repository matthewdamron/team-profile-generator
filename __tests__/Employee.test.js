const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    // create new Employee object
    const employee = new Employee('Matt', 2, 'mattdamron@msn.com');

    // run test for name, id, email
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toContain('@');
});

test('get employee name value', () => {
    // create new Employee object
    const employee = new Employee('Matt', 2, 'mattdamron@msn.com');

    // run test to get name value
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('get employee id value', () => {
    // create new Employee object
    const employee = new Employee('Matt', 2, 'mattdamron@msn.com');

    // run test to get id value
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email value', () => {
    // create new Employee object
    const employee = new Employee('Matt', 2, 'mattdamron@msn.com');

    // run test to get email value
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('get employee role', () => {
    // create new Employee object
    const employee = new Employee('Matt', 2, 'mattdamron@msn.com');

    // run test to get employee role
    expect(employee.getRole()).toEqual('Employee');
})