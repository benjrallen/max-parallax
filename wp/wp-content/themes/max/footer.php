<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content
 * after.  Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage Boilerplate
 * @since Boilerplate 1.0
 */
?>

			<section id="subfooter" class="feature" data-type="background" data-threshold="0">
				<div class="bg-image" data-type="background-image" data-speed="0.3"></div>
				<article id="group">
					<div class="wrap">
						<h2 class="ox"><span class="icon"></span><span class="text">Blue Ox Dining Group</span></h2>
					</div>
					<div class="partners">
						<div class="wrap">
							<h2 class="place"><a href="" class="joe" title="Joe Momma's Pizza">Joe Momma's Pizza</a></h2>
							<h2 class="place"><a href="" class="boom" title="Boomtown Tees">Boomtown Tees</a></h2>
							<h2 class="place"><a href="" class="archer" title="Archer Market Groceries">Archer Market Groceries</a></h2>
							<h2 class="place"><a href="" class="phoenix" title="The Phoenix Coffee House">The Phoenix Coffee House</a></h2>
							<h2 class="place"><a href="" class="max" title="The Max Retropub">The Max Retropub</a></h2>
							<h2 class="place"><a href="" class="blues" title="Back Alley Blues BBQ">Back Alley Blues BBQ</a></h2>
						</div>
					</div>
				</article>
			</section>
	
			<footer id="footer" role="contentinfo">
				<div class="wrap clearfix">
					<?php
						$fDate = '&copy; 2012';
						if ( date('Y') != '2012' ) $fDate = $fDate.' - '.date('Y');
					?>
					<span class="foot-left"><span>Copyright <?php echo $fDate; ?></span><span class="hyph"> - </span><span><?php bloginfo('name'); ?>. </span><span>All rights reserved.</span></span>
					<span class="foot-right"><span class="text">Site by:</span><a href="http://www.gurustugroup.com" id="guruLink" title="GuRuStu. Branding, Marketing & Web Design." target="_blank">GuRuStu Group</a></span>
				</div>
			</footer>

		</div><?php /* ?>#main<?php */ ?>

<?php /*?>
						
		<footer id="footer" role="contentinfo">
				<div class="wrap">
					<?php
						$fDate = '&copy; 2012';
						if ( date('Y') != '2012' ) $fDate = $fDate.' - '.date('Y');
					?>
					<span class="foot-left"><span>Copyright <?php echo $fDate; ?></span><span class="hyph"> - </span><span><?php bloginfo('name'); ?>. </span><span>All Rights Reserved.</span></span>
					<span class="foot-right">Site by <a href="http://www.gurustugroup.com" id="guruLink" title="GuRuStu. Branding, Marketing & Web Design." target="_blank">GuRuStu Group</a></span>
					<div class="clearfix"></div>
				</div>
		</footer><!-- footer -->

		<?php get_template_part('nav','footer'); ?>

<?php */ ?>

<?php
	/* Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */
	wp_footer();
?>
	</body>
</html>