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
    input.value = sessionStorage.getItem('input-text');
    slider.value = sessionStorage.getItem('slider-value');
    sliderChanged();
  }();
  
  $('#output').fillText({
    textSource: 'text-input',
    maxFontPixels: 46
  });
});
