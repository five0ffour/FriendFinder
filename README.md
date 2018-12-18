# FriendFinder - Conspiracy Style
A full stack twist on a dating app implemented with node express and javascript

## Overview  
Friend Finder is a personality matching service app based on the premise that there are a lot of conspiracy theories out there. Maybe we can match people up based on what they think of them. Big Foot? UFO's? Atlantis? What you think of these may reveal a lot about yourself.  Besides, can they all be wrong?

## Friend Finder capabilities
The application itself is a client-server based application. It uses a BootStrap front end to ask a series of questions and populates an in memory object database of the results. The algorithm matches up the responses of the users against the database and looks for a match based on the least variance.  The best candidate is returned and served up the the user in a dialog box. Finally, the user's responses themselves are added to the database for future queries.
  
### Developer notes  
- **server.js:** Express web server configuration info and route setup  
- **apiRoutes.js:** Route handlers for GET and POST requests  
- **htmlRoutes.js"** Route handlers to server web pages back to the front end  
- **home.html:** The title page of the application   
- **survey.html:** The survey questionaire and popup dialog box user interface  
   
 ### How to install/run the application  
1. Download and install the latest version of Node.js following the website instructions for your platform  
   ` https://nodejs.org/en/download/`   
2. Clone this repository into a clean diretory  
   `$ git clone <repository url>`   
3. Bring down the latest package dependencies using node package manager  
   `npm install`  
4. Run the server from the command prompt  
   `node server.js`  
  
### Technology Used  
    
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