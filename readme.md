## PREPARANDO O AMBIENTE 

## CRIANDO O PROJETO BACKEND

- Criar pasta com o nome SemanaOmniStack11
- Criar subpasta backend

### Dentro da pasta Backend criar projeto com yarn
npm init -y

### Instalar o Express
npm install express

### Instalar o nodemon
npm install nodemon -D

### Install KNEXT (http://knexjs.org/)
npm install knex --save
npm install sqlite3
npx knex init

// Create a migration
npx knex migrate:make create_ongs

// Run migrations
npx knex migrate:latest



# CRIANDO O PROJETO WEB

###   Criar o projeto com npx
yarn create react-app web


# CRIANDO O PROJETO MOBILE

