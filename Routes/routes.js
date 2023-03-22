let router = require('express').Router();

router.get('/',function(req,res){
    res.json({
        status : 'API Works',
        message : "Welcome to Splits Page"
    })
});

const users = require('../Model/Models');
router.post('/add',(req,res) => {
    var user = new users();
    user.companyName = req.body.companyName;
    user.oldFV       = req.body.oldFV;
    user.newFV       = req.body.newFV;
    user.splitDate   = req.body.splitDate;
  
    user.save((err,users) => {
        if(err) {
            return res.status(400).send({
                message : err
            });
        }
        else {
            return res.status(201).send({
                message : "Spllits added successfully",
                data : user
            });
        }
    })
});

var Controller = require('../Controller/Controller.js');

router.route('/get-all')
.get(Controller.index)

router.route('/:user_id')
.get(Controller.view)
.patch(Controller.update)
.put(Controller.update)
.delete(Controller.Delete)

router.route('/del-all')
.post(Controller.delall)

module.exports = router;