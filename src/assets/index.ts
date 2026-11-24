import sky from './sky.webp';
import windowseat from './windowseat.webp';
import laugh from './laugh.webp';
import dusk from './dusk.webp';
import backtoback from './backtoback.webp';
import courtyard from './courtyard.webp';
import sofa from './sofa.webp';
import bow from './bow.webp';
import coupleMark from './couple-mark.webp';

export const IMG = { sky, windowseat, laugh, dusk, backtoback, courtyard, sofa } as const;
export type ImgKey = keyof typeof IMG;
export { bow, coupleMark };
