# Phone Book API
An API used to access names and numbers. New contacts can be added and will have a randomized id number generated for them. New contacts must have a unique name and cannot have empty name or number data. Contacts can also be deleted.

This API is currently set up to only run on a local host. After downloading the files and running npm install you can use https://localhost:3000/api/persons/id to view a specific contact (replace :id with the id number of the contact you wish to view). You can test POST and DELETE requests using Postman. Any requests to the server will be logged in the console.

This project was built by following [this node and express tutorial](https://fullstackopen.com/en/part3/node_js_and_express) from Full Stack open.

## Tech Used
<img src="https://img.shields.io/static/v1?label=|&message=Express&labelColor=42494F&color=3d607e&style=for-the-badge&logo=Express&logo-color=white"/>    
<img src="https://img.shields.io/static/v1?label=|&message=Node.js&labelColor=42494F&color=3d607e&style=for-the-badge&logo=Node.js&logo-color=white"/>  
<img src="https://img.shields.io/static/v1?label=|&message=JavaScript&labelColor=42494F&color=3d607e&style=for-the-badge&logo=JavaScript&logo-color=white"/>
<img src="https://img.shields.io/static/v1?label=|&message=HTML5&labelColor=42494F&color=213a59&style=for-the-badge&logo=HTML5&logo-color=white"/>
The server for this API was built using node and express. The middleware Morgan is used to log requests to the server. Sample contact data is currently hard-coded into the server file for the purpose of this exercise.

## Lessons Learned
Figuring out how to use morgan was the most challenging aspect of this project. Looking at the examples provided in the Morgan documentation was key in my being able to figure out how to log custom request info to the console. It was extremely rewarding when I eventually realized I had to convert the data I wanted to log into a string and then understanding I could use JSON.stringify to do so.