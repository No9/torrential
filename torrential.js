#!/usr/bin/env node
const workshopper = require('workshopper')
const path = require('path')

workshopper({
name : 'torrential'
, title : 'TORRENTIAL'
, exerciseDir : path.join(__dirname, 'exercises')
, appDir : __dirname
, languages : ['en']
})