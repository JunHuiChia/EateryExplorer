const { getAllList, createNewList } = require('../services/list');

module.exports = {
    getAllList: async (req, res) => {
        try{
            const eatery = await getAllList(req.query);
            console.log(eatery);
            res.send(eatery);
        }
        catch (err){
            res.send(err);
        }
    },
    createNewList: async (req, res) => {
        try{
            const result = await createNewList(req.body);
            console.log(result);
            res.send({ id: result._id, status: "success"});
        }
        catch (err){
            res.send(err);
        }
    }
}
