import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavBar from "./MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ConnectedRouter } from "connected-react-router";

import ListItems from "./ListItems";
import ToBuyList from "./ToBuyList";
import AddNewItem from "./AddNewItem";
import SettingsPage from "./SettingsPage";
import LoginPage from "./LoginPage";
import OneItemHistoryPrice from "./OneItemHistoryPrice";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="/"exact={true} element={<LoginPage />} />
          <Route path="/list-items" component={<ListItems />} />
          <Route path="/to-buy-list" element={<ToBuyList />} />
          <Route path="/add-new-item" element={<AddNewItem />} />
          <Route path="/item-details" element={<OneItemHistoryPrice />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>

      <ListItems />

      <AddNewItem />
      <ToBuyList />
      <LoginPage />

      {/* <ItemDetails /> */}
    </div>
  );
}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
