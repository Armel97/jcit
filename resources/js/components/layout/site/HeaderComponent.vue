<template>
    <!-- ======================= Start Navigation ===================== -->
    <nav class="navbar navbar-default navbar-mobile navbar-fixed white no-background bootsnav" style="height: 90px !important;">
        <div class="container" >
            <div class="navbar-header" >
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i
                        class="fa fa-bars"></i> </button>
                <a class="navbar-brand" href="/"> <img src="website/assets/images/logo-white.png"
                        class="logo logo-display" alt=""> <img src="website/assets/images/logo.png" class="logo logo-scrolled"
                        alt=""> </a>
            </div>
            <div class="collapse navbar-collapse " id="navbar-menu" style="padding-top: 15px;">
                <ul class="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                    <li class="dropdown"> <router-link to="/" style="font-size: 20px;">Home</router-link> </li>

                    <li class="dropdown "> <router-link to="/jobs" style="font-size: 20px;">Jobs</router-link> </li>
                    <li class="dropdown "> <router-link to="/training" style="font-size: 20px;">Training</router-link> </li>
                    <li class="dropdown"> <router-link to="/contact" style="font-size: 20px;">Contact</router-link> </li>
                </ul>
              
            </div>
        </div>
    </nav>
    <!-- ======================= End Navigation ===================== -->
</template>

<script>
import { onMounted } from 'vue';

    
export default {
  components: {
  },
  
  setup() {
    
    
    onMounted(async () => {
        $('.dropdown').click(function() {
                $('.utf_skin_area').removeClass('side-right');
                $('.navbar-collapse').removeClass('in');
            });
    })

  
  },
 
}
</script>
<style>
</style>