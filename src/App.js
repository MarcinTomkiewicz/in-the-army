import "./App.css";
import { CountdownTimer } from "./components/CountdownTimer/CountdownTimer";

function App() {
		return (
		<div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center", height: "100vh"}}>
			<div className="cont">
				<div className="spinner"></div>
			</div>
      <div style={{display: "flex", flexDirection: "column", width: "80%", alignItems: "center"}}>
      <div className='header outline' data-content='Do woja idziecie za:'>Do woja idziecie za:</div>
			<div className="countdown__timer">
				<audio src={process.env.PUBLIC_URL + 'music.mp3'} autoPlay loop preload='auto'/>
				<CountdownTimer targetDate={"07/17/2023, 07:30"} />
			</div>
      </div>
		</div>
	);
}

export default App;
