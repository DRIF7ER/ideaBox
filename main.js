var ideas = [];

//~~~~~~~querySelectors go here~~~~~~~//
var saveButton = document.querySelector('.save_button')
var titleInput = document.querySelector('input[name="title"]')
var bodyInput = document.querySelector('input[name="body"]')
var ideasContainer = document.querySelector('.emptyBox')
var deleteButton = document.querySelector('.delete-button')


//~~~~~~~eventListeners go here~~~~~~~//
saveButton.addEventListener('click', saveIdea);
titleInput.addEventListener('input', enableSubmit);
bodyInput.addEventListener('input', enableSubmit);
ideasContainer.addEventListener('click', deleteCard)


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
  if (ideas.length > 5) {
    ideasContainer.removeChild(ideasContainer.firstElementChild);
  }
  var ideaCard = document.createElement('div')
  ideaCard.className = 'idea-card'
  ideaCard.innerHTML = `
      <h2>${newIdea.title}</h3>
      <p>${newIdea.body}</p>
      <button class="delete-button">X</button>`
  ideasContainer.appendChild(ideaCard);
  
  titleInput.value = '';
  bodyInput.value = '';
  }
  
  function deleteCard(){
    if(event.target.classList.contains('delete-button')) {
    var ideaCard = event.target.closest('.idea-card')
    ideas = ideas.filter(function(idea){
    });
      ideaCard.remove();
  }
  }