//SearchResult model for storage of finded cards


function SearchResult() {
  var cards_hash;

  this.setAllCards = function (cards_array) {
    cards_hash = cards_array;
  }

  this.getAllCards = function () {
    return cards_hash;
  }

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

    for (var k = 0; k < education_hash.length; k++) {
      if (array_params[5] == education_hash[k])
        curr = k;
    }
    /*    var ed = array_params[5];
    curr = Array.indexOf(education_hash,ed); */

    for (i in cards_hash) {
      flag_utensils = true;
      for (z in cards_hash[i]) {

      if (((z == "sex") && (cards_hash[i][z] !== array_params[2])) ||
        (z == "army") && (Boolean(cards_hash[i][z]) !== array_params[3]))
        flag_utensils = false;
      switch (array_params[0]) {
        case "1":      //higher
          if ((z == "year_birth") && (cards_hash[i][z] <= array_params[1]))
            flag_utensils = false;
          break;
        case "2":      //less
          if ((z == "year_birth") && (cards_hash[i][z] >= array_params[1]))
            flag_utensils = false;
          break;
        case "3":       //equal
          if ((z == "year_birth") && (cards_hash[i][z] != array_params[1]))
            flag_utensils = false;
          break;
        default:
          break;
      }

//      curr = Array.indexOf(education_hash,array_params[5]);

      switch (array_params[4]) {
        case "1":   //less
          for (var k = curr; k <= education_hash.length; k++) {
            if (array_params[5] == education_hash[k])
              flag_utensils = false;
          }
          break;
        case "2":  //higher
          for (var k = 0; k <= curr; k++) {
            if (array_params[5] == education_hash[k])
              flag_utensils = false;
          }
          break;
        case "3":    //equal
          if (array_params[5] != education_hash[curr])
            flag_utensils = false;
          break;
        default:
          break;
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