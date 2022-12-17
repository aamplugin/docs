<script lang="ts">
export default {
}
</script>

<template>
  <div class="footer">
    <p class="copyrights">© 2022 VasylTech LLC. All rights reserved.</p>
  </div>
</template>

<style lang="scss">
.footer {
  padding: 40px 0 20px 0;
  position: relative;

  .footer-menu {
    list-style: none;
    margin: 10px auto 20px auto;
    display: table;
    padding: 0;

    li {
      display: table-cell;
      font-size: .7em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
    }
  }

  .copyrights {
    font-size: .6em;
    font-weight: 300;
    text-align: center;
  }
}
</style>
