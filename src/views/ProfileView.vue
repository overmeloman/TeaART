<script setup lang="ts">
import Button from "@/components/base/Button.vue";
</script>

<template>
  <div class="py-[15px] flex flex-col gap-[15px]">
    <div class="text-20-500">Registration</div>
    <form
      action="https://api.escuelajs.co/api/v1/users/"
      method="post"
      class="flex flex-col gap-[10px] max-w-[300px]"
    >
      <input
        type="text"
        name="name"
        placeholder="name"
        class="p-[10px] border rounded-[5px]"
      />
      <input
        type="email"
        name="email"
        placeholder="e-mail"
        class="p-[10px] border rounded-[5px]"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        class="p-[10px] border rounded-[5px]"
      />
      <input
        type="text"
        name="avatar"
        value="https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid"
        class="p-[10px] border rounded-[5px]"
      />
      <Button
        :title="'Submit'"
        :type="'submit'"
        class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer"
      />
    </form>
  </div>
</template>

<style scoped></style>
