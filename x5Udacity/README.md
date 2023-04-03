# Project Instructions

# Travel Planner App

Travel Planner is a web application that helps users plan their trips by providing weather and image data for their destination. The application uses the Geonames, Weatherbit, and Pixabay APIs to fetch the necessary information.

## Features

- Get the current or historical weather data for the destination city
- Fetch an image of the destination city
- Display the weather data and city image on the web page

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/travel-planner.git


2. Install the required dependencies:
cd travel-planner
npm install


3. Create an `.env` file in the project root directory with the following variables:

GEONAMES_USERNAME=<your_geonames_username>
WEATHERBIT_API_KEY=<your_weatherbit_api_key>
PIXABAY_API_KEY=<your_pixabay_api_key>


Replace `<your_geonames_username>`, `<your_weatherbit_api_key>`, and `<your_pixabay_api_key>` with your actual API credentials.

4. Run the development server:
npm run start-dev

5. Open your browser and navigate to `http://localhost:8080`.
## Building for production
To create a production build, run the following command:

npm run build-prod

This will generate the `dist` folder, containing the optimized production build.

## Testing
To run the tests using Jest, execute the following command:

npm test

## Technologies Used

- HTML, CSS, and JavaScript
- Node.js
- Express
- Webpack
- Babel
- Geonames API
- Weatherbit API
- Pixabay API
- Jest and Supertest (for testing)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
