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