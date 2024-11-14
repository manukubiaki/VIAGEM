// Função para alternar entre mostrar e esconder as respostas
function toggleAnswer(id) {
    const answer = document.getElementById('answer' + id);
    const button = document.querySelectorAll('.toggle-btn')[id - 1];
    
    // Verifica se a resposta está visível e alterna o estado
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block'; // Exibe a resposta
      button.textContent = 'Ocultar Tópicos'; // Altera o texto do botão
    } else {
      answer.style.display = 'none'; // Esconde a resposta
      button.textContent = 'Ver Tópicos'; // Altera o texto do botão
    }
  }
  