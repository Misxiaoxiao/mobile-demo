const Navigator: any = navigator || window.navigator;
const UA: string = Navigator.userAgent.match(/\([^)]+\)/g)[0];
const device: string = UA.substring(1, UA.length - 1);

export default class Device {
  public getDevice(s: string): any {
    const source: string = s || '';
    const devicePlatform: string = navigator.platform + '&' + source;
    const deviceModel: string = device;
    const deviceManufacturer: string = navigator.vendor;
    const appVersion: string = navigator.appVersion;
    return {
      source,
      devicePlatform,
      deviceModel,
      deviceManufacturer,
      appVersion,
    };
  }
}
