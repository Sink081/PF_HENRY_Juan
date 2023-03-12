const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler,
  getProductCategoryHandler
} = require("../handlers/productsHandler");
const {
  createFeedbackHandler,
  getFeedbacksHandler,
  newRegister,
  newOrder,
  getClientsH,
  getOrdersH,
  updateClient,
  updateOrder,
  login,
  registerWhitGoogle
} = require("../handlers/clientsHandler");
// const {
//     createOrderHandler
// } = require("../handlers/orderHandler");
const {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
  getSubCategoriesHandler,
} = require("../Handlers/tradesHandler");
const { validateFeedback, validateClient, validateOrder } = require("../middlewares/validate");

const clientsRouter = Router();

// GET
clientsRouter.get("/trades/categories", getCategoriesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/subcategories", getSubCategoriesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/search", getTradesHandler); // FUNCIONANDO 12/03
clientsRouter.get("/trades/search/:id", getTradeHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/search", getProductsHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/search/:id", getProductHandler); // FUNCIONANDO 12/03
clientsRouter.get("/products/categories", getProductCategoryHandler); // FUNCIONANDO 12/03
clientsRouter.get("/feedbacks", getFeedbacksHandler);


// POST
clientsRouter.post("/feedback", validateFeedback, createFeedbackHandler);

clientsRouter.post("/register", validateClient, newRegister);
clientsRouter.post("/new-order", validateOrder, newOrder);

clientsRouter.get('/clients',getClientsH)
clientsRouter.get('/orders',getOrdersH)

clientsRouter.put('/update-clients',updateClient);
clientsRouter.put('/update-orders', updateOrder);


// LOGIN AND AUTHENTICATION
clientsRouter.post("/login", login)
clientsRouter.post("/siginWhitGoogle", registerWhitGoogle)


// clientsRouter.get("/trades/feedback", validateFeedback, createFeedbackHandler );

// clientsRouter.post("/login", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);

module.exports = clientsRouter;
