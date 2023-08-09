const express= require('express');
const userRoute= require('./auth.route')
const bookRoute= require('./book.route')

const router= express.Router();
const defaultRoutes =[
    {
        path: '/auth',
        route: userRoute
    },
    {
        path:'/books',
        route: bookRoute
    }
]

defaultRoutes.forEach((route)=>{
    router.use(route.path, route.route)
}

);


module.exports =router;