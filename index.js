$(function () {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        $('#shopping-list-entry').empty();

        const inputValue = $(this).find('input[name="shopping-list-entry"]').val();
        const output = `<li><span class="shopping-item">${inputValue}</span><div class="shopping-item-controls">
          <button class="shopping-item-toggle"><span class="button-label">check</span></button>
          <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`

        $(".shopping-list").append(output);
    });
});