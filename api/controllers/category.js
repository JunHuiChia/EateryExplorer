const {
    getAllCategory,
    saveCategory,
    getCategoryByCategoryId
} = require('../services/category');

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
    getCategoryByCategoryId: async (req, res) => {
        try{
            const category = await getCategoryByCategoryId(req.query.categoryId);
            console.log("Get category by category id:", category);
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
