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

// {
//   name: 'Google',
//   founded: '1998',
//   employees: 135301,
//   active: true,
//   products: ['Search Engine', 'Online Advertising', 'Cloud Computing'],
//   ceo: {
//     name: 'Sundar Pichai',
//     age: 49
//   }
// },
// {
//   name: 'Amazon',
//   founded: '1994',
//   employees: 1535000,
//   active: true,
//   products: ['E-commerce', 'Cloud Computing', 'Artificial Intelligence'],
//   ceo: {
//     name: 'Andy Jassy',
//     age: 54
//   }
// },
// {
//   name: 'OpenAI',
//   founded: '2015',
//   employees: 150,
//   active: true,
//   products: ['Artificial General Intelligence (AGI)', 'AI Research'],
//   ceo: {
//     name: 'Sam Altman',
//     age: 36
//   }
// }