//~~~~linking data model~~~~//
var ideas = [];

//~~~~~~~querySelectors go here~~~~~~~//
var saveButton = document.querySelector('.save_button')
var titleInput = document.querySelector('input[name="title"]')
var bodyInput = document.querySelector('input[name="body"]')
var ideasContainer = document.querySelector('.emptyBox')


//~~~~~~~eventListeners go here~~~~~~~//
saveButton.addEventListener('click', saveIdea);
titleInput.addEventListener('input', enableSubmit);
bodyInput.addEventListener('input', enableSubmit);


//~~~~~~~functions go here~~~~~~//


saveButton.disabled = true;

function enableSubmit(){
  var isValid = titleInput.value.trim() !== "" && bodyInput.value.trim() !== "";
  saveButton.disabled = !isValid;
}

function saveIdea(){
  if (saveButton.disabled) {
    return;
  }

  var title = titleInput.value;
  var body = bodyInput.value;
  var newIdea = {
    title: title,
    body: body,
    id: ideas.length+1
  };
  ideas.push(newIdea);
  console.log(newIdea);

var ideaCard = document.createElement('div')
ideaCard.className = 'idea-card'
ideaCard.innerHTML = `
    <h2>${newIdea.title}</h3>
    <p>${newIdea.body}</p>`;
ideasContainer.appendChild(ideaCard);

titleInput.value = '';
bodyInput.value = '';
}

