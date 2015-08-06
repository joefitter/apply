'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Cocktail from 'backbone.cocktail';
import Radio from 'backbone.radio';
import Handlebars from 'handlebars';
import 'backbone.marionette';

const Orchestra = {};
_.extend(Orchestra, Backbone);
_.extend(Orchestra, Backbone.Marionette);


export {
  $,
  _,
  Radio,
  Cocktail,
  Orchestra
};
