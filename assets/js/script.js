let level = {
	'1':'5',
	'2':'7',
	'3':'8',
	'4':'9',
	'5':'10'
};
let cards = [];
let correctGuess = [];
let score = $('#score');
let currentScore =0;
let card1,card2;
let game = $('.game');
let lostEnd = false;



const makeGame = (pairs) => {
	game.html("");
	let numCards = pairs;
    let flag = false;
	for(let i = 1; i<=numCards; i++){
       cards.push(i,i);
    }//end for
    console.log(cards);
    shuffleArray(cards);
    displayGame();
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array);
}

const displayGame = () => {
	for(let i=0 ; i<cards.length ; i++){
		$('.game').append('<div class="square col-2"><img class="card card'+i+'" value="'+cards[i]+'"></img></div>');
		$('.card'+i).attr({
			'src': 'assets/images/back.png'
		});	
	}
}

makeGame(5);

$(".card").click( function() {
	// console.log('hey');
	if(!isAlreadyGuessed($(this).attr("value"))){
		checkIfMatch();

	$(this).attr({
		'src': 'assets/images/'+ $(this).attr("value")+'.png'
	});	
	if(card1==null){
		card1 = $(this);
	}else{
		card2 = $(this);
	}

	if(currentScore==4){
		checkIfMatch();
		checkIfWinner();
	}
	}
	// if(/*check here if card 1 and card 2 match, if true score 1 and dont close the card, else close the cards*/)

});

const checkIfMatch = () => {

	console.log(card1+' and '+ card2);
	if(card2!=null && card2 != null){
		console.log('card1 = ' + card1.attr("value") + ' and ' + card2.attr("value"));
		if(card1.attr("value")==card2.attr("value")){
			score.html(currentScore+=1);
			correctGuess.push(card1.attr("value"));
		}else{
			card1.attr({
				'src': 'assets/images/back.png'
			});
			card2.attr({
				'src': 'assets/images/back.png'
			});
		}

	card1=null;
	card2=null;
	}
}

const isAlreadyGuessed = (guess) => {
	for(let i = 0 ; i<correctGuess.length;i++){
		if(correctGuess[i]==guess){
			return true;
		}
	}
	return false
}

const checkIfWinner = () => {
	if(correctGuess.length>=5){
		$('.verdict').html("You Won! Congrats!");

	}
}
