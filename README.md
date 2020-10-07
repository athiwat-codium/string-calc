## Introduction

The purpose of this program is to determine the outcome of a tennis game according to scoring rules.

## Rules

+ A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
+ The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.
+ If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
+ If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

## Alternate explanations

+ Each player can have either of these points in one game 0 15 30 40
+ If you have 40 and you win the ball you win the game, however there are special rules.
+ If both have 40 the players are deuce. a. If the game is in deuce, the winner of a ball will have advantage and game ball. b. If the player with advantage wins the ball he wins the game c. If the player without advantage wins they are back at deuce.


## Program Structure

### Setup

The function updateGameScore() encapsulates the conditionals into an array

### printScore() function

The printScore function is the main body of the program and contains two nested loops. 
The first loop is concered with the case that the two scores are equal and then evaluates various sub cases to determine 
if the conditions for love - love, fifteen - fifteen, thirty - thirty have been met. If none of those conditions are met the outcome is presumed to be a deuce

The second nested set of statements consider the more complex cases where either player leads by 3 points or more, and determines which player meets such conditons.


These two sets of loops test all possible conditions, cases with negative scores are considered and may break the programs logic


### decideGameWinner() function

The decideGameWinner function determines if the players have reached the conditions needed to win the game (lead of 2 or more), and prints the winning (leading) player.

