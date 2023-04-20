                            //Task 1:

//Calculate the zakat value, first, create a variable named "zakatPercentage" and
//store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//named "userInput" and take the input from the user using the prompt. Make sure
//the input value is of a type number by converting the input string to a number
//using a suitable method. Then, create a variable named "result" and assign its value
//to the multiplication of the zakat percentage and user input. Finally, use an alert
//message to display the calculated zakat value. The message should look like this:
//"Your zakat value is xxx".

alert("calculate zakat value")                
var zakatPercentage = 0.025                           
var user_input = +prompt("kindly enter your amount")
var result = zakatPercentage*user_input                
alert( "your zakat is="+result)                       
alert("Jazak Allah!")


                            //Task 2:

//calculate the fitrah amount, first, ask the user to enter the total number of family
//members using the prompt and store the value in a variable called
//"familyMembers". Next, ask the user to choose a fitrah method by providing them
//options using the prompt, and store the selected method and its price in variables.
//Then, use an if-else block to check the user's input and calculate the fitrah amount
//by multiplying the selected method's price with the number of family members.
//Finally, display the calculated fitrah amount using an alert message.

alert("calculate your zakat!")
var wheat = 320                                         
var dates = 2800                                        
var raisin = 4800
var oats = 480
var familyMembers = +prompt("enter your family member")      
var fitrahvalue = +prompt(" wheat: 320 , oats: 480, dates: 2800, raisin: 4800")      
var result = familyMembers*fitrahvalue                      
alert("your fitrah is"+result)                               

                            //Task 3:

//Create a program that generates a random number between 1 and 10 and stores it
//in a variable called "secretNumber". Then, ask the user to enter a guess for the
//secret number using a prompt.
//Use an if-else statement to check if the user's guess matches the secret number. If
//the guess is correct, display a message using an alert saying "Congratulations! You
//guessed the secret number". Otherwise, if the guess is too high or too low, display
//an appropriate message informing the user to guess again.

var secretNumber =  8                                          
var userguess = +prompt("guess the secret number") 
if(userguess == secretNumber){                                 
  alert( "Congratulations! you guess the secret number");
}
else if(( userguess < 8)){ 
  alert ( "your guess is too low! guess again.");
}
else if( userguess > 8 )
 {alert( "your guess is too high! guess again.") ;
 }
else {alert("try again")}    

                            //Task 4:

//Create a program that asks the user to enter a name, and then prints out the name
//with the first letter capitalized (Make your name in capitalized case).

var yourname = prompt("enter your name")

var capitalname =[]
var capitalizedname=[]

var first= yourname.slice(0,1)
var f = first.toUpperCase()

capitalname.push(f)

var second =yourname.slice(1)
var s= second.toLowerCase()
capitalizedname.push(s)

  
alert(capitalname + capitalizedname)

 

                        //Task 5:

//In this task, you will be creating two empty arrays called "contactNumbers" and
//"contactNames". Using the prompt, you will ask the user to enter a contact number
//and contact name. You will then push these values into their respective arrays
//using the push method. After adding all the contacts, you will display the contact
//numbers and names in the console. To do this, you will need to use a for loop to
//iterate through both arrays and log each element to the console.
//Make sure to use descriptive variable names and comment on your code for clarity.

var contactNames = []
var contactNumbers = []

for (u = 0; u < 5; u++) 
{ var username = prompt("enter contact name")
contactNames.push(username)
  }

  for (u = 0; u < 5; u++) 
{ var usernumber = prompt("enter contact number")
contactNumbers.push(usernumber)
  }

  for (u = 0; u < 5; u++) 
{ console.log (contactNames[u]  + contactNumbers[u])
}
 

                           //Task 6:

//Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining.

var dishes = [ "pizza" , "pasta", "lasagna", "calzone", "pizzafries", "garlicbread"]
var userposition = +prompt("enter the position of dish you want to remove from the list. there is six dishes: 1. pizza \ 2. pasta \ 3. lasagna \ 4. calzone \ 5. pizzafries \ 6. garlicbread")
var removeddish =  dishes.splice(userposition, 1)
console.log ("the removed dish is "+removeddish)
 
console.log("remining dishes are ")
for (r = 0; r < dishes.length; r++) {
    console.log(r + ": " + dishes[r]) }
    console.log(  "the remaining dishes are "+ dishes.length)


    //Task 7:

//Create a program that asks the user for their nationality, gender, and age using the prompt
//function. The program should then use nested if-else statements to determine if the
//person is eligible to vote.
//First, the program should check if the person is Pakistani or Indian. If they are not, the
//program should display a message saying they are not eligible to vote.
//If they are Pakistani or Indian, the program should then check their gender. If the person is
//male and over the age of 18, they are eligible to vote. If the person is female and over the
//age of 18, the program should ask if they are married. If they are married, they are eligible
//to vote. If they are not married, they are not eligible to vote.
//If the person is under 18, the program should display a message saying they are not eligible
//to vote.


var nationality = prompt("enter your nationality")
var gender =  prompt("enter your gender")
var age = +prompt("enter your age")
 
if((nationality == 'Pakistani' || nationality == 'Indian')){
    alert("you are eligible to cast vote")}

 if(( gender == 'Male' && age>=18)){
    }
     if( gender== 'female' && age>=18){
        var marritalstatus = prompt("what is your marrital status  \ 1. married \ 2. unmarried")
        marritalstatus.toLowerCase
      if(marritalstatus == 'married') {
            alert("you are eligible to cast vote")
        }
    else if (marritalstatus == 'unmarried')
        {alert("you are not eligible to cast vote")
    }
    }
    else 
    { alert("you are not eligible")
    } 



                                //Task 8:

//You have an array of that contains the name of Pakistani Teams Player selected for
//WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//India, So make an array of final team players (11 Players) that will be playing in tomorrows
//match from the WorldCupSquad array.
//(Hint : Make sure it should not disturb the array that contains 15 players instead you have
//to make a copy of this array)

var WorldCupSquad = [" shahidafridi" , "babar" , "rizwan" , "shaheenafridi" , "naseem" , "husnain" , "asif" , "sarfraz" , "khushdil" , "iftikhar" , "hafeez" , "shoaib" , "hassanali" , "shadab" , "imad" ]
var finalteam =[]
var finalteam=WorldCupSquad.slice(0,11)
alert(" the final team is :"+finalteam )