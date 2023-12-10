function goodVsEvil(good, evil) {
    let objGood = {
        0: 1,
        1: 2,
        2: 3,
        3: 3,
        4: 4,
        5: 10
    }

    let objEvil = {
        0: 1,
        1: 2,
        2: 2,
        3: 2,
        4: 3,
        5: 5,
        6: 10,
    }
    good = good.split(" ");
    evil = evil.split(" ");
    let resultGood = 0;
    let resultEvil = 0;
    for (let i = 0; i < good.length; i++) {
        resultGood += (Number(good[i]) * Number(objGood[i]));
    }
    for (let i = 0; i < evil.length; i++) {
        resultEvil += (Number(evil[i]) * Number(objEvil[i]));
    }
    if (resultGood > resultEvil) {
        return "Battle Result: Good triumphs over Evil";
    } else if (resultGood < resultEvil) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else if (resultGood == resultEvil) {
        return "Battle Result: No victor on this battle field";
    }
}