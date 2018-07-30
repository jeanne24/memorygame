document.getElementById('btn-hide').onclick = () => {
	document.getElementById('hide-show').style.display = 'none';
}

document.getElementById('btn-show').onclick = () => {
	document.getElementById('hide-show').style.display = 'block';
}

document.getElementById('change-content').onclick = () => {
	var txt = document.getElementById('txt-placeholder');
	txt.innerHTML = "Buenas Dias!";
	txt.style.color = 'mint';
}

document.getElementById('change-img-height').onclick = () => {
	document.getElementById('img').height = '500';
}
document.getElementById('change-img').onclick = () => {
	document.getElementById('img').src = 'https://media.giphy.com/media/6VoDJzfRjJNbG/giphy.gif';
}
document.getElementById('change-style').onclick = () => {
	document.getElementById('change-my-style').style.fontFamily = 'Kirang Haerang';
	document.getElementById('change-my-style').style.fontSize = '3em';
	document.getElementById('change-my-style').style.color = 'red';
}
document.getElementById('add').onclick = () => {
	var num1= document.getElementById('num1').value.trim();
	var num2 = document.getElementById('num2').value.trim();
	document.getElementById('num1').value="";
	document.getElementById('num2').value="";
	document.getElementById('result').innerHTML =parseInt(num1)+parseInt(num2);

}



