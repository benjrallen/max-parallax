<section id="<?php echo $post->post_name ?>" class="feature" data-type="background" data-nav="true" data-threshold="0">
	<div class="bg-image" data-type="background-image" data-speed="0.1"></div>

	<div class="sprites">
		<div class="wrap">
			<div class="game big" data-type="sprite" data-offsetY="-400" data-Xposition="50%" data-speed="-2"></div>
			<div class="game med" data-type="sprite" data-offsetY="-100" data-Xposition="50%" data-speed="-3"></div>
			<div class="game small" data-type="sprite" data-offsetY="300" data-Xposition="50%" data-speed="-4"></div>
		</div>
	</div>
	<article data-type="sprite" data-offsetY="-190" data-speed="-3.5" <?php post_class(); ?>>
		<div class="wrap">

			<h2 class="page-title"><?php the_title(); ?></h2>
			
			<div id="events-car-wrap">
				<div id="events-car" class="clearfix">
				<?php
					global $prefix;
				
					$events = query_posts(array(
						'post_type' => $prefix.'event',
						'numberposts' => -1,
						'meta_key' => $prefix.'event_day',
						'order' => 'ASC',
						'orderby' => 'meta_value'
					));
				
					foreach( $events as $e ){
						
						$e->meta = array(
							'day' => get_post_meta( $e->ID, $prefix.'event_day' , true ),
							'time' => get_post_meta( $e->ID, $prefix.'event_time' , true )
						);
				
						//make the box
						echo 	'<div class="event-wrap">'.
									'<div class="event">'.
										'<h3 class="event-title">'.apply_filters('the_title', $e->post_title).'</h3>'.
										'<div class="meta">'.
											'<div class="date">'.mysql2date('F j l', $e->meta['day']).'</div>';
									
						if( !empty( $e->meta['time'] ) )
							echo			'<div class="time">Time: '.$e->meta['time'].'</div>';
										
						echo			'</div>'.
										'<div class="content">'.apply_filters('the_content', $e->post_content).'</div>'.
										'<div class="nav clearfix">'.
											'<a class="prev" title="Previous Event"><< Sooner</a>'.
											'<a class="next" title="Next Event">Later >></a>'.
										'</div>'.
									'</div>'.
								'</div>';
						
					}
				
				
				?>
				</div>
			</div>
		</div>
	</article>
</section>
