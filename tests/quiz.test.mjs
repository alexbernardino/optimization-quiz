import { test } from "node:test";
import assert from "node:assert/strict";
import { questions } from "../questions.js";

test("question bank matches the Optimization chapter and has unique prompts", () => {
  assert.equal(questions.length, 18);
  assert.deepEqual(
    ["Optimization landscape", "First-order methods", "Curvature & Newton"].map(
      section => questions.filter(question => question.section === section).length
    ),
    [4, 8, 6]
  );
  assert.equal(new Set(questions.map(question => question.prompt)).size, questions.length);
  assert.deepEqual([0, 1, 2, 3].map(answer => questions.filter(question => question.answer === answer).length), [5, 4, 4, 5]);
});

test("every question has one valid answer and substantive feedback", () => {
  for (const question of questions) {
    assert.equal(question.options.length, 4, question.prompt);
    assert.equal(new Set(question.options).size, 4, question.prompt);
    assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4, question.prompt);
    assert.ok(question.options[question.answer].length > 3, question.prompt);
    assert.ok(question.explanation.length > 90, question.prompt);
    assert.ok(question.activity.length > 35, question.prompt);
  }
});

test("core topics from slides 90–109 are represented", () => {
  const categories = new Set(questions.map(question => question.category));
  for (const category of [
    "Optimization objective", "Local and global minima", "Gradient geometry", "Step size",
    "Momentum", "Nesterov acceleration", "Per-parameter step sizes", "The Hessian",
    "Newton step", "Ill-conditioning", "Nonlinear valleys"
  ]) {
    assert.ok(categories.has(category), category);
  }
});

test("the quiz does not introduce later-course topics", () => {
  assert.doesNotMatch(JSON.stringify(questions), /cross[- ]validation|kernel ridge|support vector|random forest/i);
});
