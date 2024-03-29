<?php
/**
 * Boilerplate functions and definitions
 *
 * Sets up the theme and provides some helper functions. Some helper functions
 * are used in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * The first function, boilerplate_setup(), sets up the theme by registering support
 * for various features in WordPress, such as post thumbnails, navigation menus, and the like.
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook. The hook can be removed by using remove_action() or
 * remove_filter() and you can attach your own function to the hook.
 *
 * We can remove the parent theme's hook only after it is attached, which means we need to
 * wait until setting up the child theme:
 *
 * <code>
 * add_action( 'after_setup_theme', 'my_child_theme_setup' );
 * function my_child_theme_setup() {
 *     // We are providing our own filter for excerpt_length (or using the unfiltered value)
 *     remove_filter( 'excerpt_length', 'boilerplate_excerpt_length' );
 *     ...
 * }
 * </code>
 *
 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
 *
 * @package WordPress
 * @subpackage Boilerplate
 * @since Boilerplate 1.0
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 *
 * Used to set the width of images and content. Should be equal to the width the theme
 * is designed for, generally via the style.css stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 640;

/** Tell WordPress to run boilerplate_setup() when the 'after_setup_theme' hook is run. */
add_action( 'after_setup_theme', 'boilerplate_setup' );

if ( ! function_exists( 'boilerplate_setup' ) ):
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 *
 * To override boilerplate_setup() in a child theme, add your own boilerplate_setup to your child theme's
 * functions.php file.
 *
 * @uses add_theme_support() To add support for post thumbnails and automatic feed links.
 * @uses register_nav_menus() To add support for navigation menus.
 * @uses add_custom_background() To add support for a custom background.
 * @uses add_editor_style() To style the visual editor.
 * @uses load_theme_textdomain() For translation/localization support.
 * @uses add_custom_image_header() To add support for a custom header.
 * @uses register_default_headers() To register the default custom header images provided with the theme.
 * @uses set_post_thumbnail_size() To set a custom post thumbnail size.
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_setup() {

	// This theme styles the visual editor with editor-style.css to match the theme style.
	add_editor_style();

	// Uncomment if you choose to use post thumbnails; add the_post_thumbnail() wherever thumbnail should appear
	//add_theme_support( 'post-thumbnails' );

	// Add default posts and comments RSS feed links to head
	add_theme_support( 'automatic-feed-links' );

	// Make theme available for translation
	// Translations can be filed in the /languages/ directory
	load_theme_textdomain( 'boilerplate', TEMPLATEPATH . '/languages' );

	$locale = get_locale();
	$locale_file = TEMPLATEPATH . "/languages/$locale.php";
	if ( is_readable( $locale_file ) )
		require_once( $locale_file );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		//'primary' => __( 'Primary Navigation', 'boilerplate' ),
		'menu_cat' => __( 'Food Menu Categories', 'boilerplate' )
	) );

	// This theme allows users to set a custom background
	add_custom_background();

	// Your changeable header business starts here
	define( 'HEADER_TEXTCOLOR', '' );
	// No CSS, just IMG call. The %s is a placeholder for the theme template directory URI.
	define( 'HEADER_IMAGE', '%s/images/headers/path.jpg' );

	// The height and width of your custom header. You can hook into the theme's own filters to change these values.
	// Add a filter to boilerplate_header_image_width and boilerplate_header_image_height to change these values.
	define( 'HEADER_IMAGE_WIDTH', apply_filters( 'boilerplate_header_image_width', 940 ) );
	define( 'HEADER_IMAGE_HEIGHT', apply_filters( 'boilerplate_header_image_height', 198 ) );

	// We'll be using post thumbnails for custom header images on posts and pages.
	// We want them to be 940 pixels wide by 198 pixels tall.
	// Larger images will be auto-cropped to fit, smaller ones will be ignored. See header.php.
	set_post_thumbnail_size( HEADER_IMAGE_WIDTH, HEADER_IMAGE_HEIGHT, true );

	// Don't support text inside the header image.
	define( 'NO_HEADER_TEXT', true );

	// Add a way for the custom header to be styled in the admin panel that controls
	// custom headers. See boilerplate_admin_header_style(), below.
	add_custom_image_header( '', 'boilerplate_admin_header_style' );

	// ... and thus ends the changeable header business.

	// Default custom headers packaged with the theme. %s is a placeholder for the theme template directory URI.
	register_default_headers( array(
		'berries' => array(
			'url' => '%s/images/headers/starkers.png',
			'thumbnail_url' => '%s/images/headers/starkers-thumbnail.png',
			/* translators: header image description */
			'description' => __( 'Boilerplate', 'boilerplate' )
		)
	) );
}
endif;

