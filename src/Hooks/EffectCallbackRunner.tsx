interface EffectCallbackProps {
  running: boolean;
}

export default class EffectCallback implements EffectCallbackProps {
  running: boolean;
  constructor() {
    this.running = false;
  }

  run(callback: Function, ...test: boolean[]) {
    if (this.running || test.includes(true)) return;
    try {
      this.running = true;
      callback();
      this.running = false;
    } catch (e) {
      console.log(e.message);
      this.running = false;
    }
  }
}
