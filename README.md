# 🍽️ Culinária App

Aplicativo mobile desenvolvido com **React Native** e **Expo**, voltado para usuários que desejam explorar diversas categorias de receitas. O app consome uma API pública ([TheMealDB](https://www.themealdb.com/api.php)) para exibir informações detalhadas sobre pratos e categorias.

---

## 📱 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [TheMealDB API](https://www.themealdb.com/api.php)

---

## 🧩 Funcionalidades

- Tela de boas-vindas com visual agradável e responsiva.
- Navegação entre telas com o `expo-router`.
- Listagem de categorias de refeições consumindo uma API externa.
- Modal com descrição e imagem da categoria selecionada.
- Botão de navegação com feedback visual.
- Responsividade adaptada para diferentes tamanhos de tela.
- Estilização com base em cores suaves e amigáveis.
- Ícones e fontes personalizados.

---

## 📂 Estrutura do Projeto

```
├── app
│   ├── index.tsx              // Tela inicial
│   ├── content.tsx            // Tela com a lista de categorias
│   └── apg.tsx                // Tela que consome a API e exibe os dados
├── assets
│   ├── fonts/                 // Fontes personalizadas (Poppins)
│   └── images/                // Imagens utilizadas no layout
├── src
│   └── components
│       ├── Loader.tsx         // Componente de carregamento
│       └── List.tsx           // Componente de lista de categorias
├── README.md
└── package.json
```

---

## 🛠️ Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/dri031020/projeto_ApiRest.git
```

2. Acesse a pasta do projeto:
```bash
cd nome-do-repositorio
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o projeto:
```bash
npx expo start
```

---

## 🌐 API Utilizada

Este projeto utiliza a [TheMealDB API](https://www.themealdb.com/api.php), que oferece uma ampla base de dados sobre refeições e suas categorias.

---

## 📚 Aprendizados

- Diferença entre métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`) e suas aplicações.
- Comparação entre `Fetch API` e `Axios`.
- Gerenciamento de estado assíncrono (loading, erro e dados).
- Como o **Expo** facilita o desenvolvimento mobile e o consumo de APIs.
- Boas práticas de organização de projeto e componentização.

---

## 📌 Conclusão

Este projeto proporcionou uma experiência completa de integração com API REST, navegação entre telas, gerenciamento de estados assíncronos e estilização moderna. É um ótimo ponto de partida para quem deseja criar aplicativos que consumam APIs de forma prática e eficiente.


---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
