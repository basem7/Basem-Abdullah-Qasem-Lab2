    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'basemcar.xml',
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('car').each(function() {

                    $('#car').append(
                        '<table>' +
                            '<tr>' +
                                '<td>' +
                                    '<img class="img_car" src="' + $(this).find('image').text() + '">' +
                                '</td> ' +

                                '<td>' +
                                    '<b>Name of car: </b>' +
                                        $(this).find('name').text() + '<br> ' +
                                    '<b>price: </b>' +
                                        $(this).find('price').text() + '<br> ' +
                                    '<b>description: </b>' +
                                        $(this).find('description').text() + '<br> ' +

                                        '<input type="button" value="BUY ME NOW" onclick="msg()">'+


                                    
                                '</td> ' +
                            '</tr>' +     
                        '</table>');
                });
            }
        });
    });

function msg() {
    alert("CONGRATS .. GO TO BASEM HIMSELF TO PAY .. THANK YOU!");
}
