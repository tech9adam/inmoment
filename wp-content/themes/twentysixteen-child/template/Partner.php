<?php
/**
Template Name: Partner Page|Layout
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
      <h5><?php the_field('partner_page_heading'); ?></h5>
      <h1><?php the_title(); ?></h1>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
      <div class="row bottom-30">
  <div class="column two-thirds">
  <?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); 
		//
		the_content();
		//
	} // end while
} // end if
?>

   
  </div>
<!--
  <div class="column third">
    <img src="https://placehold.it/390x390">
  </div>
-->
</div>
<?php

// check if the repeater field has rows of data
if( have_rows('partner_page_paragraph') ):

 	// loop through the rows of data
    while ( have_rows('partner_page_paragraph') ) : the_row();

        // display a sub field value
       ?>
<div class="row">
  <div class="column two-thirds">
 	<h3><?php the_sub_field('heading');  ?></h3>
    <p><?php the_sub_field('content'); ?></p>

     </div>
	</div>
	<div class="row bottom-60">
	<?php

// check if the repeater field has rows of data
if( have_rows('images') ):

 	// loop through the rows of data
    while ( have_rows('images') ) : the_row();

        // display a sub field value
         ?>
  <div class="column fifth">
    <img class=" img-asset" src="<?php the_sub_field('image'); ?>">
    <h4><?php the_sub_field('images_name'); ?></h4>
  </div>
   <?php 

    endwhile;

else :

    // no rows found

endif;

?> </div>
 
        <?php 

    endwhile;

else :

    // no rows found

endif;

?>

   
  </section>

<?php get_footer(); ?>