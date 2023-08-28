const inputbox=document.getElementById('item');
const listCont=document.getElementById('list-container');

function addtask(){
	if(inputbox.value===''){
		alert("You must write something");
	}
	else{
		let li=document.createElement("li");
		li.innerHTML=inputbox.value;
		listCont.appendChild(li);
		let span=document.createElement("span");
		span.innerHTML="\u00d7";
		li.appendChild(span);
	}
	inputbox.value="";
	saveData();
}

listCont.addEventListener("click", function(e){
	if(e.target.tagName==="LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
},false);

function saveData(){
	localStorage.setItem("data",listCont.innerHTML);
}
function showList(){
	listCont.innerHTML=localStorage.getItem("data");
}
showList();