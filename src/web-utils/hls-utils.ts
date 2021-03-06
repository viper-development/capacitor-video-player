export function isSupported(): boolean {
  const mediaSource = getMediaSource();
  if (!mediaSource) {
    return false;
  }
  const isTypeSupported =
    mediaSource &&
    typeof mediaSource.isTypeSupported === 'function' &&
    mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');

  return !!isTypeSupported;
}
/**
 * MediaSource helper
 */

export function getMediaSource(): typeof MediaSource | undefined {
  return (window as any).MediaSource || (window as any).WebKitMediaSource;
}
