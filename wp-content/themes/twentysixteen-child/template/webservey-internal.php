<?php 
/**
Template Name: Webservey-Internal|Layout
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */


get_header('rules'); ?>

			<div id="subheader"></div>
			<div id="content">
			<?php 
			if ( have_posts() ) {
				while ( have_posts() ) {
					the_post();
					the_content(); 
					//
					// Post Content here
					//
				} // end while
			} // end if
			?>
				
<?php get_footer('rules'); ?>