import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import 'intl';
import { IntlProvider } from 'react-intl';
import { renderRoutes } from '../imports/ui/router/index.jsx';

Meteor.startup(() => {
    render(
        <IntlProvider locale={ navigator.language || navigator.browserLanguage }>
            { renderRoutes }
        </IntlProvider>,
        document.getElementById('render-target')
    );
});
