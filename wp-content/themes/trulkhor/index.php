<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one
 * of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query,
 * e.g., it puts together the home page when no home.php file exists.
 *
 */

get_header(); ?>

<div id="main-content" class="main-content">

  <div id="search" class="box small-box">
    <h2>Search for course:</h2>
    <div>
      <label for="location">Location</label>
      <input type="text" id="location" value="Prague" />
    </div>
    <div>
      <label for="open">Only Open</label>
      <input type="checkbox" id="open" />
    </div>
    <a id="do-search" href="javascript://">Search</a>
  </div>

  <div id="search-result-list" class="box small-box">
  </div>
  
  <div id="search-result-calendar" class="box high-box">
    <div id="mycal"></div>
  </div>
  
  <div id="search-result-map" class="box high-box">
  </div>
  
  <div style="clear:both;"></div>

</div><!-- #main-content -->

<?php
get_footer();
