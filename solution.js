$(function() {

  var slider = document.querySelector('#slider');
  var input = document.querySelector('#text-input');

  slider.addEventListener('input', sliderChanged, false);
  input.addEventListener('input', inputChanged, false);

  function sliderChanged() {
    $('#output').width(slider.value + "px");
    sessionStorage.setItem('slider-value', slider.value);
  }

  function inputChanged() {
    sessionStorage.setItem('input-text', input.value);
  }

  var init = function() {
    inputVal = sessionStorage.getItem('input-text');
    if (inputVal) {
      input.value = inputVal;
    }

    sliderVal = sessionStorage.getItem('slider-value');
    if(sliderVal) {
      slider.value = sliderVal;
      sliderChanged();
    }
  }();

  $('#output').fillText({
    textSource: 'text-input',
    maxFontPixels: 46
  });
});
