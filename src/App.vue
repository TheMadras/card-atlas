<template>
  <div id="app">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
    </head>

    <b-navbar :sticky="true" toggleable="lg" type="dark" variant="info" class="bg-dark">
      <b-navbar-brand><router-link class="navbar-brand" to="/">Card Atlas</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item active-class="active" to="/" exact>
            Home
          </b-nav-item>
          <b-nav-item active-class="active" to="/atlas">
            Atlas
          </b-nav-item>
          <b-nav-item active-class="active" to="/about">
            About
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
    <footer class="footer bg-dark">
      <p>
        Contact me on <a href="https://github.com/TheMadras/card-atlas">GitHub</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #b84901;
    flex-shrink: 0;
    border-radius: .1em;
    padding-top: .5em;
    padding-bottom: .5em;
    margin-top: .5em;
}

.footer p {
  color: #f7f7f7;
  margin: auto;
  text-align: center;
}

</style>
