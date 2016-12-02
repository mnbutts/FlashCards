$(function() {
// Hides html state capital
  $(".state_capital").hide();

//Code to reveal each states capital
  $(".flashcards")
  .find('div:nth-child(1)')
  .colorbox({'html': 'Montgomery'});

  $(".flashcards")
  .find('div:nth-child(2)')
  .colorbox({'html': 'Juneau'});

  $(".flashcards")
  .find('div:nth-child(3)')
  .colorbox({'html': 'Phoenix'});

  $(".flashcards")
  .find('div:nth-child(4)')
  .colorbox({'html': 'Little Rock'});

  $(".flashcards")
  .find('div:nth-child(5)')
  .colorbox({'html': 'Sacramento'});

  $(".flashcards")
  .find('div:nth-child(6)')
  .colorbox({'html': 'Denver'});
});