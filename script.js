const produtoSimples = document.getElementById('produto-simples');
produtoSimples.innerHTML = `
    <h2>Produto Simples</h2>
    <p>Pivo Inferior.</p>
    <p><strong>Nome:</strong> Toyota Hilux 2005/2012 </p>
    <p><strong>Descrição:</strong>Pivo Inferior da Bandeja Dianteira.</p>
    <p><strong>Preço:</strong> R$ 99,99</p>
    <img src="./img/Pivo.jpg" alt="Imagem do Pivo ">
`;

const produtoComplexo = document.getElementById('produto-complexo');
const h2 = document.createElement('h2');
h2.textContent = 'Produto Complexo';

const descricao = document.createElement('p');
descricao.textContent = 'Pastilha Dianteira de Cerâmica.';

const nome = document.createElement('p');
nome.innerHTML = '<strong>Nome:</strong> Pastilha de Freio';

const descricaoDetalhada = document.createElement('p');
descricaoDetalhada.innerHTML = '<strong>Descrição:</strong> Este é um produto incrível com muitos recursos, durabilidade e funcionalidades.';

const preco = document.createElement('p');
preco.innerHTML = '<strong>Preço:</strong> R$ 349,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = './img/Pastilha ceramica.jpg'; 
imagemProduto.alt = 'Imagem da pastilha de Freio '; 

produtoComplexo.appendChild(h2);
produtoComplexo.appendChild(descricao);
produtoComplexo.appendChild(nome);
produtoComplexo.appendChild(descricaoDetalhada);
produtoComplexo.appendChild(preco);
produtoComplexo.appendChild(imagemProduto); 
