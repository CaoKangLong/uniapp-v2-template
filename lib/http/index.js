import { HttpCore } from './core'

class Http extends HttpCore {
  constructor() {
    super()
    this.instance = null
  }
  static getInstance(){
    if (!this.instance) {
      this.instance = new Http();
    }
    return this.instance;
  }
}
let HttpInstance = Http.getInstance();
export default HttpInstance;