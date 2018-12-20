# FriendFinder - Conspiracy Style
A full stack twist on a dating app implemented with node, express, bootstrap and javascript
    
Try it at:  https://mbg-friendfinder.herokuapp.com/  

## Overview  
Friend Finder is a personality matching service app based on the premise that there are a lot of conspiracy theories out there. Maybe we can match people up based on what they think of them. Big Foot? UFO's? Atlantis? What you think of these may reveal a lot about yourself.  Besides, can all those theories be wrong?
  
    
## Friend Finder capabilities
The application itself is a client-server based application. It uses a Bootstrap front end to ask a series of questions and populates an in memory object database of the results. The algorithm matches up the responses of the users against the database and looks for a match based on the least variance.  The best candidate is returned and served up the the user in a dialog box. Finally, the user's responses themselves are added to the database for future queries.
  
Some specifics:
- Submissions add new profiles to the character list to match against future surveys
- Input validation to prevent incomplete entries
- Modal pop-ups for more attractive alerts
- Resposive layout to handle mobile devices
- API test and GitHub reference
- Suitable for Heroku or localhost deployment
  
    
## Screenshot
![Screenshot](/app/images/homescreen.png?raw=true "Home Page")
  
    
## Developer notes  
- **server.js:** Express web server configuration info and route setup  
- **apiRoutes.js:** Route handlers for GET and POST requests  
- **htmlRoutes.js** Route handlers to server web pages back to the front end  
- **home.html:** Title page of the application and launch button 
- **survey.html:** Survey questionaire and popup dialog box user interface  
- **friend.js:** The in memory object based database of candidates
  
    
## API Endpoints
  
|HTTP Action | Endpoint |  Parms | Input | Output | Description |
| ---------- | -------- | ------ | ----- | ------ | ----------- |
| GET | / | None | n/a | home.html | Default route to the home page |
| GET | /home | None | n/a | home.html | returns home html page |
| GET | /survey | None | n/a | survey.html | returns survey html page |
| GET | /api/friends | None | n/a | Array of JSON friends objects |  Lists all friend profiles in the database |
| POST | /api/friends | n/a | JSON friend object | JSON friend object | Runs routine to find best matching friend in database,  adds input friend object to the database |
  
  
 ## How to install/run the application  
1. Download and install the latest version of Node.js following the website instructions for your platform  
   ` https://nodejs.org/en/download/`   
2. Clone this repository into a clean diretory  
   `$ git clone <repository url>`   
3. Bring down the latest package dependencies using node package manager  
   `npm install`  
4. Run the server from the command prompt  
   `node server.js`  
    
      
## Technology Used  
    
| Package/Interface | Version     | Description                                                              |
| ----------------- | ----------- | ------------------------------------------------------------------------ |
| Node.js           | __11.1.0__  | Main javascript engine for this application                              |
| Bootstrap         | __11.1.0__  | Front end user interface                                                 |
| Express           | __4.16.4__  | Node based web server                                                    |
  
    
## Authors  
Michael Galarneau - Initial work - five0ffour  
December, 2018  
  
    
## Acknowledgements  
All those crazy dreamers that dare to think differently