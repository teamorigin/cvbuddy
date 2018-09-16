$(document).ready(function () {
    $('#birthdate').focus();
    $('select').formSelect();
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.datepicker').datepicker({
        autoClose: true,
        format: 'dd mmmm, yyyy',
        setDefaultDate: true,
        defaultDate: new Date(1990, 00, 01)
    });
    $('.collapsible').collapsible({
        //accordion: false
    });
});