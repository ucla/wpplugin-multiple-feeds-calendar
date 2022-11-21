<?php

/**
 * Plugin Name:       UCLA Multiple Feeds Calendar Plugin
 * Description:       View one or many ics feeds in a single feed filterable calendar using a Gutenberg block. This plugin depends on the ics calendar plugin: https://icscalendar.com/preview/
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ucla-multiple-feeds-calendar
 *
 * @package           create-block
 * 
 * This block depends on the ics calendar plugin: https://icscalendar.com/preview/
 */


/** Display errors during dev */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/** variables used globally */
$ucla_feeds_calendar_plugin_dir = plugin_dir_path(__FILE__);
$ucla_feeds_calendar_plugin_url = plugin_dir_url(__FILE__);
$ucla_feeds_calendar_plugin_blocks_build_dir = $ucla_feeds_calendar_plugin_dir . 'build/block-library/';
$ucla_feeds_calendar_plugin_blocks_src_dir = $ucla_feeds_calendar_plugin_dir . 'src/block-library/';
$ucla_feeds_calendar_text_domain = 'ucla-multiple-feeds-calendar';

/**
 * 
 * Register custom block category in editor for ease of locating
 * 
 * IMPORTANT: Registering the UCLA WCL Blocks category replaces the exisitng array of categories and
 * appends the existing array after the new UCLA Blocks category which places UCLA at the top
 * of the list.
 * 
 */
function ucla_misc_blocks_categories($categories, $post)
{
    global $ucla_feeds_calendar_text_domain;

    return array_merge(
        array(
            array(
                'slug' => 'ucla-misc-blocks',
                'title' => __('UCLA Miscellaneous', $ucla_feeds_calendar_text_domain),
                'icon'  => 'layout',
            ),
        ),
        $categories,

    );
}

add_filter('block_categories_all', 'ucla_misc_blocks_categories', 10, 2);


/**
 * Blocks that require PHP rendering on the front-end are registered through the block index.php. 
 */
include_once($ucla_feeds_calendar_plugin_blocks_src_dir . 'multiple-feeds-calendar/index.php');
