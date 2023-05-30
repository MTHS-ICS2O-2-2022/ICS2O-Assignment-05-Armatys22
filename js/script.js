// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Dominik Armatys
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

function calculate() {
  var input = document.getElementById("input").value;
  var number = parseInt(input);

  var digitCount = 0;
  while (number !== 0) {
    number = Math.floor(number / 10);
    digitCount++;
  }

  document.getElementById("output").innerHTML = "Total number of digits: " + digitCount;
}