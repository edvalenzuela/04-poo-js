class ListaReproducion{
	
	#artista;

	constructor(artista, genero, duracion, nombre) {
		this.#artista = artista;
		this.genero = genero;
		this.duracion = duracion;
		this.nombre = nombre;
	}

	showInformation(){
		return `El nombre de la playlist es ${this.nombre}`
	}

	getArtista(){
		return this.#artista;
	}

	get artista2(){
		return this.#artista;
	}

	set artista2(artista){
		return this.#artista = artista
	}

	setArtista(artista){
		return this.#artista = artista
	}

	static showInformation2(){
		return `Mensaje de bienvenida`
	}
}

class Cancion extends ListaReproducion{
	constructor(artista, genero, duracion, nombre, autor ){
		super(artista, genero, duracion, nombre);
		this.autor = autor;
	}
}

const lista = new ListaReproducion('Skrillex', 'Dubstep', 1000, 'Electronic');
const { artista, genero, duracion, nombre } = lista;

const nuevoListado = {
	artista, 
	genero, 
	duracion, 
	nombre
}

console.log(nuevoListado);
console.log(lista.setArtista('David guetta'))

const song = new Cancion('','','','', 'autorrrrr');