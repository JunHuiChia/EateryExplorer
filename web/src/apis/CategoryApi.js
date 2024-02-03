const CategoryApi = {
    getOne: async (categoryId) => {
        const category = await fetch(
            'http://localhost:3000/api/category?' + new URLSearchParams({ categoryId })
        );
        return await category.json();
    },
};

export default CategoryApi;
