<?php
/**
 * Plugin Name:     Basetheme Blocks
 * Plugin URI:      https://github.com/timstl/basetheme-blocks
 * Description:     Gutenberg blocks for use with Basetheme
 * Author:          Tim Gieseking, timstl@gmail.com
 * Author URI:      http://timgweb.com
 * Text Domain:     basetheme-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Basetheme_Blocks
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

define( 'BTBLK_DIR', plugin_dir_path( __FILE__ ) );
define( 'BTBLK_BLOCKS_DIR', BTBLK_DIR . 'blocks/' );

require BTBLK_BLOCKS_DIR . 'pageheader-imagetext/plugin.php';
