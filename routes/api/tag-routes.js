const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
  router.get('/', (req, res) => {
    Tag.findAll(
      {include:
        [{
            model: Product,
          },
        ]}
    )
    .then((data) => {
      res.json(data)
    })
    .catch((err) =>{
      res.json(err)
    })
    });

// find a single tag by its `id`
// be sure to include its associated Product data
  router.get('/:id', (req, res) => {
    Tag.findOne(
      {include:
        [{
          model: Product,
        }]
    })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
  });

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update( req.body , {
    where: {
      id: req.params.id
    }
  })
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.json(err)
  })
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then((data) => {
    res.json(data)
  })
  .catch((err)=> {
    res.json(err)
  })
});

module.exports = router;
