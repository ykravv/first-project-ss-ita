//SearchResult model for storage of finded cards


function SearchResult () {
  var cards_hash;

  this.setAllCards = function (cards_array) {
    cards_hash = cards_array;
  }

  this.getAllCards = function () {
    return cards_hash;
  }

  this.setFilterParam = function (array_params) {
    var new_cards_hash;  //hash that will be result of extended filter
    var education_hash = ["базова загальна середня",
                          "повна загальна середня",
                          "професійно-технічна",
                          "неповна вища",
                          "базова вища",
                          "повна вища"];
    var j = 0;
    for (i in cards_hash) {
      flag_utensils = true;
      switch (array_params[1]) {
          case "більше":
              if ((i == "year_birth") && (cards_hash[i] <= array_params[1]))
              flag_utensils = false;
              break;
          case "менше":
              if ((i == "year_birth") && (cards_hash[i] >= array_params[1]))
              flag_utensils = false;
              break;
          case "рівно":
              if ((i == "year_birth") && (cards_hash[i] != array_params[1]))
              flag_utensils = false;
              break;
          default:
              break;
      }
      switch (array_params[5]) {
          case "нижче": break;
          case "вище": break;
          case "рівно": break;
          default: break;
      }
      if (flag_utensils) {
        new_cards_hash[j] = cards_hash[i];
        j++;
      }
    }
    return new_cards_hash;
  }

}