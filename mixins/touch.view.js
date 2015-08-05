//
// #orchestra/mixins/touch.view.js
//
'use strict';

import Backbone from 'backbone';
import 'jquery-hammerjs';
import _ from 'lodash';

const delegateEventSplitter = /^(\S+)\s*(.*)$/;

export default {
  _hammered: false,

  hammerEvents: {},

  undelegateEvents() {
    this.undelegateHammerEvents();
  },

  undelegateHammerEvents() {
    if (this._hammered) {
      this.hammer().off('.hammerEvents' + this.cid);
    }
  },

  delegateEvents() {
    this.delegateHammerEvents();
    return this;
  },

  delegateHammerEvents(events) {
    const options = _.defaults(this.hammerOptions || {}, Backbone.hammerOptions);

    if (!(events || (events = _.result(this, 'hammerEvents')))) {
      return this;
    }

    _.each(events, (eventItem, key) => {
      let method = eventItem;

      if (!_.isFunction(method)) {
        method = this[eventItem];
      }

      if (method) {
        const match = key.match(delegateEventSplitter);
        const selector = match[2];
        let eventName = match[1];

        eventName += '.hammerEvents' + this.cid;
        method = _.bind(method, this);

        if (selector === '') {
          this.hammer(options).on(eventName, method);
        } else {
          this.hammer(options).on(eventName, selector, method);
        }
      }

    });
    return this;
  },

  hammer(options) {
    this._hammered = true;
    return this.$el.hammer(options);
  }
};
