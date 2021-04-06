
function myFunction() {
  var newItem = document.createElement("div");
  var inputText = document.getElementById("message").value;
  var textnode = document.createTextNode(inputText);
  newItem.appendChild(textnode);

  var list = document.getElementById("demo");
  list.insertBefore(newItem, list.childNodes[0]);
}
