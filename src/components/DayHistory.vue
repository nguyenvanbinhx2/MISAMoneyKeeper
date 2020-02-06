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
body {
  margin: 50px;
}
#accordion .glyphicon {
  margin-right: 10px;
}
.panel-collapse > .list-group .list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
}
.panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel-collapse .list-group-item {
  border-radius: 0;
}

.panel-collapse .list-group .list-group {
  margin: 0;
  margin-top: 10px;
}
.panel-collapse .list-group-item li.list-group-item {
  margin: 0 -15px;
  border-top: 1px solid #ddd !important;
  border-bottom: 0;
  padding-left: 30px;
}
.panel-collapse .list-group-item li.list-group-item:last-child {
  padding-bottom: 0;
}

.panel-collapse div.list-group div.list-group {
  margin: 0;
}
.panel-collapse div.list-group .list-group a.list-group-item {
  border-top: 1px solid #ddd !important;
  border-bottom: 0;
  padding-left: 30px;
}
.panel-collapse .list-group-item li.list-group-item {
  border-top: 1px solid #ddd !important;
}
nav ul li{
    border-bottom: 1px solid #000;

}
</style>