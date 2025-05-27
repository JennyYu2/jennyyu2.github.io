function expand(button) {
    var block = button.closest('.block')
    block.classList.toggle('expanded')

    if(block.classList.contains('expanded')) {
        button.textContent = '▲'
    } 
    else {
        button.textContent = '▼'
    }
}