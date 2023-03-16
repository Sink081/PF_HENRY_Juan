import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {commerceRegister, getSubCategories, getTradesCategories, getZonas, getTrades} from "../../redux/actions/actions"
import styles from "./CommerceRegistrationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import swal from "sweetalert";




export default function CommerceRegistrationForm() {
const Validate = (currentInput) => {
	let currentErrors = {}
	let RegExInputCommerceEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let RegExInputCommerceText = /^[a-zA-Z\s]*$/;
	let RegExInputCommerceNum = /^[0-9,$]*$/;

	//Validacion nombre del comercio
if(!currentInput.commerceName){
	currentErrors.commerceName = "Por favor ingresa un nombre"
}
//Validacion categoria
if(!currentInput.category){
	currentErrors.category = "Por favor selecciona una categoría"
}
//Validacion SubCategoria
if(!currentInput.subcategory) {
currentErrors.subcategory = "Por favor selecciona una subcategoría"
}
//Validacion descripcion
if (!currentInput.description){
	currentErrors.description = "Debes ingresar una descripción"
}
//Validacion imagen
if(!currentInput.image){
	currentErrors.image = "Selecciona una imagen del comercio de tu galería"
}
//Validacion Provincia
if(!currentInput.province) {
	currentErrors.province = "Ingresa tu Provincia"
}
//Validacion Ciudad
if(!currentInput.city){
	currentErrors.city = "Ingresa tu ciudad"
}
//Validacion Direccion
if(!currentInput.address){
	currentErrors.address = "Ingresa tu dirección"
}
//Validacion Telefono
if(!currentInput.phone){
	currentErrors.phone = "Ingresa tu número de teléfono"
}
if (!RegExInputCommerceNum.test(currentInput.telephone)) {
	currentErrors.telephone = "Solo números, por favor";
}
//Validacion deliveryZone
if(!currentInput.deliveryZone){
	currentErrors.deliveryZone = "Ingresa tu zona de envíos"
}
//Validacion UserName
if(!currentInput.userName){
	currentErrors.userName = "Ingresa tu nombre de usuario"
}
if (currentInput.userName.length < 6) {
	currentErrors.username = "Tu nombre de usuario debe tener al menos 6 caracteres"
}
//Validacion password
if(!currentInput.password){
	currentErrors.password = "Ingresa una contraseña"
}
if (currentInput.password.length < 5) {
	currentErrors.password = "La contraseña debe contener mas de 5 caracteres"
}
//Validacion email
if(!currentInput.email){
	currentErrors.email = "Ingresa tu dirección de correo electrónico"
}
if (!RegExInputCommerceEmail.test(currentInput.email)) {
	currentErrors.email = "Tu email debe incluir @ y .com"
}
//Validacion epagos
if(!currentInput.epagos){
	currentErrors.epagos = "Ingresa tu método de pago"
}








	return currentErrors
}
const dispatch = useDispatch()
const stateCategories = useSelector((state) => state.tradesCategories)
const stateSubCategories = useSelector((state) => state.tradesSubCategories)
const stateZones = useSelector((state) => state.zones)
const [subCat, setSubCat] = useState(stateSubCategories)
console.log(stateSubCategories)
//Estado que maneja la imagen
const [commerceImg, setCommerceImg] = useState("")
const [currentErrors, setCurrentErrors] = useState({})

const [currentInput, setCurrentInput] = useState({
	commerceName: "",
	category: "",
	subcategory: "",
	description: "",
	image: "",
	province: "",
	city: "",
	address: "",
	phone: "",
	deliveryZone: [],
	userName: "",
	password: "",
	email: "",
	rating: "",
	epagos: "",
	active: true,
});
console.log(currentInput)


useEffect(() => {
	dispatch(getTradesCategories())
	dispatch(getZonas())
}, [dispatch])

useEffect(() => {
	if (currentInput.category !== "default" && currentInput.category) {
		console.log(currentInput.category)
		dispatch(getSubCategories(currentInput.category));
	}
}, [currentInput.category]);

useEffect(() => {
	if (stateSubCategories){
		setCurrentInput({...currentInput, subcategory: stateSubCategories})
	}
}, [stateSubCategories])

useEffect(()=>{
	setCurrentErrors(Validate(currentInput))
}, [currentInput])





//registramos los cambios en los inputs
const handleChangeInputs = (e) => {
	setCurrentInput({ ...currentInput, [e.target.name]: e.target.value })
	setCurrentErrors(Validate({
            ...currentInput,
            [e.target.name] : e.target.value
        }));
};

// Manejo la imagen con CLOUDINARY
const handleCommerceImgUpload = async (e) => {
	const files = e.target.files;
	console.log(files);
	const datas = new FormData();
	datas.append("file", files[0]);
	datas.append("upload_preset", "PEDI-VERY");
	const res = await fetch("https://api.cloudinary.com/v1_1/sebov96/upload", {
		method: "POST",
		body: datas,
	});
	const file = await res.json();
	setCurrentInput({
		...currentInput,
		image: file.secure_url,
	});
};

//registramos los values de los select
const handleSelectCategories = (e) => {
e.preventDefault()
setCurrentInput({
	...currentInput,
	category: e.target.value
})
setCurrentErrors(Validate({
            ...currentInput,
            category: [...currentInput.category, e.target.value]
        }))
}

const handleSelectSubCategories = (e) => {
	e.preventDefault()
	setCurrentInput({
		...currentInput,
		subcategory: e.target.value
	})
	setCurrentErrors(Validate({
            ...currentInput,
            subcategory: [...currentInput.subcategory, e.target.value]
        }))
	}

	const handleSelecDeliveryZone = (e) => {
		e.preventDefault()
		if(currentInput.deliveryZone.includes(e.target.value) && currentInput.deliveryZone.length <= 1)
		setCurrentInput({
			...currentInput,
			deliveryZone: [currentInput.deliveryZone, e.target.value]
		})
		setCurrentErrors(Validate({
            ...currentInput,
            deliveryZone: [...currentInput.deliveryZone, e.target.value]
        }))
		}

		

//Envio los datos del form al BACK, actualiza, resetea el estado y captura errores
const handlerSubmit = (e) => {
	e.preventDefault();
	const { commerceName, category, userName, epagos, password, subcategory, description, email, deliveryZone, phone, image,  province, city, address } =
		currentInput;
	if (
		!commerceName ||
		!category ||
		!subcategory ||
		!description ||
		!image ||
		!province ||
		!city ||
		!address ||
		!phone ||
		!deliveryZone ||
		!userName ||
		!password ||
		!email ||
		!epagos
	) {
		swal({
			title: "Error!",
			text: "Rellena todos los campos correctamente, por favor",
			icon: "error",
			button: "Ok",
		});
	} else {
		dispatch(commerceRegister(currentInput));
		swal({
			title: "Listo!",
			text: "El comercio fue creado correctamente",
			icon: "success",
			button: "Ok",
		});
		setCurrentInput({
			commerceName: "",
			category: "",
			subcategory: "",
			description: "",
			image: "",
			province: "",
			city: "",
			address: "",
			phone: "",
			deliveryZone: [],
			userName: "",
			password: "",
			email: "",
			epagos: "",
			active: true,
		});
	}
};


	return (
		<div className={styles.commerceRegistration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form} onSubmit={handlerSubmit}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre Del Comercio</label>
							<input type="text" placeholder="" name="commerceName" value={currentInput.commerceName} onChange={handleChangeInputs} />
							
                        {currentErrors.commerceName && (<p>{currentErrors.commerceName}</p>)}
                    
						</div>
						<div className={styles.input__container}>
							<select onChange={handleSelectCategories}>
							<option value="default" selected disabled>Categoria</option>
							{stateCategories && stateCategories.map((e) =>(<option value={e}>{e}</option>))}
							
							</select>
						</div>
						{currentInput.category !== "default" ? (<div className={styles.input__container}>
							<select onChange={handleSelectSubCategories}>
							<option value="default" selected={currentInput.category === "default"}>Subcategoria</option>
							
							{currentInput.category && currentInput.category !== "default" ? stateSubCategories && stateSubCategories?.map(
								(e) =>(<option value={e}>{e}</option>)) :
								null}
							</select>
						</div>): null}
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Descripción</label>
							<input type="text" placeholder="" name="description" value={currentInput.description} onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre de usuario</label>
							<input type="text" placeholder="" name="userName" value={currentInput.userName} onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Email</label>
							<input type="text" placeholder="" name="email" value={currentInput.email} onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Password</label>
							<input type="password" placeholder="" name="password" value={currentInput.password} onChange={handleChangeInputs}/>
						</div>
					</div>

					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Provincia</label>
							<input type="text" placeholder="" name="province" value={currentInput.province} onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Ciudad</label>
							<input type="text" placeholder="" name="city" value={currentInput.city} onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Dirección</label>
							<input type="text" placeholder="" name="address" value={currentInput.address} onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Teléfono</label>
							<input type="text" placeholder="" name="phone" value={currentInput.phone} onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
					<div className={styles.input__container}>
							<select onChange={handleSelecDeliveryZone}>
							<option value="default" selected disabled>Zona de Delivery</option>
							{stateZones && stateZones.map((e) =>(<option value={e}>{e}</option>))}
							
							</select>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Medios de pago</label>
							<input type="text" placeholder="" name="epagos" value={currentInput.epagos} onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input type="file" placeholder="" onChange={handleCommerceImgUpload}/>
						</div>
					</div>
					<button type="submit">
					<ButtonPrimary texto="CREAR COMERCIO" />
					</button>
				</form>
			</div>
		</div>
	);
}
