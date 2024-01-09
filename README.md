# News App
The Application fetches data from the RSS feeds in the Backend and keeps updating its database every 2 minutes. On Client side we can see all these in the form of News Articles.

## Installation

Clone the repository

```
https://github.com/karthikdk/NewsFeed-Backend.git
```
Install all the server dependencies

Go to the backend directory

```bash
  cd backend
```

Install Dependencies
```
npm install
```
And Start up the server by

```
node index.js
```
Note : Add the following environment variables for best experience.

1. SECRET_KEY (for JWT signing and verifying) 
2. BASE_URL : 'https://api.rss2json.com/v1/api.json'
3. ARTICLES_COUNT (no. of articles to get in one api call)
4. API_KEY
