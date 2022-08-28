import React from "react";

import "./CSS/ExpenseTable.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faDollarSign,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: "down",
      toggleCurrency: "USD",
      data: props.data,
      renderData: props.data,
      paginateData: props.data,
      pageNumber: 0,
      rowsPerPage: 5,
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    //this.handlePagination = this.handlePagination.bind(this);
    //this.handlePageChange = this.handlePageChange.bind(this);
    //this.handleRowCountChange = this.handleRowCountChange.bind(this);
  }
  //lifecycle method to load the paginated data when the component is mounted for the first time
  componentDidMount() {
    this.handlePagination();
  }

  //function for sorting the tabular data
  handleSort() {
    const { currentSort, renderData } = this.state;

    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "down";

    this.setState({
      currentSort: nextSort,
    });
    //object containing functions for sorting ascending/descending
    const sortTypes = {
      up: {
        fn: (a, b) => a.id - b.id,
      },
      down: {
        fn: (a, b) => b.id - a.id,
      },
    };

    const sortData = [...renderData].sort(sortTypes[this.state.currentSort].fn);
    this.setState(
      {
        renderData: sortData,
        pageNumber: 0,
      },
      () => {
        this.handlePagination();
      }
    );
  }

  //function for toggling tabular data based on currency USD/INR
  handleToggle() {
    if (this.state.toggleCurrency === "USD") {
      this.setState({
        toggleCurrency: "INR",
      });
    } else if (this.state.toggleCurrency === "INR") {
      this.setState({
        toggleCurrency: "USD",
      });
    }
  }

  //function to filter tabular data based on expense category
  handleFilter(e) {
    const { data } = this.state;
    const filterCategory = e.target.value;
    let filterData = data;
    if (filterCategory != "Filter Category") {
      filterData = [...data].filter((expense) =>
        expense.category.includes(filterCategory)
      );
      this.setState(
        {
          renderData: filterData,
          pageNumber: 0,
        },
        () => {
          this.handlePagination();
        }
      );
    } else if (filterCategory === "Filter Category") {
      this.setState(
        {
          renderData: data,
          pageNumber: 0,
        },
        () => {
          this.handlePagination();
        }
      );
    }
  }
  //function for table pagination
  handlePagination = () => {
    const { pageNumber, rowsPerPage, renderData } = this.state;
    const rowsVisited = pageNumber * rowsPerPage;
    const paginateData = renderData.slice(
      rowsVisited,
      rowsVisited + rowsPerPage
    );

    this.setState({ paginateData: paginateData });
  };
  handlePageChange = ({ selected }) => {
    this.setState({ pageNumber: selected }, () => {
      this.handlePagination();
    });
  };

  handleRowCountChange = (e) => {
    const rows = Number(e.target.value);
    this.setState({ [e.target.name]: rows, pageNumber: 0 }, () => {
      this.handlePagination();
    });
  };

  render() {
    const { paginateData, rowsPerPage, renderData, pageNumber } = this.state;
    const pageCount = Math.ceil(renderData.length / rowsPerPage);
    const USD_TITLE = "Amount(USD)";
    const INR_TITLE = "Amount(INR)";

    return (
      <div className="table-div">
        <div className="table-banner">
          <select
            name="filterCategory"
            className="filter-select"
            onChange={this.handleFilter}
          >
            <option value="Filter Category">Filter Expenses</option>
            <option value="Flight Ticket">Flight Ticket</option>
            <option value="Taxi">Taxi</option>
            <option value="Hotel">Hotel</option>
            <option value="Food">Food</option>
            <option value="Stationary">Stationary</option>
          </select>

          <Link to="/addexpense">
            <button className="add-expense-button" type="button">
              Add Expense
            </button>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>
                Employee ID
                <button className="sort-button" onClick={this.handleSort}>
                  <FontAwesomeIcon icon={faSort}></FontAwesomeIcon>
                </button>
              </th>
              <th>Name</th>
              <th>
                Amount
                <button className="toggle-button" onClick={this.handleToggle}>
                  <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>/
                  <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                </button>
              </th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {paginateData.map((expense, index) => (
              <tr key={index}>
                <td>{expense.id}</td>
                <td>{expense.name}</td>
                <td>
                  {this.state.toggleCurrency === "USD"
                    ? expense.amount_USD
                    : expense.amount_INR}
                </td>
                <td>{expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="footer">
          <select
            name="rowsPerPage"
            onChange={this.handleRowCountChange}
            className="displayRows"
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>

          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={this.handlePageChange}
            containerClassName={"pagination"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"pageDisable"}
            activeClassName={"pageActive"}
            forcePage={pageNumber}
          />
        </div>
      </div>
    );
  }
}

export default ExpenseTable;
