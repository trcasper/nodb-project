let comms = [
    {
        id: 0,
        comment: ["test1", "test2"] ,
    },
    {
        id: 1,
        comment: ["test1dfassdfdas", 'test2', 'test 3'],
    },
    {   
        id: 2,
        comment: ["test1THREE", 'test2', 'test 3'],
    },
    {    
        id: 3,
        comment: ["test1FIFTY", 'test2', 'test 3'],
    },
    
]

module.exports = {
    specificComm (req, res) {
        const {id} = req.params
        console.log(id)
        let correctComm = comms[id].comment
        res.status(200).send(correctComm)
    },

    addComm (req, res) {
       const {addOn, id} = req.body
       comms[id].comment.push(addOn)
       let correctComm = comms[id].comment
       res.status(200).send(correctComm)
    },


    deleteComm (req, res) {
        const { id } = req.params;
        const { index } = req.query;
         comms[id].comment.splice(index, 1);
          res.status(200).send(comms[id].comment);
 },

    editComm(req, res) {
        
      const { id, index, newItem } = req.body;
      comms[id].comment[index] = newItem;
      let correctComm = comms[id].comment
      console.log(correctComm)
      res.status(200).send(correctComm)
  }


};



// editComm(req, res) {
//     const { id, index, newItem } = req.body;
//     comms[id].comment[index] = newItem;
//     let correctComm = comms[id].comment
//     res.status(200).send(correctComm)
// }