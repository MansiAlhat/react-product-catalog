Product Catalog Application
This is a React-based application that allows users to search, filter, and view details of products. The app ensures responsiveness and provides an optimal user experience.

📥 Installation and Setup
Follow these steps to run the application locally on your machine:

Clone the Repository:

bash
Copy code
git clone <repository-url>
Navigate to the Project Directory:

bash
Copy code
cd product-catalog
Install Dependencies:
Make sure you have Node.js installed. Run the following command:

bash
Copy code
npm install
Run the Application:
Start the development server using:

bash
Copy code
npm start
The application will open at http://localhost:3000 in your browser.

📚 Libraries and Tools Used
React: For building the user interface.
React Router: For handling navigation between pages.
Axios (optional): For API calls (if any).
Bootstrap: For styling and responsiveness.
💡 Challenges Faced and Solutions
Issue with Layout Responsiveness:
Problem: When filtering or sorting products, the page size dynamically changed based on the number of cards.
Solution: We ensured consistent card grid alignment by applying proper CSS flexbox/grid rules. This was managed with appropriate min-height and grid-template-columns configurations to maintain uniformity.

Dynamic Page Size on Detail View:
Problem: Clicking on product details sometimes caused alignment issues.
Solution: Fixed the container layout to ensure the detail view is positioned correctly within a consistent parent structure.

✨ Optional Enhancements
Added Sort by Price functionality for an improved user experience.
Ensured full responsiveness for all screen sizes, including mobile devices.
Designed the UI to maintain a modern and clean look using flexbox and custom CSS.
🖼️ Screenshots
