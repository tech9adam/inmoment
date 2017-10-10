<?php
/**
Template Name: Support Page|Layout
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


 <?php //if ( get_option('permalink_structure') ) { echo 'permalinks enabled'; } ?>
<main>
  
<!--   Commented out section below with hooks to allow more control over the layout -->
  <!--
 <section class="section-listen main-banner-height">
   <img src="<?php the_field('support_background_image'); ?>" alt="solution-bg" class="img-bg-banner">
   <div class="container">
<div class="row support-top-class">
 <h5 class="support-main-h"><?php the_field('support_heading'); ?></h5>
      <h1><?php the_field('support_content'); ?></h1>
   


</div>
</div>
</section>
<section class="support banner-pad">
<div class="container">
<div class="row bottom-90">
<?php


// check if the repeater field has rows of data
if( have_rows('content_of_support') ):
$i=1;
  // loop through the rows of data
    while ( have_rows('content_of_support') ) : the_row();


        // display a sub field value
        ?>
          <div class="col-md-6 <?php if($i==3){echo "border-add"; }else{/**/} ?>">
            <div class="col-md-8 col-md-offset-2"
              <img src="" alt="">
              <h2><?php  the_sub_field('heading'); ?></h2>
              <p><?php  the_sub_field('content'); ?></p>
            </div>
          </div>


        <?php 
$i++;
    endwhile;


else :


    // no rows found


endif;


?>
</div>
</div>
</section>
-->
<!-- Added php below to pull code from main text box in admin page editor -->
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
<style type="text/css">
  .banner-pad{padding: 0px; padding-bottom: 50px}
  .section-listen {padding:0px; }
</style>
<?php get_footer(); ?>