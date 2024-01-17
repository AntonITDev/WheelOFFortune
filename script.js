const btn_add = document.querySelector('.add')
const btn_clear = document.querySelector('.clear')
const btn_spin = document.querySelector('.spin')

const item_title = document.querySelector('.item-title')
const cicle = document.querySelector('.cicle')

const colors = ['red', 'green', 'blue']

let lenght_elements = 0
let angle = 0


function create_item() {
	if (!(item_title.value)) {alert('Пустое название предмета!'); return}
	if (lenght_elements == 8) {alert('Максимум 8 элементов!'); return}
	


	const triangleElement = document.createElement('div')
	const textElement = document.createElement('p')
	triangleElement.classList.add('cicle__item')
	textElement.classList.add('cicle_text')
	textElement.innerText = item_title.value
	triangleElement.insertAdjacentElement('afterbegin', textElement)
	color = colors[Math.round(Math.random() * (colors.length - 1))]

	triangleElement.style.backgroundColor = color
	triangleElement.style.left = '50%';
	triangleElement.style.transform = `translate(-50%) rotate(${angle}deg)`
	lenght_elements++;
	angle += 45;
	return triangleElement
}

btn_add.addEventListener('click', (e)=> {
	cicle.insertAdjacentElement('beforeend', create_item())
})

btn_clear.addEventListener('click', (e)=> {
	cicle.innerHTML = ''
	lenght_elements = 0
	angle = 0
})

btn_spin.addEventListener('click', (e)=> {
	chance = (Math.random() * 100) +200
	spin_angle = Math.round((360 * chance) / lenght_elements)
	console.log(spin_angle)
	cicle.style.transform = `rotate(${spin_angle}deg)`
	btn_spin.disabled = true;
	setTimeout(()=> {
		btn_spin.disabled = false;
	}, 5000)
})

const cicle_item = document.querySelector('.cicle__item')

cicle.addEventListener('dblclick', (e)=> {
	if(e.target.classList.contains('cicle__item')) {
		e.target.remove()
		lenght_elements--;
	}
})
