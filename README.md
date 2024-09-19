Pergola Size Calculator README

This is a simple web-based pergola size calculator that takes user input and displays the calculated pergola size based on the selected material type.

How to Run:

1. Open the `index.html` file in a web browser to access the calculator UI.
2. Enter the required input values and select a material type.
3. Click the "Calculate" button to see the calculated pergola size.

Files and Dependencies:

* `index.html`: Main entry point for the pergola size calculator, contains the UI for user input and result display. Depends on `styles.css` and `script.js`.
* `styles.css`: CSS styles for the UI, arranging input fields and result display.
* `script.js`: Main JavaScript file, handles user input, performs calculations, and updates the UI. Depends on `calculator.js` and `utils.js`.
* `calculator.js`: Contains the custom algorithm for calculating pergola size based on user input. Depends on `materials.js`.
* `materials.js`: Contains data on different material types and their factors for calculating pergola size.
* `utils.js`: Utility functions for validating user input and performing miscellaneous tasks.

Note: This project uses a simple web-based approach and does not require any server-side setup or Node.js installation. Simply open the `index.html` file in a web browser to use the calculator.