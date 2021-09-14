const { Router } = require("express");
const router = Router();

/**
 * @ROUTE
 * 
 * Rotas de contatos
 */

router.post("/v1/service", (request, response) => {
    // http://localhost:PORT/v1/service
    return response.status(200).json({ message: "service ok" })
})

module.exports = router;

