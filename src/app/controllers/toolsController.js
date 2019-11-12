import toolsService from '../Services/toolsServices';
// const schema = Yup.object.shape({});

class ToolsController {
    async store(req, res) {
        const tools = await toolsService.Create(req.body);
        return res.status(201).json({ tools });
    }

    async get(req, res) {
        const tools = await toolsService.Get(req.query);
        return res.json({ tools });
    }

    async delete(req, res) {
        await toolsService.Delete(req.params.id);
        return res.status(204).json({ message: 'Tool successfully deleted' });
    }
}

export default new ToolsController();
