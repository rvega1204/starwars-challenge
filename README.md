# Remix + Shadcn UI Football API Challenge

This repository serves as a demonstration of setting up the challenge project using Remix and Shadcn UI to interact with the Football-API. The project utilizes endpoints related to leagues, teams, and venues provided by the Football-API.

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/pandanow/challenge-page.git
```

2. Navigate to the project directory

```bash
cd challenge-page
```

3. generate .env variables

```bash
cp .env.template .env # After this fullfill all necesary environment variables
```

4. Install all dependencies

```bash
npm install
```

## Usage

Once you have set up the project and installed the dependencies, you can run the application locally:

```bash
npm run dev

```

This command will start the development server, and you can access the application at http://localhost:3000.

## Features

This demo project showcases the following features:

Integration with Football-API to fetch data related to leagues, teams, and venues.
Displaying fetched data using Remix and Shadcn UI components.
Simple navigation between different sections of the application.

## Full API Documentation

As we are using Football-API for this project, we suggest to read the Documentation from [here](https://www.api-football.com/documentation-v3). This is the entire documentation for the API.
You can [create your account here](https://dashboard.api-football.com/register), that will be used to generate the Authorization Token.

For the final endpoint we are using api-football dashboard, so you will see on the `app/api/index.ts` file the call to that endpoint. If you wish to use RAPID API, feel free to change that enpoint.

```ts
import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://v3.football.api-sports.io", // change this url in case of using Rapid API
  headers: {
    "x-apisports-key": process.env.FOOTBALL_API_KEY || "",
  },
});
```

## Needed endpoints

- [Leagues](https://www.api-football.com/documentation-v3#tag/Leagues)
- [Teams](https://www.api-football.com/documentation-v3#tag/Teams)
- [venues](https://www.api-football.com/documentation-v3#tag/Venues)

## Acknowledgements

- [Remix](https://remix.run/docs/en/main/start/quickstart)
- [React](https://es.react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Shadcn UI](https://ui.shadcn.com/docs)
- [Football-API](https://www.api-football.com/documentation-v3#section/Introduction)

# License

This project is licensed under the [MIT License](./LICENSE).
