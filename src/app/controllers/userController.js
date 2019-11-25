import userService from '../Services/userServices';
// const schema = Yup.object.shape({});

class UserController {
    async store(req, res) {
        const user = await userService.Create(req.body);
        return res.status(201).json({ user });
    }

    async Get(req, res) {
        const { email } = req.body;

        if (email === undefined)
            return res.status(201).json({ error: 'Email field invalid' });

        const user = await userService.Get(email);
        return res.status(201).json({ user });
    }
}

export default new UserController();
