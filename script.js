// 1. Array de objetos simulando o Banco de Dados de Gêneros
const generos = [
    { id: 'rock', nome: 'Rock (80s, 90s, 2000s)', imagem: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=400&q=80' },
    { id: 'poprock', nome: 'Pop Rock (80s, 90s)', imagem: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80' },
    { id: 'jazz', nome: 'Jazz', imagem: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80' },
    { id: 'classica', nome: 'Música Clássica', imagem: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=400&q=80' },
    { id: 'mpb', nome: 'MPB', imagem: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=400&q=80' },
    { id: 'sertanejo', nome: 'Sertanejo & Universitário', imagem: 'https://images.unsplash.com/photo-1500530855697-b586d89ba560?auto=format&fit=crop&w=400&q=80' }
];

// 2. Array de objetos simulando os Discos (Produtos)
const discos = [
    { id: 1, generoId: 'rock', titulo: 'Nirvana - Nevermind', preco: 'R$ 180,00', imagem: 'https://images.unsplash.com/photo-1533174000253-1574aa975267?auto=format&fit=crop&w=400&q=80' },
    { id: 2, generoId: 'rock', titulo: 'Guns N Roses - Appetite for Destruction', preco: 'R$ 150,00', imagem: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=400&q=80' },
    { id: 3, generoId: 'jazz', titulo: 'Miles Davis - Kind of Blue', preco: 'R$ 200,00', imagem: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80' },
    { id: 4, generoId: 'mpb', titulo: 'Chico Buarque - Construção', preco: 'R$ 220,00', imagem: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=400&q=80' },
    { id: 5, generoId: 'classica', titulo: 'Beethoven - Sinfonia Nº 9', preco: 'R$ 120,00', imagem: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=400&q=80' },
    { id: 6, generoId: 'poprock', titulo: 'U2 - The Joshua Tree', preco: 'R$ 140,00', imagem: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80' }
];

// Mapeando os elementos do HTML para o JS
const telaGeneros = document.getElementById('tela-generos');
const telaProdutos = document.getElementById('tela-produtos');
const divListaGeneros = document.getElementById('lista-generos');
const divListaDiscos = document.getElementById('lista-discos');
const tituloCategoria = document.getElementById('titulo-categoria');

const numeroWhatsApp = "5531999999999"; 

// 3. Função para renderizar os gêneros na tela principal
function carregarGeneros() {
    divListaGeneros.innerHTML = ''; 
    generos.forEach(genero => {
        const cartao = document.createElement('div');
        cartao.className = 'card';
        
        cartao.onclick = () => abrirCategoria(genero.id, genero.nome);

        cartao.innerHTML = `
            <img src="${genero.imagem}" alt="${genero.nome}">
            <h3>${genero.nome}</h3>
        `;
        divListaGeneros.appendChild(cartao);
    });
}

// 4. Função chamada ao clicar em um gênero
function abrirCategoria(idDoGenero, nomeDoGenero) {
    telaGeneros.classList.add('escondido');
    telaProdutos.classList.remove('escondido');
    
    tituloCategoria.innerText = `Catálogo: ${nomeDoGenero}`;
    divListaDiscos.innerHTML = '';

    const discosFiltrados = discos.filter(disco => disco.generoId === idDoGenero);

    if (discosFiltrados.length === 0) {
        divListaDiscos.innerHTML = '<p>Nenhum disco encontrado nesta categoria ainda. Fale conosco no WhatsApp!</p>';
        return;
    }

    discosFiltrados.forEach(disco => {
        const msgWhatsapp = encodeURIComponent(`Olá! Gostaria de mais informações sobre o disco de vinil: ${disco.titulo}.`);
        const linkZap = `https://wa.me/${numeroWhatsApp}?text=${msgWhatsapp}`;

        const cartaoDisco = document.createElement('div');
        cartaoDisco.className = 'card';
        cartaoDisco.innerHTML = `
            <img src="${disco.imagem}" alt="Capa do disco ${disco.titulo}">
            <h3>${disco.titulo}</h3>
            <p class="preco">${disco.preco}</p>
            <a href="${linkZap}" target="_blank" class="btn-contato">Entre em contato!</a>
        `;
        divListaDiscos.appendChild(cartaoDisco);
    });
}

// 5. Função do botão voltar
function voltarParaGeneros() {
    telaProdutos.classList.add('escondido');
    telaGeneros.classList.remove('escondido');
}

// 6. Inicialização
carregarGeneros();