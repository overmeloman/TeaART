<script setup lang="ts">
import Button from "@/components/base/Button.vue";
import {
  getRegisterMutation,
  getLoginMutation,
  getUserDataQuery,
} from "@/queries/queriesTanStack";
import type { LoginProps, UserProps } from "@/types/propsTypes";
import { reactive, computed } from "vue";

const registerData: UserProps = reactive({
  email: "chel@mail.ru",
  name: "chel",
  password: "12384756",
  avatar:
    "https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid",
});

const loginData: LoginProps = reactive({
  email: "chel@mail.ru",
  password: "12384756",
});

const {
  isPending: registerIsPending,
  isError: registerIsError,
  error: registerError,
  isSuccess: registerIsSuccess,
  mutate: register,
} = getRegisterMutation();

const {
  isPending: loginIsPending,
  isError: loginIsError,
  error: loginError,
  isSuccess: loginIsSuccess,
  mutate: login,
} = getLoginMutation();

const { data: userData } = getUserDataQuery();
</script>

<template>
  <div class="py-[15px] flex gap-[15px]">
    <div class="flex flex-col gap-[15px] flex-[0_0_300px]">
      <h2 class="text-20-500">Registration</h2>
      <form class="flex flex-col gap-[10px]">
        <input
          type="email"
          name="email"
          v-model="registerData.email"
          placeholder="e-mail"
          class="p-[10px] border rounded-[5px]"
        />
        <input
          type="text"
          name="name"
          v-model="registerData.name"
          placeholder="name"
          class="p-[10px] border rounded-[5px]"
        />
        <input
          type="password"
          name="password"
          v-model="registerData.password"
          placeholder="password"
          class="p-[10px] border rounded-[5px]"
        />
        <input
          type="text"
          name="avatar"
          v-model="registerData.avatar"
          class="p-[10px] border rounded-[5px]"
        />
        <Button
          :title="'Register'"
          :type="'button'"
          @click="register({ newUser: registerData })"
          class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer"
        />
      </form>
      <span v-if="registerIsPending">Adding user...</span>
      <span v-else-if="registerIsError"
        >An error occurred: {{ registerError?.message }}</span
      >
      <span v-else-if="registerIsSuccess">User added!</span>
    </div>
    <div class="flex flex-col gap-[15px] flex-[0_0_300px]">
      <h2 class="text-20-500">Authorization</h2>
      <form class="flex flex-col gap-[10px]">
        <input
          type="email"
          name="email"
          v-model="loginData.email"
          placeholder="e-mail"
          class="p-[10px] border rounded-[5px]"
        />
        <input
          type="password"
          name="password"
          v-model="loginData.password"
          placeholder="password"
          class="p-[10px] border rounded-[5px]"
        />
        <Button
          :title="'Log In'"
          :type="'button'"
          @click="login({ loginData: loginData })"
          class="bg-green hover:bg-darkgreen rounded-[5px] text-15-400 text-center text-white py-[10px] px-[15px] w-[100%] cursor-pointer"
        />
      </form>
      <span v-if="loginIsPending">Log In...</span>
      <span v-else-if="loginIsError"
        >An error occurred: {{ loginError?.message }}</span
      >
      <span v-else-if="loginIsSuccess">Success!</span>
    </div>
  </div>
  <div>
    {{ userData }}
  </div>
</template>

<style scoped></style>
