import "./App.css";
import { CountdownTimer } from "./components/CountdownTimer/CountdownTimer";

function App() {
	return (
		<>
			<audio id="audio" loop autoplay>
				<source src="%PUBLIC_URL%/music.mp3" type="audio/mpeg" />
			</audio>
			<div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", height: "100vh" }}>
				<div className="cont">
					<div className="spinner"></div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", width: "80%", alignItems: "center" }}>
					<div className="header outline" data-content="Do woja idziecie za:">
						Do woja idziecie za:
					</div>
					<div className="countdown__timer">
						<CountdownTimer targetDate={"07/17/2023, 07:30"} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
