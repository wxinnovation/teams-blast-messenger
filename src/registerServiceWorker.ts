/* tslint:disable:no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      );
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updated() {
      console.log('New content is available; please refresh.');
      var button = document.createElement('button');
      button.style.position = 'absolute';
      button.style.bottom = '24px';
      button.style.left = '24px';
      button.setAttribute('class', 'button is-primary');
      button.textContent = 'Click to update site.';

      button.addEventListener('click', function() {
        button.disabled = true;
        setTimeout(function() {
          window.location.reload();
        }, 200);
      });

      document.body.appendChild(button);
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    }
  });
}
