let baseURL = 'https://deckofcardsapi.com/api/deck';


//Part 2:

// async function singleCard() {
//     let data = await $.getJSON(`${baseURL}/new/draw/`);
//     let { suit, value } = data.cards[0];
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
// }

// singleCard();



//2:

// async function twoCards() {
//     let card1Data = await $.getJSON(`${baseURL}/new/draw/`);
//     let deckId = card1Data.deck_id;
//     let card2Data = await $.getJSON(`${baseURL}/${deckId}/draw/`);

//     [card1Data, card2Data].forEach(card => {
//         let { suit, value } = card.cards[0];
//         console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//     });
// }

// twoCards();




//3:build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.


async function pickACard() {
    let $btn = $('button');
    let $cardArea = $('#card-area');
    
    let newDeck = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
          let cardData = await $.getJSON(`${baseURL}/${newDeck.deck_id}/draw/`);
          let cardSrc = cardData.cards[0].image;
          let angle = Math.random() * 90 - 45;
          let randomX = Math.random() * 40 - 20;
          let randomY = Math.random() * 40 - 20;
          $cardArea.append(
            $('<img>', {
              src: cardSrc,
              css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
              }
            })
          );
          if (cardData.remaining === 0) $btn.remove();
        });
      }
      pickACard();


    


                


    
