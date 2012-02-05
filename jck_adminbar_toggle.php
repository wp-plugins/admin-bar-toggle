<?php /*
Plugin Name: JCK Admin Bar Toggle
Plugin URI: http://www.jckemp.com
Description: Hides the admin bar on the front-end by default, and adds a toggle to activate it.
Version: 1.0
Author: James Kemp
Author URI: http://www.jckemp.com
License: GPL2

Copyright 2012, James Kemp

*/

class jck_hideshow_adminbar
{
	
  ################################################
  ###                                          ###
  ###          Add Scripts & Styles            ###
  ###                                          ###
  ################################################	
  function scripts_and_styles()
  {
    if (!is_super_admin() || !is_admin_bar_showing() || is_admin())
      return;
    // Scripts
    wp_enqueue_script('jquery');
		wp_enqueue_script('jck_hs_ab_scripts', plugins_url('assets/js/scripts.js', __FILE__), 'jquery');
    // Styles
    $css = plugins_url('assets/css/style.css', __FILE__);
    wp_register_style('jck_hs_ab_styles', $css);
    wp_enqueue_style('jck_hs_ab_styles');
  }
  
  ################################################
  ###                                          ###
  ###        Add Button to Admin Bar           ###
  ###                                          ###
  ################################################	
  function add_hideshow()
  {
    global $wp_admin_bar;
    if (!is_super_admin() || !is_admin_bar_showing() || is_admin())
      return;
    $wp_admin_bar->add_menu(array(
      'id' => 'hideshow',
      'title' => __('&uarr;'),
      'href' => __('/'),
      'parent' => 'top-secondary'
    ));
  }
  
  ################################################
  ###                                          ###
  ###       Filter head to change CSS          ###
  ###                                          ###
  ################################################	
  function head_filter()
  {
    remove_action('wp_head', '_admin_bar_bump_cb');
  }
  
  ################################################
  ###                                          ###
  ###            Construct Plugin              ###
  ###                                          ###
  ################################################	
  
  /** =======================================
  
  * PHP 4 Compatible Constructor
  
  */
  function jck_hideshow_adminbar()
  {
    $this->__construct();
  }
  /**
  
  * PHP 5 Constructor
  
  */
  function __construct()
  {
    add_action('wp_before_admin_bar_render', array(
      &$this,
      'add_hideshow'
    ), 0);
    add_action('wp_enqueue_scripts', array(
      &$this,
      'scripts_and_styles'
    ));
    add_action('get_header', array(
      &$this,
      'head_filter'
    ));
  }
  /** ======================================= */
  
} // End jck_kvt Class

$jck_hideshow_adminbar = new jck_hideshow_adminbar; // Start an instance of the plugin class