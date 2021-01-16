var hints = [{id: "poly29a-h1", type: "hint", dependencies: [], title: "Distributive Property Explanation", text: "The distributive property is defined as when you multiply a number by a sum or difference, you have to multiply each term of of the sum or difference by that number."}, {id: "poly29a-h2", type: "hint", dependencies: ["poly29a-h1"], title: "Splitting Sums", text: "Split one of the $$\\frac{sums}{differences}$$ into its individual terms, to use the distributive property with."}, {id: "poly29a-h3", type: "hint", dependencies: ["poly29a-h2"], title: "Splitting Sums", text: "In this case, we will split the $$4x+1$$ into 4x and 1."}, {id: "poly29a-h4", type: "hint", dependencies: ["poly29a-h3"], title: "Multiplying Individual Terms", text: "Multiply each term from the split difference to the other sum/difference."}, {id: "poly29a-h5", type: "hint", dependencies: ["poly29a-h4"], title: "Multiplying Individual Terms", text: "In this case, we will multiple 4x by (8x-3) and 1 by (8x-3)"}, {id: "poly29a-h6", type: "hint", dependencies: ["poly29a-h5"], title: "Adding Terms", text: "Add all the terms generated after both multiplications and simplify like terms"}, {id: "poly29a-h7", type: "hint", dependencies: ["poly29a-h6"], title: "Adding Terms", text: "In this case, we will add $$32x^2$$ -12x, 8x, and -3."}, {id: "poly29a-h8", type: "hint", dependencies: ["poly29a-h7"], title: "Simplification", text: "Simplify like terms in the sum. Like terms are terms of the same degree."}, {id: "poly29a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["32x^2-4x-3"], dependencies: ["poly29a-h8"], title: "Simplification", text: "After simplification, what is the final polynomial result?"}, ]; export {hints};