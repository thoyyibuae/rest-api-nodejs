const express = require('express')
const router = express.Router()
const Data = require('../models/dataModel')

router.get('/', async (req, res) => {
    // console.log("Get Request")
    // res.send('Get Request')
    try {
        // const datas = await Data.find()
        // res.json(datas)



        await Data.find().then(result => {
            return res.send(result);

        }).catch(err => {
            return res.sendStatus(500).send({
                message: err.message || "some error occured"
            });

        })
    }
    catch (err) {
        res.send("Error" + err)
    }
})





router.get('/:id', async (req, res) => {

    try {


        await Data.findById(req.params.id).then(result => {
            return res.json(result);

        }).catch(err => {
            return res.sendStatus(500).send({
                message: err.message || "some error occured"
            });

        })
    }
    catch (err) {
        res.send("Error" + err)
    }
})



router.patch('/:id', async (req, res) => {
    try {
        const dt = await Data.findById(req.params.id)
        // .then(result => {
        dt.sub = req.body.sub
        const a1 = await dt.save()
        return res.json(a1);

        // }).catch(err => {
        //     return res.sendStatus(500).send({
        //         message: err.message || "some error occured"
        //     });
        // })
    }
    catch (err) {
        res.send("Error")
    }
})

router.post('/', async (req, res) => {

    const data = new Data({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub

    })
    try {
        await data.save().then(result => {
            return res.json(result);

        }).catch(err => {
            return res.sendStatus(500).send({
                message: err.message || "some error occured"
            });
        })
    }
    catch (err) {

        res.send('Error')
    }

})

module.exports = router