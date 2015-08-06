'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Cocktail from 'backbone.cocktail';
import Radio from 'backbone.radio';
import Handlebars from 'handlebars';
import Base64 from './helpers/base64';
import Collection from './mvc/collection';
import Currency from './helpers/currency';
import Device from 'browsernizr';
import LocalStorage from './helpers/localStorage';
import Translator from './helpers/translate';
import Visibility from './helpers/visibility';
import ModuleHelper from './helpers/module';
import 'backbone.marionette';
import 'backbone.stickit';

const Orchestra = {};
_.extend(Orchestra, Backbone);
_.extend(Orchestra, Backbone.Marionette.extend());

export {
  $,
  _,
  Radio,
  Cocktail,
  Orchestra,
  Handlebars,
  Base64,
  Currency,
  Device,
  LocalStorage,
  Translator,
  Visibility,
  ModuleHelper
};
