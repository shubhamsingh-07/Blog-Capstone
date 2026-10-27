# Blog Capstone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A server-rendered blog application built with **Node.js, Express, and EJS**. Create blog posts, view them on the home page, and edit existing posts through a simple web interface.

> **Important:** Posts are stored in an in-memory JavaScript array. They are not saved to a database, so all posts are cleared when the server stops or restarts.

## Features

- **Create posts** with a title and content through an HTML form.
- **View posts** on the home page, with longer content shortened to a preview.
- **Edit existing posts** from the post cards or the edit-post list.
- **About and Contact pages** accessible through the site navigation.
- **Reusable EJS partials** for the shared page header and footer.
- **Static CSS styling** served from the `public/` directory.
- **Configurable port** through the `PORT` environment variable, falling back to port `3000`.

## Tech Stack

- **Node.js** — JavaScript runtime.
- **Express 5** — HTTP server and route handling.
- **EJS** — server-side HTML templating.
- **body-parser** — parsing URL-encoded form submissions.
- **HTML and CSS** — page structure and styling.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### 1. Clone the repository

```bash
git clone https://github.com/shubhamsingh-07/Blog-Capstone.git
cd Blog-Capstone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node index.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If you set the `PORT` environment variable, use that port instead.

## Application Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/` | Displays the home page and current posts. |
| `GET` | `/about` | Displays the About page. |
| `GET` | `/contact` | Displays the Contact page. |
| `GET` | `/compose` | Opens the compose dashboard. |
| `GET` | `/create` | Displays the new-post form. |
| `POST` | `/create` | Adds a post to the in-memory array. |
| `GET` | `/editList` | Lists existing posts for editing. |
| `GET` | `/edit/:id` | Displays the edit form for a post. |
| `POST` | `/edit/:id` | Updates a post in the in-memory array. |

## How It Works

1. Express receives a browser request and matches it to a route.
2. EJS renders the requested page. Shared header and footer markup is included through partial templates.
3. When a visitor submits a post form, Express reads the URL-encoded form fields.
4. The application adds a new post to the `posts` array or updates an existing post.
5. After a successful create or edit, the browser is redirected to the home page.

The main server code is in `index.js`, page templates are in `views/`, and styles are in `public/styles/main.css`.

## Current Scope and Limitations

- **In-memory storage:** Posts do not persist across server restarts.
- **No database or authentication:** This project is a learning capstone and is not configured as a production blogging platform.
- **No delete route:** The current server supports creating and editing posts, but not deleting them.
- **Basic form handling:** Input validation and production-grade error handling can be added as future improvements.

## Possible Improvements

- Persist posts using a database or a file-based data store.
- Validate post titles and content on the server.
- Add a delete-post workflow.
- Add authentication and authorization for blog management.
- Add automated tests for the Express routes.

## License

**MIT License** — see the [`LICENSE`](LICENSE) file for the full terms. The license applies to the original code in this repository; third-party dependencies remain subject to their respective licenses.

## Author

**Shubham Singh** · [GitHub Profile](https://github.com/shubhamsingh-07)
