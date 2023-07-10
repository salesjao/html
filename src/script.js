// Função para enviar uma mensagem do usuário
function sendMessage(option) {
  // Obter a opção selecionada pelo usuário
  var userInput = option || document.getElementById("user-input").value.trim();

  if (userInput !== "") {
    // Criar uma nova div para exibir a mensagem do usuário
    var userMessageDiv = document.createElement("div");
    userMessageDiv.className = "user-message";
    userMessageDiv.textContent = userInput;

    // Adicionar a div da mensagem do usuário ao container do chatbot
    var chatbotContent = document.getElementById("chatbot-content");
    chatbotContent.appendChild(userMessageDiv);

    // Limpar o campo de entrada de texto
    document.getElementById("user-input").value = "";

    // Enviar a mensagem para o chatbot processar
    processUserInput(userInput);
  }
}

// Função para processar a entrada do usuário e exibir a resposta do chatbot
function processUserInput(userInput) {
  // Lógica do chatbot para processar a entrada do usuário e gerar uma resposta
  var chatbotResponse = "";

  // Verificar a opção selecionada pelo usuário
  switch (userInput) {
    case "1":
      chatbotResponse =
        "Você selecionou a opção 1: Trocar senha. Por favor, insira seu nome:";
      break;
    default:
      chatbotResponse =
        "Desculpe, opção inválida. Por favor, escolha uma opção válida.";
  }

  // Criar uma nova div para exibir a resposta do chatbot
  var chatbotMessageDiv = document.createElement("div");
  chatbotMessageDiv.className = "chatbot-message";
  chatbotMessageDiv.textContent = chatbotResponse;

  // Adicionar a div da resposta do chatbot ao container do chatbot
  var chatbotContent = document.getElementById("chatbot-content");
  chatbotContent.appendChild(chatbotMessageDiv);

  // Rolagem automática para a nova mensagem
  chatbotContent.scrollTop = chatbotContent.scrollHeight;

  if (userInput === "1") {
    // Criar um campo de entrada de texto para o nome do usuário
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name-input";
    nameInput.placeholder = "Digite seu nome";
    nameInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        processNameInput();
      }
    });

    // Adicionar o campo de entrada de texto ao container do chatbot
    chatbotContent.appendChild(nameInput);
  }
}

// Função para processar o nome inserido pelo usuário
function processNameInput() {
  var nameInput = document.getElementById("name-input").value.trim();

  if (nameInput !== "") {
    // Chamar a API para validar a senha com o nome do usuário
    // Aqui você pode adicionar a lógica para chamar a API e validar a senha

    // Simulação de resposta da API
    var apiResponse = {
      success: true,
      message: "Senha alterada com sucesso!",
    };

    // Criar uma nova div para exibir a resposta da API
    var apiResponseDiv = document.createElement("div");
    apiResponseDiv.className = "chatbot-message";

    if (apiResponse.success) {
      apiResponseDiv.textContent = apiResponse.message;
    } else {
      apiResponseDiv.textContent =
        "Ocorreu um erro ao alterar a senha. Por favor, tente novamente mais tarde.";
    }

    // Adicionar a div da resposta da API ao container do chatbot
    var chatbotContent = document.getElementById("chatbot-content");
    chatbotContent.appendChild(apiResponseDiv);

    // Limpar o campo de entrada de texto do nome
    document.getElementById("name-input").value = "";

    // Rolagem automática para a nova mensagem
    chatbotContent.scrollTop = chatbotContent.scrollHeight;
  }
}
