const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        // Busca o elemento que está visível no momento (com a classe .ativo)
        const atual = document.querySelector('.ativo');
        
        // Monta o ID do próximo passo (ex: 'passo-11') baseado no atributo data-proximo do botão
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a visibilidade do passo atual
        atual.classList.remove('ativo');
        
        // Adiciona a visibilidade ao próximo passo encontrado pelo ID
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})