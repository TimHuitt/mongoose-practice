const companyWrapper = document.querySelectorAll('.company-wrapper')

companyWrapper.forEach((container) => {
  container.addEventListener('click', (e) => {
    console.log(e.target)
  })
})