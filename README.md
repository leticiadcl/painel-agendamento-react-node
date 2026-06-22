# 1. Painel de Agendamentos - Salão de Beleza — MVP Front-End React

Aplicação front-end para um salão de beleza, desenvolvida com React, componentização, React Router e Node.js. O sistema permite visualizar serviços, cadastrar clientes e gerenciar agendamentos com regras de negócio semelhantes à versão HTML/JavaScript original.

## 2. Funcionalidades

- Página inicial com resumo do sistema.
- Página de serviços oferecidos com busca, cards reutilizáveis e botão de agendamento.
- Página de agendamentos com criação, edição, exclusão, busca e múltipla seleção de serviços.
- Página de cadastro de clientes com criação, edição, exclusão e busca.
- Exclusão em cascata: ao excluir um cliente, seus agendamentos vinculados também são removidos.
- Rota 404 para URLs inexistentes.
- Feedbacks visuais, modal de confirmação, tooltips, mensagens condicionais e layout responsivo.

### 2.1 Gestão de Clientes

* Cadastrar clientes (nome, celular e e-mail)
* Listar clientes cadastrados
* Buscar clientes cadastrados
* Editar dados do cliente
* Excluir cliente
* Exclusão automática de todos os agendamentos vinculados ao cliente removido (regra de negócio)

### 2.2 Gestão de Agendamentos

* Cadastro de agendamentos com:
  * Cliente vinculado deve ser cadastrado com sucesso
  * Data e hora obrigatórios
  * Serviços (múltipla seleção)
  * Observações (opcional)
* Listar agendamentos cadastrados
* Buscar agendamentos cadastrados
* Editar agendamentos
* Excluir agendamentos


## 3. Regras de Negócio 

### 3.1 Clientes

* Nome obrigatório
* Celular obrigatório com **máscara automática** no formato: `(00) 00000-0000`
* E-mail **opcional**, com validação de existir `@`
* Relacionamento **Cliente → Agendamento**

### 3.2 Agendamentos

* Cliente obrigatório
* Data e Hora obrigatórias
* Pelo menos um serviço selecionado
* Múltiplos serviços permitidos
* Observação **opcional**
* Exclusão em cascata ao remover um cliente, todos os seus agendamentos são removidos automaticamente

## 4. Requisitos do MVP - Sprint 3

- React com ambiente Node.js.
- Pelo menos 3 páginas: Início, Serviços, Agendamentos e Clientes.
- Componentização com componentes reutilizáveis: Header, Footer, SearchBar, FeedbackAlert, ServiceCard, ConfirmModal, ClientForm, ClientList, AppointmentForm e AppointmentList.
- Hooks usados: useState, useEffect, useNavigate, useLocation e useParams.
- React Router para navegação entre páginas.
- Simulação de dados por JSON em `src/data/services.json` e `src/data/seed.json`.
- Persistência local via LocalStorage.

## 5. Tecnologias

- React
- Vite
- Node.js
- React Router DOM
- Bootstrap
- Bootstrap Icons
- CSS3
- LocalStorage

## 6. Estrutura de pastas

```text
painel-agendamento-react-node/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    ├── data/
    ├── hooks/
    ├── pages/
    └── styles/
```

## 7. Como executar

1. Instale o Node.js.
2. Clone ou baixe este projeto.
3. Acesse a pasta do projeto:
4. Instale as dependências:

```bash
npm install
```

5. Execute o projeto:

```bash
npm run dev
```

6. Abra no navegador o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

