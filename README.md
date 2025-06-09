# 🎬 MovieVerse - React TMDB App

Aplicação web desenvolvida com React + Vite que consome a API do TMDB (The Movie Database) para exibir informações sobre filmes. Esta aplicação tem como objetivo demonstrar boas práticas em desenvolvimento moderno com React, gerenciamento de estado, roteamento e testes.

---

## 🧠 Principais decisões técnicas

### ⚛️ **React 19 com Vite**

Utilizamos o **React 19** com **Vite 6** como bundler devido à sua velocidade superior, ótima experiência de desenvolvimento (HMR eficiente) e configuração simples. A combinação permite uma base moderna, leve e performática.

### 🔍 **React Router v7**

A biblioteca `react-router-dom` foi usada para navegação entre páginas. Ela é robusta, amplamente adotada na comunidade React e possui uma API moderna e declarativa.

### ⚙️ **Vitest para testes**

Escolhemos o **Vitest** como test runner por ser rápido, ter integração nativa com Vite e sintaxe compatível com Jest. Isso facilita escrever testes de unidade e de integração com ótima performance.

### 🧪 **Testing Library**

A `@testing-library/react` foi adicionada para garantir testes focados no comportamento do usuário e não na implementação, alinhando-se com boas práticas de testes em React.

### 🌐 **nuqs para gerenciamento de URL**

Utilizamos `nuqs` para lidar com o **estado sincronizado com a URL**. Isso permite criar filtros, paginações e parâmetros de forma declarativa e previsível, mantendo a URL como fonte de verdade em pontos-chave.

### 🧰 **Context API para estado global leve**

Optamos pelo uso da **Context API** para estados globais mais simples (como o estado do filme selecionado). Para aplicações maiores ou com múltiplas fontes de estado, seria recomendável migrar para ferramentas como:

- [`Zustand`](https://zustand-demo.pmnd.rs/) — mais leve e com menos boilerplate;
- [`Redux Toolkit`](https://redux-toolkit.js.org/) — para estruturas mais robustas e padronizadas.

### 🎨 **Tailwind CSS + tailwind-merge**

- Utilizamos **Tailwind CSS** para produtividade no estilo e consistência visual.
- A biblioteca `tailwind-merge` garante que classes conflitantes sejam resolvidas corretamente, evitando bugs visuais.

### 🎯 **Axios para requisições**

`axios` foi escolhido como client HTTP por sua sintaxe concisa, suporte a interceptadores e ampla adoção.

### 📦 **Gerenciador de pacotes: Yarn**

Este projeto **utiliza `yarn`** como gerenciador de pacotes. O uso de versões compatíveis é fundamental para garantir o funcionamento correto da aplicação e evitar problemas com dependências.

---

## 📦 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js `>= 22.14.0`**
- **Yarn `>= 1.22.0`**

> ⚠️ O projeto **não suporta `npm`, `pnpm` ou `bun`**, e exige o uso de `yarn`.

---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/viniciusidacruz/movieverse-react-tmdb-app.git

   cd movieverse-react-tmdb-app
   ```

2. Instale as dependências:

   ```bash
   yarn install

   yarn dev
   ```

3. Acesse a aplicação no navegador: [`Local`](http://localhost:5173)

## 💡 Observações

- ⚠️ É necessário usar o Yarn, conforme definido no package.json. O uso de npm, pnpm ou bun pode causar conflitos.

- 🧩 As versões de Node e Yarn devem seguir o especificado em "engines" para garantir compatibilidade.

- 📦 O deploy recomendado é via Vercel, que oferece suporte otimizado para projetos Vite + React.
