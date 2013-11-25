'use strict';

(function(window){
	var body = $('body');
	var win = $(window);
	var isMovile = false;
	var wasMovile = false;
	
	var row = body.find('.row');
	
	$(document).ready(function(){
		if(isMovileSize()){
			printLayoutMovil();
			
		}else{
			isMovile = false;
		}
	});

	//resize event
	win.resize(function(){
		var isMovile = isMovileSize();

		if( isMovile != wasMovile && isMovile ){
			printLayoutMovil();
		}
		else if(isMovile != wasMovile && !isMovile){
			printLayoutDesktop();
		}

		wasMovile = isMovile;
	});

	function isMovileSize(){
		if(win.width() < 767){
			return true;
		}else{
			return false;
		}
	}

	function printLayoutMovil(){
		var colright = body.find('.colright');
		colright.remove();
		row.prepend(colright);
	}
	function printLayoutDesktop(){
		var colleft = body.find('.colleft');
		colleft.remove();
		row.prepend(colleft);
	}
	
})(this);