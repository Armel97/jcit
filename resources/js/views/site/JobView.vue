<template>
    <!-- ======================= Page Title ===================== -->
    <div class="page-title">
        <div class="container">
            <div class="page-caption">
                <h2>Jobs</h2>
                <p><a href="#" title="Home">Home</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Jobs</p>
            </div>
        </div>
    </div>
    <!-- ======================= End Page Title ===================== -->


    <!-- ================= Job start ========================= -->
    <section class="padd-top-80 padd-bot-80">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="heading">
                        <h2>Available Job</h2>
                        <p>Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry
                            standard dummy text ever since when unknown printer took a galley.</p>
                    </div>
                </div>
            </div>


            <div class="tab-content">
                <div class="tab-pane fade in show active" id="recent" role="tabpanel">
                    <div class="row">



                        <div class="col-md-3 col-sm-6">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class="utf_category_icon"> <i class="icon-bargraph" aria-hidden="true"></i> </div>
                                    <div class="category-detail utf_category_desc_text">
                                        <span class="job-type part-type">Part Time</span>
                                        <h4>Data Science & Analitycs</h4>
                                        <p>155 Jobs</p>
                                    </div>
                                    <div class="utf_apply_job_btn_item"> <a href="##" data-toggle="modal"
                                            data-target="#apply-job" class="btn-job theme-btn job-apply"
                                            @click="selectJob('Data Science & Analitycs')">Apply Now</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class="utf_category_icon"> <i class="icon-bargraph" aria-hidden="true"></i> </div>
                                    <div class="category-detail utf_category_desc_text">
                                        <span class="job-type part-type">Part Time</span>
                                        <h4>Data Science & Analitycs</h4>
                                        <p>155 Jobs</p>
                                    </div>
                                    <div class="utf_apply_job_btn_item"> <a href="##" data-toggle="modal"
                                            data-target="#apply-job" class="btn-job job-browse-btn btn-radius br-light"
                                            @click="selectJob('Data Science & Analitycs 2')">Apply Now</a> </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class="utf_category_icon"> <i class="icon-bargraph" aria-hidden="true"></i> </div>
                                    <div class="category-detail utf_category_desc_text">
                                        <span class="job-type part-type">Part Time</span>
                                        <h4>Data Science & Analitycs</h4>
                                        <p>155 Jobs</p>
                                    </div>
                                    <div class="utf_apply_job_btn_item"> <a href="##" data-toggle="modal"
                                            data-target="#apply-job" class="btn-job job-browse-btn btn-radius br-light"
                                            @click="selectJob('Data Science & Analitycs 3')">Apply Now</a> </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_category_box_area">
                                <div class="utf_category_desc">
                                    <div class="utf_category_icon"> <i class="icon-bargraph" aria-hidden="true"></i> </div>
                                    <div class="category-detail utf_category_desc_text">
                                        <span class="job-type part-type">Part Time</span>
                                        <h4>Data Science & Analitycs</h4>
                                        <p>155 Jobs</p>
                                    </div>
                                    <div class="utf_apply_job_btn_item"> <a href="##" data-toggle="modal"
                                            data-target="#apply-job" class="btn-job job-browse-btn btn-radius br-light"
                                            @click="selectJob('Data Science & Analitycs 4')">Apply Now</a> </div>

                                </div>
                            </div>
                        </div>

                        <!-- Single Job -->
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_grid_job_widget_area">
                                <div class="utf_job_like">
                                    <label class="toggler toggler-danger">
                                        <input type="checkbox" checked>
                                        <i class="fa fa-heart"></i>
                                    </label>
                                </div>
                                <div class="u-content">
                                    <div class="avatar box-80"> <a href="#"> <img class="img-responsive"
                                                src="website/assets/img/laptop-with-arrows.png" alt=""> </a> </div>
                                    <span class="job-type part-type">Part Time</span>
                                    <h5><a href="#">Custom Php Developer</a></h5>
                                    <p class="text-muted">3765 C Street, Worcester</p>
                                </div>
                                <div class="utf_apply_job_btn_item"> <a href="##" data-toggle="modal"
                                        data-target="#apply-job" class="btn-job job-browse-btn btn-radius br-light"
                                        @click="selectJob('Data Science & Analitycs 5')">Apply
                                        Now</a> </div>
                            </div>
                        </div>



                        <!-- Single Job -->
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_grid_job_widget_area">
                                <div class="utf_job_like">
                                    <label class="toggler toggler-danger">
                                        <input type="checkbox" checked>
                                        <i class="fa fa-heart"></i>
                                    </label>
                                </div>
                                <div class="u-content">
                                    <div class="avatar box-80"> <a href="#"> <img class="img-responsive"
                                                src="website/assets/img/laptop-with-arrows.png" alt=""> </a> </div>
                                    <span class="job-type part-type">Part Time</span>
                                    <h5><a href="#">Custom Php Developer</a></h5>
                                    <p class="text-muted">3765 C Street, Worcester</p>
                                </div>
                                <div class="utf_apply_job_btn_item"> <a href="#" data-toggle="modal"
                                        data-target="#apply-job" class="btn-job theme-btn job-apply"
                                        @click="selectJob('Data Science & Analitycs 6')">Apply Now</a> </div>
                            </div>
                        </div>
                        <!-- Single Job -->
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_grid_job_widget_area">

                                <div class="u-content">
                                    <div class="avatar box-80"> <a href="#"> <img class="img-responsive"
                                                src="website/assets/img/laptop-with-arrows.png" alt=""> </a> </div>
                                    <span class="job-type part-type">Part Time</span>
                                    <h5><a href="#">Custom Php Developer</a></h5>
                                    <p class="text-muted">3765 C Street, Worcester</p>
                                </div>
                                <div class="utf_apply_job_btn_item"> <a href="#" data-toggle="modal"
                                        data-target="#apply-job" class="btn-job theme-btn job-apply"
                                        @click="selectJob('Data Science & Analitycs 7')">Apply Now</a> </div>
                            </div>
                        </div>


                        <!-- Single Job -->
                        <div class="col-md-3 col-sm-6">
                            <div class="utf_grid_job_widget_area">

                                <div class="u-content">
                                    <div class="avatar box-80"> <a href="#"> <img class="img-responsive"
                                                src="website/assets/img/laptop-with-arrows.png" alt=""> </a> </div>
                                    <span class="job-type part-type">Part Time</span>
                                    <h5><a href="#">Custom Php Developer</a></h5>
                                    <p class="text-muted">3765 C Street, Worcester</p>
                                </div>
                                <div class="utf_apply_job_btn_item"> <a href="#" data-toggle="modal"
                                        data-target="#apply-job" class="btn-job theme-btn job-apply"
                                        @click="selectJob('Data Science & Analitycs 8')">Apply Now</a> </div>
                            </div>
                        </div>
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
                    <h4 class="mrg-0 alert alert-success" v-if="success"> {{ success }} </h4>
                    <h4 class="mrg-0"> {{ job }} </h4>
                    <span>2708 Scenic Way, Sutter</span>
                </div>
                <form @submit.prevent="applyJob">
                    <div class="col-md-12 col-sm-12">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name" v-model="jobData.name">
                        <span v-if="errors.name" class="text-danger" v-text="errors.name[0]">
                        </span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email" v-model="jobData.email">
                        <span v-if="errors.email" class="text-danger" v-text="errors.email[0]">
                        </span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <label>Phone</label>
                        <input type="tel" class="form-control" placeholder="Phone" v-model="jobData.phone">
                        <span v-if="errors.phone" class="text-danger" v-text="errors.phone[0]">
                        </span>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-12">
                        <label>Experience </label>
                        <textarea class="form-control height-120" placeholder="Experience"
                            v-model="jobData.experience"> </textarea>
                        <span v-if="errors.experience" class="text-danger" v-text="errors.experience[0]">
                        </span>
                    </div>
                    <div class="col-md-12 text-right">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        <button type="submit" class="btn theme-btn btn-sm btn-radius"
                            style="margin-left: 10px;">Save</button>
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
        const selectJob = (jobSelected) => {
            job.value = jobSelected
        }
        const applyJob = async () => {
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
