Introdução

O projeto teste-restaurante é um sistema web que parece ser um site de restaurante com funcionalidades de cadastro de produtos e carrinho de compras.

Tecnologias Utilizadas

Linguagem de programação: JavaScript
Framework: Express.js e Node.js
Banco de dados: Firebase Authentication e Firestore Database
Front-end: HTML, CSS e JavaScript
Arquivos e Diretórios

package.json: arquivo que contém as dependências do projeto
view/: diretório que contém os arquivos HTML do projeto
   tela_login: caso ja tenha se registrado, faça seu login
   tela_registro: se não houver conta, então se registre
   cadastro_produto.html: página de cadastro de produtos
   tela_cardapio.html: página do cardápio
   tela_inicio.html: página inicial
   carrinho.html: página do carrinho
   
controller/: diretório que contém os arquivos JavaScript do projeto
   cadastro_produto/: diretório que contém os arquivos JavaScript relacionados ao cadastro de produtos
   cadastro.js: arquivo que contém a lógica de cadastro de produtos
   
model/: diretório que contém os arquivos JavaScript que definem os modelos de dados do projeto
public/: diretório que contém os arquivos estáticos do projeto (imagens, CSS, etc.)
styles/: diretório que contém os arquivos CSS do projeto
   cadastro_style/: diretório que contém os arquivos CSS relacionados ao cadastro de produtos
cadastro.css: arquivo que contém os estilos do cadastro de produtos
* Funcionalidades:

Cadastro de produtos: o usuário pode cadastrar produtos com nome, descrição, preço e cadastro com as funções DeleteDocument(), UpdateFieldsInADocument(), GetADocument(), AddDocument_CustomId().
Carrinho de compras: o usuário pode adicionar produtos ao carrinho e visualizar o total da compra
Sistema de Lodin e Registro: com uma ligação direta com o Firebase Authentication o usuário pode se registrar ou logar no site


