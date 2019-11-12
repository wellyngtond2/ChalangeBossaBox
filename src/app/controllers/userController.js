import userService from '../Services/userServices';
// const schema = Yup.object.shape({});

class UserController {
    async store(req, res) {
        if (!req.body.email)
            return res.status(400).json({ error: 'Email field invalid' });

        const tools = await userService.Create(req.body);
        return res.status(201).json({ tools });
    }
}

export default new UserController();
