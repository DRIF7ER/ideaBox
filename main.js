var ideas = [];

// Query selectors
var saveButton = document.querySelector('.save_button');
var titleInput = document.querySelector('input[name="title"]');
var bodyInput = document.querySelector('input[name="body"]');
var ideasContainer = document.querySelector('.emptyBox');
var showIdeasButton = document.querySelector('.show-ideas-card')

// Event listeners
saveButton.addEventListener('click', saveIdea);
titleInput.addEventListener('input', enableSubmit);
bodyInput.addEventListener('input', enableSubmit);
ideasContainer.addEventListener('click', deleteCard);
showIdeasButton.addEventListener('click', toggleShowIdeas);

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
    id: ideas.length + 1,
    isFavorited: false  // Initialize isFavorited property
  };
  ideas.push(newIdea);
  
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

function deleteCard(event) {
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
    var index = Array.from(ideasContainer.children).indexOf(ideaCard);
    ideas[index].isFavorited = !ideas[index].isFavorited;
    ideaCard.classList.toggle('favorited');
  }
}

function toggleShowIdeas() {
  var buttonText = showIdeasButton.textContent.trim();
  if (buttonText === "Show Starred Ideas") {
    showIdeasButton.textContent = "Show All Ideas";
    showStarredIdeas();
  } else {
    showIdeasButton.textContent = "Show Starred Ideas";
    showAllIdeas();
  }
}

function showStarredIdeas() {
  ideasContainer.innerHTML = '';

  var favoritedIdeas = ideas.filter(function(idea) {
    return idea.isFavorited;
  });

  favoritedIdeas.forEach(function(idea) {
    var ideaCard = createIdeaCard(idea);
    ideasContainer.appendChild(ideaCard);
  });
}

function showAllIdeas() {
  ideasContainer.innerHTML = '';

  ideas.forEach(function(idea) {
    var ideaCard = createIdeaCard(idea);
    ideasContainer.appendChild(ideaCard);
  });
}

function createIdeaCard(idea) {
  var ideaCard = document.createElement('div');
  ideaCard.className = 'idea-card';
  ideaCard.innerHTML = `
      <h2>${idea.title}</h3>
      <p>${idea.body}</p>
      <button class="favorite-button">★</button>
      <button class="delete-button">X</button>`;
  
  var favoriteButton = ideaCard.querySelector('.favorite-button');
  favoriteButton.addEventListener('click', favoriteCard);

  if (idea.isFavorited) {
    ideaCard.classList.add('favorited');
  }

  return ideaCard;
}