# ServiceNow Ticket Queue

sntQueue is a incident/ticket display system for ServiceNow intended for customer-facing uses where incidents remaining to be addressed need to be obvious to staff and/or customers. It displays a specified number of new incidents that were created on the current day in a customizable window, highlighting any incidents that are older than 30 minutes. If there are no qualifying incidents, it displays an appropriate message. It refreshes on a customizable basis so that it is always showing the current state of your ServiceNow instance.


## Getting Started and prerequisites

Download the application files into a folder.
Install [Node.js and npm](https://nodejs.org/en/download/) 
Run **npm install** to install dependencies.


### Installation and deployment

After downloading the files into your folder, create a file called info.js 
Add two variables to the info.js file: AuthU and AuthP
Set them to your ServiceNow application access account username and 
password, respectively.

In the index.html file, set the url and querystring to work with your 
ServiceNow instance.

Customize the display in accordance with the documenting comments in 
main.js and queuestyle.css.

Once the files are customized to work with your instance of ServiceNow,
 run **npm start** in the folder to run the program.

Electron should start and the running program should look like this if 
there are qualifying incidents/tickets to display:
![Queue with both highlighted and plain incidents](https://github.com/HiroinaProtagonist/sntQueue/raw/readme/README_images/BothTypes.png)

If all of the incidents that are open and in the new state are less 
than 30 minutes old, the queue will not have any highlighting and 
will look like this:
![Queue with all incidents opened within 30 minutes](https://github.com/HiroinaProtagonist/sntQueue/raw/master/README_images/Within30.png "Queue with only incidents opened within 30 minutes")

If no new incidents were opened on the day that you are running the 
program, it should look like this:
![Empty Queue with no new tickets message](https://github.com/HiroinaProtagonist/sntQueue/raw/master/README_images/emptyQ.png)

The queue will refresh silently at the interval that you specify in 
index.html. If you open Developer Tools, you should see the refresh 
in the console. Each time the software refreshes, the word "refreshed" 
will print to the console, as shown:
![Queue refreshing silently and logging the refresh to the console](https://github.com/HiroinaProtagonist/sntQueue/raw/master/README_images/Refresh.png)


## Features to add
- [] Automatically-populated test data
- [] Support for incidents that are open, but In Progress, not New


## Built With

* [Node.js](https://nodejs.org/en/download/) - Runtime environment
* [Electron](https://electronjs.org/) - Web framework
* [date-fns](https://date-fns.org/) - Date manipulation functions
* [ServiceNow Table API](https://developer.servicenow.com/app.do#!/rest_api_doc?id=c_TableAPI) - Connection to ServiceNow tables
* [ServiceNow Developer Instance](https://developer.servicenow.com/app.do#!/instance) - ServiceNow Developer Instance


## License

This project is licensed under the Creative Commons Attribution Share 
Alike 4.0 International license - see the [LICENSE.md](LICENSE.md) 
file for details
