const { Router } = require("express");
const router = Router();

/**
 * @ROUTE
 * 
 * Rotas de contatos
 */

router.post("/v1/contact", verifyContact, (request, response) => {
    // http://localhost:PORT/v1/contact
    return response.status(200).json({ message: "contact ok" })
})

function verifyContact(request, response, next) {
    const { id, name, email } = request.body;

    if (!id || !name || !email) {
        return response.status(404).json({ message: "id, name or email not found" });
    }

    next();
}

module.exports = router;

