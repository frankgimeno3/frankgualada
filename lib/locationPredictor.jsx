
import freetimeLoc from "./freetimeLoc.jsx"

function locationPredictor ( isAlive, isSick, citizenAge, day, hour, isHome, isReligious){
    const [location, setLocation] = useState(null);
    
        if(!isAlive){
            setLocation("graveyard");
        }
        else 
        {
            if (!isSick){setLocation("hospital")}
            else{
                if(day>5 || day==5 && (hour>=9 && hour<=15)){
                    if (citizenAge < 1){setLocation("home")}
                    else if (citizenAge < 18){setLocation("school")}
                    else if (citizenAge < 65){setLocation("work")}
                }
                else{
                    if((hour>=9 && hour<=15)){
                        setLocation( freetimeLoc(hour, day, isHome, isReligious, isSick))
                    }
                    else{
                        setLocation("home");
                    }                }
            }
        }
    

    return location;
}

export default locationPredictor;