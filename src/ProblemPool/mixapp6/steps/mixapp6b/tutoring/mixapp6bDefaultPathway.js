var hints = [{id: "mixapp6b-h1", type: "hint", dependencies: [], title: "Simple Interest Formula", text: "The simple interest formula is $$I=Prt$$, where I is interest, P is principal, r is interest rate, and t is time."}, {id: "mixapp6b-h2", type: "hint", dependencies: ["mixapp6b-h1"], title: "Value for t", text: "Since we are only concerned about interest, $$t=1$$"}, {id: "mixapp6b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8000-x"], dependencies: ["mixapp6b-h2"], title: "Assigning variables", text: "Let $$x=the$$ amount of dollars invested in the 3.2% account. Given that Marco has $8,000 total, how can we write a mathematical expression for the amount of dollars he should invest in the 8% account?"}, {id: "mixapp6b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.032*x"], dependencies: ["mixapp6b-h3"], title: "Expressing the interest earned for the 4% account", text: "How much interest will the 3.2% account earn in 1 year? Write as a mathematical expression."}, {id: "mixapp6b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.08*(8000-x)"], dependencies: ["mixapp6b-h4"], title: "Expressing the interest earned for the 7% account", text: "How much interest will the 8% account earn in 1 year? Express this as a mathematical expression"}, {id: "mixapp6b-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.065*8000"], dependencies: ["mixapp6b-h5"], title: "Total interest", text: "What is the total interest earned given that Marco wants to earn 6.5% interest on the total amount?"}, ]; export {hints};