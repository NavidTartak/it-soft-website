function pager(indicatorID, cardArray) {
  //deactive kardan tamam
  var allIndicators = document.getElementsByClassName("indicator-circle");
  for (let i = 0; i < allIndicators.length; i++) {
    allIndicators[i].classList.remove("service-indicator-active");
    allIndicators[i].classList.add("service-indicator-deactive");
  }
  //active kardan oon ke click shode
  var thisIndicator = document.getElementById(indicatorID);
  thisIndicator.classList.remove("service-indicator-deactive");
  thisIndicator.classList.add("service-indicator-active");
  //deactive kardan tamame card ha
  var allcards = document.getElementsByClassName("card-container");
  for (let i = 0; i < allcards.length; i++) {
    allcards[i].classList.add("d-none");
    allcards[i].style.opacity = "1";
  }
  //active kardan list card haye vorodi be tabe
  for (let i = 0; i < cardArray.length; i++) {
    document.getElementById(cardArray[i]).classList.remove("d-none");
  }
}
