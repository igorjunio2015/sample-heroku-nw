const logger = require("npmlog");
Object.defineProperty(logger, "heading", {
    get: () => {
        return newDateFormated();
    },
});
logger.headingStyle = { bg: "white", fg: "black" };

function newDateFormated() {
    var date = new Date;
    date = date.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    return date;
}