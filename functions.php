<?php
/**
 * Understrap TruWeb Child Theme functions and definitions
 *
 * @package UnderstrapChild
 */

defined( 'ABSPATH' ) || exit;

/**
 * ------------------------------------------------------
 * Remove parent theme scripts & styles
 * ------------------------------------------------------
 */
function understrap_remove_scripts() {
	wp_dequeue_style( 'understrap-styles' );
	wp_deregister_style( 'understrap-styles' );

	wp_dequeue_script( 'understrap-scripts' );
	wp_deregister_script( 'understrap-scripts' );
}
add_action( 'wp_enqueue_scripts', 'understrap_remove_scripts', 20 );

/**
 * ------------------------------------------------------
 * Enqueue child theme scripts & styles
 * ------------------------------------------------------
 */
function theme_enqueue_styles() {
	$the_theme     = wp_get_theme();
	$theme_version = $the_theme->get( 'Version' );
	$suffix        = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	// Child theme CSS
	$theme_styles = "/css/child-theme{$suffix}.css";
	$css_version  = $theme_version . '.' . filemtime( get_stylesheet_directory() . $theme_styles );
	wp_enqueue_style( 'child-understrap-styles', get_stylesheet_directory_uri() . $theme_styles, array(), $css_version );

	// jQuery
	wp_enqueue_script( 'jquery' );

	// Child theme JS
	$theme_scripts = "/js/child-theme{$suffix}.js";
	$js_version    = $theme_version . '.' . filemtime( get_stylesheet_directory() . $theme_scripts );
	wp_enqueue_script( 'child-understrap-scripts', get_stylesheet_directory_uri() . $theme_scripts, array(), $js_version, true );

	// Comment reply if needed
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

/**
 * ------------------------------------------------------
 * Child theme textdomain
 * ------------------------------------------------------
 */
function add_child_theme_textdomain() {
	load_child_theme_textdomain( 'understrap-child', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'add_child_theme_textdomain' );

/**
 * ------------------------------------------------------
 * Force Bootstrap 5 in Understrap
 * ------------------------------------------------------
 */
function understrap_default_bootstrap_version() {
	return 'bootstrap5';
}
add_filter( 'theme_mod_understrap_bootstrap_version', 'understrap_default_bootstrap_version', 20 );

/**
 * ------------------------------------------------------
 * Customizer warning JS
 * ------------------------------------------------------
 */
function understrap_child_customize_controls_js() {
	wp_enqueue_script(
		'understrap_child_customizer',
		get_stylesheet_directory_uri() . '/js/customizer-controls.js',
		array( 'customize-preview' ),
		'20130508',
		true
	);
}
add_action( 'customize_controls_enqueue_scripts', 'understrap_child_customize_controls_js' );

/**
 * Enqueue WebAwesome Pro assets.
 */
function enqueue_webawesome_assets() {
    // Enqueue the main stylesheet
    wp_enqueue_style(
        'webawesome-styles',
        get_stylesheet_directory_uri() . '/webawesome/dist/styles/webawesome.css'
    );

    // Enqueue the JavaScript loader
    wp_enqueue_script(
        'webawesome-loader',
        get_stylesheet_directory_uri() . '/webawesome/dist/webawesome.loader.js',
        array(), // No dependencies
        null,    // No version number
        true     // Load in the footer
    );
}
add_action( 'wp_enqueue_scripts', 'enqueue_webawesome_assets' );

/**
 * Add type="module" and the data-webawesome attribute to the script tag.
 */
function add_webawesome_attributes( $tag, $handle, $src ) {
    // Check if it's our specific script
    if ( 'webawesome-loader' === $handle ) {
        // Construct the base path for the data attribute
        $base_path = get_stylesheet_directory_uri() . '/webawesome/dist';
        
        // Add the necessary attributes to the script tag
        $tag = '<script type="module" src="' . esc_url( $src ) . '" data-webawesome="' . esc_attr( $base_path ) . '" id="webawesome-loader-js"></script>';
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'add_webawesome_attributes', 10, 3 );

// Allow SVG
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

  global $wp_version;
  if ( $wp_version !== '4.7.1' ) {
     return $data;
  }

  $filetype = wp_check_filetype( $filename, $mimes );

  return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
  ];

}, 10, 4 );

function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
  echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );
