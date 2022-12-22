<?php

/**
 * Renders the 'ucla-misc-blocks/multiple-feeds-calendar' block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function ucla_multiple_feeds_calendar_render_block($attributes, $content, $block)
{

    global $ucla_feeds_calendar_text_domain;

    /* If no feeds then prompt to add feeds */
    if (!isset($attributes['feeds'])) {
        $error_text = __('Please add feeds in the page editor.', $ucla_feeds_calendar_text_domain);
        $markup = <<<TEXT
            <div class="ucla-select-calendars__error">
                <p>{$error_text}</p>
            </div>
        TEXT;

        return $markup;
    }

    $selected_urls = [];
    foreach ($attributes['feeds'] as $i => $feed) {
        $selected_urls[] = $feed[1];
    }

    $shortcode = sprintf('[ics_calendar url="%s" format="D n/j" view="month" tz="America/Los_Angeles" eventdesc="true" location="true" organizer="true" attach="true"]', implode('|', $selected_urls));
    $shortcode = do_shortcode($shortcode);
    //echo $shortcode;

    $markup = <<<TEXT
        <div class="ucla-multiple-feeds-calendar alignwide">
            {$shortcode}
        </div>
    TEXT;

    return $markup;
}

/**
 * Register the calendar-ics-feeds block.
 *
 * @uses render_block_core_navigation()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function ucla_multiple_feeds_calendar_register_blocks()
{

    global $ucla_feeds_calendar_plugin_blocks_build_dir;
    register_block_type_from_metadata(
        $ucla_feeds_calendar_plugin_blocks_build_dir . 'multiple-feeds-calendar',
        array(
            'render_callback' => 'ucla_multiple_feeds_calendar_render_block',
        )
    );
}

add_action('init', 'ucla_multiple_feeds_calendar_register_blocks');

/**
 * 
 * enqueue stylesheets - Registering front-end styles in the block.json is not working.
 * see WP ticket: https://wordpress.org/support/topic/custom-gutenberg-block-styles-not-loading-on-frontend/
 * 
 */
function ucla_multiple_feeds_calendar_enqueue_assets()
{
    global $ucla_feeds_calendar_plugin_url;

    wp_enqueue_style('ucla-calendar-feeds-plugin-block-styles',  $ucla_feeds_calendar_plugin_url . 'assets/css/calendar-ics-feeds-view.css');
}

add_action('enqueue_block_assets', 'ucla_multiple_feeds_calendar_enqueue_assets');
