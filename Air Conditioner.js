const temp = 90;
var acOn = false;

if ( temp>80 && acOn == false){
  console.log("Turn the AC on! ")
}
else if (temp>80 && acOn == true){
  console.log("The Ac is Busted! ") 
}
else if (temp<60 && acOn == true){
	console.log("Turn off the AC!")
}
else if (temp<80 && acOn == false){
	console.log("Cool Enough Leave it off.")
}
