import { AppScreen } from '../components/basic/AppScreen';
import { SceneData } from '../Game';

/** Game screen.
 * To be used to show all the game play and UI.
 */
export class GameScreen extends AppScreen {
  // GameScreen extends AppScreen, which is a Layout with a few additional features
  public static assetBundles = ['game']; // asset bundles that will be loaded before the screen is shown

  constructor(options: SceneData) {
    // constructor accepts an object with data that will be passed to the screen when it is shown
    super('GameScreen'); // Creates Layout with id 'GameScreen'
  }

  /** Method that is called one every game tick (see Game.ts) */
  onUpdate() {}
}
