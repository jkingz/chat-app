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