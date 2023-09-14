document.addEventListener('click', (e) => {
    if (e.target.closest('.grid div')) {
      console.log('click')
      const target = document.querySelector('.target')
      const yCord = target.offsetTop
      console.log(yCord)
      window.scrollTo({
          top: 0
        })
      
    }
})