if ( ! function_exists( 'boilerplate_admin_header_style' ) ) :
/**
 * Styles the header image displayed on the Appearance > Header admin panel.
 *
 * Referenced via add_custom_image_header() in boilerplate_setup().
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_admin_header_style() {
?>
<style type="text/css">
/* Shows the same border as on front end */
#headimg {
	border-bottom: 1px solid #000;
	border-top: 4px solid #000;
}
/* If NO_HEADER_TEXT is false, you would style the text with these selectors:
	#headimg #name { }
	#headimg #desc { }
*/
</style>
<?php
}
endif;

/**
 * Makes some changes to the <title> tag, by filtering the output of wp_title().
 *
 * If we have a site description and we're viewing the home page or a blog posts
 * page (when using a static front page), then we will add the site description.
 *
 * If we're viewing a search result, then we're going to recreate the title entirely.
 * We're going to add page numbers to all titles as well, to the middle of a search
 * result title and the end of all other titles.
 *
 * The site title also gets added to all titles.
 *
 * @since Twenty Ten 1.0
 *
 * @param string $title Title generated by wp_title()
 * @param string $separator The separator passed to wp_title(). Twenty Ten uses a
 * 	vertical bar, "|", as a separator in header.php.
 * @return string The new title, ready for the <title> tag.
 */
function boilerplate_filter_wp_title( $title, $separator ) {
	// Don't affect wp_title() calls in feeds.
	if ( is_feed() )
		return $title;

	// The $paged global variable contains the page number of a listing of posts.
	// The $page global variable contains the page number of a single post that is paged.
	// We'll display whichever one applies, if we're not looking at the first page.
	global $paged, $page;

	if ( is_search() ) {
		// If we're a search, let's start over:
		$title = sprintf( __( 'Search results for %s', 'boilerplate' ), '"' . get_search_query() . '"' );
		// Add a page number if we're on page 2 or more:
		if ( $paged >= 2 )
			$title .= " $separator " . sprintf( __( 'Page %s', 'boilerplate' ), $paged );
		// Add the site name to the end:
		$title .= " $separator " . get_bloginfo( 'name', 'display' );
		// We're done. Let's send the new title back to wp_title():
		return $title;
	}

	// Otherwise, let's start by adding the site name to the end:
	$title .= get_bloginfo( 'name', 'display' );

	// If we have a site description and we're on the home/front page, add the description:
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title .= " $separator " . $site_description;

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		$title .= " $separator " . sprintf( __( 'Page %s', 'boilerplate' ), max( $paged, $page ) );

	// Return the new title to wp_title():
	return $title;
}
add_filter( 'wp_title', 'boilerplate_filter_wp_title', 10, 2 );

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * To override this in a child theme, remove the filter and optionally add
 * your own function tied to the wp_page_menu_args filter hook.
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'boilerplate_page_menu_args' );

/**
 * Sets the post excerpt length to 40 characters.
 *
 * To override this length in a child theme, remove the filter and add your own
 * function tied to the excerpt_length filter hook.
 *
 * @since Twenty Ten 1.0
 * @return int
 */
function boilerplate_excerpt_length( $length ) {
	return 40;
}
add_filter( 'excerpt_length', 'boilerplate_excerpt_length' );

/**
 * Returns a "Continue Reading" link for excerpts
 *
 * @since Twenty Ten 1.0
 * @return string "Continue Reading" link
 */
function boilerplate_continue_reading_link() {
	return ' <a href="'. get_permalink() . '">' . __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'boilerplate' ) . '</a>';
}

/**
 * Replaces "[...]" (appended to automatically generated excerpts) with an ellipsis and boilerplate_continue_reading_link().
 *
 * To override this in a child theme, remove the filter and add your own
 * function tied to the excerpt_more filter hook.
 *
 * @since Twenty Ten 1.0
 * @return string An ellipsis
 */
function boilerplate_auto_excerpt_more( $more ) {
	return ' &hellip;' . boilerplate_continue_reading_link();
}
add_filter( 'excerpt_more', 'boilerplate_auto_excerpt_more' );

