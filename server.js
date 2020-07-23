const router = require('express').Router()
const distance = require('google-distance-matrix')
module.exports = router

router.post('/', (req, res,next) => {

    const origins = req.body.origins
    const destinations = req.body.destinations
    const mode = req.body.travelMode

    distance.matrix(origins, destinations, mode, function(err, distances){
        if(!err)
            res.json(distance.rows)
    })
})