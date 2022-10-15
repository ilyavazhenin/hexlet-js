import _ from 'lodash';

const greeting = 'Hello, Hexlet!';
const lodashTest = _.last(['one', 'two']);

const testFunction = () => `${greeting}, it is number ${lodashTest}`;

testFunction();
