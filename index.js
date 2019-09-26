$(function () {
    // listen to submits on the form
    $('#js-shopping-list-form').submit(e => {
        // stop default submit to server
        e.preventDefault();
        // find out the value currently in #shopping-list-entry
        const inputValue = $('#shopping-list-entry').val();
        if(inputValue != '') {  // only do this if there is actually data in the field
            const output = `<li><span class="shopping-item">${inputValue}</span><div class="shopping-item-controls">
            <button class="shopping-item-toggle"><span class="button-label">check</span></button>
            <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
            $('#shopping-list-entry').val(''); //clear the field
            $('.shopping-list').append(output); //add results to end of ul
        }
    });
    // listen for clicks on .shopping-item-toggle inside .shopping list
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        // find the parent li of the button that was pressed and toggle its class
        $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    // listen for clicks on .shopping-item-delete inside .shopping-list
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        // find the parent li and detach it from the DOM
        $(this).parents('li').detach();
    });
});