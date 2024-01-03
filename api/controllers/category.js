const { getAllCategory, saveCategory } = require('../services/category');

module.exports = {
    getAllCategory: async (req, res) => {
        try{
            const eatery = await getAllCategory();
            res.send(eatery);
        }
        catch (err){
            res.send(err);
        }
    },
    addCategory: async (req, res) => {
        try{
            const result = await saveCategory(req.body);
            console.log(result);
            res.send({ result: "success"});
        }
        catch (err){
            res.send(err);
        }
    }
}
