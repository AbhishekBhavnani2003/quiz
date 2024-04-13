const express = require('express');
const router = express.Router();
const htmlQuestions = require('../models/html');
const cssQuestions = require('../models/css');
const cppQuestions = require('../models/cplus');
const javaQuestions = require('../models/java');
const jsQuestions = require('../models/javascript');
const phpQuestions = require('../models/php');
const pythonQuestions = require('../models/python');
const reactQuestions = require('../models/react');
const sqlQuestions = require('../models/sql');


// Get all HTML questions
router.get('/givehtmlquestion', (req, res) => {
  res.json(htmlQuestions);
});
router.get('/givecssquestion', (req, res) => {
  res.json(cssQuestions);
});
router.get('/givejsquestion', (req, res) => {
  res.json(jsQuestions);
});
router.get('/givejavaquestion', (req, res) => {
  res.json(javaQuestions);
});
router.get('/givephpquestion', (req, res) => {
  res.json(phpQuestions);
});
router.get('/givecplusquestion', (req, res) => {
  res.json(cppQuestions);
});
router.get('/givereactquestion', (req, res) => {
  res.json(reactQuestions);
});
router.get('/givepythonquestion', (req, res) => {
  res.json(pythonQuestions);
});
router.get('/givesqlquestion', (req, res) => {
  res.json(sqlQuestions);
});

module.exports = router;




