<template>
  <div>
    <h1>Create an Event</h1>
    <form>
      <input
        v-model="event.title"
        type="text"
        name="title"
        placeholder="Add a Title"
      />
      <input type="submit" value="create" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        title: ""
      }
    };
  }
};
</script>

<style scoped></style>
