import UserSchema from '../Schemas/UserSchema';

const Create = async function store(data) {
    if (!data.email) return { error: 'Email field invalid' };

    const user = UserSchema.create(data);
    return user;
};

export default Create();
