'use strict'

const restaurant ={
    name: 'Classico Mexicano',
    location: 'Lancaster Dr Ne, Salem Oregon  ',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

//Switching variables
let [first, , , second] = restaurant.categories;
console.log(first, second);
[first, second] = [second, first]
console.log(first, second);

// Receiving 2 return values from a function
console.log(restaurant.order(2,0))
const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse);