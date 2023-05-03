
function freetimeLoc(hour, day, isHome, isReligious, isSick) {
  const randomNumberGenerator = Math.floor(Math.random() * 35) + 1;
  if (hour >= 9 && hour <= 21 && day >= 5 && !isHome) {
    if (isSick) {
      location = "Hospital";
    } else {
      if (day == 7 && isReligious) {
        location =("Church");
      } else {
        switch (randomNumberGenerator) {
          case 1:
            location =("AgricultureToolsShop");
            break;
          case 2:
            location =("ArmoryShop");
            break;
          case 3:
            location =("Bakery");
            break;
          case 4:
            location =("BarsAndTaverns");
            break;
          case 5:
            location =("BeltsAndLeather");
            break;
          case 6:
            location =("Blacksmith");
            break;
          case 7:
            location =("BuildingMaterialsShop");
            break;
          case 8:
            location =("BuildingMaterialsWarehouse");
            break;
          case 9:
            location =("CarriagesAndTransportationShop");
            break;
          case 10:
            location =("CheeseStore");
            break;
          case 11:
            location =("Dentist");
            break;
          case 12:
            location =("DressesShop");
            break;
          case 13:
            location =("DrinksAndLiquorsStore");
            break;
          case 14:
            location =("FurnitureShop");
            break;
          case 15:
            location =("Glassworks");
            break;
          case 16:
            location =("GroceryStores");
            break;
          case 17:
            location =("Hatshop");
            break;
          case 18:
            location =("HorseSaddlesShop");
            break;
          case 19:
            location =("HorseVet");
            break;
          case 20:
            location =("JewelryShop");
            break;
          case 20:
            location =("LeatherAndMetalsWarehouse");
            break;
          case 22:
            location =("LuxuryItemsShop");
            break;
          case 23:
            location =("NursingHome");
            break;
          case 24:
            location =("PerfumesShop");
            break;
          case 25:
            location =("PlantsAndFlowersShop");
            break;
          case 26:
            location =("Prison");
            break;
          case 27:
            location =("PublicSchool");
            break;
          case 28:
            location =("Restaurants");
            break;
          case 29:
            location =("Shoemaker");
            break;
          case 30:
            location =("Stables");
            break;
          case 31:
            location =("Tailor");
            break;
          case 32:
            location =("Tanatorium");
            break;
          case 33:
            location =("Taverns");
            break;
          case 34:
            location =("Theater");
            break;
          case 35:
            location =("ToolsShop");
            break;
          default:
            location =("home");
            break;
        }
      }
    }
  } else {
    location =("home");
  }
  return location;
}