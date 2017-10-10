<?php
/**
Template Name: Footer Menu Template Page|Layout
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

get_header(); ?>

<main>
    
  <section class="section-default">
    <div class="container">
      <h5><?php the_field('template_heading'); ?></h5>
      <h1><?php the_title(); ?></h1>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
     <?php 
		
			while ( have_posts() ) {
				the_post(); ?>
				
				<?php the_content();// Post Content here ?>
				<?php //
			} // end while
		
		?>
		
    </div>
  </section>
<?php get_footer(); ?>