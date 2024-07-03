import { Assets } from '@pixi/assets';

/** List of all assets available for this game, organized in bundles.
 * Each bundle is a group of assets that will be loaded together, for some specific scene.
 */
const assetsManifest = {
  bundles: [
    {
      name: 'preload',
      assets: [
        {
          name: 'spinner',
          srcs: 'assets/spinner.png',
        },
        {
          name: 'pixi-logo',
          srcs: 'assets/pixi-logo.png',
        },
      ],
    },
    {
      name: 'game',
      assets: [
        {
          name: 'bg',
          srcs: 'assets/sprite/bg.png',
        },
        {
          name: 'MediumWindow',
          srcs: 'assets/Window/MediumWindow.png',
        },
        {
          name: 'Window',
          srcs: 'assets/Window/Window.png',
        },
        {
          name: 'SmallWindow',
          srcs: 'assets/Window/SmallWindow.png',
        },
        {
          name: 'ValueSubstrate',
          srcs: 'assets/Window/ValueSubstrate.png',
        },
        {
          name: 'CheckBox',
          srcs: 'assets/Window/CheckBox.png',
        },
        {
          name: 'ArrowIcon',
          srcs: 'assets/Icons/ArrowIcon.png',
        },
        {
          name: 'ChestIcon',
          srcs: 'assets/Icons/ChestIcon.png',
        },
        {
          name: 'HomeIcon',
          srcs: 'assets/Icons/HomeIcon.png',
        },
        {
          name: 'MenuIcon',
          srcs: 'assets/Icons/MenuIcon.png',
        },
        {
          name: 'CloseIcon',
          srcs: 'assets/Icons/CloseIcon.png',
        },
        {
          name: 'PlayIcon',
          srcs: 'assets/Icons/PlayIcon.png',
        },
        {
          name: 'spinner',
          srcs: 'assets/spinner.png',
        },
      ],
    },
  ],
};

/** Initialize and start background loading of all assets */
export async function initAssets() {
  // Init PixiJS assets with this asset manifest
  await Assets.init({ manifest: assetsManifest });

  // Load assets for the load screen
  await Assets.loadBundle('preload');

  // List all existing bundles names
  const allBundles = assetsManifest.bundles.map((item: { name: string }) => item.name);

  // Start up background loading of all bundles
  Assets.backgroundLoadBundle(allBundles);
}

export function isBundleLoaded(bundle: string) {
  const bundleManifest = assetsManifest.bundles.find((b: { name: string }) => b.name === bundle);

  if (!bundleManifest) {
    return false;
  }

  for (const asset of bundleManifest.assets as any) {
    if (!Assets.cache.has(asset.name as string)) {
      return false;
    }
  }

  return true;
}

export function areBundlesLoaded(bundles: string[]) {
  for (const name of bundles) {
    if (!isBundleLoaded(name)) {
      return false;
    }
  }

  return true;
}
