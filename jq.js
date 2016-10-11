console.log('jquery version of doer');

// $ ref jquery.  $ in variable is a naming convention
//jquery always returns a collection
// $() == jQuery()
// convert a DOM object to Jquery by adding $(DOM_OBJECTS)

var $newTodoInput = $('#new-ToDo-Input');
var $addBtn = $('#add-btn');
var $todoList = $('#todo-list');
var $doneList = $('#done-list');

var addTodo = function() {
  //get the value from input
  //create new LI with value
  var $newLI = $('<li>').text( $newTodoInput.val() );

  //append to existing UL
  $todoList.append( $newLI);

  //clear input field
  $newTodoInput.val('');

}


$addBtn.on('click', addTodo);
$newTodoInput.on("keydown", function(){
  if (event.keyCode == 13) {
    addTodo();
  }
})


$todoList.on('click', 'li', function(){
  $(event.target);
  // create new LI
  var $doneLI = $('<li>')
    .addClass('done')
    .text(event.target
    .textContent)
  //append to done UL
  $doneList.append( $doneLI  );

  // remove exist LI
  $(event.target).remove();

})
