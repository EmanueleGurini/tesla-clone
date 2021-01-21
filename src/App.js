import './App.css';
import Header from './Components/Header.js'
import Items from './Components/Items.js'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Accessories from './assets/Desktop-Accessories.jpg'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div className="App">
      <div className="app__itemsContainer">
      <Header />
      <Items
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        desc-link=""
        backgroundImg={ SolarPanels }
        leftBtnText="ORDER NOW" 
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        first
      />

      <Items
        title="Model S"
        desc="Starting at 69,420"
        desc-link=""
        backgroundImg={ ModelS }
        leftBtnText="CUSTOMER ORDER" 
        leftBtnLinks=""
        rightBtnText="EXISTING INVENTORY"
        rightBtnLinks="" 
        twoButtons="true" 
        />
     
      <Items
        title="Model 3"
        desc="Order Online for "
        descLink="Touchless Delivery"
        backgroundImg={ Model3 }
        leftBtnText="CUSTOM ORDER" 
        leftBtnLinks=""
        rightBtnText="EXISTING INVENTORY"
        rightBtnLinks=""
        twoButtons="true"
      />
      
      <Items
        title="Model X"
        desc="Order Online for "
        descLink="Touchless Delivery"
        backgroundImg={ ModelX }
        leftBtnText="ORDER NOW" 
        leftBtnLinks=""
        rightBtnText="EXISTING INVENTORY"
        rightBtnLinks=""
        twoButtons="true"
      />

      <Items
        title="Model Y"
        desc="Order Online for "
        descLink="Touchless Delivery"
        backgroundImg={ ModelY }
        leftBtnText="ORDER NOW" 
        leftBtnLinks=""
        rightBtnText="LEARN MORE"
        rightBtnLinks=""
        twoButtons="true"
      />

      <Items
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        descLink=""
        backgroundImg={ SolarRoof }
        leftBtnText="ORDER NOW" 
        leftBtnLinks=""
        rightBtnText="LEARN MORE"
        rightBtnLinks=""
        twoButtons="true"
      />

      <Items
        title="Accessories"
        desc=""
        desc-link=""
        backgroundImg={ Accessories }
        leftBtnText="SHOP NOW" 
        leftBtnLinks=""
        rightBtnText=""
        rightBtnLinks=""
        twoButtons=""
        last
      />
      </div>
      
</div>
  );
}

export default App;
