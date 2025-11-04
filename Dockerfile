# Etapa base
FROM node:20-alpine

# Cria diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta da aplicação
EXPOSE 8000

# Comando padrão
CMD ["npm", "run", "dev"]



