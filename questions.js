// Self-contained question bank for the Optimization chapter.
// Answer indices are zero-based. Each question has one unambiguous best answer.
export const questions = [
  {
    section: "Optimization landscape",
    category: "Optimization objective",
    prompt: "In θ̂ = arg minθ J(θ), what does θ̂ represent?",
    options: [
      "The smallest numerical value attained by J",
      "A parameter vector that minimizes the cost function J",
      "The gradient of J at an arbitrary point",
      "The complete set of training observations"
    ],
    answer: 1,
    explanation: "The arg min returns an argument: a value of the parameter vector θ at which J is minimized. The corresponding minimum value is J(θ̂), which is a scalar and should not be confused with the minimizer itself.",
    activity: "For J(θ) = (θ − 4)² + 3, identify both the minimizer θ̂ and the minimum value J(θ̂)."
  },
  {
    section: "Optimization landscape",
    category: "Information levels",
    prompt: "Which list follows the chapter's three levels of information used by optimization methods?",
    options: [
      "Training labels, test labels and predictions",
      "Parameters, residuals and regularization strength",
      "Local minima, global minima and saddle points",
      "Function values, gradients and Hessians"
    ],
    answer: 3,
    explanation: "An optimization method may use only values J(θ), add first-order information through the gradient ∇J, or also use second-order information through the Hessian H. More derivative information can improve a step but is more expensive to obtain and use.",
    activity: "Classify gradient descent and Newton's method according to the highest derivative order each method uses."
  },
  {
    section: "Optimization landscape",
    category: "Local and global minima",
    prompt: "Which statement about a convex cost function is correct?",
    options: [
      "It cannot have a flat region",
      "Every stationary point is necessarily a strict minimum",
      "Every local minimizer is global; if the function is strictly convex, it has at most one minimizer",
      "Gradient descent reaches its minimum in exactly one iteration"
    ],
    answer: 2,
    explanation: "Convexity rules out inferior local minima: any local minimizer is also global. Strict convexity strengthens this to at most one minimizer, although it does not imply that an arbitrary iterative algorithm reaches it in one step.",
    activity: "Compare the graph of a bowl-shaped convex function with a nonconvex curve containing two valleys of different depths."
  },
  {
    section: "Optimization landscape",
    category: "Stationary points",
    prompt: "For a nonconvex differentiable cost, an algorithm stops where ∇J(θ) = 0. What can be concluded?",
    options: [
      "The point is stationary, but it may be a local minimum, saddle point or plateau",
      "The point is certainly the unique global minimizer",
      "The Hessian must be positive definite there",
      "The objective must have decreased at every preceding iteration"
    ],
    answer: 0,
    explanation: "A zero gradient is a stationarity condition, not a certificate of global optimality in a nonconvex problem. Additional structure or curvature information is needed to distinguish minima from saddles and other stationary behavior.",
    activity: "Inspect J(θ) = θ³ at θ = 0: compute its derivative and decide whether the stationary point is a local minimum."
  },
  {
    section: "First-order methods",
    category: "One-dimensional update",
    prompt: "Let J(θ) = (θ − 3)². Starting at θ⁽⁰⁾ = 1 with η = 0.25, what is one gradient-descent update?",
    options: ["θ⁽¹⁾ = 0", "θ⁽¹⁾ = 2", "θ⁽¹⁾ = 3", "θ⁽¹⁾ = 5"],
    answer: 1,
    explanation: "The derivative is dJ/dθ = 2(θ − 3), so at θ = 1 it equals −4. The update is θ⁽¹⁾ = 1 − 0.25(−4) = 2, which moves toward the minimizer at θ = 3.",
    activity: "Repeat the calculation from θ = 2 with the same step size and compare the distance to the minimizer."
  },
  {
    section: "First-order methods",
    category: "Gradient geometry",
    prompt: "At a point where ∇J ≠ 0, which geometric statement is correct?",
    options: [
      "The gradient is tangent to the local level curve and points downhill",
      "The negative gradient is perpendicular to every parameter axis",
      "The gradient is perpendicular to the local level curve, and −∇J gives the largest infinitesimal decrease for a fixed Euclidean step length",
      "The gradient always points directly to the global minimizer"
    ],
    answer: 2,
    explanation: "The gradient is normal to a level curve and points toward locally increasing cost. Its negative is the steepest local descent direction among infinitesimal directions of equal Euclidean length, but it need not point directly to a distant global solution.",
    activity: "Draw elliptical contours, mark a point on one contour, and sketch the tangent, ∇J and −∇J."
  },
  {
    section: "First-order methods",
    category: "First-order model",
    prompt: "For Δ = −η∇J(θ), what does the first-order approximation predict for a sufficiently small positive η?",
    options: [
      "J(θ + Δ) ≈ J(θ) − η‖∇J(θ)‖₂²",
      "J(θ + Δ) ≈ J(θ) + η‖∇J(θ)‖₂²",
      "J(θ + Δ) = 0 for every differentiable J",
      "J(θ + Δ) is independent of η"
    ],
    answer: 0,
    explanation: "Substituting Δ = −η∇J into J(θ + Δ) ≈ J(θ) + ∇J(θ)ᵀΔ gives a predicted decrease of η‖∇J(θ)‖₂². This is a local approximation and therefore does not justify an arbitrarily large step.",
    activity: "Carry out the substitution in the linear approximation and identify the inner product that becomes a squared norm."
  },
  {
    section: "First-order methods",
    category: "Step size",
    prompt: "Which description best captures the effect of the step size η in gradient descent?",
    options: [
      "A smaller η always reaches the solution in fewer iterations",
      "η changes the cost function but not the parameter updates",
      "Any positive η guarantees that the cost decreases",
      "Too small can be slow; too large can increase the cost, oscillate or diverge"
    ],
    answer: 3,
    explanation: "The step size controls both speed and stability. Small steps may make progress painfully slow, while large steps can invalidate the local linear model, overshoot a valley, oscillate across it or diverge.",
    activity: "On a one-dimensional quadratic, sketch updates produced by a small, suitable and excessive η from the same initial point."
  },
  {
    section: "First-order methods",
    category: "Stopping criteria",
    prompt: "Which is a sensible convergence criterion discussed for gradient descent?",
    options: [
      "Stop when ‖∇J‖ or the relative parameter update becomes sufficiently small",
      "Stop after the first iteration regardless of the result",
      "Stop only when every parameter equals zero",
      "Stop whenever the gradient changes sign in one coordinate"
    ],
    answer: 0,
    explanation: "A small gradient indicates little first-order descent remains, while a small relative parameter update indicates that the iterates are no longer moving appreciably. In practice tolerances and an iteration limit are usually used together.",
    activity: "Explain why an iteration limit is useful even when a small-gradient stopping rule has been specified."
  },
  {
    section: "First-order methods",
    category: "Momentum",
    prompt: "What is the intended effect of momentum in a narrow valley?",
    options: [
      "It computes and inverts the Hessian at every iteration",
      "It guarantees a lower objective value at every iteration",
      "Oscillating gradient components tend to cancel, while persistent components accumulate velocity",
      "It removes the need to choose η and α"
    ],
    answer: 2,
    explanation: "Momentum low-pass filters the gradient sequence. Components that repeatedly reverse direction are damped, while components that consistently point along the valley build velocity. The objective need not decrease monotonically, and η and α must be chosen together.",
    activity: "In the momentum update, identify the previous-motion term and the new gradient correction, then predict what happens when gradients alternate sign."
  },
  {
    section: "First-order methods",
    category: "Nesterov acceleration",
    prompt: "Where does Nesterov momentum evaluate the gradient?",
    options: [
      "At the initial parameter vector θ⁽⁰⁾ in every iteration",
      "At the previous parameter vector θ⁽ᵗ⁻¹⁾",
      "At the final minimizer θ⋆, assumed to be known",
      "At the look-ahead point θ⁽ᵗ⁾ + αv⁽ᵗ⁾"
    ],
    answer: 3,
    explanation: "Nesterov acceleration first looks in the direction of the existing velocity and evaluates the gradient at θ⁽ᵗ⁾ + αv⁽ᵗ⁾. The correction can react before the parameters move too far, although it is not universally better than ordinary momentum.",
    activity: "Write the ordinary momentum and Nesterov velocity updates side by side and circle the only gradient argument that changes."
  },
  {
    section: "First-order methods",
    category: "Per-parameter step sizes",
    prompt: "In the chapter's adaptive rule, how is ηᵢ changed when two successive gradients for parameter i have opposite signs?",
    options: [
      "Increase ηᵢ because the direction is persistent",
      "Leave ηᵢ unchanged for all future iterations",
      "Replace ηᵢ by the magnitude of the current gradient",
      "Decrease ηᵢ because the update may be oscillating or overshooting"
    ],
    answer: 3,
    explanation: "A sign change gives gᵢ⁽ᵗ⁾gᵢ⁽ᵗ⁻¹⁾ < 0, so the rule multiplies ηᵢ by d with 0 < d < 1. When the sign persists, it multiplies ηᵢ by u > 1. An objective check can reject an unsuccessful update and reduce the steps.",
    activity: "With u = 1.2, d = 0.8 and ηᵢ = 0.10, compute the new step after one persistent sign and after one sign reversal."
  },
  {
    section: "Curvature & Newton",
    category: "The Hessian",
    prompt: "What information is represented by the Hessian H?",
    options: [
      "Second derivatives describing local curvature and interactions between parameter directions",
      "Only the current value of the objective",
      "The sequence of previous gradients used by momentum",
      "A list of training residuals"
    ],
    answer: 0,
    explanation: "The Hessian contains the second partial derivatives of J. Its diagonal terms describe curvature along coordinates, while off-diagonal terms describe how parameter directions interact locally.",
    activity: "Write the 2 × 2 Hessian for J(θ₁, θ₂) = θ₁² + 3θ₁θ₂ + 5θ₂²."
  },
  {
    section: "Curvature & Newton",
    category: "Newton step",
    prompt: "How should the Newton step Δ usually be computed numerically?",
    options: [
      "Set Δ = −ηg and ignore the Hessian",
      "Explicitly form H⁻¹ first, then multiply every time",
      "Solve the linear system HΔ = −g, then update θ ← θ + Δ",
      "Choose Δ randomly until J decreases"
    ],
    answer: 2,
    explanation: "The formula Δ = −H⁻¹g is useful algebraically, but numerical implementations normally solve HΔ = −g directly. This avoids explicitly forming an inverse and is generally more efficient and numerically reliable.",
    activity: "For H = diag(2, 8) and g = (4, −8)ᵀ, solve HΔ = −g coordinate by coordinate."
  },
  {
    section: "Curvature & Newton",
    category: "Quadratic model",
    prompt: "If H is positive definite, what is true of Newton's local quadratic model m(Δ)?",
    options: [
      "It is constant in every direction",
      "It has a unique minimum, found by solving HΔ = −g",
      "Its minimum must equal the global minimum of the true nonconvex objective",
      "It cannot contain cross-parameter interactions"
    ],
    answer: 1,
    explanation: "Positive definiteness makes the quadratic model strictly convex in Δ, so its stationary point is a unique minimum. The model is only local, however, and its minimizer need not minimize the true objective when the current point is far from the solution.",
    activity: "Explain geometrically why a positive-definite quadratic looks like a bowl and why an indefinite quadratic can contain a saddle."
  },
  {
    section: "Curvature & Newton",
    category: "Exact quadratics",
    prompt: "For a strictly convex quadratic with a nonsingular Hessian, what happens with an undamped exact Newton step?",
    options: [
      "It behaves exactly like gradient descent with an arbitrary η",
      "It needs one iteration per parameter",
      "It always oscillates before converging",
      "It reaches the minimizer in one iteration because the quadratic model is exact"
    ],
    answer: 3,
    explanation: "For a quadratic objective, the second-order Taylor model is the objective itself. Solving HΔ = −g therefore points from the current iterate directly to the unique minimizer, provided H is nonsingular and positive definite.",
    activity: "Apply Newton's method to J(θ) = (θ − 5)² from an arbitrary θ and simplify the next iterate."
  },
  {
    section: "Curvature & Newton",
    category: "Ill-conditioning",
    prompt: "Why is one fixed gradient-descent step size inefficient for J(θ₁, θ₂) = θ₁² + 10θ₂²?",
    options: [
      "Curvature is much larger in the θ₂ direction, so a stable step can zigzag there while progress along θ₁ remains slow",
      "The function has several local minima",
      "Its gradient is zero everywhere",
      "The Hessian does not exist"
    ],
    answer: 0,
    explanation: "The narrow elliptical contours reflect very different curvature across directions. A step small enough to avoid instability in the steep θ₂ direction may be unnecessarily conservative in θ₁, producing oscillation and slow progress. Scaling, adaptive steps or momentum can help.",
    activity: "Compare the two Hessian eigenvalues and identify which coordinate imposes the tighter stability restriction on η."
  },
  {
    section: "Curvature & Newton",
    category: "Nonlinear valleys",
    prompt: "Why can a full Newton step increase the true Rosenbrock objective when far from the solution?",
    options: [
      "Newton's method does not use derivatives",
      "The quadratic model is only local and may be inaccurate over the full proposed step",
      "The Rosenbrock function is a strictly convex quadratic",
      "A Newton step always follows the negative gradient direction"
    ],
    answer: 1,
    explanation: "Newton minimizes a local quadratic approximation. Far from the solution, that approximation can be inaccurate, so its minimizer can raise the true objective. Damping or line search can shorten the proposed step and make the method more robust.",
    activity: "Relate the curved Rosenbrock valley to the difference between minimizing the local model and minimizing the true objective."
  }
];
