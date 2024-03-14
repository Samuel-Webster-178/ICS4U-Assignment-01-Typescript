/* this is a program that calculates the area of a circle.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-01-01
*/

import { createSelection } from 'bun-promptx'

const computerMove = Math.floor(Math.random() * 3)

function RockPaperScissors(input, computerMove) {
  if (input == computerMove) {
    return "tie"
  } else if ((input + 1) % 3 == computerMove) {
    return "lose"
  } else {
    return "win"
  }
}

console.log(
  "Play Rock, Paper, Scissors against the computer."
)

const input = createSelection([
  { text: 'rock' },
  { text: 'paper' },
  { text: 'scissors' }
], {
  headerText: 'Choose your move: ',
  perPage: 5,
  footerText: 'Footer here'
})

const choices = ['rock', 'paper', 'scissors']
const userChoice = choices[input.selectedIndex]
const computerChoice = choices[computerMove]

console.log(`You played ${userChoice} and the computer played ${computerChoice}. You ${RockPaperScissors(input.selectedIndex, computerMove)}`)

console.log("\nDone.")
