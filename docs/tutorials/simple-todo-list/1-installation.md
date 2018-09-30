# Installation

In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which the user can view, create and delete his or her tasks.

> **Requirements:**
>
> [Node.js](https://nodejs.org/en/) 8 or greater

# Create a New Project

First you need to install globaly the *Command Line Interface (CLI)* of FoalTS. It will help you create a new project and generate files all along your development.

```sh
npm install -g @foal/cli
```

Then create a new application.

```sh
foal createapp my-app
```

This command generates a new directory with the basic structure of the new application. Let's look at what `createapp` created:

```shell
my-app/
  config/
  public/
  src/
    app/
    e2e/
    scripts/
  ormconfig.json
  package.json
  tsconfig.*.json
  tslint.json
```

The outer `my-app` root directory is just a container for your project.
- The `config/` directory contains configuration files for your different environments (production, test, development, e2e, etc).
- The static files are located in the `public/` directory. They are usually images, CSS and client JavaScript files and are served directly when the server is running.
- The `src/` directory contains all the source code of the application (TypeScript files and HTML templates).
  - The inner `app/` directory includes the components of your server (controllers, templates, services, hooks, sub-apps).
  - End-to-end tests are located in the `e2e/` directory.
  - The inner `scripts/` folder contains scripts that aim to be executed from the command line (ex: create-user)
- The `ormconfig.json` file defines the configuration and credentials of the database(s) connection(s). They can also be passed through environment variables.
- The `package.json` lists the dependencies and commands of the project.
- The `tsconfig.*.json` files list the TypeScript compiler configuration for each `npm` command.
- Finally the linting configuration can be found in the `tslint.json` file.

> **TypeScript**
>
> The language used to develop a FoalTS application is [TypeScript](https://www.typescriptlang.org/). It is a typed superset of JavaScript that compiles to plain JavaScript. The benefits of using TypeScript are many, but in summary, the language provides great tools with the future features of JavaScript.

Change into the `my-app` directory and install the dependencies.

```sh
cd my-app
npm install
```

A new folder `node_modules/` should appear in your root directory. It contains all the prod and dev dependencies of your project.

# Start The Server

Let's verify that the FoalTS project works. Run the following command:

```
npm run develop
```

You've started the development server.

> The **development server** watches at your files and automatically compiles and reloads your code. You don’t need to restart the server each time you make code changes. Note that it is only intended to be used in development, do not use it on production.

> **Port 3000 already in use?**
>
> You can define in `config/settings.js` which port the application is using. Simply add a the key `"port"` with the desired value.

Go to `http://localhost:3000` in your browser. You should see the text *You have successfully installed FoalTS!*.

Congratulations, you now have a server running!