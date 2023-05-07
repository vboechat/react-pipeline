# React Pipeline

## What is this project?
This project was a personal idea to learn how to deploy a website from a GitHub repo to Vercel using GitHub Actions.
I also used this project to test the website before deploying to Vercel as preview.

I know, it's a simple project, but it was very useful to learn how to deploy to Vercel using GitHub Actions.

## Getting Started
### How to install locally?
First, you will need to have [Node.JS minimum version 18.X](https://nodejs.org/en/download) installed on your computer.
After that, you will need to follow the steps below:

1. Clone the repo by using `git clone https://github.com/vboechat/react-pipeline.git`
2. Install dependencies by using `npm install`, `yarn install` or `pnpm install`
3. After that, you're ready to go, to start the project, you just need to run `npm run dev`, `yarn dev` or `pnpm dev`

### How to run tests?
To run tests, you just need to run `npm run cypress:run`, `yarn cypress:run` or `pnpm cypress:run`.

P.S.: If you want to open Cypress UI, just change from `cypress:run` to `cypress:open`.

### How to make the workflow work in my repo?
In the workflow file, you can notice 4 secrets:

| Secret             | How to get it                                                |
|--------------------|--------------------------------------------------------------|
| CYPRESS_RECORD_KEY | Create a project in Cypress Cloud and select "GitHub Action" |
| VERCEL_TOKEN       | Create a token in Vercel in your account settings            |
| VERCEL_ORG_ID      | Read the P.S. 1                                              |
| VERCEL_PROJECT_ID  | Read the P.S. 1                                              |

After obtaining these values, you can open your GitHub repository settings, go to "Secrets and variables",
open "Actions" and click "New repository secret".

**P.S. 1:** To obtain this secret, open the project folder, 
install Vercel CLI and run "vercel link" in your console, a folder named .vercel will be created.
A file will also be created with the org_id and project_id values. **DON'T SHARE THESE VALUES**

## Credits
 - [Node.JS](https://nodejs.org/en)
 - [Yarn](https://yarnpkg.com)
 - [Vite](https://vitejs.dev)
 - [React.JS](https://reactjs.org)
 - [Cypress](https://cypress.io)
 - [Vercel](https://vercel.com)
 - [GitHub](https://github.com) and GitHub Actions
 - [Prettier](https://prettier.io)
 - [ESLint](https://eslint.org)
 - [TypeScript](https://typescriptlang.org)
 
And others! :)
