// Função para mostrar uma mensagem de boas-vindas na consola
console.log("Sistema iniciado. Bem-vindo ao Protocolo NOISE.");

// Esperar que a página carregue para adicionar os eventos
window.onload = function() {
    
    // Validar o formulário de contacto
    var formulario = document.getElementById("formContactos");

    // Só adiciona o evento se o formulário existir na página
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Impedir que a página faça refresh
            evento.preventDefault();

            // Buscar os valores dos campos
            var nome = document.getElementById("nome").value;
            var mensagem = document.getElementById("mensagem").value;

            if(nome.length < 3) {
                alert("Erro: O nome é muito curto.");
                return;
            }

            if(mensagem === "") {
                alert("Erro: A mensagem não pode estar vazia.");
                return;
            }

            alert("Olá " + nome + ". A sua mensagem encriptada foi enviada com sucesso!");
            
            formulario.reset();
        });
    }
}
