const feed = require("../database/portfolio.model");

const addOne = async function (req, res) {
    try {
        const id = req.body.id
        const title = req.body.title
        const content = req.body.content
        const author = req.body.author
        if(id && title && content && author){
          const data = await feed.create({ id, title , content, author  });
      res.status(200).send(data);
        }
    } catch (error) {
      res.status(500).send(error);
    }
  };


const selectAll = async function (req, res) {
    try {
      const data = await feed.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };
const deleteAll = async function (req, res) {
    try {
      const data = await feed.deleteMany();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  const updateOne = async function (req, res){
    try{
        const title = req.params.title
        const content = req.body.content
        if(title && content){
            const data = await feed.findOneAndUpdate(
                {title:title},
                {content:content},
                {new:true}
            );
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(500).send(error);
      }
  };

  const deleteOne = async function (req, res) {
    try {
        const title = req.params.title
        console.log(title);
        if(title !== ""){
          const data = await feed.deleteOne({title:title});
          res.status(200).send(data);
        }
    } catch (error) {
      res.status(500).send(error);
    }
  };


  module.exports={addOne,selectAll,deleteAll,updateOne,deleteOne}