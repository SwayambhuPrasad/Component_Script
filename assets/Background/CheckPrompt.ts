import { _decorator, Component, Node, UITransform, ProgressBar, tween, Button, AudioClip } from 'cc';
import { UIView } from '../../extensions/as_framework/framework/assets/scripts';
const { ccclass, property } = _decorator;

@ccclass('CheckPrompt')
export class CheckPrompt extends Component {
  @property(UIView) correct: UIView | null = null;
  @property(UIView) tryAgain: UIView | null = null;
  @property progressDuration = 2.5;
  @property(ProgressBar) progressBar: ProgressBar | null = null;
  @property(AudioClip) correctAudio: AudioClip = null;
  @property(AudioClip) incorrectAudio: AudioClip = null;

  // @property(Button) CheckButton: Button | null = null;

  onLoad() {
    this.correct.node.active = false;
    this.tryAgain.node.active = false;
    this.progressBar.node.active = false;
    // this.CheckButton.node.active = true;
    this.progressBar.progress = 0;
  }

  async showCorrect() {
    this.correctAudio.play();
    await this.correct.show();
    //this.CheckButton.node.active = false;
    this.progressBar.progress = 0;
    this.progressBar.node.active = true;
    await this._playProgressTween();
    this.progressBar.node.active = false;
    await this.correct.hide();
  }

  async showTryAgain() {
    this.incorrectAudio.play();
    await this.tryAgain.show();
    //this.CheckButton.node.active = false;
    this.progressBar.progress = 0;
    this.progressBar.node.active = true;
    await this._playProgressTween();
    this.progressBar.node.active = false;
    await this.tryAgain.hide();
    // this.CheckButton.node.active = true;
  }

  private _playProgressTween() {
    return new Promise((resolve) => {
      tween(this.progressBar).set({ progress: 0 }).to(this.progressDuration, { progress: 1 }).call(resolve).start();
    })
  }
}

