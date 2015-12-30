  // Iterates through pizza elements on the page and changes their widths
  onmessage = function(e) {
  	console.log('Message received from main script');
  	var size = e.data.size;
  	console.log("log=" + e.data.size + "size=" + size);
	
	/*console.log("doc=" + document.querySelectorAll(".randomPizzaContainer").length);
    	for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
      	var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[i], size);
      	var newwidth = (document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth + dx) + 'px';
      	document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
 		}*/
}

	/*function changePizzaSizes(size) {
		

    	}
  	}*/

 	//changePizzaSizes(size);



 self.close()