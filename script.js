// Função para mostrar apenas a seção desejada
function mostrarSecao(secaoID) {
    let secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => secao.style.display = 'none');
    document.getElementById(secaoID).style.display = 'block';
}

// Exibir "Sobre Mim" ao carregar a página
window.onload = function() {
    mostrarSecao('sobre');
};