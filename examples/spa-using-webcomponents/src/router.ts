// router.ts
export class Router {
    private routes: { [key: string]: () => void } = {};
  
    constructor() {
      window.addEventListener('popstate', () => this.handleLocationChange());
    }
  
    addRoute(path: string, action: () => void) {
      this.routes[path] = action;
    }
  
    navigate(path: string) {
      window.history.pushState({}, path, window.location.origin + path);
      this.handleLocationChange();
    }
  
    public handleLocationChange() {
      const path = window.location.pathname;
      const action = this.routes[path];
      if (action) {
        action();
      } else {
        console.error(`No route found for path: ${path}`);
      }
    }
}

export const router = new Router();
