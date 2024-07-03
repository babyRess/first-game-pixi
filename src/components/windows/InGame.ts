import { ViewController } from '../../controllers/ViewController';
import { Windows } from '../../config/windows';
import i18n from '../../config/i18n';
import { Window } from '../basic/Window';

export class InGame extends Window {
  constructor(private views: ViewController) {
    super({
      title: i18n.inGame.title, // window text title
      styles: {
        // styles is an object with all the styles that will be applied to the window
        maxWidth: '80%', // set max width to 80% of parent, so it will scale down to fit the screen width on canvas resize
        marginTop: -30, // set margin top to -30px, as there it a button on the bottom, this will make it fit the screen height
        marginBottom: 350, // set margin bottom to 350px, as there it a button on the bottom, this will make it fit the screen height
      },
    });
  }
}
