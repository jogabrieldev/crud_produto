# Crud produto

API REST para gerenciamento de produtos com Node.js, TypeScript e Prisma.

## Tecnologias
- Node.js + TypeScript
- Express
- Prisma ORM
- Docker & Docker Compose
- PostgreSQL 
- Zod (validação)

## Estrutura do Projeto

src/
├─ controller/ # Recebe requisições e chama serviços
├─ middleware/ # Middlewares (ex.: validação)
├─ models/ # Conecxão do banco de dados com minha aplicação
├─ repositories/ # Abstração do banco (CRUD)
├─ routes/ # Definição das rotas
├─ services/ # Lógica de negócio e integrações
├─ types/ # DTOs e interfaces
├─ validation/ # Validações de dados
└─ server.ts # Inicialização do servidor
prisma/
├─ schema.prisma # Modelos do banco
└─ migrations/ # Histórico de migrações

## Requisitos
_ Docker Descktop ou Docker Engine
_ Docker Compose

## Funcionalidades
_ Cadastro de produto
_ Busca de produtos por nome
_ Busca de produtos por categoria
_ Busca de produtos por foto
_ Atualizar produtos
_ Deletar produtos

## Comandos para rodar a aplicação
( No caso de ZIP) Extrair o arquivo abrir o terminal na pasta do projeto e rodar.
git clone 
cd crud_produto_teste
docker-compose up --build
(Acesso a API) http://localhost:8000