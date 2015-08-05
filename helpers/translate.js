//
// helpers.translate
//
'use strict';

import i18next from 'i18next';
import Radio from 'backbone.radio';

const resources = {};
const channel = Radio.channel('global');

class TranslateHelpers {

  getLocale() {
    let locale = 'en-GB';

    if (channel.request('config')) {
      const config = channel.request('config');

      if (config.app) {
        locale = config.app.locale || 'en-GB';
      }
    }

    return locale;
  }

  addLocale(key, resStore) {
    resources[key] = resStore;
  }

  translate(i18nKey, params) {
    let result = null;

    i18next.init({
      lng: this.getLocale(),
      resStore: resources[this.getLocale()]
    }, (err, translate) => {
      result = translate(i18nKey, {
        postProcess: 'sprintf',
        sprintf: params
      });
    });

    return result;
  }
}

export default new TranslateHelpers();
