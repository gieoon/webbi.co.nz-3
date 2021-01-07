// Functions for tracking page actions
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
// import {createBrowserHistory} from 'history';
import { hotjar } from 'react-hotjar';

const tagManagerArgs = {
  gtmId: 'GTM-N8HD255',
}
TagManager.initialize(tagManagerArgs);

// // Record page navigations
// var history = createBrowserHistory();

// history.listen((location) => {
//   console.log('Router navigation event triggered');
//   window.ga('set', 'page', location.pathname + location.search);
//   window.ga('send', 'pageview');
// })

const HJID = 2185854;
const HJSV = 6;
hotjar.initialize(HJID, HJSV);

export const initialize = () => {
    ReactGA.initialize('UA-186189049-1'); // Only takes Google Universal Analytics Property, NOT Google 4 Properties
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log('Activated analytics');
}

export const GApageView = (page) => {
    ReactGA.pageview(page);
}

export const GAevent = (categoryName, eventName) => {
    ReactGA.event({       
        category: categoryName,  // Required
        action: eventName,       // Required
        label: 'labelName',       
        value: 10,       
        nonInteraction: false     
    });   
}

