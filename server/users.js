const users = [];

const addUser = ({ id, name, room}) => {
    name = name.trim().toLoweCase();
    room = room.trim().toLoweCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: 'That username is taken.'};
    };

    const user = { id, name, room };

    users.push(user);

    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    };
};

const getUser = (id) => users.find((user) => user.id === id);

