/* id, name, size, color
Get Values from form when submit, append info


getElementbyId()


*/

const formButton = document.getElementById('formSubmit')
formButton.addEventListener('click', (event) => {
event.preventDefault()
let idNum = 0
let name = document.getElementById('name').value
let size = document.getElementById('size').value
let color = document.getElementById('color').value

let newTRow = document.createElement('tr')

let idNumNode = document.createElement('td')
idNumNode.innerHTML = idNum
newTRow.append(idNumNode)

let nameNode = document.createElement('td')
nameNode.innerHTML = name
newTRow.append(nameNode)

let sizeNode = document.createElement('td')
sizeNode.innerHTML = size
newTRow.append(sizeNode)

let colorNode = document.createElement('td')
colorNode.innerHTML = color
newTRow.append(colorNode)

document.getElementById('tBody').appendChild(newTRow)
document.getElementById('name').value = ''
document.getElementById('size').value = ''
document.getElementById('color').value = ''

idNum++
})