# Optimization concept check

An 18-question formative quiz in the visual and interaction style of the existing [KNN](https://alexbernardino.github.io/knn-quiz/) and [regression](https://alexbernardino.github.io/regression-quiz/) quizzes.

- 4 questions on optimization objectives, information levels, minima and stationary points
- 8 on gradient descent, step size, momentum, Nesterov acceleration and adaptive per-parameter steps
- 6 on Hessians, Newton's method, quadratic models, ill-conditioning and the Rosenbrock example

Students answer one question at a time, receive immediate explanatory feedback, can revisit answered questions and get a section-by-section result. The quiz needs no account, server, package installation or network API; answers and scores remain in the open browser tab.

## Local preview

Run `python3 -m http.server 8000` in this folder, then open <http://localhost:8000/>. A local server is required because the quiz loads JavaScript modules.

Run `npm test` to check the question bank (Node.js 22 recommended).

## GitHub Pages deployment

1. Create a public GitHub repository named `optimization-quiz` in the `alexbernardino` account.
2. Push the contents of this folder to its `main` branch.
3. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
4. The included workflow tests and publishes the static site after each push to `main`.

The expected URL is <https://alexbernardino.github.io/optimization-quiz/>. All assets use relative paths, so the quiz works at this GitHub Pages project URL without a build-time base-path setting.

## Teaching notes

The question bank follows the final Optimization chapter in `Machine_Learning_Slides_V5.pdf`, PDF pages 91–109 (numbered slides 90–108), plus the optimization-method overview. It assumes differentiable, unconstrained objectives and deliberately does not introduce cross-validation or later-course classifiers.

Edit `questions.js` to revise the bank. Each item has four answer choices, a zero-based answer index, immediate feedback and a short follow-up calculation or sketch. Update the count assertions in `tests/quiz.test.mjs` if questions are added or removed.
