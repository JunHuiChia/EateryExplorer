const { getAllCategory, saveCategory } = require('../services/category');

module.exports = {
    getAllCategory: async (req, res) => {
        try{
            const category = await getAllCategory();
            res.send(category);
        }
        catch (err){
            res.send(err);
        }
    },
    addCategory: async (req, res) => {
        try{
            const result = await saveCategory(req.body);
            console.log("addCategory:", result);
            res.send({ result: "success"});
        }
        catch (err){
            res.send(err);
        }
    }
}
