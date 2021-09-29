# Potree Annotation Server

## Requirements

Requires node.js and npm to be installed

## Setting up the `.env` file

To run the application, you will need a `.env` file containing the connection string for the mongoDB instance.
Optionally, you can also specify the port number (default is 3000).
The file should look something like this:

```
PORT=<optional number here>
DB_URL=<connection string here>
```

Place the `.env` file in the root of the project directory.

## Running/deploying

1. Install `pm2` with `npm install -g pm2`
2. Install all dependencies with `npm install`
3. Start the application with `pm2 start bin/www`. This will run the node server as a background proces
