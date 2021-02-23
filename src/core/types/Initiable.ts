export interface Initiable<Options extends Object> {
  init(options: Options): void;
}
