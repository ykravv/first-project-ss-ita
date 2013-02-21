//SearchResult model for storage of finded cards


function SearchResult() {
  var cards_hash;    //array with result of search cards from server

  //Fills array with cards
  this.setAllCards = function (cards_array) {
    cards_hash = cards_array;
  }

  //Return array with all cards
  this.getAllCards = function () {
    return cards_hash;
  }

  this.getOneCard = function(id){
    var actual_card;
    for (card in cards_hash) {
      if (cards_hash[card]["id"] === id){
        actual_card = cards_hash[card];
      }
    }
    return actual_card;
  }


  //Method return cards equal to result of searching
  this.setFilterParam = function (array_params) {
    var new_cards_hash = new Array();
    var education_hash = ["базова загальна середня",
                          "повна загальна середня",
                          "професійно-технічна",
                          "неповна вища",
                          "базова вища",
                          "повна вища"];
    var j = 0;
    var curr;


    for (i in cards_hash) {

      curr = education_hash.indexOf(array_params[5]);
      flag_utensils = true;   //if flag is true then current card will be as result of searching

      for (z in cards_hash[i]) {

      if (z == "sex") {
        if (toString(cards_hash[i][z]) != array_params[2])
        flag_utensils = false;
      }
      if (z == "army") {
        if (Number(cards_hash[i][z]) != Number(array_params[3]))
        flag_utensils = false;
      }

      if (z == "year_birth") {
        switch (array_params[0]) {
          case "1":      //higher
            if (cards_hash[i][z] <= array_params[1])
              flag_utensils = false;
            break;
          case "2":      //less
            if (cards_hash[i][z] >= array_params[1])
              flag_utensils = false;
            break;
          case "3":       //equal
            if (cards_hash[i][z] != array_params[1])
              flag_utensils = false;
            break;
          default:
            break;
        }
      }


      if ( z == "education") {
        switch (array_params[4]) {
          case "1":   //less
            for (var k = curr; k <= education_hash.length; k++) {
              if (cards_hash[i][z] == education_hash[k])
                flag_utensils = false;
            }
            break;
          case "2":  //higher
            for (var k = 0; k <= curr; k++) {
              if (cards_hash[i][z] == education_hash[k])
                flag_utensils = false;
            }
            break;
          case "3":    //equal
            if (toString(cards_hash[i][z]) != toString(education_hash[curr]))
              flag_utensils = false;
            break;
          default:
            break;
        }
      }
    }

    if (flag_utensils) {
      new_cards_hash.push(cards_hash[i]);
    }

    }
    console.log(new_cards_hash);
    return new_cards_hash;
  }

}