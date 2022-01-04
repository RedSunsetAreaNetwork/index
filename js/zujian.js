const app = Vue.createApp({})

// 网站服务
app.component('webs', {
  props: ['icons', 'color', 'name', 'link', 'info', 'about'],
  template: `          
              <div class="mdui-col-md-4 mdui-m-t-2 mdui-col-sm-6">
                <a  v-bind:href="link" style="color:#666666;text-decoration:none;">
                <div class="mdui-card mdui-typo">
                <div class="mdui-card-primary">
                <li class="mdui-list-item mdui-ripple">
                <div class="mdui-list-item-avatar" :class="color"><i class="mdui-icon material-icons mdui-text-color-white">{{ icons }}</i></div>
                <div class="mdui-list-item-content">
                  <div class="mdui-list-item-title">{{ name }}</div>
                  <div class="mdui-list-item-text mdui-list-item-one-line" data-translatable>{{ about }}</div>
                </div>
                </li>
                </div>
                <div class="mdui-card-actions" :class="color">
                <div class="mdui-btn mdui-text-color-white-disabled">{{ info }}</div>
              <button class="mdui-btn mdui-btn-icon mdui-float-right"><i class="mdui-icon material-icons mdui-text-color-white">arrow_forward</i></button>
            </a>
            </div>
          </div>`
})


const app2 = Vue.createApp({})

// 友情链接
app2.component('links', {
  props: ['img', 'name', 'about', 'link', 'target'],
  template: `
  <div class="mdui-col-md-4">
    <ul class="mdui-list">
        <a v-bind:href="link">
            <div class="mdui-card" style="border-radius: 10px !important;">
                <div class="mdui-card-media">
                    <li class="mdui-list-item mdui-ripple">
                        <div class="mdui-list-item-avatar">
                            <img v-bind:src="img" width="1" height="1" layout="responsive"></img>
                        </div>
                        <div class="mdui-list-item-content">
                            <div class="mdui-list-item-title">{{ name }}</div>
                            <div class="mdui-list-item-text mdui-list-item-one-line">
                                {{ about }}
                            </div>
                        </div>
                        <span v-html="target"></span>
                        <button class="mdui-btn mdui-btn-icon mdui-float-right"><i
                                class="mdui-icon material-icons">arrow_forward</i></button>
                    </li>
                </div>
            </div>
        </a>
    </ul>
</div>
`
})



// 成员介绍应用
const app3 = Vue.createApp({})

// 定义组件
app3.component('mens', {
  props: ['头像', '昵称', '签名', '一句话', '简介1', '简介2', '简介3', '能力1', '能力2', '能力3', '程度1', '程度2', '程度3',],
  template: `
  <div class="mdui-card-content">
    <div class="mdui-card-header">
      <img class="mdui-card-header-avatar" v-bind:src="头像" layout="responsive" height="1" width="1"></img>
      <div class="mdui-card-header-title">{{ 昵称 }}</div>
      <div class="mdui-card-header-subtitle">{{ 签名 }}</div>
    </div>
    <div class="mdui-row">
      <div class="mdui-col-xs-12 mdui-col-sm-8">
        <div class="mdui-chip">
          <span class="mdui-chip-icon mdui-color-theme-accent"><i class="mdui-icon material-icons">info_outline</i></span>
          <span class="mdui-chip-title">简介</span>
        </div>
        <br>
        <div class="mdui-typo">
          <blockquote>
            <p>{{ 一句话 }}</p>
            <footer>{{ 昵称 }}</footer>
          </blockquote>
          <ul>
            <li>{{ 简介1 }}</li>
            <li>{{ 简介2 }}</li>
            <li>{{ 简介3 }}</li>
          </ul>
        </div>
      </div>
      <div class="mdui-col-xs-12 mdui-col-sm-4">
        <div class="mdui-chip">
          <span class="mdui-chip-icon mdui-color-theme-accent"><i class="mdui-icon material-icons">pie_chart</i></span>
          <span class="mdui-chip-title">能力</span>
        </div><br>
        {{ 能力1 }}
        <div class="mdui-progress">
          <div class="mdui-progress-determinate mdui-color-red" v-bind:style="程度1">
          </div>
        </div>
        {{ 能力2 }}
        <div class="mdui-progress">
          <div class="mdui-progress-determinate mdui-color-orange-900"  v-bind:style="程度2">
          </div>
        </div>
        {{ 能力3 }}
        <div class="mdui-progress">
          <div class="mdui-progress-determinate mdui-color-indigo" v-bind:style="程度3">
          </div>
        </div>
      </div>
    </div>
  </div>`
})

const app4 = Vue.createApp({})

// 历程组件
app4.component('lcs', {
  props: ['事件', '图标', '图标颜色', '项目', '时间',],
  template: `          
            <m-timeline-item>
            <div slot="title" class="mdui-text-color-theme-text">{{ 事件 }}</div>
            <div slot="icon"><i class="mdui-icon material-icons" v-bind:class="图标颜色">{{ 图标 }}</i>
            </div>
            <m-card class="mdui-card">
              {{ 项目 }} <br />于 <code>{{ 时间 }}</code>
            </m-card>
          </m-timeline-item>`
})



app.mount('#web') //我们的服务组件
app2.mount('#link') //友情链接组件
app3.mount('#men') //成员介绍组件
app4.mount('#lc') //历程组件
