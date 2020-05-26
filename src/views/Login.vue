<template>
  <div>
    <form @submit.prevent="submit">
      <input
        v-model="user.email"
        type="email"
        name="email"
        placeholder="Add a email"
      />
      <input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="password"
      />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async submit() {
      try {
        // Dispatch the login action
        await this.$store.dispatch("login", this.user);
        this.$router.push("/");
      } catch {
        this.$store.dispatch("pushNotification", {
          type: "error",
          message: "Unable to login, please check your input again",
        });
      }
    },
  },
};
</script>

<style scoped></style>
