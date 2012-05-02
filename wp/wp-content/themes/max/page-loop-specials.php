<section id="<?php echo $post->post_name ?>" class="feature" data-type="background" data-nav="true" data-threshold="0">
	<div class="bg-image" data-type="background-image" data-speed="0.35"></div>
	<div class="sprites">
		<div class="wrap">
			<div class="money big" data-type="sprite" data-offsetY="0" data-Xposition="50%" data-speed="-6"></div>
			<div class="money med" data-type="sprite" data-offsetY="-200" data-Xposition="50%" data-speed="-3"></div>
			<div class="money small" data-type="sprite" data-offsetY="-300" data-Xposition="50%" data-speed="-2"></div>
			<div class="money smaller" data-type="sprite" data-offsetY="1100" data-Xposition="50%" data-speed="3"></div>
			<div class="money smaller one" data-type="sprite" data-offsetY="1900" data-Xposition="50%" data-speed="2.5"></div>
			<div class="money smallest" data-type="sprite" data-offsetY="1400" data-Xposition="50%" data-speed="4"></div>
			<div class="money smallest one" data-type="sprite" data-offsetY="1600" data-Xposition="50%" data-speed="2"></div>
		</div>
	</div>
	<article  <?php post_class(); ?>>
		<div class="section-content">
			<div class="wrap">
				<?php echo apply_filters('the_content', $post->post_content); ?>
			</div>
		</div>
		<div class="wrap">
			
			
			
			<div id="specials-wrap" class="clearfix">
			<?php
				global $prefix;
			
				$events = query_posts(array(
					'post_type' => $prefix.'special',
					'numberposts' => -1,
					'order' => 'ASC',
					'orderby' => 'menu_order'
				));
			
				foreach( $events as $e ){
					
					$e->meta = array(
						'name' => get_post_meta( $e->ID, $prefix.'special_name' , true )
					);
			
					//make the box
					echo 	'<div class="special">'.
								'<h4 class="day">'.apply_filters('the_title', $e->post_title).'</h4>';
					
					if( !empty( $e->meta['name'] ) )
						echo	'<h3 class="name">'.apply_filters('the_title', $e->meta['name']).'</h3>';
														
					echo		'<div class="content">'.apply_filters('the_content', $e->post_content).'</div>'.
							'</div>';
				}
			
			
			?>
			</div>
			
		</div>
	</article>
</section>

