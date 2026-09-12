import type { IObserver } from './IObserver';

export interface IObservable {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}
