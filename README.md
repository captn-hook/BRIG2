This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Poppy Data Viz / BRIG

# Quick setup guide

Clone this repo, make sure to have installed NPM

run 'npm audit fix' to download dependencies

run 'npm run dev' to launch a local server

run 'npm run build' to bundle with webpack into /dist folder

the firebase API key is required to use firebase, drop the 'key.js' file into the /src folder

## DOCS:

# PRD

https://docs.google.com/document/d/1Z1EGzMGIRp23uGXLwwSl2tFkbkh3ugqIYeYs_U-rim8/edit?usp=sharing

# Frontend Structure

BRIG is a website using Webpack to bundle its Frontend, and Firebase to host and act as a Backend.

The Frontend consists of the HTML structure (index.htmL) and its styling (style.css). 
The entrypoint for the JS (index.js) handles most of the display, relying on a 3d library three.js to display the 3d scans of sites (pulled from firebase).
index.js grabs multiple elements from index.html by ID, expecially the Vertical Div 1.*, and the canvases it displays to.
There are 3 display canvases, the spreadsheet, the 3d model, and a layer above the 3d model to display Tracers.
The Tracers (Tracer.js) and Points (Point.js) are objects, created on load from the data spreadsheet (Data.js), that take their 3d position and project
it to a 2d screen point. The Tracer objects refrence the Point objects to determine their start and endpoints.

# Backend Structure

BRIG relies on Firebase Cloud Storage, a specific Firebase service for large file storage. This works well for the models, but is not perfect for the data.
Currently, the data is stored as a flat file in the same directory as the model, and named 'data.csv'.
The folder and file should be named 'Sitename' and 'Sitename.glb' respectively. 
In order to add new sites, the site list in index.js should be updated to find the new directory.
In order to allow non-poppy accounts to access a site, the user's Firebase UID should be added as a metadata tag to the model and data file to permit access.

bug in /index/ loading no JS
loading / works#   B R I G 2  
 