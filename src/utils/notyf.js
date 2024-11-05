import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'success',
      background: 'green',
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        color: 'white'
      }
    },
    {
      type: 'error',
      background: 'red',
      icon: {
        className: 'fas fa-exclamation-triangle',
        tagName: 'i',
        color: 'white'
      }
    }
  ]
});

export default notyf;
