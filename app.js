console.log('this the app.js');

// built in jQuery style functions
var addBtn = document.querySelector('#add-btn');
var newTodoInput = document.querySelector('#new-ToDo-Input');
var todoList = document.querySelector('#todo-list');
var doneList = document.querySelector('#done-list')

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newListItem = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newListItem.appendChild(newContent);
  todoList.appendChild(newListItem);
  newTodoInput.value = ''; //clearing the input value

};

addBtn.addEventListener('click', addTodo);
newTodoInput.addEventListener("keydown", function(){
  if (event.keyCode == 13) {
    addTodo();
  }
})


todoList.addEventListener('click', function(event){
  if (event.target.tagName === 'LI') {
    //find out the text om the LI  that the user cliked on
    //create new LI element with the text
    var doneLI = document.createElement('li')
    doneLI.className = 'done';
    var newContent = document.createTextNode(event.target.textContent);
    doneLI.appendChild(newContent);
    // append it to done-list
    document.querySelector('#done-list').appendChild(doneLI);
    //remove the orig LI or the LI that the user clicked on
    todoList.removeChild(event.target);
  }
});



// WORKS but not a good idea bc
//
// todoList.addEventListener('click', function(event){
//   // debugger
//   if (event.target.tagName === 'LI') {
//     event.target.className = 'done'
//     var moveLi = event.target;
//     doneList.appendChild(moveLi);
//   }
// })
//
// doneList.addEventListener('click', function(event) {
//   if (event.target.tagName === 'LI') {
//     event.target.className = '';
//     var moveLi = event.target;
//     todoList.appendChild(moveLi);
//   }
// })
