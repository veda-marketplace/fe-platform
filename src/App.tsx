import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
