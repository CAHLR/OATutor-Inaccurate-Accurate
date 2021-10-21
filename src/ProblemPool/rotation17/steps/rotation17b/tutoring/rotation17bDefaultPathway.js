var hints = [{id: "rotation17b-h1", type: "hint", dependencies: [], title: "Equations of Rotation", text: "The equations of rotation are $$x=x'cos(\\theta)-y'sin(\\theta)$$ and $$y=\\operatorname{x'sin}\\left(θ\\right)+\\operatorname{x'cos}\\left(θ\\right)$$", variabilization: {}}, {id: "rotation17b-h2", type: "hint", dependencies: ["rotation17b-h1"], title: "Plugging in the Angle", text: "Because $$\\theta=60$$, plug in the value into the equations of rotation for x and y. Simplify so you are left with an algebraic function (with no trignometric functions)", variabilization: {}}, {id: "rotation17b-h3", type: "hint", dependencies: ["rotation17b-h2"], title: "Substituting Equation of Rotations", text: "Substitute $$x=\\operatorname{x'}\\left(\\frac{1}{2}\\right)-\\operatorname{y'}\\left(\\frac{\\sqrt{3}}{2}\\right)$$ and $$y=\\operatorname{x'}\\left(\\frac{\\sqrt{3}}{2}\\right)+\\operatorname{y'}\\left(\\frac{1}{2}\\right)$$ into (x**2)+(3sqrt(3)xy)+4y**2)+y-2=0", variabilization: {}}, {id: "rotation17b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(11\\right) {x'}^2-{y'}^2+\\sqrt{3} x'+y'-\\left(4\\right)=0$$"], dependencies: ["rotation17b-h3"], title: "Algebraic Simplifications", text: "Using FOIL method, combining like terms, and other simplifications, determine the new representation of the equation. Write the answer so that there are no fractions.", variabilization: {}}, ]; export {hints};