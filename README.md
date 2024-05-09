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
    
<img width="1470" alt="Screenshot 2024-05-09 at 8 47 51 AM" src="https://github.com/rahul228646/weather-app/assets/56363090/b8195a68-98b5-46d4-b430-f6580da55cbd">
<img width="1470" alt="Screenshot 2024-05-09 at 8 45 01 AM" src="https://github.com/rahul228646/weather-app/assets/56363090/115f78aa-2569-48f3-b99c-a0fe792bda95">
<img width="1468" alt="Screenshot 2024-05-09 at 8 44 05 AM" src="https://github.com/rahul228646/weather-app/assets/56363090/44fff623-246c-4a0e-81d6-6c538c49b9d7">
