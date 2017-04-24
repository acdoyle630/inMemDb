/*jshint esversion:6 */

const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};

const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

function byId(id) {
  return users[id];
}

function youngest() {
  let ageArray = Object.values(users);
  let young = ageArray[0].age;
  for( var i = 0; i < ageArray.length; i++){
    if(ageArray[i].age < young){
      young = ageArray[i].age;
    }
  }
  return young;
}


function oldest() {
  let ageArray = Object.values(users);
  let old = ageArray[0].age;
  for( var i = 0; i < ageArray.length; i++){
    if(ageArray[i].age > old){
      old = ageArray[i].age;
    }
  }
  return old;
}

function males () {
  let genderArray = Object.values(users);
  let males = [];
  for( var i = 0; i < genderArray.length; i++){
    if( genderArray[i].gender === 'm'){
      males.push(genderArray[i]);
    }
  }
  return males;
}

function females() {
  let genderArray = Object.values(users);
  let females = [];
  for( var i = 0; i < genderArray.length; i++){
    if( genderArray[i].gender === 'f'){
      females.push(genderArray[i]);
    }
  }
  return females;
}

function employees(employer) {
  let jobs = {
    st: 'student',
    dv: 'DevLeague',
    na: 'N/A'
  };
  let currentEmployee = users[employer];
  let currentJob = currentEmployee.jobType;
  currentEmployee.jobType = jobs[currentJob];
  console.log(currentEmployee);


}




employees(2);

const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  employees: employees
};

module.exports = functions;
