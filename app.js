'use strict';

//grab table content and create empty array to pop
var table = document.getElementById('table_content');
var data = [];

//create an array of obj
var cars = [{
  make: 'honda',
  model: 'accord',
  year: 2011,
  mileage: 87000
},
{
  make: 'toyota',
  model: 'corolla',
  year: 1999,
  mileage: 213000
},
{
  make: 'ford',
  model: 'escort',
  year: 1993,
  mileage: 98000
}];

//make new car with new constructor function (object instantiation)
cars.push(new Car('mitsubishi', 'eclipse', 2000, 186000));

//loop through objects
for (var i = 0; i < cars.length; i++) {
  data.push(
    '<td>' + cars[i].make + '</td>' +
    '<td>' + cars[i].model + '</td>' +
    '<td>' + cars[i].year + '</td>' +
    '<td>' + cars[i].mileage + '</td>'
  );
}

//append rows of objects
var newRow;
for (var j = 0; j < data.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}

//car constructor function
function Car(make, model, year, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}
