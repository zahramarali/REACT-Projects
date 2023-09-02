import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App () {
  
  return(
    <div>
      <Header/>
      <Menu/>
      <Footer/>

    </div>
  )
};

function Header () {
  return(
    <header className="header" >
      <h1>fast react pizza co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzasNum= pizzas.length;


  return(
    <>  
    <main className="menu">
      <h2>OUR MENU</h2>
      {pizzasNum > 0 ? (
        <>
    <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>          <ul className="pizzas">
          {pizzas.map(item => <Pizza pizzaObj={item} />)}
        </ul>
        </>
      ):<p>we are working on menu</p>}
     
    </main>
    </>
  )
}

function Pizza({pizzaObj}) {

  
  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <div>
    <h3>{pizzaObj.name}</h3>
    <p>{pizzaObj.ingredients}</p>
    <span>{pizzaObj.soldOut?"SOLD OUT":pizzaObj.price}</span>
    </div>
    </li>)
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <=closeHour;

  return(
    <>
    <footer className="footer">{isOpen ? <Order closeHour={closeHour}/>
    : <p className="order">you are welcome if you come between {openHour}:00 and {closeHour}:00</p>
       } </footer>
    </>
  )
}

function Order(props) {
  return(
    <>
    <div className="order">
      <p>we are open until {props.closeHour}:00. come to visit us or order online.</p>
      <button className="btn">order</button>
    </div> 
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App/>
</React.StrictMode>
);