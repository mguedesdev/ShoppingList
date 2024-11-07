# 📄 Shopping List

<!-- Imagem do projeto -->
<p align="center">
<img src="https://i.postimg.cc/VkzFgGBV/Captura-de-tela-2024-11-06-173234.png" alt="Shopping List Preview" width="1200px">


</p>

#### 🌐  [ Veja o Projeto Online](https://shopping-list-mgr.vercel.app/)

#### 🎨 [ Veja o Design no Figma](https://www.figma.com/design/3kvzOGel4LoXX7pZF2PGYW/Shoppin-List?node-id=0-1&node-type=canvas&t=uL11FrR4K9jpfLcH-0)

## 🚀 Descrição Geral

O Shopping List é uma aplicação desenvolvida para gerenciar listas de compras, permitindo ao usuário selecionar itens, personalizar quantidades e enviar a lista para o WhatsApp com uma formatação automática e intuitiva.

## 🛠️ Tecnologias Utilizadas

- **Vue.js** 3.2.13
- **Vue Router** 4.4.5
- **Vuex** 4.0.2
- **Firebase** 11.0.1 (para autenticação e gerenciamento de dados)
- **Font Awesome** 6.6.0 (ícones)
- **Notyf** 3.10.0 (notificações de sucesso e erro)

## ⚙️ Instalação

Clone o repositório:

```bash
git clone git@github.com:mguedesdev/ShoppingList.git
```

Acesse o diretório do projeto:
```bash
cd shopping-list
```

Instale as dependências:
```bash
yarn install
```

Execute o comando para rodar o ambiente de desenvolvimento:
```bash
yarn serve
```



## 🌟 Funcionalidades

-   **Login e Cadastro**: Permite que o usuário se cadastre ou faça login para acessar a lista de compras.
-   **Gerenciamento de Itens**: O usuário pode selecionar itens para adicionar à lista, organizados por categorias e subcategorias.
-   **Personalização de Quantidade**: Possibilidade de ajustar as quantidades dos itens selecionados.
-   **Envio para WhatsApp**: Envia a lista de compras diretamente para o WhatsApp com formatação automática.
-   **Visualização de Mensagem**: Simulador de mensagem para pré-visualizar como a lista será exibida no WhatsApp.


## 🖥️ Como Usar

-   **Login/Cadastro**: Na tela inicial, escolha entre fazer login ou criar uma nova conta.
-   **Adicionar Itens**: Acesse o menu lateral para selecionar categorias e adicionar itens à lista de compras.
-   **Customizar Quantidades**: Após selecionar os itens, vá para a aba de customização para ajustar as quantidades de cada item conforme necessário.
-   **Visualizar Lista**: Utilize o botão _Visualizar Lista_ para pré-visualizar como a lista aparecerá no WhatsApp.
-   **Enviar para WhatsApp**: Clique em _Enviar_ para abrir o WhatsApp com a lista de compras já formatada e pronta para envio.
-   **Sair**: Utilize o botão de saída para deslogar e retornar à tela de login/cadastro.



## 📂 Estrutura do Projeto

### src/components

-   **LoginPage**
    
    -   `FormInput`: Componente de campo de entrada para login e cadastro.
    -   `LeftSide`: Exibe a área de introdução do lado esquerdo.
    -   `RightSide`: Exibe o formulário de login e registro.
-   **Modals**
    
    -   `ModalConfirmation`: Modal para confirmar ações, como o logout ou exclusão de itens.
-   **ShoppingPage**: Contém os componentes principais da lista de compras.
    
    -   `CustomizeItens`: Permite adicionar quantidades aos itens selecionados.
    -   `NavigationBar`: Navegação entre adicionar itens, personalizar e visualizar a lista.
    -   `SideBar`: Exibe categorias selecionadas e, no modo de seleção, todas as categorias.
    -   `SelectItens`: Exibe todos os itens da categoria selecionada, divididos em subcategorias para selecionar.
-   **Utilitários**
    
    -   `AccordionCategory`: Accordion para exibir subcategorias.
    -   `ButtonBase`: Componente base para botões.
    -   `ItemList`: Um único item na lista de compras, exibindo o nome do item e opções adicionais, caso fornecidas.
    -   `LoadingSpinner`: Indicador de carregamento.
    -   `OverlayForModal`: Sobreposição para modais.
    -   `SearchInput`: Campo de pesquisa para filtrar itens.

### src/constants

-   **categories**: Array contendo todas as categorias e os ícones que representam cada uma delas.

### src/firebase

-   **firebase.js**: Configuração da conexão com o Firebase.
-   **firestore.js**: Funções de manipulação do Firestore.
-   **populateFirestore.js**: Script para popular o Firestore com dados iniciais.

### src/pages

- **LoginPage.vue**: Página de login e cadastro de usuários. 
- **ShoppingList.vue**: Página principal para gerenciar a lista de compras.

### src/store

-   **actions**
    -   `authActions`: Ações de autenticação (login, registro, logout).
    -   `shoppingListActions`: Ações para manipular a lista de compras.
-   **getters**
    -   `authGetters`: Getters para acessar dados de autenticação.
    -   `shoppingListGetters`: Getters para acessar dados da lista de compras.
-   **modules**
    -   `auth`: Módulo de autenticação.
    -   `shoppingList`: Módulo da lista de compras.
-   **mutations**
    -   `authMutations`: Mutations para o módulo de autenticação.
    -   `shoppingListMutations`: Mutations para o módulo de lista de compras.
-   **types**
    -   `mutationTypes`: Tipos de mutations para maior organização e consistência.

### src/utils

-   **fontawesome**: Configuração de ícones Font Awesome.
-   **navigationUtils**: Funções utilitárias para navegação entre telas.
-   **normalizeWord**: Normaliza palavras para uso no sistema.
-   **notyf**: Configuração para exibir notificações de sucesso ou erro.
-   **reorderItems**: Função para garantir que os itens selecionados fiquem na mesma ordem definida em `constants/categories.js`.

## 📞 Contato

Se você tiver dúvidas com o projeto, pode me chamar

[LinkedIn](https://www.linkedin.com/in/mathheusg/) ou enviar um e-mail: mathheus.gr@gmail.com.

