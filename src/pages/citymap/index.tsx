import Layout from "../../components/ui/layout/layout/Layout";

const CityMapPage = () => {
  return (
    <Layout title="Frankgualada">
      <>
      <div className="flex mt-20 pt-20 justify-center bg-amber-400">
        <h1>This is the city map Page</h1>
      </div>
      <div>
        <h3>Search by areas</h3>
        <h4>In the city</h4>
          <h5>Shopping areas</h5>
            <h6>Building and materials</h6>
              <button>Woods store</button>
              <button>Building Materials Shop</button>
              <button>Building Materials Warehouse</button>
              <button>Glassworks</button>
              <button>Blacksmith</button>
              <button>Tools Shop</button>
              <button>Leather and metals warehouse</button>
            <h6>Clothing stores</h6>
              <button>Belts and leather</button>
              <button>Shoemaker</button>
              <button>Hat shop</button>
              <button>Dresses shop</button>
              <button>Binocles and glasses shop</button>
            <h6>Grocery stores</h6>
              <button>General Foods store</button>
              <button>Fresh Foods store</button>
              <button>Dry Foods warehouse</button>
              <button>Drinks and licuors store</button>
              <button>Cheese store</button>
              <button>Bakery</button>
            <h6>Services</h6>
              <button>Handymens Office</button>
              <button>Horse Vet</button>
              <button>Barbers shop</button>
              <button>Dentist</button>
              <button>Tailor</button>
            <h6>Other</h6>
              <button>Agriculture tools Shop</button>
              <button>Furniture Shop</button>
              <button>Luxury items Shop</button>
              <button>Jewelry</button>
              <button>Perfumes Shop</button>
              <button>Agriculture tools Shop</button>
              <button>Plants and flowers shop</button>
              <button>Horse saddles shop</button>
              <button>Armory shop</button>
              <button>Carriages and transportation shop</button>

          <h5>Residential areas</h5>
          <h5>Industrial areas</h5>
            <button>Textile Factory 1</button>
            <button>Textile Factory 2</button>
            <button>Textile Factory 3</button>
  
          <h5>Entertainment areas</h5>
            <button>Bars and Taverns</button>
            <button>Restaurants</button>
            <button>Great Hostel</button>
            <button>Theater</button>

          <h5>Religious areas</h5>
            <button>Church</button>

          <h5>Education areas</h5>
            <button>Academy</button>
            <button>Public School</button>
            <button>Arts School</button>
            <button>Orphanage</button>

          <h5>Government areas</h5>
            <button>City Hall</button>
            <button>Courts of justice</button>
            <button>Prison</button>
            <button>Hospital</button>
            <button>Nursing Home</button>
            <button>Lawyers and burocrats office</button>
            <button>Stables</button>
            <button>Dog Pound</button>
            <button>City Mantainance Facilities</button>
            <button>Fire Fighters</button>
            <button>City Guards Office</button>

          <h5>Graveyard area</h5>
          <button>Graveyard</button>
          <button>Tanatorium</button>
          <button>Graveyard Chappel</button>
          <button>Coffins Shop</button>

        <h4>Out of city</h4>
      </div>
      </>
    </Layout>
  );
};

export default CityMapPage;
