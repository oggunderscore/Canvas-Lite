const { startFullertonAPI, getCourses } = require('./fullerton');
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

// Start the API to get your ID
startFullertonAPI();

// Route for handling get request for path /
app.get('/api/courses', async (request, response) => {
    const courses = await getCourses();
    response.send(courses);
})

// start the server
app.listen(4200, 
   () => console.log('Server listening on port 4200.'))

   