var hints = [{id: "a41316cmatrices29a-h1", type: "hint", dependencies: [], title: "Detemine if Multipliable", text: "Two matrices are Multipliable(able to be multiplied) if their inner dimensions are the same. Since C is 3x2 and B is 2x2, the matrices can be multiplied.", variabilization: {}}, {id: "a41316cmatrices29a-h2", type: "hint", dependencies: ["a41316cmatrices29a-h1"], title: "Following the Algorithm", text: "Follow the algorithm for multiplying matrices to get the final matrix.", variabilization: {}}, {id: "a41316cmatrices29a-h3", type: "hint", dependencies: ["a41316cmatrices29a-h2"], title: "Operations For Multiplication", text: "The operations for multiplying the matrices are as follows: $$\\begin{bmatrix} -1\\times-10+0\\times5 & -1\\times20+0\\times25 \\\\ 0\\times-10+-1\\times5 & 0\\times20+-1\\times25 \\\\ 1\\times-10+0\\times5 & 1\\times20+0\\times25 \\end{bmatrix}$$.", variabilization: {}}, {id: "a41316cmatrices29a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} 10 & -20 \\\\ -5 & -25 \\\\ -10 & 20 \\end{bmatrix}$$"], dependencies: ["a41316cmatrices29a-h3"], title: "Simplifying the Matrix", text: "Simplify these $$operations:\\begin{bmatrix} -1\\times-10+0\\times5 & -1\\times20+0\\times25 \\\\ 0\\times-10+-1\\times5 & 0\\times20+-1\\times25 \\\\ 1\\times-10+0\\times5 & 1\\times20+0\\times25 \\end{bmatrix}$$. What do you get as your final answer?", variabilization: {}}, ]; export {hints};