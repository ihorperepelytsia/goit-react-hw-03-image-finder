import { error } from '@pnotify/core';
import '@pnotify/core/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const warningInput = data => {
  if (data.length === 0) {
    error({
      text: 'No results were found for your request.',
    });
  }
};

export default warningInput;
