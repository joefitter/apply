'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Cocktail from 'backbone.cocktail';
import Radio from 'backbone.radio';
import handlebarsHelpers from './helpers/handlebars';
import Handlebars from 'handlebars';
import Base64 from './helpers/base64';
import Collection from './mvc/collection';
import Currency from './helpers/currency';
import Device from 'browsernizr';
import LocalStorage from './helpers/localStorage';
import TouchView from './mixins/touch.view';
import Translator from './helpers/translate';
import Visibility from './helpers/visibility';
import ModuleHelper from './helpers/module';
import 'backbone.marionette';
import 'backbone.stickit';
import './helpers/regex';

handlebarsHelpers();

var func = Backbone.Marionette.Module.create;

Backbone.Marionette.Module.create = function(app, moduleNames, moduleDefinition) {
  moduleDefinition.namespace = moduleNames;
  func.apply(this, arguments);
};

// build orchestra framework
const Orchestra = {};
_.extend(Orchestra, Backbone);
_.extend(Orchestra, Backbone.Marionette.extend());

_.extend(Orchestra, {
  _,
  $,
  Radio,
  Cocktail,
  Handlebars,
  Base64,
  Collection,
  Currency,
  Device,
  LocalStorage,
  Translator,
  Visibility,
  ModuleHelper,

  Mixins: {
    TouchView
  },

  instances: {},

  getInstance(namespace) {
    namespace = namespace || 'main';
    if (!this.instances[namespace]) {
      this.instances[namespace] = new this.Application({
        namespace: namespace
      });
      this.listenTo(this.instances[namespace], 'destroy', () => {
        delete this.instances[namespace];
      });
      return this.instances[namespace];
    }

    return this.instances[namespace];
  }

});

export {
  Orchestra,
  $,
  Radio,
  Cocktail,
  Handlebars,
  Base64,
  Collection,
  Currency,
  Device,
  LocalStorage,
  Translator,
  Visibility,
  ModuleHelper,
  Mixins,
  TouchView,
  getInstance
};
