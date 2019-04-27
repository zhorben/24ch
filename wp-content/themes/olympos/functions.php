<?php

/*  Register Scripts and Style */

function theme_register_scripts() {
    wp_enqueue_script( 'vue_script_manifest', esc_url( trailingslashit( get_template_directory_uri() ) . 'vue/js/manifest.js' ), array(), '1.0', true );
    wp_enqueue_script( 'vue_script_vendor', esc_url( trailingslashit( get_template_directory_uri() ) . 'vue/js/vendor.js' ), array(), '1.0', true );
    wp_enqueue_script( 'vue_script_app', esc_url( trailingslashit( get_template_directory_uri() ) . 'vue/js/app.js' ), array(), '1.0', true );

    wp_enqueue_style( 'fonts', get_template_directory_uri() . '/fonts/font.css' );
    wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/fonts/font-awesome/css/font-awesome.min.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_register_scripts', 1 );

add_action( 'wp_enqueue_scripts', function() {
 wp_deregister_style('font-awesome');
}, -1 );

/* Add menu support */
if (function_exists('add_theme_support')) {
    add_theme_support('menus');
}

/* Add post image support */
add_theme_support( 'post-thumbnails' );


/* Add custom thumbnail sizes */
if ( function_exists( 'add_image_size' ) ) {
    //add_image_size( 'custom-image-size', 500, 500, true );
}

/* Add widget support */
if ( function_exists('register_sidebar') )
    register_sidebar(array(
        'name' => 'SidebarOne',
	    'before_widget' => '<div id="%1$s" class="sidebar-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widgettitle">',
        'after_title' => '</h4>',
    ));
    
if ( function_exists('register_sidebar') )
    register_sidebar(array(
        'name' => 'SidebarTwo',
	    'before_widget' => '<div id="%1$s" class="sidebar-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widgettitle">',
        'after_title' => '</h4>',
    ));


/*  EXCERPT 
    Usage:
    
    <?php echo excerpt(100); ?>
*/

function excerpt($limit) {
    $excerpt = explode(' ', get_the_excerpt(), $limit);
    if (count($excerpt)>=$limit) {
    array_pop($excerpt);
    $excerpt = implode(" ",$excerpt).'...';
    } else {
    $excerpt = implode(" ",$excerpt);
    } 
    $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
    return $excerpt;
}

function prepare_rest($data, $post, $request){
    $_data = $data->data;

    $thumbnail_id = get_post_thumbnail_id( $post->ID );
    $thumbnaillarge = wp_get_attachment_image_src( $thumbnail_id, 'large' );

    $_data["image_url"] = $thumbnaillarge[0];
    $data->data = $_data;

    return $data;
}

add_filter('rest_prepare_post', 'prepare_rest', 10, 3);

add_action('rest_api_init', 'register_custom_fields');

function register_custom_fields() {
    register_rest_field(
            'blogs',
            'description',
            array(
                'get_callback' => 'show_fields'
            )
        );

    register_rest_field(
            'blogs',
            'thumbnail',
            array(
                'get_callback' => 'show_image'
            )
        );
}

function show_fields ($object, $field_name, $request) {
    $field_name = 'wpcf-' . $field_name;
    return get_post_meta($object['id'], $field_name, true);
}

function show_image ($object, $field_name, $request) {
    $thumbID = get_post_thumbnail_id($object['id']);
    $image = wp_get_attachment_image_src($thumbID, 'large');
    return $image[0];
}

function show_headline ($object, $field_name, $request) {
    $headline = get_the_title($object['id']);
    return $headline;
}

function show_text ($object, $field_name, $request) {
    $text = get_the_content($object['id']);
    return $text;
}



