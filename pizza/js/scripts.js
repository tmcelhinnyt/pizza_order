$(document).ready(function() {
    $("form#order-form").submit(function(event) {
        event.preventDefault();
        $("#order-receipt").show();
        $("input:checkbox[name=vegetable]:checked").each(function() {
            var customerOrder = $(this).val();
            $("#order-receipt").append(customerOrder + "<br>");
        });
        $("#order-form").hide();
        $("body").addClass("ordered");
    });
});