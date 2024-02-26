## SCSS + mixin + 类名切换

这种方式改变主题的话,用的是根据元素中属性的不一致, 使用到不一样的样式,例如
``` scss
@mixin bg_color(){
  background: $background-color-theme;
  [data-theme=theme1] & {
    background: $background-color-theme1;
  }
  [data-theme=theme2] & {
    background: $background-color-theme2;
  }
}
```

```html
<div class="box" data-theme="theme1">
  <div class="box-content">
    <p>This is a box</p>
  </div>
</div>

<div class="box" data-theme="theme2">
  <div class="box-content">
    <p>This is a box</p>
  </div>
</div>
```

```css
.box {
  @include bg_color();
}

```