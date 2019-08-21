var list_items = document.querySelectorAll('.list-item');
var lists = document.querySelectorAll('.list');

var dragged_item = null;

for (var i = 0; i < list_items.length; i++) {

        var item = list_items[i];

        item.addEventListener('dragstart', function(e){

            dragged_item = item;
            
            setTimeout(function(){

                item.style.display = 'none';
            
            },0);

        });

        item.addEventListener('dragend',function(e){

            setTimeout(function(){

                dragged_item.style.display = 'block';
                dragged_item = null;

            },0);

        });

        for(var j = 0; j < lists.length; j++){

            var list = lists[j];


        }


}