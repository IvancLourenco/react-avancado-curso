
import {useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import { ExecuteFunction } from './components/ExecuteFunction';

function App() {
  const [userName] = useState("ivan");
  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color:"Branco", newCar: false, km: 34433},
    {id: 3, brand: "Renault", color:"Azul", newCar: false, km: 234},
  ];

  const showMessage = () => {
    console.log("Evento do Component pai")
  }

  return (
    <div className="App">

      <h1>Avançando em React</h1>

      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <div>
        <img src={City} alt="cidade" />
      </div>

      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name= {userName}/>

      {/* Destructuring */}
      <CarDetails brand = "VW" km={100000} color = "azul"  newCar = {false}/>

      {/* Reaproveitamento */}
      <CarDetails brand = "VW" km={0} color = "Vermelha"  newCar = {true} />
      <CarDetails brand = "VW" km={4500} color = "Branco" newCar = {false} />

      {/* Loop em Array de Objects */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand}
        color={car.color}
        km= {car.km}
        newCar= {car.newCar}
        />  
      ))}

      {/* Fragment*/}
      <Fragment propFragment = "Funcionou?"/>

      {/* Children*/}
      <Container myValue = "testing">
        <p> Esse é o conteúdo</p>
      </Container>

      <Container myValue = "testing 2">
        <h5>Esse e o teste</h5>
      </Container>
      
      {/* Executar função*/}
      <ExecuteFunction myFunction = {showMessage}/>
      

    </div>
  );
}

export default App;
