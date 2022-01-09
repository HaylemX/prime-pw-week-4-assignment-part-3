console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = ['orange','pumpkin','pineapple'];


function addItem(item) {
  added = (basket.push(item));
  return true
}
console.log(addItem('kiwi'), basket);


function listItems(i) {
  for (let i=0; i<basket.length; i++) {
    console.log('listed items are : ', basket[i])
  }
  }
console.log(listItems());

function empty(refreshList) {
  refreshList = (basket.length = 0);
}
console.log(empty())
