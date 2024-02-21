document.getElementById('add-blogs').addEventListener('click', function(){
    hideElementById('blogs')
    showElementById('deshboard')
})

document.getElementById('btn-upload').addEventListener('click', function(){
    hideElementById('deshboard')
    showElementById('blogs')
})