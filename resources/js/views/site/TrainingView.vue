<template>
    <!-- ======================= Page Title ===================== -->
    <div class="page-title">
        <div class="container">
            <div class="page-caption">
                <h2>Training</h2>
                <p><a href="/" title="Home">Home</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Training</p>
            </div>
        </div>
    </div>
    <!-- ======================= End Page Title ===================== -->

    <!-- ================= Category start ========================= -->
    <section class="utf_job_category_area">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="heading">
                        <h2>Trainings</h2>
                        <p>
                            JCIT Consulting gives you the opportunity to get trained in various field in order to join join
                            the team. Within the period of six (06) months
                            we are able to make of you a junior developer.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">

                    <div class="col-md-4 col-sm-6">
                        <a href="#" title="">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class=""> <img class="img-responsive" style="border-radius: 5px;"
                                            src="website/assets/img/training-5.png" alt=""></div>
                                    <div class="category-detail utf_category_desc_text">
                                        <h4>Accounting & Consulting</h4>
                                        <p data-toggle="modal"
                                            data-target="#apply-job"
                                            class="" @click="selectJob('Python developer')">Enroll</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="#" title="">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class=""> <img class="img-responsive" style="border-radius: 5px;"
                                            src="website/assets/img/training-4.png" alt=""></div>
                                    <div class="category-detail utf_category_desc_text">
                                        <h4>Accounting & Consulting</h4>
                                        <p data-toggle="modal"
                                            data-target="#apply-job"
                                            class="" @click="selectJob('Backend web developer')">Enroll</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="#" title="">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class=""> <img class="img-responsive" style="border-radius: 5px;"
                                            src="website/assets/img/training-3.png" alt=""></div>
                                    <div class="category-detail utf_category_desc_text">
                                        <h4>Accounting & Consulting</h4>
                                        <p data-toggle="modal"
                                            data-target="#apply-job"
                                            class="" @click="selectJob('Frontend web developer')">Enroll</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="#" title="">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class=""> <img class="img-responsive" style="border-radius: 5px;"
                                            src="website/assets/img/training-2.png" alt=""></div>
                                    <div class="category-detail utf_category_desc_text">
                                        <h4>Accounting & Consulting</h4>
                                        <p data-toggle="modal"
                                            data-target="#apply-job"
                                            class="" @click="selectJob('Web designer')">Enroll</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="#" title="">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class=""> <img class="img-responsive" style="border-radius: 5px;"
                                            src="website/assets/img/training-1.png" alt=""></div>
                                    <div class="category-detail utf_category_desc_text">
                                        <h4>Accounting & Consulting</h4>
                                        <p data-toggle="modal"
                                            data-target="#apply-job"
                                            class="" @click="selectJob('Web developer')">Enroll</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>


                
                </div>
            </div>
        </div>
    </section>



       
<!-- Apply Job Popup -->
<div class="modal fade" id="apply-job" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" id="myModalLabel2">
            <div class="modal-body">
                <div class="text-center mrg-bot-20">
                    <h4 class="mrg-0 alert alert-success" v-if="success">  {{ success }} </h4>
                    <h4 class="mrg-0">  {{ job }} </h4>
                    <span>2708 Scenic Way, Sutter</span>
                </div>
                <form @submit.prevent="applyJob">
                    <div class="col-md-12 col-sm-12">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name" v-model="jobData.name">
                        <span
                        v-if="errors.name"
                        class="text-danger"
                        v-text="errors.name[0]"
                        >
                        </span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email" v-model="jobData.email">
                        <span
                        v-if="errors.email"
                        class="text-danger"
                        v-text="errors.email[0]"
                        >
                        </span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <label>Phone</label>
                        <input type="tel" class="form-control" placeholder="Phone" v-model="jobData.phone">
                        <span
                        v-if="errors.phone"
                        class="text-danger"
                        v-text="errors.phone[0]"
                        >
                        </span>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-12">
                        <label>Experience </label>
                        <textarea class="form-control height-120" placeholder="Experience" v-model="jobData.experience"> </textarea>
                        <span
                        v-if="errors.experience"
                        class="text-danger"
                        v-text="errors.experience[0]"
                        >
                        </span>
                    </div>
                    <div class="col-md-12 text-right">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        <button type="submit" class="btn theme-btn btn-sm btn-radius" style="margin-left: 10px;">Save</button>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Apply Job Popup -->



   
</template>


<script>
import { onMounted, reactive } from 'vue'
import useJob from './../../services/jobServices'
import { ref } from 'vue'

export default {
  components: {
  },
  
  setup() {
    const {
        handleApplyJob,
        success,
        errors,
    } = useJob()

    const job = ref('');
    const jobData = reactive({
      name: '',
      email: '',
      phone: '',
      experience: '',
      jobChosen: '',
      
    })
    const selectJob = (jobSelected) =>{
        job.value = jobSelected 
       }
    const applyJob = async () =>{
        jobData.jobChosen = job.value
        await handleApplyJob({ ...jobData })
        if (success.value) {
            jobData.name = ''
            jobData.email = ''
            jobData.phone = ''
            jobData.experience = ''
            jobData.jobChosen = ''
        }
        

    }
    
    onMounted(async () => {
      
    })

    return {
        jobData,
        applyJob,
        selectJob,
        job,
        success,
        errors,
    }
  },
 
}

</script>
