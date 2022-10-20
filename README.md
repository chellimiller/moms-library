# Mom's Library App

## Purpose

My mother is using a spreadsheet to manage the books that she has read.
This app is intended to help her track her books in a simple, mobile-friendly app instead.

### Why not stay with a spreadsheet?

Spreadsheets are great.
They allow the user to quickly get started and start tracking data.
They really shine when it comes to making calculations on a relatively small dataset.
They're great for financial projections and planning.

My mom is not looking to make calculations on the books she has.
What she wants is a place to easily manage her inventory of books and track what she has and hasn't read.
What my mom needs isn't a spreadsheet, it's a database.

### Features

#### What will this track?

Currently, she's tracking the following:

- Title
- Author
- Genre
- Whether or not the book has been read
- Release date\*
- Location in house\*

\* She has two separate spreadsheets, these are not always included.

I'm thinking this would be a good starter type:

```typescript
export type Book = {
  /**
   * Title of the book.
   * Multiple books can have the same title, so this shouldn't be considered unique.
   */
  title: string;

  /**
   * Authors that contributed to the book.
   * This is usually one person, but technically can be several.
   */
  author: string[];

  /**
   * List of genres that apply for this book.
   */
  genre: string[];

  /**
   * When the book was marked as read.
   * This effectively acts as a boolean value with a little extra information.
   */
  read?: Date;

  /**
   * When the book was released.
   */
  releaseDate?: Date;

  /**
   * Location of the book.
   * This is an array since multiple copies could be owned.
   */
  location?: string[];

  /**
   * This is the ISBN, which normally could be the unique identifier.
   * Since this isn't in her existing spreadsheets, this is not always available.
   */
  isbn?: string;
};
```

In the future, the following things might also be useful:

- Tags or keywords
- Book summary
- Publisher
- Series
- Her notes, rating, or comments on the book
- When the book was purchased (or gotten rid of)
- Whether the book was borrowed from the library or not

To keep things simple, we'll keep the scope to what she's currently tracking for now.

### What features will be included?

This should allow the following:

- Viewing book details in a table
  - Table should have fewer columns in mobile, ideally she can pick what she wants to see
  - Table should be able to be filtered by genre at minimum
- Adding, editing, and deleting book details.
  - Deleting is probably not as important.
  - It should be quick to mark a book as read or not.
- Searching and filtering books by:
  - Title
  - Author
  - Genre
  - Release date
  - Whether or not the book is read
  - Location
- Autocomplete for author, genre, and location
- Ideally, prompt her to add a new book if it isn't in her list already
- Offline mode for when she's at the library, a book store, etc.
- Printer-friendly view
- Import CSV data, she has a lot of books in the spreadsheets and adding them manually would be a pain

## Development

### Architecture

#### State management

The state management will be handled through [Dexie.js](https://dexie.org/).
It is easy to use and stores data to IndexedDB so most of the data will be persistent.

For non-persistent state, React hook like `useReducer` or `useContext` will be used.

Eventually, I'd like to use [React Router](https://reactrouter.com/en/main) for things like applied filters, current view, etc.
This allows the state to be reflected in the URL so she can bookmark a specific view for later.

#### UI Components

To reduce the amount of work and provide good, user-friendly components, [Material UI](https://mui.com/) will be used.
The library isn't perfect, but it's robust and includes nearly every component that I will need.

The Material Icons library will also be used,
since it provides many different icons and is commonly used with Material UI anyway.

#### Utilities

This app will use [Lodash](https://lodash.com/) for utilities.
It's large, but I've found the type checking, string manipulation, and unique ID functions to be pretty useful.

Eventually, I'll want to do tree-shaking to avoid massive bundle sizes.

### Scripts

#### Build: `npm run build`

To build the app, run `npm run build`.

The generated output will be in the `dist/` directory.

#### Format: `npm run format`

To format the source code, run `npm run format`.

#### Serve: `npm start`

To serve the app, run `npm start`.

The app will be updated automatically as code changes are saved.

To simulate a production environment, run `npm run start:production`.
Note that the `webpack-dev-server` is not intended for use in production environments.

#### Test: `npm test`

To test the app, run `npm test`.

### Setting Up a Local Environment

#### Pre-requisites

Before getting started, you will need [Git] and [Node.js].

##### [Git]

1. Open a terminal and run `git --version`
1. If Git is not installed, follow
   [the GitHub guide for setting up Git][github_docs_git]

##### [Node.js]

1. Open a terminal and run `node -v`
1. If Node.js is not installed or is not `v16.0.0` or above, follow
   [the official guide for installing Node.js][node_docs_install]

#### Instructions

1. On your machine, open a terminal.
1. Clone the repository you've created from the template.\
   Run `git clone https://github.com/chellimiller/moms-library-app`
1. Navigate to the directory where you cloned the repository.\
   Run `cd moms-library-app`
1. Install dependencies.\
   Run `npm install`
1. Serve app in development mode.\
   Run `npm start`

You are now ready to start coding!

[babel]: https://babeljs.io/
[git]: https://git-scm.com/
[github_docs_git]: https://docs.github.com/en/get-started/quickstart/set-up-git
[node.js]: https://nodejs.org/
[node_docs_install]: https://nodejs.dev/learn/how-to-install-nodejs
