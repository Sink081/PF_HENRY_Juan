const jwt = require("jsonwebtoken");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";

const {
  createFeedback,
  getFeedbacksController,
  postCreateClientController,
  postCreateOrder,
  getClients,
  getOrders,
  updateClientC,
  updateOrderC,
} = require("../Controllers/clientsController");


// GET ------------> feedbacks
const getFeedbacksHandler = async (req, res) => {
  try {
    const feedbacks = await getFeedbacksController();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(404).json({ error: `Error al exportar los feedbacks de los clientes` });
  }
};

// POST -------> /feedback
const postFeedbackHandler = async (req, res) => {
  const body = req.body;
  const { clientId } = req.query
  try {
    const result = await createFeedback(clientId, body);
    if (result)
      res.status(200).json(`Hemos registrado su comentario. Gracias ${body.name}!`);
  } catch (error) {
    res.status(404).json({ error: `Error al registar el comentario` });
  }
};


const newRegister = async (req, res) => {
  try {
    // const result = await postCreateClientController(req.body)
    // res.status(200).json(`Se ha creado el usuario ${req.body.username} exitosamente `);

    const { firstname, lastname, username, email, password, country, city, address, phone, status } = req.body;
    let user = { firstname, lastname, username, email, password, country, city, address, phone, status };
    const token = jwt.sign(
      { email: email, password: password },
      TOKEN_KEY,
      { expiresIn: "2h" }
    )
    let userJWT = { ...user, token };
    res.status(200).json(userJWT)

  } catch (error) {
    res.status(404).json({ Error: "Error al registrar usuario" });
  }

}

const newOrder = async (req, res) => {
  try {

    const order = await postCreateOrder(req.body)

    res.status(200).json(`Se ha creado la ordem exitosamente `);
  } catch (error) {
    res.status(404).json({ Error: "Error al registrar la orden" });
  }
}

const getClientsH = async (req, res) => {
  try {
    const clients = await getClients();
    res.status(200).json(clients)
  } catch (error) {
    res.status(404).json({ Error: "Error al obtener a los clientes" })
  }
}

const getOrdersH = async (req, res) => {
  try {
    const orders = await getOrders();
    res.status(200).json(orders)
  } catch (error) {
    res.status(404).json({ Error: "Error al obtener las ordenes" })
  }
}

const updateClient = async (req, res) => {
  const { id } = req.params;
  const clientUpdate = {
    ...req.body,
    user: id
  }
  try {
    const client = await updateClientC(id, clientUpdate)
    res.status(200).json(`Se actualizo el cliente`)
  } catch (error) {
    res.status(404).json(`Error al actualizar el cliente`)
  }
}

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const orderUpdate = {
    ...req.body,
    user: id
  }
  try {
    const order = await updateOrderC(id, orderUpdate)
    res.status(200).json(`Se actualizo la orden`)
  } catch (error) {
    res.status(404).json(`Error al actualizar la orden`)
  }
}


// Eliminar al conetar al bdd
const users = [
  {
    firstname: "Diego", lastname: "Maldonado", username: "diegotoro",
    email: "diegotoro@mail.com", password: "123456", country: "ARG",
    city: "Not found", address: "Not found", phone: "54 9 11 62112403",
    status: "admin"
  },
  {
    firstname: "Diego", lastname: "Meneses", username: "diego21",
    email: "meneses@mail.com", password: "234567", country: "COL",
    city: "Florencia", address: "Not found", phone: "57 320 391 1336",
    status: "admin"
  },
]

const login = async (req, res) => {
  const { username, password } = req.body;

  const searhcUser = users.find(u => u.username === username || u.email === username && u.password === password);

  try {
    if (!searhcUser) return res.status(404).json("Usuario no registrado!")
    const token = jwt.sign(
      { username: searhcUser.username, password: searhcUser.password },
      TOKEN_KEY,
      { expiresIn: "2h" }
    )

    let userJWT = { ...searhcUser, token }

    res.status(200).json(userJWT)

  } catch (error) {
    res.status(400).json("Error al iniciar la sesion")
  }

}

const registerWhitGoogle = async (req, res) => {
  const { name, email } = req.body;

  let user = { name, email }; // ver si esta y si no esta crearlo

  try {
    const token = jwt.sign(
      { name: name, email: email },
      TOKEN_KEY,
      { expiresIn: "2h" }
    )
    let userJWT = { ...user, token };
    res.status(200).json(userJWT);
  } catch (error) {
    res.status(400).json("Ocurrio un error en el registro!")
  }

}

module.exports = {
  postFeedbackHandler,
  getFeedbacksHandler,
  newRegister,
  newOrder,
  getOrdersH,
  getClientsH,
  updateClient,
  updateOrder,
  login,
  registerWhitGoogle
};