/**
 * Adds a pretty "Continue Reading" link to custom post excerpts.
 *
 * To override this link in a child theme, remove the filter and add your own
 * function tied to the get_the_excerpt filter hook.
 *
 * @since Twenty Ten 1.0
 * @return string Excerpt with a pretty "Continue Reading" link
 */
function boilerplate_custom_excerpt_more( $output ) {
	if ( has_excerpt() && ! is_attachment() ) {
		$output .= boilerplate_continue_reading_link();
	}
	return $output;
}
add_filter( 'get_the_excerpt', 'boilerplate_custom_excerpt_more' );

/**
 * Remove inline styles printed when the gallery shortcode is used.
 *
 * Galleries are styled by the theme in Twenty Ten's style.css.
 *
 * @since Twenty Ten 1.0
 * @return string The gallery style filter, with the styles themselves removed.
 */
function boilerplate_remove_gallery_css( $css ) {
	return preg_replace( "#<style type='text/css'>(.*?)</style>#s", '', $css );
}
add_filter( 'gallery_style', 'boilerplate_remove_gallery_css' );

if ( ! function_exists( 'boilerplate_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * To override this walker in a child theme without modifying the comments template
 * simply create your own boilerplate_comment(), and that function will be used instead.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>">
			<div class="comment-author vcard">
				<?php echo get_avatar( $comment, 40 ); ?>
				<?php printf( __( '%s <span class="says">says:</span>', 'boilerplate' ), sprintf( '<cite class="fn">%s</cite>', get_comment_author_link() ) ); ?>
			</div><!-- .comment-author .vcard -->
			<?php if ( $comment->comment_approved == '0' ) : ?>
				<em><?php _e( 'Your comment is awaiting moderation.', 'boilerplate' ); ?></em>
				<br />
			<?php endif; ?>
			<footer class="comment-meta commentmetadata"><a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
				<?php
					/* translators: 1: date, 2: time */
					printf( __( '%1$s at %2$s', 'boilerplate' ), get_comment_date(),  get_comment_time() ); ?></a><?php edit_comment_link( __( '(Edit)', 'boilerplate' ), ' ' );
				?>
			</footer><!-- .comment-meta .commentmetadata -->
			<div class="comment-body"><?php comment_text(); ?></div>
			<div class="reply">
				<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
			</div><!-- .reply -->
		</article><!-- #comment-##  -->
	<?php
			break;
		case 'pingback'  :
		case 'trackback' :
	?>
	<li class="post pingback">
		<p><?php _e( 'Pingback:', 'boilerplate' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __('(Edit)', 'boilerplate'), ' ' ); ?></p>
	<?php
			break;
	endswitch;
}
endif;

/**
 * Register widgetized areas, including two sidebars and four widget-ready columns in the footer.
 *
 * To override boilerplate_widgets_init() in a child theme, remove the action hook and add your own
 * function tied to the init hook.
 *
 * @since Twenty Ten 1.0
 * @uses register_sidebar
 */
function boilerplate_widgets_init() {
	// Area 1, located at the top of the sidebar.
	register_sidebar( array(
		'name' => __( 'Primary Widget Area', 'boilerplate' ),
		'id' => 'primary-widget-area',
		'description' => __( 'The primary widget area', 'boilerplate' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	// Area 2, located below the Primary Widget Area in the sidebar. Empty by default.
	register_sidebar( array(
		'name' => __( 'Secondary Widget Area', 'boilerplate' ),
		'id' => 'secondary-widget-area',
		'description' => __( 'The secondary widget area', 'boilerplate' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	// Area 3, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'First Footer Widget Area', 'boilerplate' ),
		'id' => 'first-footer-widget-area',
		'description' => __( 'The first footer widget area', 'boilerplate' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	// Area 4, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'Second Footer Widget Area', 'boilerplate' ),
		'id' => 'second-footer-widget-area',
		'description' => __( 'The second footer widget area', 'boilerplate' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	// Area 5, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'Third Footer Widget Area', 'boilerplate' ),
		'id' => 'third-footer-widget-area',
		'description' => __( 'The third footer widget area', 'boilerplate' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	// Area 6, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'Fourth Footer Widget Area', 'boilerplate' ),
		'id' => 'fourth-footer-widget-area',
		'description' => __( 'The fourth footer widget area', 'boilerplate' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
}
/** Register sidebars by running boilerplate_widgets_init() on the widgets_init hook. */
add_action( 'widgets_init', 'boilerplate_widgets_init' );

/**
 * Removes the default styles that are packaged with the Recent Comments widget.
 *
 * To override this in a child theme, remove the filter and optionally add your own
 * function tied to the widgets_init action hook.
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_remove_recent_comments_style() {
	global $wp_widget_factory;
	remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}
add_action( 'widgets_init', 'boilerplate_remove_recent_comments_style' );

if ( ! function_exists( 'boilerplate_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post—date/time and author.
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_posted_on() {
	printf( __( '<span class="%1$s">Posted on</span> %2$s <span class="meta-sep">by</span> %3$s', 'boilerplate' ),
		'meta-prep meta-prep-author',
		sprintf( '<a href="%1$s" title="%2$s" rel="bookmark"><span class="entry-date">%3$s</span></a>',
			get_permalink(),
			esc_attr( get_the_time() ),
			get_the_date()
		),
		sprintf( '<span class="author vcard"><a class="url fn n" href="%1$s" title="%2$s">%3$s</a></span>',
			get_author_posts_url( get_the_author_meta( 'ID' ) ),
			sprintf( esc_attr__( 'View all posts by %s', 'boilerplate' ), get_the_author() ),
			get_the_author()
		)
	);
}
endif;

if ( ! function_exists( 'boilerplate_posted_in' ) ) :
/**
 * Prints HTML with meta information for the current post (category, tags and permalink).
 *
 * @since Twenty Ten 1.0
 */
function boilerplate_posted_in() {
	// Retrieves tag list of current post, separated by commas.
	$tag_list = get_the_tag_list( '', ', ' );
	if ( $tag_list ) {
		$posted_in = __( 'This entry was posted in %1$s and tagged %2$s. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'boilerplate' );
	} elseif ( is_object_in_taxonomy( get_post_type(), 'category' ) ) {
		$posted_in = __( 'This entry was posted in %1$s. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'boilerplate' );
	} else {
		$posted_in = __( 'Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'boilerplate' );
	}
	// Prints the string, replacing the placeholders.
	printf(
		$posted_in,
		get_the_category_list( ', ' ),
		$tag_list,
		get_permalink(),
		the_title_attribute( 'echo=0' )
	);
}
endif;

/*	Begin Boilerplate */

	// remove version info from head and feeds (http://digwp.com/2009/07/remove-wordpress-version-number/)
		function boilerplate_complete_version_removal() {
			return '';
		}
		add_filter('the_generator', 'boilerplate_complete_version_removal');
/*	End Boilerplate */

// add category nicenames in body and post class
	function boilerplate_category_id_class($classes) {
	    global $post;
	    foreach((get_the_category($post->ID)) as $category)
	        $classes[] = $category->category_nicename;
	        return $classes;
	}
	add_filter('post_class', 'boilerplate_category_id_class');
	add_filter('body_class', 'boilerplate_category_id_class');

// change Search Form input type from "text" to "search" and add placeholder text
	function boilerplate_search_form ( $form ) {
		$form = '<form role="search" method="get" id="searchform" action="' . home_url( '/' ) . '" >
		<div><label class="screen-reader-text" for="s">' . __('Search for:') . '</label>
		<input type="search" placeholder="Search for..." value="' . get_search_query() . '" name="s" id="s" />
		<input type="submit" id="searchsubmit" value="'. esc_attr__('Search') .'" />
		</div>
		</form>';
		return $form;
	}
	add_filter( 'get_search_form', 'boilerplate_search_form' );

// added per WP upload process request
if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
}


/** BEGIN GuRu Theme Specific Functions **/

global $prefix;
$prefix = 'max_';

/** WE LOAD IN OUR MODERNIZR AND JQUERY SCRIPTS OURSELVES
 *		Modernizr.load in header.php controls all the asynchronous loading
 */
function guru_deregister_scripts(){
	
	if ( !is_admin() ) {
		wp_deregister_script( 'ieshiv' ); // get rid of IEShiv if it somehow got called too (IEShiv is included in Modernizr)
		wp_deregister_script( 'modernizr' ); // get rid of any native Modernizr
		wp_deregister_script( 'jquery' ); // get rid of WP's jQuery
		
		/**
		 *  we RARELY use commenting on our wordpress sites.
		 *  add these lines to keep the associated javascript from loading
		 *  and to remove the comments feed link from the <head>
		 **/
		wp_dequeue_script('comment-reply');
		wp_deregister_script('comment-reply');
	}
}
add_action('init', 'guru_deregister_scripts');

remove_action( 'wp_head', 'feed_links', 2 );
add_action('wp_head', 'addBackPostFeed');
function addBackPostFeed() {
    echo '<link rel="alternate" type="application/rss+xml" title="RSS 2.0 Feed"    href="'.get_bloginfo('rss2_url').'" />';
}


/*
function flag_content_more_link($link) { 
	$link = '<a href="'.get_permalink().'" class="orange flag page-read-more" title="Read More">Read More</a>';
	return $link;
}
add_filter('the_content_more_link', 'flag_content_more_link');
*/

//register secondary thumbnail image, using multiple-post-thumbnail plugin
if (class_exists('MultiPostThumbnails')) {
	new MultiPostThumbnails(array(
		'label' => 'Front Page Banner',
		'id' => 'fp-banner',
		'post_type' => 'page'
		)
	);
}

//add image sizes
add_image_size( 'page-thumb', 314, 314, false );
add_image_size( 'project-thumb', 180, 120, true );
add_image_size( 'banner', 707, 371, true );


//add page excerpts if necessary
//add_post_type_support( 'page', 'excerpt' );

//to fix wp-nav-menu seperators
function nav_menu_first_last( $items ) {
	$position = strrpos($items, 'class="menu-item', -1);
	$items=substr_replace($items, 'menu-item-last ', $position+7, 0);
	$position = strpos($items, 'class="menu-item');
	$items=substr_replace($items, 'menu-item-first ', $position+7, 0);
	return $items;
}
add_filter( 'wp_nav_menu_items', 'nav_menu_first_last' );


//to add slug of item to classes for each nav menu item
function slug_nav_class( $classes, $item ){
	//$slug = get_page( $item->object_id )->post_name;
		
	$classes[] = get_page( $item->object_id )->post_name;
	
	//$slug = null;
	
	return $classes;
}
add_filter( 'nav_menu_css_class', 'slug_nav_class', 10, 2 ); // 10 is priority, 2 is the accepted number of args to pass to the function.  opens up $item in this case.


function content($limit = 55) {
  $content = explode(' ', strip_tags(get_the_content()), $limit);
  if (count($content)>=$limit) {
    array_pop($content);
    $content = implode(" ",$content).'...';
  } else {
    $content = implode(" ",$content);
  }	
  $content = preg_replace('/\[.+\]/','', $content);
  $content = apply_filters('the_content', $content); 
  $content = str_replace(']]>', ']]&gt;', $content);
  return $content;
}

//
//	Meta Box (Class included in new post type plugin)
//
if( class_exists( 'MetaBoxTemplate' )){
	$pageMeta = new MetaBoxTemplate(array(
					'page' => 'page',
					'id' => 'page-subtitle',
					'title' => 'Page Subtitle',
					'context' => 'normal',
					'priority' => 'core',
					'fields' => array(
						array(
							'name' => 'Subtitle: ',
							'id' => 'tcf_page_subtitle',
							'type' => 'text',
							'std' => ''
						)
					)
				));
				
}

//used for single template next and previous navigation
function guru_post_nav(){ 
  ?>
    <nav id="nav-below" class="navigation">
    	<div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'boilerplate' ) . '</span> %title' ); ?></div>
    	<div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'boilerplate' ) . '</span>' ); ?></div>
    	<div class="clearfix"></div>
    </nav>
  <?php 
}



// only install post type if class present
if( class_exists( 'NewPostType' )){

	NewPostType::instance()->add(array(
		'post_type' => $prefix.'event',
		'post_type_name' => 'Events',
		'args' => array(
			'rewrite' => array( 'slug' => 'events' ),
			'has_archive' => false,
			'public' => false,
			'supports' => array( 'title', 'editor' )
		)
	))->add_meta_box(array(
		'id' => 'event_date',
		'title' => 'Event Date:',
		'context' => 'normal',
		'priority' => 'default',
		'fields' => array(
			array(
				'name' => 'Day: ',
				'id' => $prefix . 'event_day',
				'type' => 'text',
				'std' => ''
			),
			array(
				'name' => 'Time: ',
				'id' => $prefix . 'event_time',
				'type' => 'text',
				'std' => ''
			)
		)	
	));
	
	
	NewPostType::instance()->add(array(
		'post_type' => $prefix.'special',
		'post_type_name' => 'Specials',
		'args' => array(
			'rewrite' => array( 'slug' => 'specials' ),
			'has_archive' => false,
			'public' => false,
			'supports' => array( 'title', 'editor', 'page-attributes' )
		)
	))->add_meta_box(array(
		'id' => 'specials_meta',
		'title' => 'Special Info:',
		'context' => 'normal',
		'priority' => 'default',
		'fields' => array(
			array(
				'name' => 'Name of Special: ',
				'id' => $prefix . 'special_name',
				'type' => 'text',
				'std' => ''
			)
		)	
	));


	NewPostType::instance()->add(array(
		'post_type' => $prefix.'menu_item',
		'post_type_name' => 'Menu Items',
		'args' => array(
			'rewrite' => array( 'slug' => 'menu-items' ),
			'has_archive' => false,
			'public' => false,
			'supports' => array( 'title', 'editor', 'page-attributes' ),
			'taxonomies' => array('category')
		)
	))->add_meta_box(array(
		'id' => 'item_price',
		'title' => 'Menu Item Info:',
		'context' => 'normal',
		'priority' => 'default',
		'fields' => array(
			array(
				'name' => 'Item Price: (shows exactly as you type it)',
				'id' => $prefix . 'menu_price',
				'type' => 'text',
				'std' => ''
			)
		)	
	));


    NewPostType::instance()->add(array(
		'post_type' => $prefix.'location',
		'post_type_name' => 'Locations',
		'args' => array(
		    'rewrite' => array( 'slug' => 'locations' ),
		    'public' => false,
		    'has_archive' => false,
		    'supports' => array( 'title', 'thumbnail', 'page-attributes' )
		)
    ))->add_meta_box(array(
		'id' => 'location_details',
		'title' => 'Location Information:',
		'context' => 'normal',
		'priority' => 'default',
		'fields' => array(
		    array(
		        'name' => 'Address: ',
		        'id' => $prefix . 'location_address',
		        'type' => 'textarea',
		        'std' => ''
		    ),
		    array(
		         'name' => 'Email: ',
		         'id' => $prefix . 'location_email',
		         'type' => 'text',
		         'std' => ''
		    ),
		    array(
		        'name' => 'Phone: ',
		        'id' => $prefix . 'location_phone',
		        'type' => 'text',
		        'std' => ''
		    ),
		    array(
		        'name' => 'Secondary Phone: ',
		        'id' => $prefix . 'location_secondary_phone',
		        'type' => 'text',
		        'std' => ''
		    ),
		    array(
		        'name' => 'Fax: ',
		        'id' => $prefix . 'location_fax',
		        'type' => 'text',
		        'std' => ''
		    ),
		    array(
		        'name' => 'Override Center Lat: ',
		        'id' => $prefix . 'override_lat',
		        'type' => 'text',
		        'std' => ''
		    ),
		    array(
		        'name' => 'Override Center Lng: ',
		        'id' => $prefix . 'override_lng',
		        'type' => 'text',
		        'std' => ''
		    ),
		    array(
		        'name' => 'In Browse Menu: ',
		        'id' => $prefix . 'location_in_browse_menu',
		        'type' => 'checkbox',
		        'std' => ''
		    )
		)
    ));


}



	//filter the dasboard event columns to show the event meta
	add_filter( 'manage_'.$prefix.'event_posts_columns', 'set_event_columns' );
	add_filter( 'manage_'.$prefix.'event_posts_custom_column', 'custom_meta_columns', 10, 2 );
	
	//column names use the same id as the custom post met in the meta box
	function set_event_columns($columns){
		global $prefix;
		unset( $columns['date'] );
		return	array_merge( $columns, 
					array(
						$prefix . 'event_day' => __('Event Day'),
						$prefix . 'event_time' => __('Event Time')
						//'date' => __('Date')
					)
				);
	}

	//filter the dasboard specials columns to show the specials meta
	add_filter( 'manage_'.$prefix.'special_posts_columns', 'set_special_columns' );
	add_filter( 'manage_'.$prefix.'special_posts_custom_column', 'custom_meta_columns', 10, 2 );
	
	//column names use the same id as the custom post met in the meta box
	function set_special_columns($columns){
		global $prefix;
		unset( $columns['date'] );
		return	array_merge( $columns, 
					array(
						$prefix . 'special_name' => __('Name of Special')
						//'date' => __('Date')
					)
				);
	}
	
	//for making custom meta columns in admin loop
	function custom_meta_columns( $column, $post_id ){
		//otherwise,
		//since it uses the same id as the custom post meta in the meta box, it makes for super easy getting
		echo get_post_meta( $post_id , $column , true );
		return;
	}



    /** LOAD AN ADMIN ONLOAD SCRIPT TO WORK WITH MAP LOCATION SELECT BOX **/
	if (is_admin() && $pagenow=='post-new.php' OR $pagenow=='post.php')
	    add_action('admin_enqueue_scripts', 'load_max_admin_script');
	
	function load_max_admin_script(){
					
		echo 	'<script type="text/javascript">'.
					'var GuruAdmin = GuruAdmin || {};'.
					'GuruAdmin.Url = "'.get_bloginfo('url').'";'.
					'GuruAdmin.TemplateDirectory = "'.get_bloginfo('template_directory').'";'.
				'</script>';
		
		$siteurl = get_bloginfo('template_directory');
		wp_deregister_script('admin-onload');
		wp_register_script('admin-onload', $siteurl . '/js/admin-onload.js', array('jquery-ui-datepicker'), '0.0.1');
		wp_enqueue_script('admin-onload');
		wp_enqueue_style('jquery.ui.theme', $siteurl . '/js/smoothness/jquery-ui-1.8.18.custom.css');
	}



/*
	//THIS ENABLES PAGINATION ON THE CUSTOM TAXONOMY TEMPLATES
	//http://wordpress.org/support/topic/custom-types-category-pagination-404
	//changed his is_category() to is_tax()
	add_action( 'parse_query','changept' );
	function changept() {
		global $prefix;
		if( is_tax() && !is_admin() ){
			set_query_var( 'post_type', array( 'post', $prefix.'attraction', $prefix.'event' ) );
		}
		return;
	}
*/

  //WP Pages
  function guru_pagination($pages = '', $range = 3){ 
    $showitems = ($range * 2)+1;
    global $paged; 
    
    if(empty($paged)) 
      $paged = 1;
    
    if($pages == '') {
      global $wp_query;
      $pages = $wp_query->max_num_pages; 
      if(!$pages){ 
        $pages = 1; 
      } 
    }
    if(1 != $pages){ 
      echo "<div class=\"pagination\"><span class=\"text\">Page ".$paged." of ".$pages."</span>";
      
      if($paged > 2 && $paged > $range+1 && $showitems < $pages) 
        echo "<a href='".get_pagenum_link(1)."' class=\"first\">&laquo; First</a>";
   
      if($paged > 1 && $showitems < $pages) 
        echo "<a href='".get_pagenum_link($paged - 1)."' class=\"prev\">&lsaquo; Previous</a>";
   
      for ($i=1; $i <= $pages; $i++){ 
        if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )){ 
          echo ($paged == $i) ? 
            "<span class=\"current\">".$i."</span>":
            "<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
        } 
      } 
      if ($paged < $pages && $showitems < $pages) 
        echo "<a href=\"".get_pagenum_link($paged + 1)."\" class=\"next\">Next &rsaquo;</a>";
   
      if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) 
        echo "<a href='".get_pagenum_link($pages)."' class=\"last\">Last &raquo;</a>";
      
      echo "</div>"; 
    }
    //always clearfix
    echo '<div class="clearfix"></div>';
  }

	
	//set up with page loop
	global $max_menu;
	$max_menu = array();

	//used to return a menu by menu name
	function guru_get_menu_objects( $menu_name ){		
		if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {

			$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
			$menu = wp_get_nav_menu_items( $menu->term_id );
			
			return ( !empty( $menu ) ? $menu : false );
			
		}
		return false;
	}

	function make_max_menu(){
		
		global $max_menu;
		
		$block = '';
		
		if ( !empty( $max_menu ) ) {
		
			global $prefix;
		    	      
			$block .= '<div class="menu clearfix">';
	    	
	    	$ct = 0;
	    	$tot = count( $max_menu );
	    	
	      	foreach( $max_menu as $item ){
	      		//$pageID = $item->object_id;
				//$page = get_post( $pageID );
				$title = apply_filters('the_title', $item->post_title);
				
				$block .= 	'<div class="menu-item'.($ct == 0 ? ' first' : ($ct == $tot - 1 ? ' last' : '')).'" data-id="'.$item->post_name.'">'.
								'<a href="#'.$item->post_name.'" title="'.$title.'">'.$title.'</a>'.
							'</div>';
				
				$ct++;
				
	      	}//end foreach menu_items
	
			$block .= '</div>';
		}	
		
		return $block;
	}

	//locations can be used multiple times on a page, so stash them if they are gotten
	global $guru_locations;
	$guru_locations = null;

	//fetch the locations for use later
	function guru_get_locations(){
		global $guru_locations;
		global $prefix;
	
		if( !$guru_locations ){
			$guru_locations = get_posts(array(
				'post_type' => $prefix.'location',
				'numberposts' => -1,
				'order' => 'ASC',
				'orderby' => 'menu_order title'
			));

			foreach( $guru_locations as $loc ){								
				$loc->meta = array(
					'address'			=> get_post_meta( $loc->ID, $prefix .'location_address', true ),
					'email' 			=> get_post_meta( $loc->ID, $prefix .'location_email', true ),
					'phone' 			=> get_post_meta( $loc->ID, $prefix .'location_phone', true ),
					'secondary_phone' 	=> get_post_meta( $loc->ID, $prefix .'location_secondary_phone', true ),
					'fax'				=> get_post_meta( $loc->ID, $prefix .'location_fax', true ),
					'center_lat'		=> get_post_meta( $loc->ID, $prefix .'override_lat', true ),
					'center_lng'		=> get_post_meta( $loc->ID, $prefix .'override_lng', true ),
					'in_menu'			=> get_post_meta( $loc->ID, $prefix .'location_in_browse_menu', true ),
				);
			}
		}

		return ( !empty($guru_locations) ? $guru_locations : false );
	}
	//makes the menu, $in_menu looks through the location_meta
	function guru_make_location_list( $in_menu = false, $include_icon = false, $address_before_phone = false ){
		
		$block = '';
		
		if( $locations = guru_get_locations() ){
			
			$block .= '<div class="locationList">';
			
			
			$contactPage = 34; //id for contact-us page
			$contactLink = ( $contactPage ? get_permalink( $contactPage ) : '' );

			
			foreach( $locations as $loc ){
				if( !$in_menu || ( $in_menu && $loc->meta['in_menu'] ) ){
					//print_r( $loc );
					//echo '<br /><br />';
					
					$meta = $loc->meta;
					
					$block .= '<div class="locationItem" location-data=\''.json_encode( $loc->meta ).'\'>';
					
					if( $include_icon )
						$block .= '<div class="icon"></div>'.
									'<div class="loc">';
						
						
							$block .= '<a class="locationLink longname">'.apply_filters('the_title', $loc->post_title).'</a>';
						
						if($address_before_phone && !empty($meta['address']))
							$block .= '<a href="'.$contactLink.'"  class="locationAddress">'.apply_filters( 'the_content', $meta['address'] ).'</a>';	

						if(!empty($meta['phone']))
							$block .= '<a href="tel:'.$meta['phone'].'" class="locationPhone">'.apply_filters( 'the_title', $meta['phone']).'</a>';
						
						if(!empty($meta['secondary_phone']))
							$block .= '<a href="tel:'.$meta['secondary_phone'].'" class="locationPhone secondary">'.apply_filters( 'the_title', $meta['secondary_phone']).'</a>';
	
						if(!empty($meta['fax']))
							$block .= '<span class="locationFax">'.$meta['fax'].'&nbsp;&nbsp;(fax)</span>';
						
						if(!empty($meta['email']))
							$block .= '<a href="mailto:'.$meta['email'].'" class="locationEmail">'.apply_filters( 'the_title', $meta['email']).'</a>';
						
						if(!$address_before_phone && !empty($meta['address']))
							$block .= '<a href="'.$contactLink.'"  class="locationAddress">'.apply_filters( 'the_content', $meta['address'] ).'</a>';	


					if( $include_icon )
						$block .= '</div>';

					$block .= '</div>';

				}
			}
			
			$block .= 	'<div class="clearfix"></div>';	
			
			$block .= '</div>';
		}
		
		return $block;
	}


/** END GuRu Theme Specific Functions **/

?>
