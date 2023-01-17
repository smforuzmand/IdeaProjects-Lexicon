

https://grid.layoutit.com/

``` html
<div class="container">
  <div class="nav"></div>
  <div class="footer"></div>
  <div class="Menu"></div>
  <div class="main"></div>
  <div class="advertisment"></div>
</div>
```

```css
.container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "nav nav nav nav nav nav"
    "Menu main main main main advertisment"
    "Menu main main main main advertisment"
    "Menu main main main main advertisment"
    "footer footer footer footer footer footer";
}

.nav { grid-area: nav; }

.footer { grid-area: footer; }

.Menu { grid-area: Menu; }

.main { grid-area: main; }

.advertisment { grid-area: advertisment; }
```