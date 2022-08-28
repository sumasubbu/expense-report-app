import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./CSS/AddExpense.css";

export default function AddExpense() {
  //toastify notification
  const notify = () => {
    toast.success("Expense added!");
  };

  const navigate = useNavigate();
  const [expense, addExpense] = useState({
    id: "",
    name: "",
    amount: "",
    currency: "",
    amount_USD: "",
    amount_INR: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const expenseCopy = expense;

    if (expenseCopy.currency === "USD") {
      expenseCopy.amount_USD = expenseCopy.amount;
      expenseCopy.amount_INR = (Number(expenseCopy.amount_USD) * 77).toString();
      addExpense(expenseCopy);
    } else if (expenseCopy.currency === "INR") {
      expenseCopy.amount_INR = expenseCopy.amount;
      expenseCopy.amount_USD = (Number(expenseCopy.amount_INR) / 77).toString();
      addExpense(expenseCopy);
    }

    console.log("New Expense ", expense);
    notify();

    navigate("/dashboard", {
      state: expense,
    });
    //{
    // state: {
    //   empID: 1,
    //   name: "Lorem Ipsum",
    //   amount:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   amount_USD: "34",
    //   amount_INR: "454",
    //   category: "food",
    // },
    //});
    //alert("Expense added");
  }
  //function for storing input field in the state
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    addExpense({ ...expense, [e.target.name]: e.target.value });
  }
  return (
    <div className="add-expense">
      <nav>
        <span></span>
        <h2>Add Expense</h2>
        <Link to="/dashboard">
          <p>Back</p>
        </Link>
      </nav>
      <form className="add-expense-form" onSubmit={handleSubmit}>
        <div className="employee">
          <label>Employee ID : </label>
          <input
            type="number"
            value={expense.empID}
            onChange={handleInput}
            name="id"
            required
          />
        </div>
        <div className="name">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={expense.name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="amount">
          <label>Amount : </label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleInput}
            required
          />
        </div>

        <div className="currency">
          <label>Currency : </label>
          <select name="currency" onChange={handleInput} required>
            <option value="">Select Currency</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <div className="category">
          <label>Category : </label>
          <select name="category" onChange={handleInput} required>
            <option value="">Select Category</option>
            <option value="Flight Ticket">Flight Ticket</option>
            <option value="Taxi">Taxi</option>
            <option value="Hotel">Hotel</option>
            <option value="Food">Food</option>
            <option value="Stationary">Stationary</option>
          </select>
        </div>

        <button type="Submit">Add Expense</button>
      </form>
    </div>
  );
}
