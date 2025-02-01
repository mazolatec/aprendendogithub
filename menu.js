

// Função que cria e insere o menu na página
function loadMenu() {
  // Define o HTML do menu como uma string
  const menuHTML = `
  <!-- Navbar (Menu de Navegação) -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    
    <!-- Container do menu (Mantém alinhado ao conteúdo da página) -->
    <div class="container-fluid">

      <!-- LOGO -->
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="images/Logo-Chip-0101.svg" class="logo me-2" alt="Logo"> 
        Git Commands  <!-- Nome do site ao lado do logo -->
      </a>

      <!-- BOTÃO DO MENU PARA MOBILE (Ícone de "Hambúrguer") -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
        aria-label="Alternar navegação">
        <span class="navbar-toggler-icon"></span> <!-- Ícone do menu -->
      </button>

      <!-- ITENS DO MENU -->
      <div class="collapse navbar-collapse" id="navbarNav"> 
        <ul class="navbar-nav ms-auto"> <!-- ms-auto = alinha itens à direita -->

          <!-- LINK PARA ANOTAÇÕES -->
          <li class="nav-item">
            <a class="nav-link" href="#notas">
               Anotações  <!-- Ícone + Nome do link -->
            </a>
          </li>

          <!-- LINK PARA COMANDOS BÁSICOS -->
          <li class="nav-item">
            <a class="nav-link" href="#comandos-basicos">
               Comandos Básicos
            </a>
          </li>

          <!-- LINK PARA BRANCHING -->
          <li class="nav-item">
            <a class="nav-link" href="#branching">
               Branching
            </a>
          </li>

          <!-- LINK PARA COMANDOS REMOTOS -->
          <li class="nav-item">
            <a class="nav-link" href="#remote">
               Remoto
            </a>
          </li>

          <!-- LINK PARA COMANDOS AVANÇADOS -->
          <li class="nav-item">
            <a class="nav-link" href="#advanced">
               Avançado
            </a>
          </li>
  <!-- LINK PARA BOAS PRATICAS -->
          <li class="nav-item">
            <a class="nav-link" href="#boaspraticas">
               Boas Praticas
            </a>
          </li>
        </ul>
      </div> <!-- FIM DO CONTAINER DOS LINKS -->
      
    </div> <!-- FIM DO CONTAINER FLUID -->
  </nav> <!-- FIM DA NAVBAR -->`;

  // Inserir o menu no elemento com ID "menu-placeholder"
  document.getElementById("menu-placeholder").innerHTML = menuHTML;
}

// Aguarda o carregamento completo do DOM antes de inserir o menu na página
document.addEventListener("DOMContentLoaded", loadMenu);
