function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function blogs(){
    //get input-title
    const inputTitle =document.getElementById('input-title')
    const inputTitleValue =  inputTitle.value
    //get input-pera
    const inputpera =document.getElementById('input-pera')
    const inputperaValue =  inputpera.value
    //get all-blogs
    const allBlogs = document.getElementById('all-blogs')
    //creat all element
    const parentDIv = document.createElement('div')
    const childDiv = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    //add classes on element
    parentDIv.classList.add('bg-amber-200', 'card', 'bg-base-100', 'shadow-lg')
    childDiv.classList.add('card-body')
    h1.classList.add('card-title')
    //add innertext
    h1.innerText = inputTitleValue
    p.innerText = inputperaValue
    //add element as a child
    childDiv.appendChild(h1)
    childDiv.appendChild(p)
    parentDIv.appendChild(childDiv)
    allBlogs.appendChild(parentDIv)

}

