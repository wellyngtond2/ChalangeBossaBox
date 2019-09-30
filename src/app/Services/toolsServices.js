import ToolsSchema from "../Schemas/toolsSchemas";

const Create = async function store(data) {
    if (!data.title) {
        data.title = "";
        return data;
    }
    const tools = ToolsSchema.create(data);
    return tools;
};

const Get = async function Get(param) {
    let tools;
    if (param && param.tag) {
        tools = ToolsSchema.find({ tags: param.tag });
    } else tools = ToolsSchema.find({});
    return tools;
};

const Delete = async function Delete(id) {
    if (id) {
        ToolsSchema.findById(id)
            .remove()
            .exec();
    }
};

export default { Create, Get, Delete };
