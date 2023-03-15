const { Router } = require("express");
const {
  getProductsHandler,
  getProductHandler
} = require("../Handlers/productsHandler");
const {
  createFeedbackHandler,
  getFeedbacksHandler,
  newRegister,
  newOrder,
  getClientsH,
  getOrdersH,
  updateClient,
  updateOrder
} = require("../Handlers/clientsHandler");
// const {
//     createOrderHandler
// } = require("../handlers/orderHandler");
const {
  getTradesHandler,
  getTradeHandler,
  getCategoriesHandler,
  getSubCategoriesHandler,
  

} = require("../Handlers/tradesHandler");
const { validateFeedback, validateClient, validateOrder } = require("../Middlewares/validate");

const clientsRouter = Router();

// GET
clientsRouter.get("/categories", getCategoriesHandler);
clientsRouter.get("/subcategories", getSubCategoriesHandler);
clientsRouter.get("/trades/search", getTradesHandler);
clientsRouter.get("/trades/search/:id", getTradeHandler);
clientsRouter.get("/products/search", getProductsHandler);
clientsRouter.get("/products/search/:id", getProductHandler);
clientsRouter.get("/feedbacks", getFeedbacksHandler);


// POST
clientsRouter.post("/feedback", validateFeedback, createFeedbackHandler);



clientsRouter.post("/register", validateClient, newRegister);
clientsRouter.post("/new-order", validateOrder, newOrder);

clientsRouter.get('/clients',getClientsH)
clientsRouter.get('/orders',getOrdersH)

clientsRouter.put('/update-clients',updateClient);
clientsRouter.put('/update-orders', updateOrder);



// clientsRouter.get("/trades/feedback", validateFeedback, createFeedbackHandler );

// clientsRouter.post("/login", validateClients, createClientHandler);
// clientsRouter.post("/order", validateOrder, createOrderHandler);

module.exports = clientsRouter;
