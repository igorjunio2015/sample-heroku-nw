require("./utils/loggerConfig");
const logger = require("npmlog");
const express = require("express");
const contactRoute = require("./routes/contact.route");
const serviceRoute = require("./routes/service.route");

const app = express();

/**
 * @CONFIG
 * 
 * Configuração do servidor
 */

app.use(express.json());

/**
 * @ROUTES
 * 
 * Rotas do servidor
 */

app.use(contactRoute);
app.use(serviceRoute);

app.all("*", (request, response) => {
    // POST http://localhost:PORT/v1/auth
    return response.status(400).json({ error: "route undefined" });
})

/**
 * @INIT
 * 
 * Iniciar servidor
 */

var portApp = process.env.PORT || 8080;

app.listen(portApp, () => {
    logger.info("SERVER", "started");
})
