var hints = [{id: "a137dddgre29a-h1", type: "hint", dependencies: [], title: "GCF of Terms", text: "Find the greatest common factor of all the terms of the polynomial.", variabilization: {}}, {id: "a137dddgre29a-h2", type: "hint", dependencies: ["a137dddgre29a-h1"], title: "Factor into Primes", text: "Factor $$14p$$ and 35 into primes. $$14p=2\\times7 p$$ $$35=5\\times7$$", variabilization: {}}, {id: "a137dddgre29a-h3", type: "hint", dependencies: ["a137dddgre29a-h2"], title: "Multiply Common Factors", text: "Multiply the terms shared by both expressions. $$GCF=7$$", variabilization: {}}, {id: "a137dddgre29a-h4", type: "hint", dependencies: ["a137dddgre29a-h3"], title: "Write each Term as a Product using GCF", text: "Rewrite $$14p$$ and 35 as products of their GCF, 7. $$14p+35$$ $$7\\times2 p+7\\times5$$", variabilization: {}}, {id: "a137dddgre29a-h5", type: "hint", dependencies: ["a137dddgre29a-h4"], title: "Reverse Distributive Property", text: "Use the reverse Distributive Property to factor the expression. $$7\\left(2p+5\\right)$$", variabilization: {}}, ]; export {hints};