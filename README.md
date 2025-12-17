# Portfolio React + TypeScript

Portfolio moderno construido com React, TypeScript, Vite, Tailwind e Framer Motion. Inclui modo escuro, navegacao suave, secoes animadas, formulario validado com React Hook Form + Zod e SEO basico com react-helmet-async.

## Scripts

- npm run dev  ambiente de desenvolvimento
- npm run build  build de producao
- npm run preview  pre-visualizar o build
- npm run lint  lint

## Como rodar

```
npm install
npm run dev
```

Abra http://localhost:5173 no navegador.

## Conteudo e personalizacao

- Ajuste dados em src/data/*.ts (projetos, skills, experiencia, sociais).
- Atualize o email no formulario em src/sections/Contact.tsx (endpoint do FormSubmit).
- Ajuste titulo/descricao em src/App.tsx dentro do Helmet.

## Deploy

- Vercel/Netlify: importe o repositorio e use comando npm run build e diretorio dist.
- GitHub Pages: npm run build e publique a pasta dist (ex.: npm run deploy com gh-pages se desejar).

## Stack

- React 19 + TypeScript
- Vite + Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- lucide-react para icones
