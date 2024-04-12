var ideas = [];

// Query selectors
var saveButton = document.querySelector('.save_button');
var titleInput = document.querySelector('input[name="title"]');
var bodyInput = document.querySelector('input[name="body"]');
var ideasContainer = document.querySelector('.emptyBox');

// Event listeners
saveButton.addEventListener('click', saveIdea);
titleInput.addEventListener('input', enableSubmit);
bodyInput.addEventListener('input', enableSubmit);
ideasContainer.addEventListener('click', deleteCard);

// Functions
saveButton.disabled = true;

function enableSubmit() {
  var isValid = titleInput.value.trim() !== "" && bodyInput.value.trim() !== "";
  saveButton.disabled = !isValid;
}

function saveIdea() {
  if (saveButton.disabled) {
    return;
  }

  var title = titleInput.value;
  var body = bodyInput.value;
  var newIdea = {
    title: title,
    body: body,
    id: ideas.length + 1
  };
  ideas.push(newIdea);
  console.log(newIdea);
  if (ideas.length > 3) {
    ideasContainer.removeChild(ideasContainer.firstElementChild);
  }
  var ideaCard = document.createElement('div');
  ideaCard.className = 'idea-card';
  ideaCard.innerHTML = `
      <h2>${newIdea.title}</h3>
      <p>${newIdea.body}</p>
      <button class="favorite-button">★</button>
      <button class="delete-button">X</button>`;
  ideasContainer.appendChild(ideaCard);

  titleInput.value = '';
  bodyInput.value = '';
  var favoriteButton = ideaCard.querySelector('.favorite-button');
  favoriteButton.addEventListener('click', favoriteCard);
}

function deleteCard() {
  if (event.target.classList.contains('delete-button')) {
      var ideaCard = event.target.closest('.idea-card');
      ideaCard.style.animation = 'fade-out 0.5s backwards';
      setTimeout(() => {
          ideaCard.remove();
      }, 500); 
  }
}
function favoriteCard(event) {
  if (event.target.classList.contains('favorite-button')) {
    var ideaCard = event.target.closest('.idea-card');
    ideaCard.classList.toggle('favorited');
  }
}

