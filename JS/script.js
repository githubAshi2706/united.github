function printPrice() {
 var movie = document.getElementById("movie").value;
 var name = document.getElementById("textbox").value;
 var time = document.getElementById("time").value;
 var date = document.getElementById("date").value;
 var price = getRBtnName('tickets') * 1;
 var food = getRBtnName('Combo')*1;
 var q= document.getElementById("quantityF").value * 1
 var quantity = document.getElementById("quantity").value * 1;
 var total = 0;
 var sentence = "";
 for(var i =0;i<quantity;i++)
 {
 	total += price;
 }
 for(i=0;i<q;i++)
 {
    total+=food;
 }
 sentence += "Name : "+ name;
 sentence += "<br>";
 sentence += "Movie : "+movie;
 sentence += "<br>";
 sentence += "Quantity : " +quantity;
 sentence += "<br>";
 sentence += "Date : " +date;
 sentence += "<br>";
 sentence += "Time : " +time;
 sentence += "<br>";

sentence +="Cost of Each : "+price; 
  sentence += "<br>";
  
  sentence +="No. of Combo : "+q; 
  sentence += "<br>";
  sentence +="Cost of Combo : "+food*q; 
  sentence += "<br>";
 sentence += 'Total cost: Rs '+total;
 document.getElementById("inserts").innerHTML=sentence;
// alert(movie+'\n'+name+'\n'+price+'\n'+quantity+'\n'+sentence);
}

function getRBtnName(GrpName) {
  var sel = document.getElementsByName(GrpName);
  var fnd = -1;
  var str = '';
  for (var i=0; i<sel.length; i++) {
    if (sel[i].checked == true) { str = sel[i].value;  fnd = i; }
  }
//  return fnd;   // return option index of selection
// comment out next line if option index used in line above  

  return str;
} 
