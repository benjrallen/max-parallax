<section id="<?php echo $post->post_name ?>" class="feature" data-type="background" data-nav="true" data-threshold="0">
	<div class="bg-image" data-type="background-image" data-speed="0.15"></div>

	<div id="gMap"></div>

	<article  <?php post_class(); ?>>
		<div class="wrap">	
			
			<div class="contact-left">
				<h2 class="page-title">Contact Us</h2>
				<?php echo guru_make_location_list( false, false, true ); ?>
				<div class="contact-sm">
					<?php get_template_part('social-media', 'icons'); ?>
				</div>
			</div>
			
			<div id="contact-form">
				<?php echo do_shortcode('[contact-form-7 id="75" title="Contact form 1"]'); ?>
			</div>			
		</div>
	</article>
</section>