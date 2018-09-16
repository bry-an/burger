$(function () {
    $('.devour-button').on('click', function () {
        let id = $(this).attr('data-id');
        let data = {
            devoured: true
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data
        }).then(() => {
            console.log('devoured!');
            location.reload();
        })
    })

    $('#add-burger').on('click', function() {
        let newBurgerName = $('#create-burger-form').val();
        let data = {
            name: newBurgerName
        }

        $.ajax('api/burgers', {
            type: 'POST', 
            data
        })
    })
})