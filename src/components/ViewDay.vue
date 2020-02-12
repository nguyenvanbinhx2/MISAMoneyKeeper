<template>
  <div class="container">
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              v-on:click="doThis"
            >
              <img src="../assets/newspaper.png" />Ngày
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body text-dark p-0">
            <ul class="list-child">
              <li class="list-child-item" @click.prevent="doThis">
                <div class="list-child-info ml-2" @click="show = !show">
                  <a href="#">
                    <img src="../assets/news.png" alt />
                    Ngày Hôm Nay
                  </a>
                </div>
              </li>
              <li class="list-child-item">
                <div class="list-child-info ml-2">
                  <a href="#">
                    <img src="../assets/news.png" alt />
                    Ngày Hôm Qua
                  </a>
                </div>
              </li>
              <li class="list-child-item">
                <div class="list-child-info ml-2">
                  <a href="#">
                    <img src="../assets/news.png" alt />
                    Ngày Hôm Kia
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <img src="../assets/newspaper.png" />Tuần
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body text-dark p-0">
              <ul class="list-child">
                <li class="list-child-item" @click.prevent="doThis">
                  <div class="list-child-info ml-2" @click="show = !show">
                    <a href="#">
                      <img src="../assets/news.png" alt />
                      Tuần Này
                    </a>
                  </div>
                </li>
                <li class="list-child-item">
                  <div class="list-child-info ml-2">
                    <a href="#">
                      <img src="../assets/news.png" alt />
                      Tuần Qua
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <img src="../assets/newspaper.png" />Tháng
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body text-dark p-0">
                <ul class="list-child">
                  <li class="list-child-item" @click.prevent="doThis">
                    <div class="list-child-info ml-2" @click="show = !show">
                      <a href="#">
                        <img src="../assets/news.png" alt />
                        Tháng Này
                      </a>
                    </div>
                  </li>
                  <li class="list-child-item">
                    <div class="list-child-info ml-2">
                      <a href="#">
                        <img src="../assets/news.png" alt />
                        Tháng Trước
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      isOpenDetail: false,
      show: true,
    };
  },
  methods: {
    doThis: function() {
      setTimeout(function() {
        return (this.show = false);
      }, 1000);
      return [(this.isOpenDetail = !this.isOpenDetail), (this.show = true)];
    }
  }
};
</script>

<style>
.container {
  margin-left: 0px;
  width: 300px;
  height: 500px;
}
ul li {
  margin-top: 15px;
}
ul {
  list-style-type: none;
}
</style>
