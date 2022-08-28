import React, { useEffect } from "react";
import ExpenseTable from "./ExpenseTable";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";

import "./CSS/App.css";

function App(props) {
  const [expense_details, setExpense_details] = useState([
    {
      id: "1",
      name: "Suma",
      amount_USD: "$200",
      amount_INR: "₹15400",
      category: "Food",
      currency: "USD",
    },
    {
      id: "1",
      name: "Subbi",
      amount_USD: "$400",
      amount_INR: "₹30800",
      category: "Hotel",
      currency: "INR",
    },
    {
      id: "3",
      name: "Vindhya",

      amount_USD: "$250",
      amount_INR: "₹19250",
      category: "Taxi",
      currency: "INR",
    },
    {
      id: "4",
      name: "Shreya",
      amount_USD: "$630",
      amount_INR: "₹48510",
      category: "Flight Ticket",
      currency: "USD",
    },
    {
      id: "5",
      name: "Shreya",
      amount_USD: "$850",
      amount_INR: "₹65450",
      category: "Flight Ticket",
      currency: "USD",
    },
    {
      id: "6",
      name: "Subbi",
      amount_USD: "$400",
      amount_INR: "₹30800",
      category: "Hotel",
      currency: "INR",
    },
    {
      id: "7",
      name: "Vindhya",
      amount_USD: "$250",
      amount_INR: "₹19250",
      category: "Taxi",
      currency: "INR",
    },
    {
      id: "8",
      name: "Suma",
      amount_USD: "$200",
      amount_INR: "₹15400",
      category: "Food",
      currency: "USD",
    },
    {
      id: "9",
      name: "Subbi",
      amount_USD: "$400",
      amount_INR: "₹30800",
      category: "Hotel",
      currency: "INR",
    },
    {
      id: "10",
      name: "Vindhya",

      amount_USD: "$250",
      amount_INR: "₹19250",
      category: "Taxi",
      currency: "INR",
    },
    {
      id: "11",
      name: "Shreya",
      amount_USD: "$630",
      amount_INR: "₹48510",
      category: "Flight Ticket",
      currency: "USD",
    },
    {
      id: "12",
      name: "Shreya",
      amount_USD: "$850",
      amount_INR: "₹65450",
      category: "Flight Ticket",
      currency: "USD",
    },
    {
      id: "13",
      name: "Subbi",
      amount_USD: "$400",
      amount_INR: "₹30800",
      category: "Hotel",
      currency: "INR",
    },
    {
      id: "14",
      name: "Vindhya",
      amount_USD: "$250",
      amount_INR: "₹19250",
      category: "Taxi",
      currency: "INR",
    },
    {
      id: "15",
      name: "Suma",
      amount_USD: "$200",
      amount_INR: "₹15400",
      category: "Flight Ticket",
      currency: "USD",
    },
    {
      id: "16",
      name: "Subbi",
      amount_USD: "$400",
      amount_INR: "₹30800",
      category: "Flight Ticket",
      currency: "INR",
    },
    {
      id: "17",
      name: "Vindhya",

      amount_USD: "$250",
      amount_INR: "₹19250",
      category: "Flight Ticket",
      currency: "INR",
    },
    {
      id: "18",
      name: "Shreya",
      amount_USD: "$630",
      amount_INR: "₹48510",
      category: "Flight Ticket ",
      currency: "USD",
    },
    {
      id: "19",
      name: "Shreya",
      amount_USD: "$850",
      amount_INR: "₹65450",
      category: "Flight Ticket",
      currency: "USD",
    },
  ]);

  //adding new expense to the table
  // const [newExpense, setNewExpense] = useState({});
  // const [count, setCount] = useState(0);

  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("First useEffect- location state values", location.state);
  //   if (location.state != null) {
  //     //if (location.state !== prevLocation.state) {
  //     //const expense = location.state;

  //     setNewExpense(location.state);

  //     navigate(location.pathname, { replace: true });
  //     console.log("new expense", newExpense);

  //     //}
  //   }
  // }, [location.state]);

  // useEffect(() => {
  //   console.log("Second useEffect- new expense value  ", newExpense);
  //   if (Object.keys(newExpense).length > 0) {
  //     setExpense_details([...expense_details, newExpense]);
  //     console.log("expense details updated");
  //   }
  //   console.log("updated expense list", expense_details);
  // }, [newExpense]);

  // useEffect(() => {
  //   let newcount = count + 1;
  //   setCount(newcount);
  // }, [expense_details]);
  // console.log("new expense_details value", expense_details);
  // console.log("App.js ---> the new expense", location.state);
  // console.log("new expense_details value", expense_details);
  return (
    <div className="app">
      <nav>
        <span></span>
        <h2>Expense Report</h2>

        <Link to="/login">
          <p>Logout</p>
        </Link>
      </nav>

      <ExpenseTable data={expense_details} />
    </div>
  );
}

export default App;
