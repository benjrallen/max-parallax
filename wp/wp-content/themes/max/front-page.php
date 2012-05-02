<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query. 
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Boilerplate
 * @since Boilerplate 1.0
 */

get_header(); ?>

<?php /*
We are going to do a pull for all the pages and 
then pick up template parts for them based on their page slugs
*/ ?>

<?php 

wp_reset_query();

$args = array(
	'post_type' => 'page',
	'posts_per_page' => -1,
	'order' => 'ASC',
	'orderby' => 'menu_order'
);

$fpLoop = new WP_Query($args);
global $max_menu;

if( $fpLoop->have_posts() ) : while ( $fpLoop->have_posts() ) : $fpLoop->the_post();
	$max_menu[] = $post;

endwhile; endif;
rewind_posts();

if( $fpLoop->have_posts() ) : while ( $fpLoop->have_posts() ) : $fpLoop->the_post();

	//print_r( $fpLoop->current_post );
	
	//special case for markup for specials section
	//if( $post->post_name == 'specials' ) :
		get_template_part('page-loop', $post->post_name);
	//else :

/*
<section id="<?php echo $post->post_name ?>" class="feature" data-type="background">
	<div class="bg-image" data-type="background-image" data-speed="-2"></div>
	<article  <?php post_class(); ?>>
		<div class="wrap">
			<?php get_template_part('page-loop', $post->post_name); ?>
		</div>
	</article>
</section>
*/

?>


<?php
	//endif;
	
//print out the fixed nav
	if( !$fpLoop->current_post )
		get_template_part('nav','primary');

endwhile; endif;


?>

<?php //get_sidebar(); ?>


<div class="clearfix"></div>

<?php get_footer(); ?>