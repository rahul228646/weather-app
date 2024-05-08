# Weather App

### structure : 
                      store - weather (for calling the api and managing loading states)
            app
             |
          searchBar (calls the api as a user enters the location, used debouncing for optimization)
        weatherInfoCard  
            / \
       cardUI notFound   

### instructions to run the app

  - clone / download the repo
  - run **npm install**
  - go the openWeather website and register for an API key
  - place the key in the API_KEY variable in the weatherSlice
  - run **npm run dev**

<img width="823" alt="Screenshot 2024-05-08 at 9 44 21 PM" src="https://github.com/rahul228646/weather-app/assets/56363090/0adbeb8a-3866-4cfe-b265-722deeeffe4a">

