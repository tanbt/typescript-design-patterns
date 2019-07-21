export class DiContainerDecorator {
  private static _instance: DiContainerDecorator = new DiContainerDecorator();
  private _dependencies: {[key: string]: Object} = {};

  private constructor() {
    if(DiContainerDecorator._instance) {
      throw new Error("Singleton class. Cannot instantiate using `new`.");
    }
    DiContainerDecorator._instance = this;
  }

  public static get instance() :DiContainerDecorator {
    return DiContainerDecorator._instance;
  }

  /**
   * Construct a new instance and register it to DI container
   *
   * @param name
   *          name of the interface of the new object
   * @param dependencies
   *          list of dependent object names
   * @param implementation
   *          the class of the new object
   */
  register(name: string, dependencies: string[], implementation: any) {
    if(this._dependencies[name]) {
      throw new Error("Dependency already registered.");
    }
    const dependenciesImpls = this.getDependenciesImpls(dependencies);
    this._dependencies[name] = new implementation(...dependenciesImpls);

  }

  resolve<T>(name: string): T {
    if(!this._dependencies[name]) {
      throw new Error('Unresolved dependency: ' + name);
    }
    return this._dependencies[name] as T;
  }

  /**
   * Get list of objects from DI container,
   *  these objects can be used to construct a new instance.
   *
   * @param names
   *          list of object names to get
   */
  private getDependenciesImpls(names: string[]): Object[] {
    return names.map(name => this.resolve(name));
  }
}

export function Register(name: string, dependencies: string[]): Function {
  let container = DiContainerDecorator.instance;
  // `T` is a method (constructor) which can receive any number of arguments
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    container.register(name, dependencies, constructor);
  }
}