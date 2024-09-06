# Wiki Titãs Originais

- Veja a demo [aqui](wikiaot.netlify.app).

[![HTML5 Badge](https://img.shields.io/badge/html5-%23E34F26B.svg)](https://en.wikipedia.org/wiki/HTML)
[![CSS3 Badge](https://img.shields.io/badge/css3-%231572B6.svg)](https://en.wikipedia.org/wiki/CSS)
[![JavaScript Badge](https://img.shields.io/badge/javascript-%F0%9F%9E%AB%20yellow.svg)](https://en.wikipedia.io/wiki/wiki/JavaScript)
## Descrição
Projeto realizado na Imersão Dev [Alura](https://www.youtube.com/watch?v=i4W_bkGkk6s) [Gemini](https://gemini.google.com/app?hl=pt-BR) ,que apresenta informações detalhadas sobre os Nove Titãs Originais, personagens do anime Attack on Titan, usando normalização do texto digitado para gerar um card do personagem direto no javascript.

![Screenshot 2024-09-05 205652](https://github.com/user-attachments/assets/2a15bc51-a0a1-405d-8471-c0b5e9e9f251)


## Funcionalidades
* Busca interativa por titã 🔎
* Exibição detalhada de cada titã 🗒️
* Acessibilidade com Userway e VLibras ♿🤟

##  Validação

A busca por titãs é realizada através de uma função robusta que garante a precisão e a eficiência dos resultados. O processo de validação envolve as seguintes etapas:

1. **Normalização:** O texto digitado pelo usuário é normalizado para remover acentos, caracteres especiais e converter para minúsculas, utilizando a biblioteca `normalize-strings`. Essa etapa garante que a busca seja case-insensitive e independente de variações ortográficas.
2. **Tokenização:** O texto normalizado é dividido em palavras (tokens) para permitir buscas mais flexíveis.
3. **Comparação:** Cada token é comparado com os nomes dos titãs armazenados em um array. Para otimizar a busca, é utilizado um algoritmo que permite encontrar correspondências parciais, como por exemplo, encontrar o titã "Titã de Ataque" quando o usuário digita apenas "ataque".
4. **Resultados:** Os titãs que correspondem aos critérios de busca são retornados e exibidos na interface do usuário.

**Otimizações futuras:**
* **Cache:** A lista de titãs normalizados é armazenada em cache para evitar recalcular a cada busca, otimizando o desempenho.
* **Algoritmo de Levenshtein:** Para futuras implementações, pode-se considerar a utilização do algoritmo de Levenshtein para encontrar correspondências aproximadas, permitindo que o usuário encontre titãs mesmo com erros de digitação.

**Exemplo de código:**
```javascript
// Função de busca otimizada com cache e algoritmo de Levenshtein (hipotético)
function buscarTitans(nomeDigitado) {
  // Verifica se o cache já possui a lista normalizada
  if (!cache.titansNormalizados) {
    cache.titansNormalizados = titans.map(titan => normalizeString(titan.nome));
  }

  const palavrasDigitadas = normalizeString(nomeDigitado).split(" ");
  return cache.titansNormalizados.filter(nomeTitan => {
    // Utiliza o algoritmo de Levenshtein para encontrar correspondências aproximadas
    return palavrasDigitadas.every(palavra => levenshteinDistance(palavra, nomeTitan) <= 2);
  });
}
```

## Contribuições
Contribuições são bem-vindas! Por favor, abra um pull request.
Se não souber como fazer o clone do projeto, veja o [tutorial](https://www.alura.com.br/artigos/clonando-repositorio-git-github)

## Autora
* Roberta Ribeiro
