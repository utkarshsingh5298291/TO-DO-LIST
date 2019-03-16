		function display(){

			var field =document.getElementById("rawinput").value
			var text =document.createTextNode(field)
			var newField =document.getElement("text")
			newField.appendChild(text)
			document.getElementById("display").appendChild(newField)

		}
	