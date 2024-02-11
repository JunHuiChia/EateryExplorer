const CategoryApi = {
    getOne: async (categoryId) => {
        const category = await fetch(
            import.meta.env.VITE_BASE_URL + '/category?' + new URLSearchParams({ categoryId })
        );
        return await category.json();
    },
};

export default CategoryApi;
