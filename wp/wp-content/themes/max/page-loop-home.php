<section id="<?php echo $post->post_name ?>" class="feature" data-type="background" data-nav="true" data-threshold="0">
	<div class="bg-image" data-type="background-image" data-speed="0.35"></div>
	<article  <?php post_class(); ?>>
		<div class="wrap">

			<h1 id="logo" data-type="sprite" data-offsetY="100" data-Xposition="50%" data-speed="-3"><?php bloginfo('name'); ?></h1>
			
			<div class="home-sm">
				<?php get_template_part('social-media', 'icons'); ?>
			</div>
			
			<h2 id="byline"><?php bloginfo('description'); ?></h2>
			
			<div class="eq small" data-type="sprite" data-offsetY="700" data-Xposition="50%" data-speed="3"></div>
			<div class="eq big" data-type="sprite" data-offsetY="650" data-Xposition="50%" data-speed="4"></div>
			<div class="eq small over" data-offsetY="500" data-Xposition="50%" data-speed="-2"></div>
			
			<nav id="access" data-type="sprite" data-offsetY="0" data-Xposition="50%" data-speed="-2">
				<?php echo make_max_menu(); ?>
			</nav>

		</div>
	</article>
</section>