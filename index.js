'use strict';

import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

const Application = Marionette.Application.extend({
  onStart() {
    console.log('start');
    console.log($);
    console.log(Backbone.$);
  }
});

export {Application};
