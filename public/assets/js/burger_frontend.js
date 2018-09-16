$(function () {
    $('.devour-button').on('click', function () {
        let id = $(this).attr('data-id');
        let data = {
            devouredStatus: 1
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data
        }).then(() => {
            console.log('devoured!');
            location.reload();
        })
    })

    $('#add-burger').on('click', function () {
        let newBurgerName = $('#create-burger-form').val().trim();
        console.log('jquery name', newBurgerName)
        let data = {
            name: newBurgerName
        }

        if (newBurgerName === '') 
        return false;

            $.ajax('/api/burgers', {
                type: 'POST',
                data
            }).then(() => {
                console.log('burger added');
                location.reload();
            })
    })
})