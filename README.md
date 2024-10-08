# Roxiler Systems Assignment

## Overview
This project implements a backend service that interacts with a third-party API to manage product transactions. The service allows for fetching, searching, and analyzing transaction data, providing insights through various APIs.

## Data Source
- **Third-Party API URL:** [Product Transaction API](https://s3.amazonaws.com/roxiler.com/product_transaction.json)
- **Request Method:** GET
- **Response Format:** JSON

## Features

### 1. Initialize Database
- **Endpoint:** `POST /initialize`
- **Description:** Fetches JSON data from the third-party API and initializes the database with seed data. 
- **Note:** You can define your own efficient table/collection structure.

### 2. List Transactions
- **Endpoint:** `GET /transactions?month=<month>&search=<searchText>&page=<pageNumber>&perPage=<itemsPerPage>`
- **Parameters:**
  - `month`: Any month from January to December.
  - `search`: Optional. Matches search text against product title, description, and price.
  - `page`: Optional. The current page of results (default is 1).
  - `perPage`: Optional. Number of items per page (default is 10).
- **Description:** Lists all transactions, supporting search and pagination.

### 3. Statistics
- **Endpoint:** `GET /statistics?month=<month>`
- **Parameters:**
  - `month`: Any month from January to December.
- **Description:** Provides total sales amount, total number of sold items, and total number of not sold items for the selected month.

### 4. Bar Chart Data
- **Endpoint:** `GET /barchart?month=<month>`
- **Parameters:**
  - `month`: Any month from January to December.
- **Description:** Returns data for a bar chart with price ranges and the number of items in each range for the selected month.
  - Price ranges:
    - 0 - 100
    - 101 - 200
    - 201 - 300
    - 301 - 400
    - 401 - 500
    - 501 - 600
    - 601 - 700
    - 701 - 800
    - 801 - 900
    - 901 and above

### 5. Pie Chart Data
- **Endpoint:** `GET /piechart?month=<month>`
- **Parameters:**
  - `month`: Any month from January to December.
- **Description:** Provides unique categories and the number of items in each category for the selected month.

### 6. Combined Data
- **Endpoint:** `GET /combined?month=<month>`
- **Parameters:**
  - `month`: Any month from January to December.
- **Description:** Fetches and combines data from all the above APIs, returning a final response with the combined JSON.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/spruthviraj829/roxiler-assignment/tree/main
   cd roxiler-assignment
