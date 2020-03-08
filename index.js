"use strict";

function watchUserInput() {
  $("#dog-form").submit(event => {
    event.preventDefault();
    let userNumInput = $("#dog-number").val();

    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});

function getDogImage(input) {
  if (input <= 50) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
  } else {
    alert("Please choose a number equal to or less than 50");
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").html("");
  responseJson.message.forEach(renderedImg => {
    $(".results").append(`<img src="${renderedImg}" class="results">`);
  });

  $(".results").removeClass("hidden");
}
