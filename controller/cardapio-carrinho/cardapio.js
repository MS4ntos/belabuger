let carrinho = [];

function adicionarAoCarrinho(nomeProduto, preco, imagem) {
   let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
   const produtoExistente = carrinho.find(produto => produto.nome === nomeProduto);

   if (produtoExistente) {
       produtoExistente.quantidade += 1;
   } else {
       carrinho.push({
           nome: nomeProduto,
           preco: preco,
           imagem: imagem, // Armazenando o caminho da imagem
           quantidade: 1,
       });
   }

   localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Salva no Local Storage
   alert('Produto adicionado ao carrinho!');
   window.location.href = '../view/carrinho.html';
}

       function atualizarCarrinho() {
   const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupere o carrinho do localStorage
   const tabelaCarrinho = document.querySelector("tbody");
   tabelaCarrinho.innerHTML = ""; // Limpa a tabela antes de atualizar

   carrinho.forEach((produto, index) => {
       const total = produto.preco * produto.quantidade;
       const linha = `
           <tr>
               <td>
                   <div class="product">
                       <img src="${produto.imagem}" alt="produto"> <!-- Usando a imagem do produto -->
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
}


function alterarQuantidade(index, quantidade) {
   carrinho[index].quantidade += quantidade;
   if (carrinho[index].quantidade <= 0) {
       carrinho.splice(index, 1); // Remove o produto se a quantidade for zero
   }
   atualizarCarrinho();
}

function removerProduto(index) {
   carrinho.splice(index, 1);
   atualizarCarrinho();
}
