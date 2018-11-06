Introduction
==============
Week 6 challenge at Makers, creating an app similar to Airbnb.


Team pop-a-nolà XP Values
============================

|We will|We won't|It's Okay to|
|---|---|---|
| Have morning stand-ups|Bitch!|Ask for help|
| Depend on each other|Feel like an imposter|To say 'I don't know|
| Share learning|No personal attacks|Feel overwhelmed|
|Communicate regularly|Be too serious|Be serious|
|Have fun and laugh|  |  |
|be serious about the work to be done|  |  |
|Address blockages together|  |  |
|Give feedback|  |  |
|Help Dani prepare lunch one day|  |  |  |


User Stories
==============

```
As a User,
So that I can list a space,
I would like to sign up.

As a User,
So that I can lease a room,
I would like to list a space.

As a User,
So that I can offer more accommodation,
I would like to list multiple spaces.

As a User,
So that people can identify my space,
I would like to add a name to my listing.

As a User,
So that other users can have information on my space (location, amenities, facilities),
I would like to add a description of my space

As a User,
So that I can set a price for my space,
I would like to add a price (ie. per night) for my space.

As a User,
So that I can choose the dates I wish to lease my space,
I would like to have a calendar I can select dates from.

As a User,
So that I do not double-book my space,
I would like an updated calendar showing only available dates.

As a User,
To increase the chances of leasing my space,
Until a user has confirmed a booking request, that space can still be booked for that night.

As a potential leaser,
So that my booked space is unavailable to others,
I would like the calendar to be updated so users cannot double-book.

As a potential leaser,
So that I can narrow down places to lease,
I would like to have a list of the spaces available to me.

As a potential leaser,
So that I can pick the dates I will be occupying the space,
I would like access to the space owner’s calendar.

As a potential leaser,
So that I can make a booking request,
I would like to choose dates and be able to submit a request to the space owner

As a potential leaser,
So that I know if my booking request has been successful,
I would like to get a response from the owner of that space.
```

Getting Started
-------
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
This requires Node to run it and [npm](https://www.npmjs.com/get-npm) as the package manager to simplify the build process and include all necessary dependencies. If you do not have Node.js installed you can download it from [here](https://nodejs.org/en/download/)

How to use
======
`git clone https://github.com/fabjab86/Air_BnB_Clone`
`cd Air_BnB_Clone`
`npm install`  
`npm run buildDB` to create a database  
When you are done with running the application `npm run dropDB` to drop the database    
`npm start` to start the server


1. Create the databases and tables
In order to start the app you will need to create the databases that the server will connect to. This should create both a development and test database called popanola and testpopanola. It will also create a table called listings inside each of these databases.

How to test with cypress:
==============
Make sure the server is running `npm start`  
Run `npm run cypress:open`  
You will see 3 test files, click on each one to run the tests
