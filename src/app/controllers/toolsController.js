
class toolsController{
    async store(req,res){
        return res.json({ok:'teste'});
    }

    async get(req,res){        
        return res.json({ok:'teste'});
    }

    async delete(req,res){
        return res.json({ok:'teste'});
    }
}

export default new toolsController();