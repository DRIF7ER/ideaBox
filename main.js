//~~~~linking data model~~~~//
var ideas = [];

//~~~~~~~querySelectors go here~~~~~~~//
var saveButton = document.querySelector('.save_button')
var titleInput = document.querySelector('input[name="title"]')
var bodyInput = document.querySelector('input[name="body"]')


//~~~~~~~eventListeners go here~~~~~~~//
saveButton.addEventListener('click', saveIdea)


//~~~~~~~functions go here~~~~~~//
function saveIdea(){
  var title = titleInput.value;
  var body = bodyInput.value;
  var newIdea = {
    title: title,
    body: body,
    id: ideas.length+1
  };
  ideas.push(newIdea);
  console.log(newIdea);
}
