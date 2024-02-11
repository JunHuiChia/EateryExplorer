const ListApi = {
    getAll: async (userId) => {
        const lists = await fetch(
            import.meta.env.VITE_BASE_URL + '/list?' + new URLSearchParams({ userId })
        );
        return await lists.json();
    },
    getOne: async (listId) => {
        const list = await fetch(
            import.meta.env.VITE_BASE_URL + '/list?' + new URLSearchParams({ listId })
        );
        return await list.json();
    },
};

export default ListApi;
