$(document).ready(function () {
  var minValue = 1100;
  var maxValue = 500000;

  function updateResultValue(value) {
    var resultValue = value + (0.25 * value);
    $("#result").text(resultValue.toFixed(2));
  }

  $("#slider").slider({
    range: "min",
    min: minValue,
    max: maxValue,
    value: minValue,
    slide: function (event, ui) {
      $("#current-value").text(ui.value);
      updateResultValue(ui.value);
    }
  });

  var handle = $("#slider").find(".ui-slider-handle");
  var handleValue = $("<div>", {
    id: "handle-value",
    text: minValue
  }).appendTo(handle);

  $("#slider").on("slide", function (event, ui) {
    handleValue.text(ui.value);
    var handleWidth = handle.outerWidth();
    var handleLeft = handle.position().left;
    var handleValueWidth = handleValue.outerWidth();
    var handleValueLeft = handleLeft - (handleValueWidth - handleWidth) / 2;
    handleValue.css("left", handleValueLeft);
  });

  updateResultValue(minValue);
});
