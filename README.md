# tennis_buddy_front_end
Tennis_buddy_front_end is the front-end part of a full-stack web application. This repository contains the client-side code built with React, responsible for the user interface and interactions.

The backend for this application is located in a separate repository called Tennis_buddy_back_end. It provides the server-side logic and API endpoints for the application. You can find the backend repository at the following link:(https://github.com/jping0220/tennis_buddy_back_end).


## Overview and Purpose
Tennis Buddy is a web app that allows people to search for a tennis partner in their area to play together 
matches or just to find someone to hit the tennis for fun!

## Features
* Registered user can create a profile with information about: location, tennis level and some text with an explanation of their availabily, personal preferences, etc.

* Registered user is able to modify their information.

* Any user can perform a search based in one or two parameters such as location or tennis level. Search results show a list of users that matches with their criteria with contact information.
  
* User can register using a thir party service authentication: Auth0.

## Main Front-end Technology
React - React Boostrap 

## Authentication and Authorization
The app uses Auth0 for authentication. When a user wants to register or log in to your React app, they are redirected to the Auth0 login page.
Auth0 handles the user authentication process, including verifying the user's credentials (username and password) or using social identity providers like Google, Facebook, etc.
Once the user is authenticated, Auth0 generates a JSON Web Token (JWT) containing user information and signs it with a secret key.
The JWT is sent back to the React app, and the app stores it securely (usually in a browser cookie or local storage).

## Getting started:
Clone this repository:
```
git clone https://github.com/jping0220/tennis_buddy_front_end
```

## Credits
Team members: 
Jiaping Chen / Laura Perez