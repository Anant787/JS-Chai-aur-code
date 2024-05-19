#Projects Related to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

``` javascript

console.log("Hitesh")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'blue')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow')
    {
      body.style.backgroundColor = e.target.id
    }
    
  })
})

```


## Project 2

``` Javascript

const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = `Please Give a valid Height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = `Please Give a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    result.innerHTML = `<span>${bmi}</span>`
  }
})

```

## Project 3 

``` Javascript

const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')


// let date = new Date()
// console.log(date.toLocaleTimeString());

// basic syntx :: setInterval(function(){} , 1000)  // 1000 in milli second

setInterval(function(){
  let date = new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)


```


## Project 4 
``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

// user input
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true


if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}


//function to valid the num : number is in between from 1 to 100      
//check the value is not below the 1 and morethan 100
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess < 1)
  {
    alert('Please enter a number greater than 1 ')
  }
  else if(guess > 100)
  {
    alert('Please enter a number less than 100 ')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over , Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}


//check the number is greater ,smaller or equal to random number
function checkGuess(guess){
  if(guess === randomNumber)
  {
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`number is tooo low`)
  }
  else if(guess > randomNumber){
    displayMessage(`number is tooo High`)
  }
}

// function is used to display the guess num :: used to clean up
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++                         // increase the count
  remaining.innerHTML = `${11-numGuess} `
}

// pass the guess and display the message
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}


function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - newGame} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })

}


```

## Project 5 

```javascript

//console.log('Project 5');


const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  
  </div>`
})

```



## project 6 

``` javascript

// Genrate a random number

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'

  for(let i =0 ; i<6 ; i++)
  {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
// console.log(randomColor())

let intervalId     // global 
const startChangingColor = function(){
  if(!intervalId)
  {
    intervalId = setInterval(changeBgColor,1000)
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }

}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor )

document.querySelector('#stop').addEventListener('click',stopChangingColor )


```


