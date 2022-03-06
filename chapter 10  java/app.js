// var score = "0"
// var x = prompt("ARE YOU GIRL");
// if (Q1 === "YES") {
// score ++;
// } 
// else{
//     score =-2;
    
// } 
//   var y = prompt("ARE YOU STUDENT ")
//     if(Q2 === "YES"){
//         score ++;
//     }
//     else{
//         score =-2;
//     }
//     var y = prompt("Qualification ")
//     if(Q3 === "YES"){
//         score ++;
//     }
//     else{
//         score =-2;
//         if(qualification === "master"){
//             score=score-2
//         }else{score= score-1}
//     }
//     alert ('your score is :'+''  +score);

    
     var score = 0
     var education = prompt("Education")
     var q1 = prompt("what is extension js")
     if(q1 === "js"){
         score++
     }else{
         if (education ==="masters"){
             score= score-1
         }
     }
    alert("your score is"+ score)
    
    
    
    