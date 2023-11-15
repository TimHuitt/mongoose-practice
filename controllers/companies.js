const Company = require('../models/company')

module.exports = {
  index,
  new: newCompany,
  create,
}

function newCompany(req, res) {
  res.render('./companies/new', {
    title: 'Add a Company',
    err: ''
  })
}

async function index(req, res) {
  Company.find({})
    .then((results) => {
      res.render('companies/index', {
        companies: results,
        title: 'Companies'
      })
    })
    .catch((err) => res.send(err));
}

async function create(req, res) {

  if (req.body.employees) req.body.employees = req.body.employees.split(/\s*,\s*/)
  if (req.body.products) req.body.products = req.body.products.split(/\s*,\s*/)
  req.body.active = !!req.body.active
  req.body.employees = req.body.employees.toString()
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }

  const ceoName = req.body.ceoName
  const ceoAge = req.body.ceoAge
  if (ceoName !== '' || ceoAge !== '') {
    req.body.ceo = {name: ceoName, age: ceoAge}
    delete req.body.ceoName
    delete req.body.ceoAge
  }

  try {
    await Company.create(req.body)
    res.redirect('./companies/index', {
      title: 'Add a Company',
      err: ''
    })
  } catch (err) {
    res.render('./companies/new', { title: 'Error', err: err.message})
  }
  
}