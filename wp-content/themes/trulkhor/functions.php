<?php

function enqueue_calendar_scripts() {

  $theme_root = get_bloginfo("template_url");

  wp_register_script("calendar-jQuery", $theme_root . "/js/jquery-core/jquery-1.4.2-ie-fix.min.js" );
  wp_enqueue_script("calendar-jQuery");

  wp_register_script("calendar-jQuery-ui", $theme_root . "/js/jquery-ui/smoothness/jquery-ui-1.8.1.custom.min.js");
  wp_enqueue_script("calendar-jQuery-ui");

  wp_register_script("calendar-colorpicker", $theme_root . "/js/colorpicker/colorpicker.js");
  wp_enqueue_script("calendar-colorpicker");  

  wp_register_script("calendar-qtip", $theme_root . "/js/jquery-qtip-1.0.0-rc3140944/jquery.qtip-1.0.js");
  wp_enqueue_script("calendar-qtip");

  wp_register_script("calendar-hashtable", $theme_root . "/js/lib/jshashtable-2.1.js");
  wp_enqueue_script("calendar-hashtable");
  
  wp_register_script("calendar-plugin", $theme_root . "/js/frontierCalendar/jquery-frontier-cal-1.3.2.min.js");
  wp_enqueue_script("calendar-plugin");
  
  wp_register_script("my-script", $theme_root . "/script.js");
  wp_enqueue_script("my-script");
  

  wp_register_style("calendar-jQuery-style", $theme_root . "/css/frontierCalendar/jquery-frontier-cal-1.3.2.css");
  wp_enqueue_style("calendar-jQuery-style");

  wp_register_style("calendar-colorpicker", $theme_root . "/css/colorpicker/colorpicker.css");
  wp_enqueue_style("calendar-colorpicker");
  
  wp_register_style("calendar-smoothness", $theme_root . "/css/jquery-ui/smoothness/jquery-ui-1.8.1.custom.css");
  wp_enqueue_style("calendar-smoothness");

/*
  wp_register_style("my-style", $theme_root . "/style.css")
  wp_enqueue_style("my-style");
*/

}

add_action ("wp_enqueue_scripts", "enqueue_calendar_scripts");

?>

