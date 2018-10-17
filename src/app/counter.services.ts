
export class InactiveActiveCounter {
  inActivePressed: number = 0;
  activePressed: number = 0;

  onInActiveToActiveCounter() {
    this.activePressed++;
    console.log(this.activePressed);
  }
  onActiveToInActiveCounter() {
    this.inActivePressed++;
    console.log(this.inActivePressed);
  }
}
