# To Do List Frontend

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

-   Include hosted link
-   Include images of app if CLI or Client App

---

## Requirements / Purpose

###  MVP
  -   Must be able to add categories
  -   Must be able to add new tasks tagged with a task category
  -   Must be able to update tasks automatically by changing the task name and the category
  -   Must be able to duplicate tasks
  -   Must be able to delete tasks
  -   You must add your own styling

###  Stack

  - React
  - React Hook Forms
  - Zod Resolver
  - SCSS
  - TypeScript


---

## Build Steps

### Local Hosting

  - If cloned and running on own machine, nagivate to the main directory and run following command:
  ```bash
    npm run dev
  ```

---

## Design Goals / Approach

-   Design goals
-   why did you implement this the way you did?

---

## Features

-   What features does the project have?
-   list them...

---

## Known issues

-   Clicking the label for IsCompleted changes the most recently moved Todo card (need to look into fixing this or removing the label being linked)

---

## Future Goals

-   What are the immediate features you'd add given more time

---

## Change logs

-   Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

### 12/08/2024 - Uploading Project

-   Initial commit with the project creation to Github
-   Adds the updated README

### 27/08/2024 - Creating ToDoForm

-   Creates the ToDo Form and makes it working with Zod resolver and React Hook Forms

### 3/09/2024 - Finishing ToDoForm and Creating Category Form

-   Finished implementing basics of the ToDo Form and tested it working inside of a HTML dialog element.
-   Created the Category Form and added a basic implementation

### 5/09/2024 - ToDo list layout

-   Fixed the body having a offset pushing all the other content off to the side
-   Implemented the service fetch requests for Todos and Get all for Category

### 8/09/2024 - 

-   Added styling for the buttons
-   Implemented the isCompleted actually updating the database
-   Fixed the issue of isCompleted not being correct with the database

### 9/09/2024 - Styling

-   Fixes styling for buttons to use the colour scheme chosen
-   Adds 2 secitons for the todo cards to be in, complete or todo
-   Styles the forms to be more noticable in the 

### 12/09/2024 - Error handling

-   Adds a method of handling errors instead of just displaying them to the console

### 13/09/2024 - Category Management

-   Fixes the error handling on the main page for when the backend isnt running
-   Adds the category cards to the manage categories modal


### 19/09/2024 - Bug fixing

-   Fixed the issues from when working on laptop and bringing it back to desktop as laptop was apparently missing files

### 27/09/2024 - Context Providers

-   Adds the todo Context provider and gets it working properly with updating the 2 lists when the user updates if the todo card is complete
-   Adds the category context provider beginings

---

## What did you struggle with?

-   Getting the context to work properly with updating the incomplete and completed lists when the user presses the isCompleted checkbox as it needed to wait for the update to take affect before updating the lists
-   What? Why? How?

---

## Licensing Details

-   What type of license are you releasing this under?

---

## Further details, related projects, reimplementations

-   ToDo Backend - [Backend](https://github.com/Avocado955/todolist-backend)