var hints = [{id: "complex27a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute $$\\left(2\\right)+i$$ wherever you see x, and we get the expression $$y={\\left(\\left(2\\right)+i\\right)}^2+\\operatorname{3}\\left(\\left(2\\right)+i\\right)+\\left(5\\right)$$.", variabilization: {}}, {id: "complex27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(3\\right)+\\left(4\\right) i$$"], dependencies: ["complex27a-h1"], title: "Quadratic Term", text: "Evaluate the term $${\\left(\\left(2\\right)+i\\right)}^2$$. What do you get?", subHints: [{id: "complex27a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(3\\right)+\\left(4\\right) i$$"], dependencies: [], title: "Quadratic Term", text: "$${\\left(\\left(2\\right)+i\\right)}^2=\\left(\\left(2\\right)+i\\right) \\left(\\left(2\\right)+i\\right)={\\left(2\\right)}^2+\\left(2\\right) i+\\left(2\\right) i+i^2$$. What does this evaluate to?", variabilization: {}}], variabilization: {}}, {id: "complex27a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(6\\right)+\\left(3\\right) i$$"], dependencies: ["complex27a-h1"], title: "X term", text: "Substitute $$\\left(2\\right)+i$$ for the 3x term. What is $$\\operatorname{3}\\left(\\left(2\\right)+i\\right)$$?", variabilization: {}}, {id: "complex27a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(14\\right)+\\left(7\\right) i$$"], dependencies: ["complex27a-h2", "complex27a-h3"], title: "Combine like terms.", text: "Combine the like terms (real and non real). What expression do you get?", variabilization: {}}, ]; export {hints};