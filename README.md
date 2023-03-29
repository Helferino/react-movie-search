# React movie search

Simple react movie search app. You can use search for any movie then add it to your favorite list that is stored in browser local storage.

## Setup

Create `.env` file according to `.env.example`

Install all required dependencies:

`npm instal`

Start project:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Improvements (TODO)

- Better pagination component
- Add responsivity (Developed for 1080p)
- Split `App.scss` into smaller parts
- Split components into smaller parts
- Placeholder image for movies without poster
- Query URL support. Sync url query with pagination and search field: `/?q=batman&page=1`
- Better API calls. Create HTTP client with axios or something like that.