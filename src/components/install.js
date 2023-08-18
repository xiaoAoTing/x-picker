import Picker from './Picker.vue'

const pickerPlugin = {
  install: (app) => {
    app.component('x-picker', Picker)
  }
}

export default pickerPlugin
