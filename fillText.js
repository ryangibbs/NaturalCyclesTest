$.fn.fillText = function(options) {

  // Variables
  var settings = $.extend({
    maxFontPixels: 50,
    minFontPixels: 1,
    textSource: ''
  }, options);

  var $this = $(this);
  var $source = $('#' + settings.textSource);
  var $text;

  // Functions
  function sourceChanged() {
    $text.text($source.val());
    resizeText();
  }

  function resizeText() {
    // Get style
    var style = window.getComputedStyle($text[0], null).getPropertyValue('font-size');
    var currentFontSize = parseFloat(style);
    // Keeps it in a ratio
    var calc = $this.width() / $text.width() * currentFontSize;
    // Get the value and make sure it is in range
    var newFontPixels = Math.min(Math.max(calc, settings.minFontPixels), settings.maxFontPixels);
    // Update
    $('#output-text').css('font-size', Math.floor(newFontPixels) + 'px');
  }

  // Events
  $source.on('input', sourceChanged);

  var widthObserver = new MutationObserver(resizeText);
  widthObserver.observe($this[0], { attributes: true });

  // Init
  var init = function() {
    $text = $('<span id="output-text"></span>');
    $this.append($text);
    sourceChanged();
  }();
}
