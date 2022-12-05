// code your solution here

function saturdayFun(satActivity = 'roller-skate') {
    return `This Saturday, I want to ${satActivity}!`;
}
saturdayFun();

function mondayWork(monActivity = "go to the office") {
    return `This Monday, I will ${monActivity}.`;
}
mondayWork();

function wrapAdjective(wrap = "*") {
    function inner(adjective = 'Special') {
        return `You are ${wrap}${adjective}${wrap}!`
    }
    return inner;
}

wrapAdjective();