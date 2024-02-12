This is a Node Js Console App that;
(i) Confirms the Atm card type, whether Visa or Master card based on Bank Standard Card Identification Number system.

(ii) Verifies the Atm card type requirements based on Bank Standard Atm Card Number system.

How To Use
i. Clone this repo to your local machine, using git clone {repo-url}. ii. Run the following code for program to accept user input, npm install prompt-sync. iii. Run the code through the terminal, using node index.js.

Detailed description of the Regular Expression Pattern (RegEx):
So, in the first RegEx pattern, visaCardRegEx = /^4(\d){3}(\s?(\d){4}){3}$/

The ^4 in the RegEx tells the system that the 4 must be matched first.
(\d){3} says that 3 digits must be matched after the preceeding digit.
(\s?(\d){4}) means there could be a whitespace before a group of 4 digits.
{3}$ means the preceeding group of characters and digits must be matched 3 times before the criteria is completed
Then, in the second RegEx pattern, masterCardRegEx = /^51-5{2}(\s?(\d){4}){3}$/

The ^5 in the RegEx tells the system that the 5 must be matched first, followed by a digit withing the range '1-5'.
(\d){2} says that 2 digits must be matched after the preceeding digit.
(\s?(\d){4}) means there could be a whitespace before a group of 4 digits.
{3}$ means the preceeding group of characters and digits must be matched 3 times before the criteria is completed
This program will be updated, if there are any modifications made to it.