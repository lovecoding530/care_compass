/**
 * @providesModule @utils
 */
import Sound from 'react-native-sound';

export function copy(o) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object") ? copy(v) : v;
    }
    return output;
}

export function playSound(url) {
  
    const callback = (error, sound) => {
      if (error) {
        alert(error.message);
        return;
      }
      sound.play(() => {
        // Release when it's done so we're not using up resources
        sound.release();
      });
    };
  
    const sound = new Sound(url, null, error => callback(error, sound));
}
  