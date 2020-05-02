const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {

    // request.query/params/body
    // response.send/json

    return response.json({
        evento: 'Semana Ominstack 11.'});
})

module.exports = routes;