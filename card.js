var newCardBtn = document.getElementsByTagName('button')[0];
var cardText = document.getElementById('text');

newCardBtn.onclick = function(){
    getCard()
}

function getCard (){
    cards = [
      ["Choose wisely", "Choose: Advance your drop 2 spaces forward OR take 1 purple chip"],
      ["The kettle is filling", "Move your drop forward by 1 space"],
      ["Alms", "The player(s) with the fewest Rubies receive 1 Ruby"],
      ["Less is more", "Pull 5 chips out of your bag. The player (s) with the lowest score take 1 blue 2-chip. All other players receive 1 ruby. Then put all the chips in your bag."],
      ["The agony of Choice", "Choose: Take 1 Black Chip OR 1 Any 2-Piece OR 3 Ruby."],
      ["Exchange", "You can exchange 1 Ruby once for any 1-Chip (not Purple or Black)."],
      ["A good Start", "You can give up 1-3 rat tail movements and take 1-3 rubys for it."],
      ["Mild Gifts","Each player rolls the dice and takes the rolled bonus."],
      ["A favorable opportunity","Draw 4 chips from your bag. Exchange one of them for the next higher chip of the same color. You can not take 1 green 1-chip. Then put all the chips in your bag. "],
      ["Novice Bonus","The player(s) with the fewest victory points will receive a green 1-chip. "],
      ["From the Full Load","The white chip limit recovers from 7 out of 9 in this round."],
      ["Rat infestation","Double the number of rat's tail in this round and move the rat's stone accordingly."],
      ["At the right moment","Pick 4 Victory Points OR remove a white 1-Chip from your bag."],
      ["Favor of the Rats","Choose: Take any 4-Chip OR 1 Victory Point per rat tail that came in your cauldron."],
      ["Perfectly flavored","If your white chips have a total value of exactly 7 at the end of the round, advance your drop 1 square. "],
      ["Lucky One","Regardless of whether your cauldron explodes, if you score a ruby this turn, you will also earn 2 victory points if you take your ruby"],
      ["It's sparkling here","If you score a ruby this turn, take 2 rubys instead of 1."],
      ["Malicious Joy","If your cauldron explodes in this round, your left neighbor will get one 2-chip of his choice."],
      ["Well touched","In this round, you may put the first white chip you draw back into the bag. "],
      ["Happiness of the Clever","The player(s) allowed to roll this turn will roll twice. "],
      ["A Second Chance","If the first 5 chips have landed in your cauldron, decide: Keep one OR start the round completely from the beginning (only once possible)."],
      ["Strong ingredient","Did you stop without explosion: Before rolling, draw up to 5 chips from your bag and put one in your cauldron."],
      ["Pumpkin Festival","In this round, each orange chip drawn is additionally advanced 1 more space."],
      ["Potion","At the end of the round, all bottles are refilled for free."]
    ];
    
    cardNumber = Math.floor(Math.random()*cards.length);
    cardText.innerHTML = cards[cardNumber][1];
}
