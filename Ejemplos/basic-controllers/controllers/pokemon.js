angular.module('app')
	.controller('PokemonController', [pokemonController]);

function pokemonController() {
	var self = this;

	self.lista = [
		{
			name: 'Pikachu'
		}, 
		{
			name: 'Bulbasur'
		}, 
		{
			name: 'Gastly'
		}, 
		{
			name: 'Golbat'
		}
	];
}