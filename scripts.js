// Abrir modal de login
document.querySelector('.btn-login').addEventListener('click', function() {
    document.getElementById('modal-login').style.display = 'block';
});

// Abrir modal de cadastro
document.querySelector('.btn-cadastro').addEventListener('click', function() {
    document.getElementById('modal-cadastro').style.display = 'block';
});

// Fechar modais ao clicar no botão de fechar
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Fechar modais ao clicar fora da caixa de diálogo
window.addEventListener('click', function(event) {
    var modais = document.querySelectorAll('.modal');
    modais.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
