var list_items = document.querySelectorAll('.list-item');
var lists = document.querySelectorAll('.list');

var dragged_item = null;

for (var i = 0; i < list_items.length; i++) {

        var item = list_items[i];

        item.addEventListener('dragstart', function(){

            dragged_item = this;
            console.log(dragged_item);

        });

        for(var j = 0; j < lists.length; j++){

            var list = lists[j];


        }


}