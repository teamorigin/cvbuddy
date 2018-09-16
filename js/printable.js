function printPages(elename) {
    var eleContent = document.getElementById(elename).innerHTML;
    w = window.open();
    headContent = "<!DOCTYPE html><html><head><link href='css/materialize.min.css' media='screen,print' rel='stylesheet' type='text/css' /><link href='css/global.css' media='screen,print' rel='stylesheet' type='text/css'/><link href='css/global.css' rel='stylesheet' type='text/css' /></head><body>"
    w.document.write(headContent);
    w.document.write(eleContent);
    endContent = "</body></html>";
    w.document.write(endContent);
    w.document.write('<scr' + 'ipt type="text/javascript">' + 'window.onload = function() { window.print(); window.close(); };' + '</sc' + 'ript>');
    w.document.close();
    w.focus();
    return true;
}