
// // var sum = 0

// // for(let a=0; a < 5 ; a++){
// //     // console.log(a + 1)
// //     sum  = sum +  a;

// //     console.log(sum)
// // }

// var num="111000101000011111111111111100000000001"
// var num1=[]
// var num2=[]

// for(let i=0; i < num.length; i++){

//     if(num[i]=="1") {

//         num1.push(i)
//     }
//     else{
//         num2.push(i)      
//     }

// }
// if(num1.length > num2.length){
//     console.log("1's are greater than 0")
// }
// else{
//     console.log("0s are more than 1's")
// }


//  var song="Youaregoodtome"
//  var word= "tom"
//  var songs=[]
//  var word2="red"
//  var final=[]



//    for(let a=0; a < song.length; a++){
//       if(song[a] === "t" || song[a] == "o" || song[a] == "m"){
//          songs.push(song[a])
//       }
//      if (song[a] === "r" || song[a] === "e" || song[a] === "d") {

//             final.push(song[a]);


//         }
//         if (song[a] === "r" || song[a] === "e" || song[a] === "a" || song[a]==="d") {

//             final.push(song[a]);


//         }

//     }


// let a = songs.slice(-3);
// let b = a.join('');
// let c=final.splice(3,1 )
// console.log(c)
//  final.push(b);


// console.log("final" ,final.join(''));

// let state="Frank is bored and he needs koko 2 cedies and koose bread 2  one is 3,  cedies find the total amount"
// let koko=[];
// let bread=[];
// let sum=[];



//     for(let a=0; a<state.length; a++){
//        if(state[a]==="2"){
//         koko.push(state[a])


//        }
//        if(state[a]==="3"){
//         bread.push(state[a])

//        }


// }

// // console.log(d)
//  sum.push(koko[0] *1 )
//  sum.push((bread[0] *2 ))
// // console.log(koko[0] + (bread[0] *2))
// console.log(sum[0] + sum[1]);


// let percy="percy a lonely boy have plans with his boys to go to the cinema the prices of the movies are 270, 500, and 345 their total budget was 10,000 cedies how many movies can they afford find the total amount of movies they can afford "
// // // // let movies=[]
// // // // let budget=[10000]
// // // // let totamount=0
// // // let arr = perc_y.split(",");
// function hasNumber(str) {
//     // return /\d/;
// }
// console.log(hasNumber(perc_y))

// // let nun1 = percy.includes("270")
// // let nun2 = percy.includes("500")
// // let nun3 = percy.includes("345")

// // let nun4 = percy.indexOf("270")
// // console.log(nun4) 
// // console.log(percy[93])


// // for(let w=0; w<5;w++){

// // }
// // console.log(movies)
// // let result = percy.includes("270")
// // console.log(result)

//  let percy = "percy a lonely boy have plans with his boys to go to the cinema the prices of the movies are 270, 500, and 345 their total budget was 10000 cedies";
// let arr = []
// // Function to find and print all numbers in a string
// function printAllNumbersFromString(inputString) {
//     // Use a regular expression to find all occurrences of numbers in the string
//     const matches = inputString.match(/\d+/g);
  
//     // Check if any numbers are found
//     if (matches) {
//       // Convert each matched string to an actual number and print
//       const numbers = matches.map(match => parseInt(match, 10));
//       console.log("Numbers found in the string:", numbers);
//     } else {
//       console.log("No numbers found in the string.");
//     }
//   }
  
//   // Example usage
//   const stringWithNumbers = "This string contains numbers like 123 and 456.";
  
//   printAllNumbersFromString(percy);
  
  
// // Extract movie prices from the string
// let moviePrices = percy.match(/\d+/g).map(Number);

// // Total budget
// let totalBudget = 10000;

// // Calculate the total cost of the movies
// let totalCost = moviePrices.reduce((sum, price) => sum + price, 0);

// // Determine how many movies they can afford
// let numberOfMoviesAffordable = Math.floor(totalBudget / totalCost);

// console.log("Total cost of movies:", totalCost);
// console.log("Number of movies they can afford:", numberOfMoviesAffordable);

// let Movie1_Price = 275;
// let Movie2_Price = 500;
// let Movie3_Price = 345;

// let Budget = 10000;
// let count_Movies = 0;
// let TotalMovieCost = Movie1_Price+Movie2_Price+Movie3_Price;
// let totalNumberOfMovies = 0;


// while (true) {
//     if (Budget > TotalMovieCost) {
//         Budget -= TotalMovieCost;
//         count_Movies++;
//     } else {
//         break;
//     }


// }
// totalNumberOfMovies = count_Movies*3;
// console.log(totalNumberOfMovies)

// let sentence = "percy a lonely boy have plans with his boys to go to the cinema the prices of the movies are 275, 500, and 345 their total budget was 1000 cedies how many movies can they afford find the total amount of movies they can afford ";

// let movies=[]
// for(let a=0; a<sentence.length;a++){
//     if(sentence[a]==="2" || sentence[a]==="5" || sentence[a]==="0" || sentence[a]==="3" || sentence[a]==="1"){
//       movies.push(a)
//       console.log(movies)
     
      
// }
// }
// console.log(sentence.substring(movies[0],movies[1]+1))
// console.log(sentence.substring(movies[2],movies[4]+1))
// console.log(sentence.substring(movies[5],movies[6]+1))
// console.log(sentence.substring(movies[7],movies[10]+1))

// let priceMovies1=sentence.substring(movies[0],movies[1]+1)
// let priceMovies2=sentence.substring(movies[2],movies[4]+1)
// let priceMovie3=sentence.substring(movies[5],movies[6]+1)
// let  budget=sentence.substring(movies[7],movies[10]+1)

// let total =0;
// let prices=[priceMovies1,priceMovies2,priceMovie3]
//      console.log( prices[0])

// for(let c=0; c<prices.length;c++){
//     total = total + prices[c]*1;
//     if(total> budget){
//         console.log(c)

//     }
// }

// console.log(total)

// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);


// console.log(fruits.get("apples"))



// console.log((priceMovies1 * 1)  + (priceMovies2 * 1) + (priceMovie3 * 1))





// console.log(movies)
// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;

//   console.log(text)
// })

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(element) {
//   console.log(element);
// });

function arithmetic(a, b, operation)
{
  if (operation==="add") {
    return a + b;
  }
  else if (operation==="subtraction"){
    return a - b;

  }
  else if(operation==="multiplication"){
    return a * b;
  }
  else if(operation==="mod"){
    return a % b
  }
  
  
   

}

console.log(arithmetic(3,2, "mod"))
     
        


