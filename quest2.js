function besiden(n, rune) {
    // your solution goes here
    return n === 1
    ? rune
    : beside_frac(1 / n, rune, besiden(n - 1, rune));
}

// Test
show(besiden(7, heart));

// paste your besiden function from the
// previous question here


// paste your besiden function from the
// previous question here
function besiden(n, rune) {
    // your solution goes here
    return n === 1
    ? rune
    : beside_frac(1 / n, rune, besiden(n - 1, rune));
}

function carpet(n, m, rune) {
    // your solution goes here
    return stackn(n, besiden(m,rune));
}

// Test
show(carpet(7, 5, heart));

/*
Enter your answers here
(answer each question in one or two complete sentences):

(a)
The colour remains the same throughout the heart shapes.


(b)
The random colour of hearts is applied at the end of then function, in which this case is once.

(c)
The reduction the carpet function argument "random_color(heart)" would
be delayed until it is required by a primitive operation. It would provide the same result but it reduces the function first.

*/

// you may need helper functions
function randomly_colored_carpet(n, m, rune) {
    // your solution goes here
       return m === 1
           ? randomrow(n,rune)
           : stack_frac(1 / m,
                randomrow(n, rune),
                        randomly_colored_carpet(n, m - 1, random_color(rune)));

}
function randomrow(n, rune) {
    // your solution goes here
    return n === 1
    ? random_color(rune)
    : beside_frac(1 / n, random_color(rune), 
                        randomrow(n - 1, random_color(rune)));
}


// Test


// Test
show(randomly_colored_carpet(10, 10, heart));
// should produce a carpet as shown in the title picture of this quest.