# swipe-frontend-assignment
This repository extends the existing React and Redux-based application to include a new and powerful bulk edit feature. Now, users can efficiently edit multiple invoices in a single screen, similar to working with an Excel spreadsheet.

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sohan2410/swipe-assignment-frontend
2. Navigate to the project directory:
    ```bash
    cd swipe-assignment-frontend
3. Navigate to the project directory:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm start
The application should now be running locally, and you can access it in your web browser at http://localhost:3000.

## Features
### 1. Create Invoice
![Create Invoice](https://github.com/sohan2410/swipe-assignment-frontend/blob/master/public/create_invoice.png?raw=true)
Easily create new invoices using the intuitive invoice creation form. Fill in the necessary details, and the system will handle the rest. The form provides a user-friendly interface, guiding you through the process of adding essential information, such as client details, items, and amounts.

### 2. Bulk Edit
![Buk Edit](https://github.com/sohan2410/swipe-assignment-frontend/blob/master/public/bulk_edit.png?raw=true)
The bulk edit feature revolutionizes how you manage multiple invoices simultaneously. Access the Excel-like table interface from the invoice list screen, allowing you to make edits to multiple invoices in one place. Select invoices, perform edit operations, and watch as the application validates changes and updates the Redux store accordingly. This feature is designed for efficiency and ease of use, enabling you to save valuable time.
- User can add items in an invoice by clicking on invoice id button
- User can also delete indivdual items of an invoice by clicking delete button on the right side of respective row
- User can delete entire invoice by clicking delete button at bttom of respective invoice id
### 3. Copy Invoice
![Buk Edit](https://github.com/sohan2410/swipe-assignment-frontend/blob/master/public/home_page.png?raw=true)
Copying invoices is now a breeze with the copy invoice feature. Duplicate an existing invoice with a click of a button, saving you from manual entry and ensuring consistency in your invoicing process. This feature is especially handy for recurring invoices or those with similar details.


