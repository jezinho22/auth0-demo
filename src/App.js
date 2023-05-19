import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./logout";
import Profile from "./profile";

function App() {
	return (
		<div className="App">
			<h1>Auth0 demo</h1>
			<LoginButton />
			<LogoutButton />
			<Profile />
		</div>
	);
}

export default App;
