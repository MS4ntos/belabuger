function carregarCarrinho() {
    // Pega os produtos salvos no Local Storage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const tabelaCarrinho = document.getElementById('carrinho-body');
    const subtotalElement = document.getElementById('subtotal');
    tabelaCarrinho.innerHTML = ''; // Limpa a tabela antes de atualizar
    let subtotal = 0;

    carrinho.forEach((produto, index) => {
        const total = produto.preco * produto.quantidade;
        subtotal += total;

        const linha = `
            <tr>
                <td>
                    <div class="product">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <div class="info-product">
                            <div class="nome">${produto.nome}</div>
                            <div class="categoria">Categoria</div>
                        </div>
                    </div>
                </td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td>
                    <div class="qty">
                        <button onclick="alterarQuantidade(${index}, -1)">-</button>
                        <span>${produto.quantidade}</span>
                        <button onclick="alterarQuantidade(${index}, 1)">+</button>
                    </div>
                </td>
                <td>R$ ${total.toFixed(2)}</td>
                <td>
                    <button class="remove" onclick="removerProduto(${index})"><i class='bx bx-x'></i></button>
                </td>
            </tr>
        `;
        tabelaCarrinho.insertAdjacentHTML('beforeend', linha);
    });

    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
}

function alterarQuantidade(index, quantidade) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho[index].quantidade += quantidade;
    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1); // Remove o produto se a quantidade for zero
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o Local Storage
    carregarCarrinho(); // Atualiza a tela
}

function removerProduto(index) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o produto
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o Local Storage
    carregarCarrinho(); // Atualiza a tela
}

window.onload = function() {
    carregarCarrinho(); // Carrega os produtos quando a página for aberta
}

function finalizarCompra() {
    Swal.fire({
        title: 'Compra Finalizada!',
        text: 'Obrigado por comprar com a gente! ❤️',
        icon: 'success',
        confirmButtonText: 'Voltar ao Início',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
            left top
            no-repeat
        `
    }).then(() => {
        // Redireciona para o início
        window.location.href = "../view/tela_inicio.html";
    });
}
