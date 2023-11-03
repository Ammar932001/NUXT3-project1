<template>
    <div>
       Hello World {{ trustData }}
       The information related imag is {{ imgRate }}
       <img :src=imgRate alt="">
       The Rating of the User is {{ ratingData }}
       <img :src=imgTrust alt="">
    </div>
</template>



<script setup>


import { ref, onMounted } from 'vue';

const trustData = ref(null);
const imgRate = ref(null);
const error = ref(null);
const ratingData = ref(null)
const imgTrust = ref(null);

const fetchData = async () => {
  try {
    const response = await useTrust();
    trustData.value = response.data.attributes.customer;
    imgRate.value = "http://localhost:1337"+(response.data.attributes.rating.data.attributes.url);
    ratingData.value = response.data.attributes.rated;
    imgTrust.value = "http://localhost:1337"+(response.data.attributes.trustpilot.data.attributes.url);
  } catch (err) {
    error.value = err;
    console.error("Error fetching trust data:", err);
  }
};

onMounted(() => {
  fetchData();
});

</script>



<style lang="scss" scoped>

</style>