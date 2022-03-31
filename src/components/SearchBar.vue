
<script setup lang="ts">
import FormBtn from '@/components/FormBtn.vue';
import FormInput from '@/components/FormInput.vue';

</script>

<template>
  <div class="search-bar">
    <div class="flex flex-nowrap items-center space-x-4">
      <!-- input -->
      <div>
        <FormInput></FormInput>
      </div>
      <!-- actions -->
      <div class="flex items-stretch space-x-4">
        <div>
          <button class="action-btn">
            地點
          </button>
        </div>
        <div>
          <div class="w-[1px] h-full bg-[#dee2e6]">
            <!-- vr -->
          </div>
        </div>
        <div>
          <button class="action-btn">
            職務
          </button>
        </div>
      </div>
      <!-- submit -->
      <div>
        <FormBtn>搜尋</FormBtn>
      </div>
    </div>
  </div>
</template>

<style>

.search-bar {
  @apply text-black rounded-full bg-white py-[0.7rem] px-[0.8rem];
}

.action-btn {
  @apply text-lg rounded-full py-2 px-4 hover:bg-catskill-white transition duration-300 ease-out hover:ease-in;
}

</style>