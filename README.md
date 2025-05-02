✅ README.md

# 🔐 Controle de Transações - React com Rotas Protegidas

Projeto em React com autenticação, rotas protegidas e design moderno. Inclui login, verificação de token, proteção de páginas, testes com RTL/Jest e layout com Tailwind CSS.

---

## 🚀 Funcionalidades

- ✅ Roteamento com React Router v6
- ✅ Página de Login com design moderno
- ✅ Verificação de token no `localStorage`
- ✅ Redirecionamento automático se o usuário não estiver autenticado
- ✅ Rota protegida para `/transacoes`
- ✅ Componente `PrivateRoute`
- ✅ Dashboard de transações (mock)
- ✅ Página inicial (landing page)
- ✅ Layout reutilizável
- ✅ Rodapé com assinatura personalizada
- ✅ Ícone e título personalizados no navegador
- ✅ Testes com Jest e React Testing Library

---

## 🛠️ Como executar o projeto localmente

### 1. Clone o repositório
```bash
git clone https://github.com/seuusuario/rotas-protegidas.git
cd rotas-protegidas


2. Instale as dependências
npm install

3. Inicie o servidor local
npm start

Acesse no navegador: http://localhost:3000

---


🧪 Rodando os testes
npm test

Inclui testes para o componente LoginForm.

---

📁 Estrutura de Pastas
src/
├── assets/                  # Imagens e ícones (se tiver)
├── components/              # Componentes reutilizáveis
│   ├── __tests__/           # Testes dos componentes
│   │   └── LoginForm.test.jsx
│   ├── LoginForm.jsx
│   └── PrivateRoute.jsx
├── pages/                   # Páginas da aplicação
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Transacoes.jsx
├── App.jsx                  # Componente principal
├── App.css
├── App.test.jsx             # Teste da aplicação
├── index.js                 # Ponto de entrada
├── index.css                # Tailwind + estilos globais
├── logo.svg
└── setupTests.js            # Configuração de testes

---

🧠 Aprendizados
Este projeto mostra como:

Criar rotas protegidas em React

Gerenciar autenticação com localStorage

Estilizar com Tailwind CSS

Testar componentes com React Testing Library

Organizar layout reutilizável

---

📦 Futuras melhorias (sugestões)
Conectar com Firebase ou Supabase para autenticação real

Dashboard dinâmico com Chart.js ou Recharts

Upload de imagem de perfil

Cadastro de novos usuários

Responsividade total

---

🧑‍💻 Desenvolvido por
Bruno Maia
