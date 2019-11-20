# ChiElections

###### Encouraging Politcal Engagement, By DataBridge @ VT

![Chicago City Flag](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Chicago%2C_Illinois.svg/1280px-Flag_of_Chicago%2C_Illinois.svg.png)

## Cloning the Repo

I just want to put it out there that we can clone git repositories with ssh. Getting Git, Github, and SSH configured to work together takes a few minutes, but definitely make life easier.

Here's a link to [Github's resources](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) on getting your Github account configured to use ssh.

For this repository specifically:

```bash
$ git clone git@github.com:databridgevt/ChiElections.git
$ cd ChiElections
```

If you'd like to make commits you'll need to tell git your email and username. To constrain these changes to this repository, make sure you `cd` in and:

```bash
git config user.name "<YOUR USERNAME>"
git config user.email "<YOUR GITHUB EMAIL>"
```

## Running the Front-End

Getting the node.js portions of this web-app up and running on a local machine should be pretty straight forward. The tricky part might be knowing a few of the Angular specific commands used to get a development server up and running.

### 1. Installing Node and node_modules

To check if node.js is installed:

```bash
which node
```

This command should about the path where Node.js is installed, if it's installed. If not, then [here's a link to Node.js's install page](https://nodejs.org/en/download/). Good Luck, Have Fun.

Once Node.js is installed:

```bash
cd Node/chi-frontend
npm ci
```

### 2. Running the Angular Dev Server

Now that all of our dependencies are installed, there's two different (but equivalent) ways we can run our development server.

If you plan on developing the project, I'd recommend:

```bash
npm i -g @angular/cli # Installing the CLI globally
ng serve
```

If you just want to play around with the site for a bit:

```bash
npx ng serve
```

You really don't need to install the CLI globally if you always want to use `npx`, but I'd recommend a global install for ease of use.

Finally, by default, the app is served on port 4200. Point your browser at http://localhost:4200 to see the front-end.
