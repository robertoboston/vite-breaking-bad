<script>
export default {
    
}
</script>

<template lang="">
  <div class="loader-background">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>

.loader-background{
  background-color: rgba(0,0,0,0.25);
  position: relative;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  position:absolute;
  top: 50%;
  left: 50%;
  -webkit-animation: spin 2s linear infinite; 
  animation: spin 2s linear infinite;
}


@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
    
</style>