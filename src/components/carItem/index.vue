<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/img/cars-logo.png" alt="" />
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="cars-attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="car-number">
              粤B745N8
            </h4>
            <div>
              <ul class="car-electric active-li-8">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <span>约</span>
                600
                <span>KM</span>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/img/pic001.jpg" alt="" />
      </div>
      <footer>
        <a href="javascript:;" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <div class="cars-item cars-detailed" :style="{ height: height }">
      <div class="scroll">
        <h4 class="column">
          某某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img src="../../assets/img/cars-logo.png" alt="" />
            <span class="name">Mustang 2019款</span>
          </h4>
          <p class="cars-attr">新能源汽车 5座</p>
        </header>
        <img src="../../assets/img/pic001.jpg" alt="" width="100%" />
        <div class="clearfix">
          <div class="pull-left fs-24">粤B745N8</div>
          <p class="distance pull-right">
            <span>约</span>
            600
            <span>KM</span>
          </p>
        </div>
        <div class="car-electric-box">
          <div class="p-r">
            <span class="e-high" style="width:80%"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <div class="info color-main text-center">
          取车约支付12.0元停车费，实际补贴12.0元
        </div>
        <ul class="car-type-list">
          <li class="current">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
          <li>
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
          <li>
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
          <li>
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
        </ul>
        <div class="clause-dec clearfix">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="current"></i>
        </div>
      </div>
      <a href="javascript:;" class="select-car-btn">预约用车</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "carItem",
  props: {
    height: {
      type: String,
      default: "257px"
    }
  }
};
</script>

<style lang="scss" scoped>
.cars-item {
  width: 505px;
  height: 257px;
  padding: 30px 30px 0;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 24px;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  header {
    @extend %clearfix;
  }
}
.cars-logo {
  float: left;
  img {
    display: inline-block;
    height: 34px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .name {
    color: $color-main;
    font-size: 16px;
  }
}
.cars-attr {
  float: right;
  color: rgba($color: $color-main, $alpha: 0.5);
  font-size: 14px;
  line-height: 34px;
  text-align: right;
}
.cars-content {
  position: relative;
  margin: 11px 0 7px;
  @extend %clearfix;
  img {
    float: right;
    height: 120px;
  }
  .info {
    display: flex;
    position: absolute;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .car-number {
    font-size: 18px;
  }
  .car-electric {
    display: inline-block;
    padding-top: 10px;
    li {
      display: inline-block;
      width: 7px;
      height: 24px;
      margin-right: 3px;
      background-color: #e1e1e1;
      border-radius: 7px;
    }
    // li.active {
    //   @include webkitA(background, linear-gradient(#32b2fb, #108dd9));
    // }
    @for $i from 1 through 10 {
      &.active-li-#{$i} {
        li:nth-child(-n + #{$i}) {
          @include webkitA(background, linear-gradient(#32b2fb, #108dd9));
        }
      }
    }
  }
}
.distance {
  display: inline-block;
  margin-left: 10px;
  color: $color-main;
  font-size: 22px;
  font-weight: bold;
  span {
    font-size: 12px;
    font-weight: normal;
    opacity: 0.8;
  }
}
.parking-link {
  position: relative;
  display: block;
  line-height: 55px;
  border-top: 1px solid $color-main;
  font-size: 14px;
  color: $color-main;
  opacity: 0.8;
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    right: 0;
    border-top: 1px solid $color-main;
    border-right: 1px solid $color-main;
    transform: rotate(45deg);
    top: calc(50% - 5px);
  }
}
.cars-detailed {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 0;
  .scroll {
    height: 100%;
    overflow-y: auto;
  }
  .column {
    position: relative;
    padding: 26px 0 20px;
    margin-bottom: 19px;
    font-size: 20px;
    color: #34393f;
    border-bottom: 1px solid #e1e1e1;
    .close {
      display: block;
      position: absolute;
      top: 25px;
      right: 0;
      width: 26px;
      height: 26px;
      cursor: pointer;
      &::after,
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -1px;
        margin-top: -10px;
        height: 20px;
        border-left: 2px solid #999c9f;
      }
      &::before {
        @include webkit(transform, rotate(45deg));
      }
      &::after {
        @include webkit(transform, rotate(-45deg));
      }
    }
  }
  .car-electric-box {
    padding: 15px;
    margin-top: 20px;
    border-radius: 100px;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.1));
    .e-bg {
      display: block;
      height: 8px;
      border-radius: 100px;
      background-color: #e1e1e1;
    }
    .e-high {
      position: absolute;
      height: 100%;
      border-radius: 100px;
      background-color: $color-blur;
    }
  }
  .info {
    padding: 32px 0 28px 0;
  }
  .select-car-btn {
    position: absolute;
    bottom: -42px;
    left: 50%;
    margin-left: -120px;
  }
}
.car-type-list {
  li {
    height: 43px;
    padding: 0 17px 0 20px;
    margin-bottom: 15px;
    background-color: #f3f3f3;
    border-color: #f3f3f3;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    line-height: 43px;
    color: $color-main;
    &.current {
      border-color: $color-blur;
    }
  }
}
.clause-dec {
  @extend %clearfix;
  i {
    float: right;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 100px;
    background-color: #ccc;
    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 4px;
      margin: 6px 0 0 5px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      @include webkit(transform, rotate(-45deg));
    }
    &.current {
      background-color: $color-main;
    }
  }
}
</style>