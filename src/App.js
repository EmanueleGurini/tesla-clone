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
        leftBtnLeft="ORDER NOW" 
        leftBtnLinks=""
        rightBtnLeft="Learn More"
        rightBtnLinks=""
        twoButtons="true"
        first
      />

      <Items
        title="Model S"
        desc="Starting at 69,420"
        desc-link=""
        backgroundImg={ ModelS }
        leftBtnLeft="CUSTOMER ORDER" 
        leftBtnLinks=""
        rightBtnLeft="EXISTING INVENTORY"
        rightBtnLinks="" twoButtons="true" />
     
      <Items
        title="Model 3"
        desc="Order Online for "
        descLink="Touchless Delivery"
        backgroundImg={ Model3 }
        leftBtnLeft="CUSTOM ORDER" 
        leftBtnLinks=""
        rightBtnLeft="EXISTING INVENTORY"
        rightBtnLinks=""
        twoButtons="true"
      />
      
      <Items
        title="Model X"
        desc="Money-back guarantee"
        desc-link=""
        backgroundImg={ ModelX }
        leftBtnLeft="ORDER NOW" 
        leftBtnLinks=""
        rightBtnLeft="Learn More"
        rightBtnLinks=""
        twoButtons="true"
      />

      <Items
        title="Model Y"
        desc="Money-back guarantee"
        desc-link=""
        backgroundImg={ ModelY }
        leftBtnLeft="ORDER NOW" 
        leftBtnLinks=""
        rightBtnLeft="Learn More"
        rightBtnLinks=""
        twoButtons="true"
      />

      <Items
        title="Solar for New Roofs"
        desc="Money-back guarantee"
        desc-link=""
        backgroundImg={ SolarRoof }
        leftBtnLeft="ORDER NOW" 
        leftBtnLinks=""
        rightBtnLeft="Learn More"
        rightBtnLinks=""
        twoButtons="true"
      />

      <Items
        title="Accessories"
        desc="Money-back guarantee"
        desc-link=""
        backgroundImg={ Accessories }
        leftBtnLeft="ORDER NOW" 
        leftBtnLinks=""
        rightBtnLeft="Learn More"
        rightBtnLinks=""
        twoButtons="true"
      />
      </div>
</div>
  );
}

export default App;
