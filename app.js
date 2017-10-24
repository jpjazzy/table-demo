'use strict';
/*
* General layout:
* Create Constructors
* Create Constructor.prototype.methods()
* Create Objects using constructors
*/


//grab table content and create empty array to pop
var table = document.getElementById('table_content');
var data = [];

//create an array of obj -- Commented out to create with constuctors
/*
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
*/

//car constructor function
function Car(make, model, year, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

//make new car with new constructor function (object instantiation)
var cars = [];
cars.push(new Car('mitsubishi', 'eclipse', 2000, 186000));
cars.push(new Car('honda', 'accord', 2011, 87000));
cars.push(new Car('toyota', 'corolla', 1999, 213000));
cars.push(new Car('ford', 'escort', 1993, 98000));

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
