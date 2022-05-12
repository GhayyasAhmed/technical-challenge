# React App To Show Visual Graph of Covid Data

Technical challenge (Auxin Security)
Steps required to run the project
1. Install node modules using command npm install.
2. Run the project using command npm start in the terminal.

## Project Configuration
In the components folder there are two main components and one supporting component which have to be rendered in App.js:
1. Login.js (For user authentication)
2. Home.js (To display visual graphs of covid data to the user)
3. useToken.js (For storing user credentials in session storage and fetching from it)
4. In data folder there is a single csv format file containing covid data named as Pakistan_Covid_Cases_In_2020.csv

## Problems Faced In Development
1. After user authentication the home is not rendering although the credentials are stored in session storage.
3. Tried different ways to created graphs of the provided data but in each cases the bugs were present. 
4. Used open source javascript libraires like chart.js but the problem is still there.

## Note
To perform login operation hardcoded authorized credentials are stored for 3 users in Login.js file. 
For example Email: ghayyas@gmail.com Password: abc123
