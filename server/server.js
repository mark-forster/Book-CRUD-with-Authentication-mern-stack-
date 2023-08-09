const express= require('express');
const app = express();
require ('dotenv').config();
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError= require('./utils/ApiError');
const httpStatus = require('http-status');
const path= require('path');
const routes= require('./routes/index.route')
const User= require('./models/user.model')
const cookieParser= require('cookie-parser');
const cors= require('cors');
// mongoose
const mongoose = require('mongoose');


// connect mongodb
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Database connection established`);
    app.listen(process.env.PORT, ()=>{
        console.log(`Server listening on port ${process.env.PORT}`);
    })
})
.catch(err=>{
    console.log('Connection Error')
});


// cross origin middleware
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// routes
app.use('/api', routes)

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });
  
  // convert error to ApiError, if needed
  app.use(errorConverter);
  
  // handle error
  app.use(errorHandler);

