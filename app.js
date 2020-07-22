var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("to-do");

    var item = document.createElement('div');


    // create input tag with text node
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    // input.setAttribute("id", "itm-todo");
    // input.setAttribute("readonly","true");
    // console.log("yes");

    var itmText = document.createTextNode(todo_item.value);
    input.appendChild(itmText);

    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "dlt");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)");

    list.appendChild(input);
    list.appendChild(delBtn);
    list.appendChild(editBtn);

    
    item.appendChild(list);

    todo_item.value = "";
}

function deleteItem(e) {
    e.parentNode.parentNode.remove();
}

function editItem(e) {
//   var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
//   e.parentNode.firstChild.nodeValue = val;
input.setAttribute("readonly","false");

}

// function deleteAll() {
//     list.innerHTML = ""
// }