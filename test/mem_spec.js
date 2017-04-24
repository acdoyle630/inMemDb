/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const functions = require('../inMemDb');

describe('module',() => {
  it('should be an object',() =>{
    expect(functions).to.be.a('object');
  });
});
describe('byId',() =>{
  it('should be a function', () =>{
    expect(functions.byId).to.be.a('function');
  });
  it('should return a user by id', () =>{
    expect(functions.byId(2)).to.be.deep.equal({ name: 'Bob', age: 21, gender: 'm', jobType: 'dv' });
    expect(functions.byId(6)).to.be.deep.equal({ name: 'Fred', age: 45, gender: 'm', jobType: 'dv' });
  });
  it('should throw an error if parameter is not typeof number', () =>{
    expect(functions.byId.bind(null,'two')).to.throw(Error);
  });
});
describe('youngest', () =>{
  it('should return the youngest users age', () => {
    expect(functions.youngest()).to.be.equal(8);
  });
});
describe('oldest', () => {
  it('should return the oldest users age', () => {
    expect(functions.oldest()).to.be.equal(61);
  });
});
describe('males', () => {
  it('should return an array of all male users', () => {
    expect(functions.males()).to.be.deep.equal([
      {name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
      { name: 'David', age: 9, gender: 'm', jobType: 'na' },
      { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
      { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
      { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
      { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
      { name: 'Liam', age: 20, gender: 'm', jobType: 'st' } ]
    );
  });
});
describe('females', () => {
  it('should return an array of female users', () => {
    expect(functions.females()).to.be.deep.equal([
      { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
      { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
      { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
      { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
      { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' } ]
    );
  });
});

describe('employeees', () => {
  it('should change jobtype of selected employee(byId), to a string, and return selected employee', () => {
    expect(functions.employees(1)).to.be.deep.equal({ name: 'Alice', age: 12, gender: 'f', jobType: 'student' });
    expect(functions.employees(5)).to.be.deep.equal({ name: 'Eric', age: 61, gender: 'm', jobType: 'DevLeague' });
  });
});
