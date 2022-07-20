/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billval = document.getElementById('billTotalInput')
const tippercent = document.getElementById('tipInput')
const numberOfpeople = document.getElementById('numberOfPeople')
const Totalperperson = document.getElementById('perPersonTotal')




// Get number of people from number of people div
let billpayers = Number(numberOfpeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number

  // let divide = Number(numberOfpeople.innnerText)
  let tipper = Number(tippercent.value)
  let temp = Number(billval.value)
  // console.log(divide, 'fuuuuu')
  console.log(billpayers)

  // get the tip from user & convert it into a percentage (divide by 100)
  let temp2 = tipper / 100


  // get the total tip amount
  temp1 = temp * temp2

  // calculate the total (tip amount + bill)
  let sum = temp + temp1

  // calculate the per person total (total divided by number of people)
  let ans = sum / billpayers
  console.log(ans)
  // update the perPersonTotal on DOM & show it to user
  Totalperperson.innerText = `$${ans.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  billpayers++


  // update the DOM with the new number of people
  numberOfpeople.innerText = `${billpayers}`

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  
  if (billpayers <= 1) {
    return
  }
  billpayers--

  
  numberOfpeople.innerText = `${billpayers}`

  
  calculateBill()
}