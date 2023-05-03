
function locationPredictor ( isAlive, isSick, citizenAge, home, school, work){
    const [location, setLocation] = useState(null);
    
        if(!isAlive){
            setLocation(graveyard);
        }
        else 
        {
            if (!isSick){setLocation(hospital)}
            else{
                if(hour>=9 && hour<=15){
                    if (citizenAge < 1){setLocation(home)}
                    else if (citizenAge < 18){setLocation(school)}
                    else if (citizenAge < 65){setLocation(work)}
                }
                else{
                    setLocation(home);
                }
            }
        }
    

    return location;
}