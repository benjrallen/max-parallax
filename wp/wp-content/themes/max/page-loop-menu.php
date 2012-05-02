<div id="menu-3d">
	<div class="wrap">
		<h2 class="page-title"><?php the_title(); ?></h2>	
	</div>
</div>

<section id="<?php echo $post->post_name ?>" class="feature" data-type="background" data-offscroll="130" data-nav="true" data-threshold="0">
	<div class="bg-image" data-type="background-image" data-speed="1"></div>
	<article  <?php post_class(); ?>>
		<div class="wrap">	
			
			<div id="menu-wrap" class="clearfix">
			<?php
				
				$cats = guru_get_menu_objects('menu_cat');
								
				if( !empty( $cats ) ){
					global $prefix;
					
					foreach( $cats as $cat ){
						
						//make sure it is actually a category
						if( $cat->object == 'category' ) {
														
							//make a wrap for the category
							echo '<div class="cat clearfix">';
							echo	'<h4 class="menu-cat">'.$cat->title.'</h4>';
							
							//query the category
							$items = query_posts(array(
								'post_type' => $prefix.'menu_item',
								'numberposts' => -1,
								'cat' => $cat->object_id,
								'order' => 'ASC',
								'orderby' => 'menu_order title'
							));
						
							foreach( $items as $e ){
								
								$e->meta = array(
									'price' => get_post_meta( $e->ID, $prefix.'menu_price' , true )
								);
						
								//make the box
								echo 	'<div class="item">'.
											'<div class="name clearfix">'.
												'<h4 class="title">'.apply_filters('the_title', $e->post_title).'</h4>';
								
								if( !empty( $e->meta['price'] ) )
									echo		'<span class="price">'.apply_filters('the_title', $e->meta['price']).'</span>';

								echo		'</div>'.
											'<div class="content">'.apply_filters('the_content', $e->post_content).'</div>'.
										'</div>';
							}
							
							echo '</div>';
							
						}
					}
					

				}			
			
			?>
			</div>
			
		</div>
	</article>
</section>