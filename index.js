$(function () {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        const isEmpty = $('#shopping-list-entry').val();
        if(isEmpty != '') {
            const inputValue = $(this).find('input[name="shopping-list-entry"]').val();
            const output = `<li><span class="shopping-item">${inputValue}</span><div class="shopping-item-controls">
            <button class="shopping-item-toggle"><span class="button-label">check</span></button>
            <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
            $('#shopping-list-entry').val('');
            $('.shopping-list').append(output);
        }
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        $(this).parents('li').detach();
    });
});