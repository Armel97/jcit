/* eslint-disable eqeqeq */
import axiosClient from '../helpers/axios'

import { ref } from "vue"

// eslint-disable-next-line import/no-cycle
// import router from '@/router'
// import store from '@/store'

export default function useJob() {
  
  const success = ref('')
  const errors = ref('')
  const error = ref([])

  const handleApplyJob = async data => {
    const response = await axiosClient.post('/apply-job', data)

    .then(response => {
      if (response.data.success === true) {
        success.value = response.data.data

      }
    })
    .catch(error => {
      console.log(error)
      errors.value = ''
      errors.value = error.response.data.errors
      const createUserErrors = error.response.data.errors
      Object.keys(createUserErrors).forEach(key => {
        console.log('Oups! Erreur', createUserErrors[key][0])
      })
      console.log(errors);

    })
  }

  const handleContactForm = async data => {
    const response = await axiosClient.post('/send-message', data)

    .then(response => {
      if (response.data.success === true) {
        success.value = response.data.data

      }
    })
    .catch(error => {
      console.log(error)
      errors.value = ''
      errors.value = error.response.data.errors
      const createUserErrors = error.response.data.errors
      Object.keys(createUserErrors).forEach(key => {
        console.log('Oups! Erreur', createUserErrors[key][0])
      })
      console.log(errors);

    })


    
  }

  
  return {
    process,
    success,
    handleApplyJob,
    handleContactForm,
    errors,

  }
}
