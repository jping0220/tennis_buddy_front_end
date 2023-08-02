## Project Name
Tennis Buddy

## Team Members
Jiaping Chen / Laura Perez

## About
Tennis Buddies is a web app that allows people to search for a tennis partner to play together for
matches or just to find someone to hit the tennis for fun !

## Features
 
User have access to a third party authentication service from the website. User can: create an account with sign up, log in through Auth0, Users' data is saved in Auth0 database. 

The user should be able to create a profile with information about: name, email, location(zip_code), tennis level and some text with an explanation of their availabily, personal preferences, etc.

The user should be able to modify their information and delete their account.

Registered user can perform a search based on one or two parameters such as location or tennis level.
Search results show a list of users that matches with their criteria with showing the match's zip code,tennis level and preferencess without any personal info when user is not sign up or log-in. For user who is in sign up and log-in status, they will be able to search the players with full information including name, email, zip code, tennis level, and preferences.

Add-on: The website is responsive, so the user would be able to access from both computer browser and smartphone. 


# Project Type
Web application

## Main Front-end Technology
React - React Boostrap 
## Additional Front-end Technologies
Extensions: map with Google API.
## Main Back-end Technology
Flask, SQLchemy

Authentification with Auth0:
https://auth0.com/docs/quickstarts

Api for zip code radius finder:
https://www.zip-codes.com/content/api/samples/FindZipCodesInRadius.html

## Database 
PostgresSQL

## Deployment Technologies
Render 

