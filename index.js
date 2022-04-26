// code your solution heref
function saturdayFun(thing = "roller-skate") {
  return `This Saturday, I want to ${thing}!`;
}

function mondayWork(thing = "go to the office") {
  return `This Monday, I will ${thing}.`;
}

function wrapAdjective(string) {
  return function (para = "special") {
    return `You are ${string}${para}${string}!`;
  };
}
