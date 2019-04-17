// var h =document.createElement('h1');
// var myValue = document.createTextNode('Hello World');

// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);

//while loop
// var val = 5;

// while(val>0){
// 	console.log(val);
// 	val--;

// }
var ul = document.getElementById('list');
var li;

var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton =document.getElementById('remove');
removeButton.addEventListener('click',removeItem);



function addItem(){
	var input =document.getElementById('input');
	var item = input.value;
	ul = document.getElementById('list');
	var textnode=document.createTextNode(item);

	if(item === ''){
		return false;
		// var p = document.createTextNode('p');
		// p.innerHTML="Enter your todo";
	}
	else{
		//create li 
		li=document.createElement('li');
		//create checkbox
		var checkbox= document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.setAttribute('id','check');
		//crate label

		var label=document.createElement('label');
		label.setAttribute('for','item');//optional

		//add these elements on the web page

		ul.appendChild(label);
		li.appendChild(checkbox);
		label.appendChild(textnode);
		li.appendChild(label);
		ul.insertBefore(li,ul.childNodes[0]);
		
		setTimeout(() => {
			li.className='visual';
		}, 2000);

		input.value='';
	}
}

function removeItem(){
	li=ul.children
	for(let i=0 ;i<li.length;i++){
		while(li[i]&& li[i].children[0].checked){
			ul.removeChild(li[i]);
		}
	}
}
