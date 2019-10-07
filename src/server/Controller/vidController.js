let data = [
    {
        id: 0,
        video: "https://www.youtube.com/watch?v=yHBQcv6QqA4",
    },
    {
        id: 1,
        video: "https://youtu.be/A4LXZJ54OnE"
    },
    {   
        id: 2,
        video: "https://youtu.be/UH7vIBKDC9A"
    },
    {    
        id: 3,
        video: "https://youtu.be/W9pZcRTnCHs"
    },
]

module.exports = {
    specificVideo (req, res) {
        const {id} = req.params
        console.log(id)
        let correctVid = data[id].video
        res.status(200).send(correctVid)
    }

}

