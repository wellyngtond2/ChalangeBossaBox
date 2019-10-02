import userService from "../Services/userServices";
// const schema = Yup.object.shape({});

class UserController {
    async store(req, res) {
        const tools = await userService.Create(req.body);
        return res.status(201).json({ tools });
    }
}

export default new UserController();
