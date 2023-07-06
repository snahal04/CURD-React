# Install NodeJS in Ubuntu 
Visit [NodeJs Package Manager](https://nodejs.org/en/download/package-manager#debian-and-ubuntu-based-linux-distributions) and download the latest release from its github repo. 
For E.g. Open the terminal and run the command:  <br><br>
`curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs`
<br>
After installing check the version of `node -v ` and `npm -v`.
<br>

## Install ReactJs in Ubuntu

To do so we will first install yarn package manager because it is easy to manage and it can install packages simultaneously and is better than npm.
<br><br>
`sudo npm install -g yarn` 
<br><br>

Now to install reactjs type `yarn create react-app openboard` use any name instead of openboard. It will take some min to create. 
* cd to your openboard directory and you can see app.js where you can edit and to start server just type `yarn start`. To stop server Ctrl+C.
