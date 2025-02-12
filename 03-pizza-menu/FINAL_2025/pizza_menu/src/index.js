import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzaData = [];
  const pizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu :</h2>
      {/* && OPERATOR */}
      {/* {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
            />
          ))}
        </ul>
      )} */}

      {/* use ? */}
      {pizzas > 0 ? (
        <>
          <p>Authentic italian cuisine.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>There is no pizza available.</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  // if (pizza.soldOut) return null;
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt="Pizza spinaci" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price + " VND"}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour > 9 || hour < 21;
  // if (isClosed) alert("Chung toi da dong cua.")
  //   else alert("Chung toi van dang mo cua.")
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>Open until 21h. Come visit us or order online.</p>
          <button className="btn">Order now</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
