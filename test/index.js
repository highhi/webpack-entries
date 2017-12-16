'use strict';
const assert = require('assert');
const we = require('../index');

describe('fixtures/*.js', () => {
  it('', () => {
    const result = we('fixtures/*.js');
    assert.deepEqual(result, {
      'main': 'fixtures/main.js',
    });
  });
});

describe('fixtures/js/*.js', () => {
  it('', () => {
    const result = we('fixtures/js/*.js');
    assert.deepEqual(result, {
      'js/home': 'fixtures/js/home.js',
      'js/list': 'fixtures/js/list.js',
    });
  });
});

describe('fixtures/js/users/*.js', () => {
  it('', () => {
    const result = we('fixtures/js/users/*.js');
    assert.deepEqual(result, {
      'js/users/user': 'fixtures/js/users/user.js',
      'js/users/users': 'fixtures/js/users/users.js',
    });
  });
});

describe('fixtures/**/*.js', () => {
  it('', () => {
    const result = we('fixtures/**/*.js');
    assert.deepEqual(result, {
      'main': 'fixtures/main.js',
      'js/home': 'fixtures/js/home.js',
      'js/list': 'fixtures/js/list.js',
      'js/users/user': 'fixtures/js/users/user.js',
      'js/users/users': 'fixtures/js/users/users.js',
    });
  });
});