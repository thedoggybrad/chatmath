document.addEventListener("DOMContentLoaded", function() {
  const userInput = document.getElementById("user-input");
  const chatArea = document.getElementById("chat");
  const sendBtn = document.querySelector(".fa-paper-plane");
  const form = document.getElementById('form');
  const infoBtn = document.getElementById('infoBtn');

  function handleSubmit(event) {
    event.preventDefault(); // Prevent refresh on form submission

    // If a user submits input, create a new bubble-container and bubble to show the user input in the chat
    if (userInput.value !== "") {
      let userString = userInput.value;

      let newBubbleContainer = document.createElement("div");
      newBubbleContainer.classList.add("chat-bubble-container", "user-bubble-container");
      newBubbleContainer.innerHTML = '<div class="profile-picture"><img src="images/user.png" height="100%" /></div>';

      let newBubble = document.createElement("div");
      newBubble.classList.add("chat-bubble", "user-bubble");
      newBubble.innerHTML = userInput.value;
      newBubbleContainer.appendChild(newBubble);
      chatArea.appendChild(newBubbleContainer);
      userInput.value = ""; // Clear the input field

      // Check if the user input is a mathematical equation
      if (isMathematicalEquation(userString)) {
        try {
          // Evaluate the mathematical equation
          const result = eval(userString);
          // Show the result in a chat bubble
          showResponse(result.toString()); // Convert the result to string before displaying
        } catch (error) {
          showResponse("Sorry, I couldn't evaluate the equation. I only accept the four basic operations using the symbols +, -, * and /. Also do not include a word in your equations.");
        }
      } else {
        showResponse("Sorry, I can only handle the 4 basic mathematical equations by using the symbols +, -, * or /.");
      }
    }
  }

  function isMathematicalEquation(input) {
    // Regular expression to match mathematical equations
    const equationRegex = /^[\d+\-*/%().\s]+$/; // Updated regex to allow decimal values
    return equationRegex.test(input);
  }

  function showResponse(response) {
    let newBubble2Container = document.createElement("div");
    newBubble2Container.classList.add("chat-bubble-container", "chat-gpt-bubble-container");
    newBubble2Container.innerHTML = '<div class="profile-picture"><img src="images/avatar.png" height="100%" /></div>';

    let newBubble2 = document.createElement("div");
    newBubble2.classList.add("chat-bubble", "chat-gpt-bubble");

    // Split the response into an array of characters
    const characters = response.split('');

    // Display each character with a delay
    let index = 0;
    const delay = 100; // Adjust this value to change the delay between each character

    function displayCharacter() {
      newBubble2.innerHTML += characters[index];
      index++;

      if (index < characters.length) {
        setTimeout(displayCharacter, delay);
      }
    }

    displayCharacter();

    newBubble2Container.appendChild(newBubble2);
    chatArea.appendChild(newBubble2Container);
    form.scrollIntoView();
    userInput.focus();
  }

  sendBtn.addEventListener("click", handleSubmit); // Handle clicks to the submit button
  form.addEventListener("submit", handleSubmit); // Handle default submit (e.g., pressing enter)
});
