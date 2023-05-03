export const ProjectDescription = () => {
  return (
    <>
        <div className="bg-amber-400">
            <div className="h-20vh max-w-7xl ml-20 mt-20 ">
                <h3 className="text-gray-800">About this Project</h3>
            </div>
        </div>      <div className="h-20vh max-w-7xl ml-20">
        <p className="pt-5">
          This project ressembles a city, with citizens, their homes, and the
          places where they work, also including public facilities like a
          hospital, a park, and a city hall. Each citizen has a private profile,
          including some of their personal information, and their current
          location (based on a programmed behaviour). Most citizens work in the
          textile factories of the city, but some of them work in shops,
          government facilities or even act in a theater. </p>
          <p> The frontend of the
          project is coded in NextJS-Typescript, using tailwind CSS for styling.
          It consists on: </p>
          <ul className="pl-20 py-5"> 
            <li className="py-5" >·Homepage: Contains a description of the project, a
          small map of the city model (with a description for each area), and a
          search engine for looking for user profiles. </li>
          <li className="py-5" >·CityMap: Renders a view
          of each of the buildings, making it possible to select them to show
          what they are and who's there. </li>
          <li className="py-5">·Citizen Profiles: Contains a
          description of the user, based in their personal data, and their
          current location. Citizen location will depend on the current hour
          (adult citizens work during daytime, kids go to school), their health
          state (elders will stay home, sick citizens will be in the hospital),
          and other aspects regarding they current state (some citizens will be
          in prison, some will be purchasing goods, some others might be out of
          town, and some other might even die and go to the graveyard to stay
          there permanently). </li>
          </ul>
          <p >Citizens lifes will evolve randomly given certain
          parameters, in a timeframe of 30 natural days. At that time, all data
          will be reseted and the cicle will restart again. The project name is
          inspired in the textile city of Igualada, in Catalonia - Spain.
          </p>
        
      </div>
    </>
  );
};
