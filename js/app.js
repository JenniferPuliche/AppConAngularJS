angular.module('myApp', ['ngAnimate'])

.controller('main', function($scope){
$scope.mostrar=true
$scope.profesores=
[
	{"nombre":"Pepe", "apellido":"Garcia", "materia":"Informática", "imagen": "imagenes/pepe.jpg", "sueldo": 22545, "planilla": true, "descripcion": "El profesor da clases los dias martes y jueves en el turno mañana"},
	{"nombre":"Juan", "apellido":"Gonzalez", "materia":"Matemática", "imagen": "imagenes/juan.jpg", "sueldo": 25092, "planilla": false, "descripcion": "El profesor da clases los dias lunes y viernes en el turno tarde"},
	{"nombre":"Aldo", "apellido":"Barrios", "materia":"Inglés", "imagen": "imagenes/aldo.jpg", "sueldo": 20800, "planilla": true, "descripcion": "El profesor da clases los dias miércoles y jueves en el turno mañana"}
]
})

.controller('tabla', function($scope){
	$scope.borrar = function(posicion){
		$scope.profesores.splice(posicion,1)
	}
})

.controller('detalleCtrl', function($scope){
	$scope.cuantos = function(){
		var contador = 0;
		angular.forEach($scope.profesores, function(profesor){
			contador += profesor.planilla == true
		})
		return contador
	}
})

.filter('maximo', function(){
	return function(texto, max){
		if (texto.length > max) {
			return texto.substring(0,max) + ' ... '
		}
	}
})