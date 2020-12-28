<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <h1>Nav Bar</h1>
    <nav class="nav-bar">
        <v-spacer>
            <v-row>
                <ul>
                    <li><a href="https://masksnow.org/">National Website</a></li>
                    <li><a href="https://charity.gofundme.com/o/en/campaign/masksnow-tennessee">Donate Funds</a></li>
                    <li><a href = "mailto: distribution.make@gmail.com">Donate Materials</a></li>
                    <li><a href="https://masksnow.org/volunteer/">Volunteer</a></li>
                    <!-- <iframe name="airtable" class="airtable-embed" src="https://airtable.com/embed/shrG3kgFmeLYyoxxn?backgroundColor=yellow" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe> -->
                    <li class="airtable-embed"><a href="https://airtable.com/embed/shrG3kgFmeLYyoxxn" target="airtable">Get Masks</a></li>
                </ul>
            </v-row>
        </v-spacer>
      </nav>
</template>

<script>

export default {
  name: 'Nav',
}

</script>

<style>
.nav-bar {
    background: #153570;
    height: 20vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
}

.nav-bar ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
}

.nav-bar li {
    background: #DEC328;
    border-radius: 50px;
    padding: 0.7rem 1.7rem;
    transition: inherit;
    letter-spacing: 0.3em;
    font-family: lulo-clean-w01-one-bold,sans-serif;
    font-weight: bold;
    font-size: 19px;
    margin: 0.2rem;
}

nav li:hover:before, nav li:hover:after
{
    transform: scale(1);
}

.nav-bar a {
    text-decoration: none;
    color: #153570;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 1.8em;
    max-width: 100%;
}

.nav-bar a:hover {
    transform: scale(1.07);
}

/* .airtable-embed {
    width:"100%";
    height:"533"; 
    background: transparent; 
    border: 1px solid #ccc;
} */

</style>

