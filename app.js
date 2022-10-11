class Product{
	constructor(name, price, year){
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class UI {

	addProduct(product){
		const { name, price, year  } = product;
		const productList = document.getElementById('product-list');
		const element = document.createElement('div');
		element.innerHTML = `
			<div class="card text-center mb-2">
				<div class="card-body">
					<h5><strong>${name}</strong></h5>
					<p><strong>${price}</strong></p>
					<p><strong>${year}</strong></p>
					<a href="#" class="btn btn-danger" name="delete">Borrar</a>
				</div>
			</div>
		`;
		productList.appendChild(element);
	}

	resetForm(){
		document.getElementById('product-form').reset();
	}

	deleteProduct(element){
		if(element.name === "delete"){
			element.parentElement.parentElement.remove();
			return true;
		}
	}

	showMessage(message, css){
		const msg = document.createElement('div');
		msg.className = `alert alert-${css} mt-2 text-center`;

		msg.appendChild(document.createTextNode(message));

		const container = document.querySelector('.container');
		const app = document.querySelector('#app');

		container.insertBefore(msg, app);

		setTimeout(() => {
			document.querySelector('.alert').remove();
		}, 2000);
	}
}

document.getElementById('product-form').addEventListener('submit', e => {
	const name = document.querySelector('#product-name').value;
	const price = document.querySelector('#product-price').value;
	const year = document.querySelector('#product-year').value;

	e.preventDefault();

	const ui = new UI();

	if(!name || !price || !year) return;

	const product = new Product(name, price, year);
	
	ui.addProduct(product);
	ui.resetForm();
	ui.showMessage('product added successfully!!!', 'success');

});

document.getElementById('product-list').addEventListener('click', e => {
	const ui = new UI();
	console.log({e})
	ui.deleteProduct(e.target);

	if(ui.deleteProduct(e.target)){
		ui.showMessage('product is deleted!!!', 'danger');
	}

	e.preventDefault();
})


