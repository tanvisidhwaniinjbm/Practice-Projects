const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/CRUDControllers')


router.get('/get',controllers.get);
router.post('/post',controllers.post);
router.put('/put/:id', controllers.put);
router.delete('/delete/:id', controllers.deletee);



module.exports = router;