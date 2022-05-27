//MIDDLEWARE
const path = require('path');
const router = require('express').Router();

//HTML PAGES
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

router.get('/animals',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
})

router.get('/zookeepers',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
})

/*The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response
The order of your routes matters! The * route should always come last. 
*/

router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/index.html'));
})

module.exports=router;