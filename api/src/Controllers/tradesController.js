const Trade = require("../models/Trades");
const Categories = require("../models/Categories");
const Subcategories = require ("../models/Subcategory")
const bcrypt = require("bcryptjs");
const sendMail = require('../Helpers/emailTrade')
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";
const jwt = require('jsonwebtoken');
const sendMailWelcome = require('../Helpers/emailRegisterTrades')
const sendMailResetSuccess = require('../Helpers/emailResetPasswordSuccesTrade')
const sendMailReset = require('../Helpers/emailResetPasswordTrades')


// GET COMERCIOS
// [Todos los comercios de todas las categorias]
const getAllTrades = async () => {	// OK
	const alltrades = await Trade.find();
	if (alltrades.length) {
		return alltrades;
	} else return `Ocurrió un error: No hay comercios en nuestra Base de Datos`;
};

// [Todos los comercios con reparto en la ciudad especificada]
const searchByZone = async (deliveryZone) => {	// OK
	try {
		const tradesFound = await Trade.find({ deliveryZone: deliveryZone });
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los comercios con reparto en la zona y de la categoria especificada]
const searchByZoneAndCat = async (deliveryZone, category) => {	// OK
	try {
		const tradesFound = await Trade.find({
			deliveryZone: deliveryZone,
			category: category,
		});
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los comercios con reparto en la zona, de la categoria y tipo de pago especificado]
const searchByZoneAndCatAndEpagos = async (deliveryZone, category, epagos) => {	// OK
	try {
		const tradesFound = await Trade.find({
			deliveryZone: deliveryZone,
			category: category,
			epagos: epagos,
		});
		if (tradesFound.length) {
			return tradesFound;
		} else return `Vaya! No encontramos comercios para esa busqueda!`;
	} catch (error) {
		return error.message;
	}
};

// [Todos los comercios con todos los filtros activados]
const searchTradesByFilters = async (tradesFilter) => {	// OK
	try {		
		const tradesFound = await Trade.find(tradesFilter); 
		if (tradesFound.length) {
			return tradesFound;
		} else return [];
	} catch (error) {
		return error.message;
	}
};

// [El comercio que corresponde con el ID]
const searchTradeById = async (id) => {	// OK
	try {
		const tradeById = await Trade.findById(id);
		if (tradeById) {
			return tradeById;
		} else return `Vaya! Ocurrió un problema al acceder al comercio!`;
	} catch (error) {
		return error.message;
	}
};

const searchTradeByName = async (name) => { // OK
	try {
		let tradeFound = await Trade.find()
		let tradeCoincidence = tradeFound.filter((t) => t.commerceName.toLowerCase().includes(name.toLowerCase()))
		if (tradeCoincidence.length) return tradeCoincidence
		return `No se encontraron comercios`		
	} catch (error) {
		throw new Error(`Ocurrió un problema al buscar el comercio.`)
	}
}

// [Lista de categorias sin repetir para poder mapear en un select en el front]
const getAllCategories = async () => {	// OK
	try {
		const allTrades = await Trade.find({}, "category");
		if (allTrades.length) {
			const categoriesRepeat = [];
			allTrades.forEach((trade) => {
				categoriesRepeat.push(trade.category);
			});
			return [...new Set(categoriesRepeat)];
		} else return `Vaya! Hubo un problema al buscar en la base de datos`;
	} catch (error) {
		return error.message;
	}
};

// [Lista de subcategorias sin repetir que corresponden a la categoria seleccionada]
const getSubCategories = async (category) => {	// OK
	try {
		const allTrades = await Trade.find({ category: category }, "subcategory");
		if (allTrades.length) {
			const subcategoriesRepeat = [];
			allTrades.forEach((trade) => {
				subcategoriesRepeat.push(trade.subcategory);
			});
			return [...new Set(subcategoriesRepeat)];
		} else return `Vaya! Hubo un problema al buscar en la base de datos`;
	} catch (error) {
		return error.message;
	}
};

// [Lista de zonas de delivery disponibles] [{deliveryZone: []}, {deliveryZone: []}]
const getDeliveryZones = async () => {	// OK
	try {
		const allTrades = await Trade.find({}, "deliveryZone");
		if (allTrades.length) {
			const deliveryZonesRepeat = [];
			for (let i = 0; i < allTrades.length; i++) {
				for (let j = 0; j < allTrades[i].deliveryZone.length; j++) {
					deliveryZonesRepeat.push(allTrades[i].deliveryZone[j]);
				}
			}
			return [...new Set(deliveryZonesRepeat)];
		} else return `Vaya! Hubo un problema al buscar en la base de datos`;
	} catch (error) {
		return error.message;
	}
};


// PUTS
const updateTrade = async (tradeId, body) => { // OK
  try {
    const updateTrade = await Trade.findByIdAndUpdate(tradeId, body, { new: true });
    if (updateTrade) return true
	return false
  } catch (error) {
    return error.message;
  }
}

const updateTrades = async (body) => {  // OK
	try {
	  const tradeUpdate = await Trade.updateMany({}, body)
	  if (tradeUpdate) return `Comercios actualizados.`
	  return `Problema al actualizar los comercios.`
	} catch (error) {
	  return error.message
	}
  }

//POST
const createTrades = async (body) => { // OK
	const {password, email} = body
	try {
		const token = jwt.sign(
			{ email: email },
			TOKEN_KEY,
			{ expiresIn: "2h" }
		)
		const newTrade = new Trade(body);

		const salt = bcrypt.genSaltSync(10);
		newTrade.password = bcrypt.hashSync(password, salt);
		await newTrade.save();
		sendMail(newTrade.email,token)

		return true;
	} catch (error) {
		return error.message;
	}
};

const confirmEmail = async (token ) => { // OK
	try {
		const payload = jwt.verify(token,TOKEN_KEY)
		
		let email = payload.email;
		
		const trades = await Trade.findOne({email});
		
		if (!trades) return "No se encontro el usuario"
		if (trades.emailVerified) return "El correo ya se encuentra verificado"
		
		trades.emailVerified = true;
		await trades.save()
		await sendMailWelcome(trades.email,trades.username);
		return "El correo electronico ha sido verificado"
  
	} catch (error) {
	  return "Token invalido";
	}
  }

  const sendMailNewPassword = async (email,token) => { // ?
	try {
	  await sendMailReset(email,token)
	  return "Se ha enviado el link a tu email"
	} catch (error) {
	  return "Error al enviar el email"
	}
  }
  
  const resetPasswordController = async (password, token) => { // ?
	try {
	  const payload = jwt.verify(token,TOKEN_KEY)
	
	  let email = payload.email;
  
	  const salt = bcrypt.genSaltSync(10);
	  const trade = await Trade.findOne({email})
	  
	  let newPassword = bcrypt.hashSync(password, salt)
  
	  trade.password = newPassword;
  
	  await trade.save();
	  await sendMailResetSuccess(trade.email,trade.userName);
  
	  return "Se actulizo la contraseña"
	} catch (error) {
	  return "No se ha encontrado al cliente"
	}
  }
  

const createCategory = async (category) => { // OK
  try {
    const newCategory = new Categories(category);    
    await newCategory.save()
	return true;
  } catch (error) {
    throw new Error({Error: error.message})
  }
};

const createSubcategory = async (subCat) => { // OK
	try {
		const newSubCat = new Subcategories(subCat)
		await newSubCat.save()
		return true
	} catch (error) {
		throw new Error({Error: error.message})
	}
}

const verifyTradeLog = async (username, password) => { // ?
	try {
		const existUser = await Trade.find({userName: username})
		const trade = existUser[0]
		if (existUser.length) {
			const pass = bcrypt.compareSync(password, trade.password);
    		if (pass) return trade._id
    		return false
		} return false
	} catch (error) {
		return error.message
	}
}

// DELETE
const deleteTrade = async (id) => { //OK
	try {
		const tradeDeleted = await Trade.deleteOne({_id: id})
		if (tradeDeleted.deletedCount !== 0) {
			return `Comercio eliminado!`
		} return `No se encontró el comercio.`
	} catch (error) {
		console.log(error.message);
		throw new Error(`Ocurrio un error al intentar eliminar el comercio`)
	}
}

module.exports = {
	getAllTrades,
	searchByZone,
	searchByZoneAndCat,	
	searchByZoneAndCatAndEpagos,
	searchTradesByFilters,
	searchTradeById,
	createTrades,
	createCategory,
	getAllCategories,
	getSubCategories,
	getDeliveryZones,
	confirmEmail,
	resetPasswordController,
	sendMailNewPassword,
	verifyTradeLog,
	updateTrade,
	deleteTrade,
	searchTradeByName,
	createSubcategory,
	updateTrades
};
