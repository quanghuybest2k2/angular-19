export function HelloWorld(): ClassDecorator {
  return function (target: any) {
    const originalNgOnInit = target.prototype.ngOnInit;

    target.prototype.ngOnInit = function (...args: any[]) {
      console.log('Hello World');

      if (originalNgOnInit) {
        originalNgOnInit.apply(this, args);
      }
    };
  };
}
