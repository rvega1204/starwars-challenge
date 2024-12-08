# Remix + TailwindCSS + Shadcn UI Star Wars API Challenge

[![Framework: Remix](https://img.shields.io/badge/framework-remix-blue.svg)](https://remix.run/docs/en/main/start/quickstart)
[![types: typescript](https://img.shields.io/badge/types-typescript-blue.svg)](https://www.typescriptlang.org)
[![Style: TaiwindCSS](https://img.shields.io/badge/style-tailwindcss-blue.svg)](https://tailwindcss.com/docs/installation)
[![Style: ShadCN/ui](https://img.shields.io/badge/style-shadCN-blue.svg)](https://ui.shadcn.com/)
[![package manager: npm](https://img.shields.io/badge/package_manager-npm-blue.svg)](https://www.npmjs.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-blue.svg)](https://prettier.io/)

---

This repository serves as a demonstration of setting up the challenge project using Remix and Shadcn UI to interact with the Star wars API. The project utilizes endpoints related to Characters, Planets, Films, Species, Vehicles, Startships provided by the API.

## My Changes

I introduced a new route at http://localhost:5173/starships that displays a table with information retrieved from the Star Wars API. This table presents detailed data about Star Wars starships and includes a "Details" link for accessing all the information about a specific starship model.

The table was styled using Tailwind CSS, where I aimed to emulate a Star Wars-themed color palette. Additionally, I implemented responsive classes for both the table and the modal. Although I began improving responsiveness across the entire app, I ran out of time to complete that task.

To enhance the design, I generated a Star Wars-inspired background image for the modal using AI (Copilot). The table also features hover effects on each <td>, making it more interactive. During development, I researched Tailwind CSS extensively to implement responsive classes effectively.

While working on the project, I discovered some bugs, so, I tried to update the project ensuring the app functions more smoothly.

Additions to the project:

1. starship.ts – Interface for Starship data.
2. starship-response.ts – Defines the structure for API responses.
3. starship-service.ts – Service for fetching starship data.
4. starship.tsx – Route for the Starships page.
5. New Starships Component: Includes ship-details-table.tsx, ship-table.tsx, and starship-modal.tsx.

Bonus Features:

1. Search Input: Added a search input for filtering table data.
2. Table Sorting: Implemented sorting functionality by clicking on column headers.

## Screenshots

### Starships Table

![Starships Table](https://github.com/rvega1204/starwars-challenge/blob/master/table.png?raw=true)

### Modal Details View

![Starship Modal](https://github.com/rvega1204/starwars-challenge/blob/master/modal.png?raw=true)

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/rvega1204/starwars-challenge.git
```

2. Navigate to the project directory

```bash
cd challenge-page
```

3. Install all dependencies

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

Integration with Star Wars API to fetch data related to Characters, Planets, Films, Species, Vehicles, Startships.
Displaying fetched data using Remix and Shadcn UI components.
Simple navigation between different sections of the application.

## Full API Documentation

As we are using Star Wars API for this project, we suggest to read the Documentation from [here](https://swapi.dev/documentation).

## Needed endpoints

- [Planets](https://swapi.dev/documentation#planets)
- [Films](https://swapi.dev/documentation#films)
- [Species](https://swapi.dev/documentation#species)
- [Vehicles](https://swapi.dev/documentation#vehicles)
- [Startships](https://swapi.dev/documentation#starships)

## Acknowledgements

- [Remix](https://remix.run/docs/en/main/start/quickstart)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Shadcn UI](https://ui.shadcn.com/docs)
- [Star Wars API](https://www.api-football.com/documentation-v3#section/Introductiohttps://swapi.dev/documentation)

# License

This project is licensed under the [MIT License](./LICENSE).
