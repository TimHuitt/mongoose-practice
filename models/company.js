const mongoose = require('mongoose')
const Schema = mongoose.Schema


const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  founded: {
    type: String, 
    default: function() {
      return new Date().getFullYear()
    },
  },
  employees: { type: Number },
  active: { type: Boolean },
  products: [{ type: String}],
  ceo: { type: mongoose.Schema.Types.Mixed }
})

module.exports = mongoose.model('Company', companySchema)
