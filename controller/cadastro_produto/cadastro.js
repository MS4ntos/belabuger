

let linhaEditando = null;


document.getElementById("product-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio automático do formulário

    // Pegando os valores dos campos
    const categoria = document.getElementById("product-category").value;
    const nome = document.getElementById("product-name").value.trim();
    const preco = document.getElementById("product-price").value.trim();
    const descricao = document.getElementById("product-description").value.trim();

    // Verifica se algum campo está vazio
    if (!categoria || !nome || !preco || !descricao) {
        alert("Por favor, preencha todos os campos antes de adicionar o produto.");
        return;
    }

    // Aqui vai a lógica de adicionar o produto (ex: renderizar na tabela ou salvar no Firebase)
    // Exemplo básico de renderizar na tabela:
    const tabela = document.querySelector("#product-table tbody");
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
    <td>${categoria}</td>
    <td>${nome}</td>
    <td>R$ ${parseFloat(preco).toFixed(2)}</td>
    <td>${descricao}</td>
    <td>
        <button class="btn-default btn-editar" type="button">Editar</button>
        <button class="btn-default btn-remover" type="button">Remover</button>
        
    </td>
`;


    tabela.appendChild(novaLinha);

    // Limpa os campos após adicionar
    document.getElementById("product-form").reset();
});


function deleteProduct(button) {
    // Remover o produto da tabela
    button.parentElement.parentElement.remove();
}

document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capturar o valor selecionado
    const category = document.getElementById('product-category').value;

    console.log('Categoria selecionada:', category);

    // Continue com o processo de adição do produto...
});

document.getElementById("btn-remove").addEventListener("click", () => {
    const nomeProduto = document.getElementById("product-name").value;
    
    // Exemplo: remove da tabela visual
    const linhas = document.querySelectorAll("#product-table tbody tr");

    linhas.forEach((linha) => {
        if (linha.children[1].textContent === nomeProduto) {
            linha.remove();
        }
    });

    // Se estiver usando Firebase ou outro backend, aqui vai a lógica de remoção real
});

// Delegação de eventos para remover produtos
document.querySelector("#product-table tbody").addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-remover")) {
        e.target.closest("tr").remove();
    }

    if (e.target.classList.contains("btn-editar")) {
        const linha = e.target.closest("tr");
        const colunas = linha.querySelectorAll("td");

        // Preenche os campos com os dados da linha
        document.getElementById("product-category").value = colunas[0].innerText;
        document.getElementById("product-name").value = colunas[1].innerText;
        document.getElementById("product-price").value = colunas[2].innerText.replace("R$ ", "").replace(",", ".");
        document.getElementById("product-description").value = colunas[3].innerText;

        linhaEditando = linha; // Salva a linha sendo editada
    }
});

document.getElementById("btn-update").addEventListener("click", function () {
    if (!linhaEditando) {
        alert("Selecione um produto para atualizar clicando no botão Editar.");
        return;
    }

    const categoria = document.getElementById("product-category").value;
    const nome = document.getElementById("product-name").value.trim();
    const preco = document.getElementById("product-price").value.trim();
    const descricao = document.getElementById("product-description").value.trim();

    if (!categoria || !nome || !preco || !descricao) {
        alert("Preencha todos os campos antes de atualizar o produto.");
        return;
    }

    const colunas = linhaEditando.querySelectorAll("td");
    colunas[0].innerText = categoria;
    colunas[1].innerText = nome;
    colunas[2].innerText = `R$ ${parseFloat(preco).toFixed(2)}`;
    colunas[3].innerText = descricao;

    linhaEditando = null; // Limpa a referência
    document.getElementById("product-form").reset();
});
