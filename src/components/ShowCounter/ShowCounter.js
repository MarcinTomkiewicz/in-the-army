import { useEffect, useState } from "react";
import { DateTimeDisplay } from "../DateTimeDisplay/DateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {

    const setTimeNamesFlexingCondition = (time) => {
        return (time > 51 && time < 55) || (time > 41 && time < 45) || (time > 31 && time < 35) || (time > 21 && time < 25) || (time > 1 && time < 5);
    }
    const [isDanger, setIsDanger] = useState(false)

    useEffect(() => {
        if(days <=2) {
            setIsDanger(prev => !prev);
        }
        return;
    }, [days])

    console.log(isDanger);

    return (
      <div className="show__counter">
          <DateTimeDisplay value={days} type={days === 1 ? "Dzień" : "Dni" } isDanger={isDanger} />
          <div style={isDanger ? {fontWeight: "bold"} : {}} className={isDanger ? 'outline' : ''} data-content=':'>:</div>
          <DateTimeDisplay value={hours} type={setTimeNamesFlexingCondition(hours) ? 'Godziny' : hours === 1 ? 'Godzina' : 'Godzin'} isDanger={isDanger} />
          <div style={isDanger ? {fontWeight: "bold"} : {}} className={isDanger ? 'outline' : ''} data-content=':'>:</div>
          <DateTimeDisplay value={minutes} type={setTimeNamesFlexingCondition(minutes) ? 'Minuty' : minutes === 1 ? 'Minuta' : 'Minut'} isDanger={isDanger} />
          <div style={isDanger ? {fontWeight: "bold"} : {}} className={isDanger ? 'outline' : ''} data-content=':'>:</div>
          <DateTimeDisplay value={seconds} type={setTimeNamesFlexingCondition(seconds) ? 'Sekundy' : seconds === 1 ? 'Sekunda' : 'Sekund'} isDanger={isDanger} />
      </div>
    );
  };