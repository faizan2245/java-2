var marks1= +prompt("Enter marks of subject 1") ;
var marks2= +prompt("Enter marks of subject 2") ;
var marks3= +prompt("Enter marks of subject 3") ;
var marks4= +prompt("Enter marks of subject 4") ;
var marks5= +prompt("Enter marks of subject 5") ;
console.log(marks1);
console.log(marks2);
console.log(marks3);
console.log(marks4);

var totalMarks = 500;
var total= marks1 + marks2 + marks3 + marks4 + marks5;
var perc = total/totalMarks*100;
console.log(perc);

var age= +prompt("Enter Your Age ") ;
var studentcard=true;
var officer=false;
var assistant=true;

if(age > 18){
console.log("Allow");
}

else if(perc == 18 && studentcard==true ){
    console.log(" Issue Id Crad ");
    }
    else if(perc = 18 && studentcard==false ){
        console.log("  Id Crad latter issue ");
        }
    
    else{
        console.log("No Issue");
    }