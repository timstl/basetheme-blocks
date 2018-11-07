<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package basetheme-blocks
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function header_imagetext_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'header-imagetext/index.js';
	wp_register_script(
		'header-imagetext-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'header-imagetext/editor.css';
	wp_register_style(
		'header-imagetext-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'header-imagetext/style.css';
	wp_register_style(
		'header-imagetext-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'basetheme-blocks/header-imagetext', array(
		'editor_script' => 'header-imagetext-block-editor',
		'editor_style'  => 'header-imagetext-block-editor',
		'style'         => 'header-imagetext-block',
	) );
}
add_action( 'init', 'header_imagetext_block_init' );
