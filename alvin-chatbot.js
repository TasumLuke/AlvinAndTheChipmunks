// Define the chatbot function
function alvinChatbot() {
  // Define the chatbot window element
  const chatbotWindow = document.createElement('div');
  chatbotWindow.setAttribute('id', 'alvin-chatbot');
  chatbotWindow.style.position = 'fixed';
  chatbotWindow.style.bottom = '20px';
  chatbotWindow.style.left = '20px';
  chatbotWindow.style.zIndex = '9999';
  chatbotWindow.style.backgroundColor = '#fff';
  chatbotWindow.style.borderRadius = '10px';
  chatbotWindow.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
  chatbotWindow.style.padding = '20px';
  chatbotWindow.style.width = '300px';
  chatbotWindow.style.maxHeight = '500px';
  chatbotWindow.style.overflowY = 'auto';
  
  // Define the chatbot input element
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Ask me anything about Alvin and the Chipmunks');
  input.style.border = 'none';
  input.style.outline = 'none';
  input.style.fontSize = '16px';
  input.style.padding = '10px';
  input.style.width = '100%';
  
  // Define the chatbot output element
  const output = document.createElement('div');
  
  // Define the search function
  function search(query) {
    // Perform the search using the Google Search API or a custom search function
    // For the purposes of this example, we will simply return some hardcoded search results
    const results = [
      { title: 'Alvin and the Chipmunks - Wikipedia', url: 'https://en.wikipedia.org/wiki/Alvin_and_the_Chipmunks' },
      { title: 'Alvin and the Chipmunks | Fox Movies', url: 'https://www.foxmovies.com/movies/alvin-and-the-chipmunks' },
      { title: 'Alvin and the Chipmunks - YouTube', url: 'https://www.youtube.com/playlist?list=PL7CZ4TImzrFlTqI5l09Az8modBIkqXuJt' },
      { title: 'Alvin and the Chipmunks (2007) - IMDb', url: 'https://www.imdb.com/title/tt0952640/' }
    ];
    
    // Display the search results in the chatbot output
    output.innerHTML = '';
    results.forEach(result => {
      const link = document.createElement('a');
      link.setAttribute('href', result.url);
      link.setAttribute('target', '_blank');
      link.style.display = 'block';
      link.style.marginBottom = '10px';
      
      const title = document.createElement('strong');
      title.textContent = result.title;
      link.appendChild(title);
      
      const url = document.createElement('span');
      url.textContent = result.url;
      link.appendChild(url);
      
      output.appendChild(link);
    });
  }
  
  // Define the submit function
  function submit() {
    // Get the user's query from the input element
    const query = input.value;
    
    // If the query is not empty, perform the search and clear the input element
    if (query.trim()) {
      search(query);
      input.value = '';
    }
  }
  
  // Add the input element
  chatbotWindow.appendChild(input);
  
  // Define the input event listener
  input.addEventListener('keydown', event => {
    // If the Enter key is pressed, submit the query
    if (event.keyCode === 13) {
      event.preventDefault();
      submit();
    }
  });
  
  // Add the output element
  chatbotWindow.appendChild(output);
  
  // Add the chatbot window element to the document body
  document.body.appendChild(chatbotWindow);
}

// Call the chatbot function to initialize the chatbot
alvinChatbot();
