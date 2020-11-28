<template lang="pug">
 #app
  b-navbar(toggleable='lg' type='dark' variant='info')
    b-container
      b-navbar-brand(href='#') 番茄鐘
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item(href='#') 待辦
          b-nav-item(href='#') 設定
</template>
