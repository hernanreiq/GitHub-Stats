# GitHub Stats
## See all public stats for a GitHub profile
___
## Clone the repository
If you want to run this application on your localhost you first need to clone the repository.
```
git clone https://github.com/hernanreiq/GitHub-Stats.git
```
When you have the cloned repository then you must enter the project and open a console in it.
___
## Install all the dependencies
Then you must install all the dependencies that the application needs to work.
```
npm install
```
When you run this command, all the dependencies in the **package.json** file will start to install.
___
## Start the application
When you have all the dependencies installed, then you can start the application with the following command:
```
npm start
```
It will take a moment, but then a browser window will open with the application open.
___
## Get a personal access token from GitHub
```
https://github.com/settings/tokens/new
```
Name it whatever you want, but be sure to check the '**public_repo**' option that is in '**repo**' and the '**read: user**' option that is in '**user**'. With those two permissions in the token it is more than enough for the application to work.

You must press the Generate token button and they will give you your code like this:
```
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
```
Copy the token and paste it into the **gh-token.jsx** file. This file is in the following directory.
```
src\views\helpers\gh-token.jsx
```
You must replace the one in the constant GH_TOKEN.

```
export const GH_TOKEN = 'YOUR_TOKEN_CODE_GOES_HERE';
```
When you save and update the browser window, you will be able to use the application without problems.
___
## Using the app
If you did all the previous steps, you just have to type the GitHub username and all its statistics will appear.
___
## Example
![Example](./doc/example.jpg)
___
![Hernan Virgilio Demorizi Ureña](https://raw.githubusercontent.com/hernanreiq/hernanreiq/master/img/header.jpg)
## Portfolio of projects and skills :wink:
### :heart: [Web design and development portfolio (In spanish)](https://bit.ly/hernanreiq) :heart: