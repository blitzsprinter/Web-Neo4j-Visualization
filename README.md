# Web Neo4j Visualization

![A PNG file that shows an example of this project](https://github.com/Fiston-pro/Web-Neo4j-Visualization/blob/master/screenshots/example.png "Example")

## What is this thing?

This repo is just a way to visualize data in your [neo4j.com](https://neo4j.com/) database with a help of different tools including [neovis.js](https://github.com/neo4j-contrib/neovis.js/) in a React application.

## How do I use it?

You don't need to install Neo4j but its better if you do it. You just need 3 things:

1. create a Neo4j database on your computer or use Neo4j Sandbox on [neo4j.com](https://neo4j.com/sandbox/),
2. install the project dependencies,
3. connect to your Neo4j database.

### 1 - Create a Neo4j Sandbox

A Neo4j Sandbox is essentially a Docker container with Neo4j installed, and a graph dataset that you can play with. There is nothing to install. It runs on the cloud. A Sandbox will expire in 3 days, but if you want you can extend your project for an additional 7 days (it can be done only once). Create a Neo4j Sanbox [here](https://neo4j.com/sandbox/).
or
If you have the install Neo4j desktop here and create the database and you will be having something like this
![A PNG file that shows the creation of the database in Neo4j Desktop](https://github.com/Fiston-pro/Web-Neo4j-Visualization/blob/master/screenshots/create-sandbox.png "Neo4j Desktop")

### 2 - Install project dependencies

```sh
git clone git@github.com:Fiston-pro/Web-Neo4j-Visualization.git
cd Web-Neo4j-Visualization
yarn install  # or simply, yarn.
```

### 3 - Connect to your Neo4j Sandbox

Find the `Connection details` for your Neo4j Sandbox or your Neo4j Desktop application:

Then open the [App component](https://github.com/Fiston-pro/Web-Neo4j-Visualization/blob/master/src/components/App.js) and replace `YOUR-BOLT-URI-HERE` and `YOUR-NEO4J-PASSWORD-HERE` with your Neo4j connection details.

Now you are all set, and you can run the app with:

```sh
yarn start
```

## Credits

Credits goes to everyone who breaths oxygen not only in the Tech community, yes including my barber too.
