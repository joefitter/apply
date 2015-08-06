'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import 'backbone.marionette';

const Orchestra = {};
_.extend(Orchestra, Backbone);
_.extend(Orchestra, Backbone.Marionette);


export {
  $,
  _,
  Orchestra
};
