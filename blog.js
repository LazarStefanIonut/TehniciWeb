$(function() {
	var d=300;

	$('#navigation a').each(function(){
		var $this = $(this);
		var r=Math.floor(Math.random()*41)-20;

		$this.css({'-moz-transform':'rotate('+r+'deg)','-webkit-transform':'rotate('+r+'deg)','transform':'rotate('+r+'deg)'});

		$('#content').css({'-moz-transform':'rotate('+r+'deg)','-webkit-transform':'rotate('+r+'deg)','transform':'rotate('+r+'deg)'});

		$this.stop().animate({
			'marginTop':'-70px'                       
		},d+=150);
	});

	$('#navigation > li').hover(
		function () {
			var $this = $(this);

			$('a',$this).stop().animate({
				'marginTop':'-40px'
			},200);
		},
		function () {
			var $this = $(this);
			$('a',$this).stop().animate({
			'marginTop':'-70px'
		},200);
	}).click(function(){
		var $this = $(this);
		var name = this.className;

		$('#content').animate({marginTop:-600}, 300,function(){
			var $this = $(this);
			var r=Math.floor(Math.random()*41)-20;
			$this.css({'-moz-transform':'rotate('+r+'deg)','-webkit-transform':'rotate('+r+'deg)','transform':'rotate('+r+'deg)'});
			$('#content div').hide();
			$('#'+name).show();	
			$this.animate({marginTop:-200}, 300); 
		})		 
	});
});

$(document).ready(function() {
	loadDoc();
});

function loadDoc() {
	var parsed = "";
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			
			for(var x=0;x<myObj.citate.length;x++)
			{
				parsed += myObj.citate[x].citat + " " + myObj.citate[x].autor + "<br/>"+ "<br/>";
			}
			
			document.getElementById("name").innerHTML = parsed;
		}
	};

	xmlhttp.open("GET", "C:\Users\Never\Desktop\Tehnici web\Citate.json");
	xmlhttp.send();
}

function removeElement() {
	var parsed = "";
				var xmlhttp = new XMLHttpRequest();
				var textValue = document.getElementById("myText").value.replace(/\s/g, '');//remove spaces

				if(textValue != ''){
					var textValueArray = textValue.split(',');
					
					xmlhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							var myObj = JSON.parse(this.responseText).citate;
							
							for(var x=0;x<myObj.length;x++)
							{
								if(textValueArray.indexOf(myObj[x].id+"") == -1)
								{
									parsed += myObj[x].citat + " " + myObj[x].autor + "<br/>"+ "<br/>";
								}
							}
							
							document.getElementById("name").innerHTML = parsed;
						}
					};

					xmlhttp.open("GET", "C:\Users\Never\Desktop\Tehnici web\Citate.json");
					xmlhttp.send();
				}else{
					reloadPage();
				}
				function reloadPage() {
					location.reload();
				}
}