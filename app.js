var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("to-do");

    var item = document.createElement('div');
    item.setAttribute("class", "item");


    // create input tag with text node
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "itm-todo");
    input.setAttribute("readonly","true");

    input.value = todo_item.value;

    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "dlt");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class", "edit");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);


    item.appendChild(input);
    item.appendChild(editBtn);
    item.appendChild(delBtn);

    
    list.appendChild(item);

    todo_item.value = "";
}

function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.value);
  e.parentNode.firstChild.value = val;

}