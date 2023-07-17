import "./App.css";
import sound from "./music.mp3";
import { CountdownTimer } from "./components/CountdownTimer/CountdownTimer";

function App() {
	return (
		<div>
			<div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", height: "100vh" }}>
				<div className="cont">
					<div className="spinner"></div>
				</div>
				<div className="header" style={{ display: "flex", flexDirection: "column", width: "85%", alignItems: "center", justifyContent: "space-around", height: "75%" }}>
					<div>
					<div>Stacja XXXIV: Pan Jezus idzie do wojska!</div>
					<div>Wszyscy śpiewają: "Przyjedź mamo na przysięgę"</div>
					</div>
					<div className="height" style={{ display: "flex", flexDirection: "column", width: "80%", alignItems: "center", justifyContent: "space-between", zIndex: 200 }}>
						<div className="header outline" data-content="Do przysięgi pozostało:">
							Do przysięgi pozostało:
						</div>
						<div className="countdown__timer">
							<CountdownTimer targetDate={"08/12/2023, 09:30"} />
						</div>
					</div>
					<div><audio src={process.env.PUBLIC_URL + "/music.mp3"} autoPlay loop /></div>
				</div>
			</div>
		</div>
	);
}

export default App;
