import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminOwner from "./views/DashboardAdmin/AdminOwner";
import ComercioDetail from "./views/ComercioDetail/ComercioDetail";
import Home from "./views/home/Home";
import HomeLocal from "./views/HomeCommerce/HomeLocal";
import Login from "./views/Login/Login";
import OpinionForm from "./views/OpinionForm/OpinionForm";
import UserSearch from "./views/UserSearch/UserSearch";
import RegistrationForm from "./views/RegistrationForm/RegistrationForm";
import ProductCreationForm from "./views/ProductCreationForm/ProductCreationForm";
import CommerceRegistrationForm from "./views/CommerceRegistrationForm/CommerceRegistrationForm";
import { UserContextProvider } from "./Context/userContext";

function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/adminowner" element={<AdminOwner />} />
					<Route path="/login" element={<Login />} />
					<Route path="/s" element={<HomeLocal />} />
					<Route path="/search" element={<UserSearch />} />
					<Route path="/opinion" element={<OpinionForm />} />
					<Route path="/comercio/:id" element={<ComercioDetail />} />
					<Route path="/registration" element={<RegistrationForm />} />
					<Route path="/registration_product" element={<ProductCreationForm />} />
					<Route
						path="/registration_commerce"
						element={<CommerceRegistrationForm />}
					/>
				</Routes>
			</UserContextProvider>
		</div>
	);
}

export default App;
