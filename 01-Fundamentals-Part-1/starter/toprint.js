////////////////////////////////////
// Switch vs if statement
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const day = days[new Date().getDay()]
console.log(day);
/*
switch (day) { // day === 'Monday'
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare theory video');
    break;
  case 'Wednesday':
  case 'Thursday':
      console.log('write code examples');
      break
  case 'Friday':  
    console.log('Record videos');  
    break
  case 'Saturday':
  case 'Sunday':
    console.log(' Enjoy the weekend 😎');
    break
  default:
    console.log('Not a valid day');
    break;
}*/
// If statement
if (day === 'Monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');  
} else if (day === 'Tuesday') {
  console.log('Prepare theory video');
} else if (day === 'Wednesday' || day === 'thursday') {
  console.log('write code examples');
} else if (day === 'Friday') {
  console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log(' Enjoy the weekend 😎');
} else {
  console.log('Not a valid day');
}
