# Agência Rabe

Site institucional da Agência Rabe, desenvolvido em React e Vite, com foco em apresentar serviços de marketing, tecnologia, automação, inteligência artificial, desenvolvimento web e comunicação estratégica.

## Tecnologias

- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- Radix UI

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/wuotans/agenciarabe.git
cd agenciarabe
npm install
```

## Desenvolvimento local

Execute:

```bash
npm run dev
```

O Vite iniciará o projeto localmente, normalmente em:

```text
http://localhost:5173
```

## Build de produção

```bash
npm run build
```

Os arquivos compilados serão gerados em `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

## Variáveis de ambiente

O site institucional atual funciona sem backend obrigatório.

Caso recursos futuros precisem consumir uma API, utilize:

```env
VITE_API_URL=http://localhost:3000/api
```

Se `VITE_API_URL` não estiver definida, `src/api/apiClient.js` utiliza `/api` como endereço padrão.

## Estrutura principal

```text
src/
├── api/
│   └── apiClient.js
├── components/
├── hooks/
├── lib/
├── pages/
│   └── Home.jsx
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Página principal

A Home apresenta as principais áreas de atuação da Agência Rabe, incluindo:

- Aplicativos e sistemas
- Automação com inteligência artificial
- Sites e landing pages
- Social media estratégico
- Design gráfico e identidade visual
- Endomarketing e comunicação interna

A página também apresenta o processo de trabalho da agência, posicionamento institucional e canais de contato.

## Integração com API

Toda nova integração HTTP deve ser centralizada em:

```text
src/api/apiClient.js
```

Isso mantém as páginas desacopladas da implementação do backend e facilita futuras integrações com sistemas próprios, CRM, formulários, automações e ferramentas internas.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run typecheck
```

## Boas práticas

- Não versionar `.env` ou `.env.local`.
- Não versionar `node_modules/`.
- Manter integrações externas centralizadas na camada `src/api/`.
- Manter componentes reutilizáveis em `src/components/`.
- Utilizar `npm run build` antes de publicar alterações relevantes.

## Projeto

Repositório oficial:

```text
https://github.com/wuotans/agenciarabe
```
