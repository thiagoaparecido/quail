/**
 * Success Criterion 2.4.8: Location
 *
 * @see http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html
 */
'use strict';

var quail = require('quail');

var SuccessCriteria = require('SuccessCriteria');

var quail = require('quail');
quail.guidelines.wcag.successCriteria['2.4.8'] = (function (quail) {
  /**
   * Determines if this Success Criteria applies to the document.
   */
  function preEvaluator() {
    return true;
  }

  // Create a new SuccessCriteria and pass it the evaluation callbacks.
  var sc = SuccessCriteria({
    name: 'wcag:2.4.8',
    preEvaluator: preEvaluator
  });

  // Techniques
  sc.techniques = {};

  // Failures
  sc.failures = {};

  return sc;
})(quail);