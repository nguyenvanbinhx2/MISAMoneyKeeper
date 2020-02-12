<template>
  <div class="row">
    <div class="rol-md-3">
      <div class="container border shadow">
        <div class="container">
              <nav role="navigation">
                <ul>
                  <li>
                    <a href="#">Ngay</a>
                  </li>
                  <li>
                    <a href="#">Two</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Sub-1</a>
                      </li>
                      <li>
                        <a href="#">Sub-2</a>
                      </li>
                      <li>
                        <a href="#">Sub-3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Three</a>
                  </li>
                </ul>
              </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      opening: false
    };
  },

  methods: {
    open() {
      this.opening = !this.opening;
    }
  }
};
</script>

<style>
nav ul li{
    border-bottom: 1px solid #000;

}
</style>