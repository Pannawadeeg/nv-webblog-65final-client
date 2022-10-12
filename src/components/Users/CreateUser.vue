<template>
  <div class="push_right">
    <h1>Create Users</h1>
    <form v-on:submit.prevent = "createUser">
      <p class="fs-4 text">name: <input type="text" v-model="user.name" /></p>
      <p class="fs-4 text">lastname: <input type="text" v-model="user.lastname" /></p>
      <p class="fs-4 text">email: <input type="text" v-model="user.email" /></p>
      <p class="fs-4 text">password: <input type="text" v-model="user.password" /></p>
      <p class="fs-4 text"><button type="submit">create user</button></p>
           <p><button type="submit" class="btn btn-dark">OK</button>
           <button v-on:click="navigateTo('/users')" class="btn btn-dark"> BACK</button> </p>
    </form>
    <hr />
    <div>
      <p class="fs-4 text">name: {{ user.name }}</p>
      <p class="fs-4 text">lastname: {{ user.lastname }}</p>
      <p class="fs-4 text">email: {{ user.email }}</p>
      <p class="fs-4 text">password: {{ user.password }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active"
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
.push_right{
    margin-top: 100px;
    margin-left: 20px;
}
.clearfix {
  clear: left;
}
</style>
