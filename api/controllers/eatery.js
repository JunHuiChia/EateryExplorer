const { getAllEatery, saveEatery, deleteEatery } = require('../services/eatery');

module.exports = {
    getAllEatery: async (req, res) => {
        try{
            const eatery = await getAllEatery();
            res.send(eatery);
        }
        catch (err){
            res.send(err);
        }
    },
    addEatery: async (req, res) => {
        try{
            const result = await saveEatery(req.body);
            console.log("addEatery:", result);
            res.send({ result: "success"});
        }
        catch (err){
            res.send(err);
        }
    },
    deleteEatery: async (req, res) => {
        try{
            const result = await deleteEatery(req.params.id);
            console.log("deleteEatery:", result);
            res.send({ result: "success"});
        }
        catch (err){
            res.send(err);
        }
    }
}
