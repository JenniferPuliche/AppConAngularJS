angular.module('myApp', [])

.controller('main', function($scope){
$scope.mostrar=true
$scope.profesores=
[
	{"nombre":"Pepe", "apellido":"Garcia", "materia":"Informática"},
	{"nombre":"Juan", "apellido":"Gonzalez", "materia":"Matemática"},
	{"nombre":"Aldo", "apellido":"Barrios", "materia":"Inglés"}
]
})

.controller('tabla', function($scope){
	$scope.borrar = function(posicion){
		$scope.profesores.splice(posicion,1)
	}
})