import GetDevice from './device';

export default class Platform extends GetDevice {
  constructor() {
    super();
  }
  public checkPlatform(): void {
    let OS: string = '';
    switch (true) {
      case /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent):
        OS = 'ios';
        break;
      case /android/i.test(navigator.userAgent):
        OS = 'android';
        break;
      case /(windows\s+Phone)/i.test(navigator.userAgent):
        OS = 'win';
        break;
      default:
        OS = 'other';
    }
  }
  public checkWeixin(): boolean {
    return (/MicroMessenger/i).test(navigator.userAgent.toLowerCase());
  }
  public parseUrl(path: string): string {
    return window.location.origin + '/download?jump_url=' + encodeURIComponent(path);
  }
}
