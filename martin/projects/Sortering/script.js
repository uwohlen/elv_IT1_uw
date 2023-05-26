
//Legger til elementer i en unsorted list
function addToList() {
    var textbox = document.getElementById("textbox");
    var list = document.getElementById("list");
    var newItem = document.createElement("li");
   
    newItem.innerHTML = textbox.value;
    list.appendChild(newItem);
    textbox.value = "";
  }
  

  //Boblesorterer etter minst utf-8 verdi
  function sortList() {
    var listItems = document.getElementById("list").getElementsByTagName("li");

    var items = [];
    var swapped;


    for (var i = 0; i < listItems.length; i++) {
      items.push(listItems[i].innerHTML);
    }

    do {
      swapped = false;
      
      for (var i = 0; i < items.length - 1; i++) {
        if (items[i] > items[i + 1]) {
          var temp = items[i];
          items[i] = items[i + 1];
          items[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].innerHTML = items[i];
    }
  }