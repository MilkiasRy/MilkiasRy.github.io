



function calcTip() {
	var subtotalElem = document.getElementById("subtotal").value;
	var tipElem = document.getElementById("tip").value;
  var totalElem = document.getElementById('total');
 var total=((parseFloat(tipElem)/100)*parseFloat(subtotalElem))+parseFloat(subtotalElem);
  
	//var subtotal = 
	//var tip = 
	//var total = 100000;
	totalElem.innerHTML = '$' + total;


}

