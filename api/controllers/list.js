const { getAllList, saveList } = require('../services/list');

module.exports = {
    getAllList: async (req, res) => {
        try{
            const eatery = await getAllList();
            res.send(eatery);
        }
        catch (err){
            res.send(err);
        }
    },
    saveList: async (req, res) => {
        try{
            const result = await saveList(req.body);
            console.log(result);
            res.send({ result: "success"});
        }
        catch (err){
            res.send(err);
        }
    }
}
