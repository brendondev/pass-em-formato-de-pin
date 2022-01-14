const allPins = Array.from(document.getElementsByClassName("pin"));

allPins.map((item, index) => {
  item.addEventListener("click", function(evt) {
    item.select();
  });

  item.addEventListener("input", function(evt) {
    if (evt.data && evt.data.length >= 1) {
      const nextPin = allPins[index + 1];
      if (nextPin) nextPin.focus();
    }
  });
  item.onkeydown = function() {
    const key = Event.keyCode || Event.charCode;
    if (key == 8) {
      const value = Event.target.value.length;
      if (value <= 0) {
        const previousPin = allPins[index - 1];
        if (previousPin) previousPin.focus();
      }
    }
  };
});