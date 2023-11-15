const companyWrapper = document.querySelectorAll('.company-wrapper')
const newButton = document.querySelector('.add-button')

const editButton = document.querySelector('#edit-button')
const deleteButton = document.querySelector('#delete-button')

const body = document.querySelector('body')
body.addEventListener('click', (e) => {
  if (e.target.id === 'add-button') window.location.href = '/new'
  if (e.target.id === 'edit-button') console.log('test1')
  if (e.target.id === 'delete-button') console.log('test2')
})

companyWrapper.forEach((container) => {
  container.addEventListener('click', (e) => {
    window.location.href = `/company/${e.target.id}`
  })
})

  
