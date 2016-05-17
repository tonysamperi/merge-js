var json = {"hey": "guy","anumber": 243,"anobject": {"whoa": "nuts","anarray": [1,2,"thr<h1>ee"],"anotherarray": [1, 2], "more":"stuff"},"awesome": true,"bogus": false,"meaning": null, "japanese":"??????", "link": "http://jsonview.com", "notLink": "http://jsonview.com is great"};
    
(function mergeJS($) {
	var result = "";
	var showError = function(title,msg){
		var msgBox = $("#msgBox");
		var scrollTo = msgBox.offset().top - 90;
		msgBox.empty().append("<p><strong>"+title+"</strong></p><p>"+msg+"</p>");
		msgBox.fadeIn();
		jQuery('body,html').animate({
			scrollTop: scrollTo
		}, 800);
	};
	$(document).ready(function(){
		var demoA = JSON.stringify({"pippo": false, "foo": "bar"});
		var demoB = JSON.stringify({"pluto": true, "foo": "car", "goo": "dar"});
		var inputA = $("#jsonA");
		inputA.val(demoA);
		var inputB = $("#jsonB");
		inputB.val(demoB);
		var mergeJS = function(obj1, obj2) {
			var answer = false;
			for (var key in obj1) {
				answer = true;
				if (obj1.hasOwnProperty(key)){
					if(obj2.hasOwnProperty(key)){
						var msg = "Key '"+key+"' already exists with value '"+ obj2[key] +"'. Replace with '"+obj1[key]+"'?";
						answer = confirm(msg);
					}
					if(answer) obj2[key] = obj1[key];
				}
			}
			return obj2;
		};
		
		$("body").on("click", "#msgClose", function(){
			$("#msgErr").remove();
			$("#msgBox").fadeOut();
		});
		
		$("body").on("click","#doMerge", function(){
			var o1 = inputA.val().trim();
			var o2 = inputB.val().trim();
			if(!o1 || !o2){
				showError("EMPTY SOURCE!", "Please make sure to fill in both <strong>JSON A</strong> and <strong>JSON B</strong>");
				return false;
			}
			try{
				o1 = JSON.parse(o1);
				o2 = JSON.parse(o2);
			}
			catch(e){
				showError("CANNOT PARSE OBJECT",e);
				console.error("CANNOT PARSE JSON", e);
				return false;
			}
			var result = mergeJS(o1,o2);
			$('#jsonC').JSONView(result);
			$('#result').val(JSON.stringify(result));
			$("#resultRow").fadeIn();
		});
	
	});
  
}(jQuery));