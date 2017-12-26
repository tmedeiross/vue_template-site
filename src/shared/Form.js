import axios from 'axios'

export default {
  clearForm (context) {
    for (const prop of Object.keys(context.form)) {
      context.form[prop] = null
    }
  },

  clearErrors (context) {
    for (const prop of Object.keys(context.errors)) {
      context.errors[prop] = []
    }
  },

  setErrors (context, errors) {
    for (const prop of Object.keys(context.errors)) {
      context.errors[prop] = errors[prop] || []
    }
  },

  submit (context, config) {
    this.clearErrors(context)
    context.submitting = true

    return axios(config).then((response) => {
      context.submitting = false

      if (config.resetAfterSuccess) {
        this.clearForm(context)
      }

      if (typeof config.success !== 'undefined') {
        return config.success(response)
      }
    })
    .catch(error => {
      context.submitting = false
      this.setErrors(context, error.response.data.errors)

      if (typeof config.error !== 'undefined') {
        return config.error(error)
      }
    })
  }
}
