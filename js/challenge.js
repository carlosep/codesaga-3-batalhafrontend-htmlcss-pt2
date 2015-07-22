$(document).ready(function() {
  $('#solution').load(function() {
    var h2 = $("#solution").contents().find("h2").text();
    var link = $("#solution").contents().find("a");
    var errors = new Array();

    if (strcmp("Experiência", h2) != 0) {
      errors.push("The tag \'h2\' is missing or wrong.");
    }

    if (link.text().length == 0) {
      errors.push("You must add at least one valid link.");
    } else if (link.attr("href") == null) {
      errors.push("You must add at least one valid link.");
    }
    var result = $("#result");
    if (errors.length == 0){
      result.addClass("alert-success");
      result.append("Success. You are ready to the next challenge.")
    }
    else {
      result.addClass("alert-danger");
      result.append("Ops... You still have " + errors.length + " errors:<br>");
      result.append(errors.join("<br>"));
    }
  });
});

function strcmp(a, b)
{   
  return (a<b?-1:(a>b?1:0));  
}