/* eslint-disable eqeqeq */
// import axiosClient from '@/helpers/axios'

import { ref } from "vue"

// eslint-disable-next-line import/no-cycle
// import router from '@/router'
// import store from '@/store'

export default function useJob() {
  
  const process = ref(false)
  const success = ref(false)


  const handleApplyJob = async data => {
    try {
      process.value = true

      const response = await axiosClient.post('/login', data)
      if (response.data.success === true) {
        success.value = true
        process.value = false
      }
    } catch (error) {
      process.value = false
      success.value = false
    }
  }
  return {
    process,
    success,
    handleApplyJob,
  }
}
