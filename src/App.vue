<template lang="pug">
  #app(:style="{backgroundImage: 'url(./images/bg2.jpg)'}")
    b-navbar(toggleable='lg' type="dark" variant='secondary')
      b-container
        b-navbar-brand(to='/') 番茄鐘&nbsp;
         font-awesome-icon(:icon="['fa', 'stopwatch']")
        b-navbar-toggle(target='nav-collapse')
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav
            //- https://bootstrap-vue.org/docs/components/nav#comp-ref-b-nav-item
            b-nav-item(to='/list' active-class="active") 待辦&nbsp;
             font-awesome-icon(:icon="['fa', 'clipboard-list']")
            b-nav-item(to='/settings' active-class="active") 設定&nbsp;
             font-awesome-icon(:icon="['fa', 'music']")
    //- 避免元件在換頁時被銷毀
    keep-alive
      router-view
</template>
