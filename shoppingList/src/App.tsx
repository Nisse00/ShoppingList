import React from "react"
import ShoppingList from "../components/ShoppingList"
export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ textAlign: "center" }}>
          <ShoppingList />
        </div>
      </div>
    </div>
  );
}