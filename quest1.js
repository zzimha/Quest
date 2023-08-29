function persian(rune, count) {
    // your answer here
    return beside_frac(1/ count, persian_side(rune, count), 
            beside_frac(1 - 1 / (count - 1), 
                stack_frac(1 / count, persian_top(rune, count - 2), 
                        stack_frac(1 - 1 / (count - 1), persian_centre(rune), 
                            persian_top(rune, count - 2))), persian_side(rune, count))); 
}

function persian_centre(rune){
    return beside(stack(quarter_turn_right(rune), rune), 
                    stack(turn_upside_down(rune), quarter_turn_left(rune)));
}

function persian_side(rune, n){
    return n === 1
    ? rune
    : stack_frac(1 / n, rune, persian_side(rune, n - 1)); 
}

function persian_top(rune, n) {
    return n === 1
    ? rune 
    : beside_frac(1 / n, rune, persian_top(rune, n - 1));
}

// Tests
show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));