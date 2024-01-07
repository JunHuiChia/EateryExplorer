const ListApi = {
    getAll: async (userId) => {
        const lists = await fetch(
            'http://localhost:3000/api/list?' + new URLSearchParams({ userId })
        );
        return await lists.json();
    },
    getOne: async (listId) => {
        const list = await fetch(
            'http://localhost:3000/api/list?' + new URLSearchParams({ listId })
        );
        return await list.json();
    },
};

export default ListApi;
