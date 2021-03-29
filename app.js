function getRandomInt(){
   return Math.floor(Math.random() * 18);
}
function getRandomName(){
	return Math.floor(Math.random() * 18);
}
function getRandomBirth(){
	return Math.floor(Math.random() * 18);
}
function getRandomSpouse(){
	return Math.floor(Math.random() * 18);
}

function getCharacter(i) {
	$.get("https://looney-toons-api.herokuapp.com/api/characters" , function (res){
		var htmlStr="";
		htmlStr +=`<p> ID: ${res.data[i].id}</p>`
		htmlStr += `<p>Name : ${res.data[i].name}</p>` 
		htmlStr += `<p> BirthDay : ${res.data[i].birthDay}</p>`
		htmlStr += `<p>Spouse Name: ${res.data[i].spouse}</p>`
		htmlStr += `<img src="${res.data[i].img}">`
			$("#all-data").append(htmlStr)
	}
)}

function getName(i){
	$.get("https://looney-toons-api.herokuapp.com/api/characters" , function (res){
		console.log(res.data[i].name);
		var htmlString = "";
		htmlString +=`Name :<h2>${res.data[i].name}</h2>`

		$("#all-data").append(htmlString);
		console.log("the Name is :" + htmlString);
		//return (htmlString);
	}
)}

function getBirthDate(i){
	$.get("https://looney-toons-api.herokuapp.com/api/characters" , function (res){
		var htmlString1 ="";
		htmlString1 +=`Birthday :<h2>${res.data[i].birthDay}</h2>`
		$("#all-data").append(htmlString1);
		console.log(htmlString1);
	}
	)}

function getSpouseName(i){
	$.get("https://looney-toons-api.herokuapp.com/api/characters" , function (res){
		var htmlString2 ="";
		htmlString2 +=`Spouse Name :<h2>${res.data[i].spouse}</h2>`
		$("#all-data").append(htmlString2);
		console.log(htmlString2);
	}
	)}

$(document).ready(function(){
	
	$("#get-id").click(function(){
		getCharacter(getRandomInt())
		console.log("The ID is " + getRandomInt())
	})

	$("#get-name").click(function(){
		getName(getRandomName());
	})
	$("#get-birth").click(function(){
		getBirthDate(getRandomBirth());
	})
	$("#get-spouse").click(function(){
		getSpouseName(getRandomSpouse());
	})
})
