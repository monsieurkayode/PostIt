[![Build Status](https://travis-ci.org/monsieurkayode/PostIt.svg?branch=develop)](https://travis-ci.org/monsieurkayode/PostIt)
[![Coverage Status](https://coveralls.io/repos/github/monsieurkayode/PostIt/badge.svg?branch=develop)](https://coveralls.io/github/monsieurkayode/PostIt?branch=develop)
[![Code Climate](https://codeclimate.com/github/monsieurkayode/PostIt/badges/gpa.svg)](https://codeclimate.com/github/monsieurkayode/PostIt)
[![Issue Count](https://codeclimate.com/github/monsieurkayode/PostIt/badges/issue_count.svg)](https://codeclimate.com/github/monsieurkayode/PostIt)
# PostIt

## Introduction

## `PostIt Is A Group Messsaging Application`
* `Create and account and Login`
* `Create a brodcast group`
* `Serach for other users and add to group`
* `Registered users can connect with their other users through groups`
* `Send and receive group notifications`
* `Recieve email notifications for messages posted to groups`
* `Receive email and SMS notifications for notifications marked as urgent`

## Tools and Dependencies
`PostIt` is built using **Node Js** and runs on **Node** packages. Routing and
and backend functionality is handled using **Express Js**

## Getting Started
* Creating an account
 * To create an account use route **POST `/api/user/signup`**
 * Requires `username` containing alphabets and numbers only minimum four characters
 * Requires a `password`
 * Requires an `email` for validation recieving mail notifications

### Signing in
* To sign in to the application use route **POST `/api/user/signin`**
  * Requires `username`: User username created at signup
  * Requires `password`: User password set at signup

### Creating Broadcast Groups
* To create broadcast groups use route **POST `/api/group`**
  * Requires `groupName`
  * Requires `Group description(optional)` chosen at signup

### Adding Users To Broadcast Groups
* To add registered users to a  group use route **POST `api/group/<groupId>/user`**
  * Requires `userId`: `Id` of registered user to be added to group

### Sending Broadcast Notifications
* To send broadcasst messages to other group members use route **POST `/api/group/<groupId>/message`**
  * Requires `message`: Message to be sent
  * Requires `groupId`: `Id` of the group message will be sent to

### Retrieving Broadcast Notifications
* To get messages posted to all groups use route **GET `/api/group/messages`**
* To get messages posted to a group use route **GET `/api/group/<groupId>/messages`**

### Get Groups and Users' Information
* To get all created broadcast groups use route **GET `/api/groups`**
* To get group(s) a user belongs use route **GET `//api/user/:userId/groups`**
* To get group(s) a user belongs use route **GET `//api/user/:userId/groups`**
* To get all registered users use route **GET `//api/users`**


## Setting Up
* Clone this repository in a directory using `git clone https://github.com/monsieurkayode/PostIt.git`
from terminal
* Navigate to directory and run `npm install` to install application dependencies
  >You need to have **Node** installed to install dependencies
  >A node version of $ and above is best used for a better experience
* To start the app run `npm start`





