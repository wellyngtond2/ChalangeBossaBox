import UserSchema from '../Schemas/UserSchema';

const Create = async function store(data) {
    if (data.email === undefined) return { error: 'Email field invalid' };
    if (data.password === undefined) return { error: 'Password field invalid' };
    if (data.name === undefined) return { error: 'Name field invalid' };

    let user = await UserSchema.find({ where: { email: data.email } });
    if (user !== undefined) return { error: 'Email already exists' };

    user = await UserSchema.create(data);
    return user;
};

const Get = async function GetByEmail(email) {
    const user = await UserSchema.find({ email });
    if (user === undefined) return { error: 'User not found' };
    return user;
};

export default { Create, Get };
