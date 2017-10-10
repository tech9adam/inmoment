<?php
/**
Template Name: Voice of employee Page|Layout
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
   <img src="<?php the_field('voice_of_employee_background'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('voice_of_employee_heading'); ?></h5>
      <h1><?php the_field('voice_of_employee_subheading'); ?></h1>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
      <div class="row">
      <h2><?php the_field('voice_of_employee_bottom_content'); ?></h2>
    </div>
  </div>
</section>
<section class="section-overview">
  <div class="container">
    <div class="row">
      
      <?php the_field('voice_of_employee_holistic_content'); ?> 
    
      <div class="column half">
        <img src="<?php the_field('voice_of_employee_image'); ?>" alt="">
      </div>
    </div>
  </div>
</section>
<section class="section-gray section-complex-equation">
  <div class="container">
    <div class="row">
      <h2><?php the_field('voice_of_employee_experince_content'); ?></h2>
    </div>
  </div>
</section>
<section class="section-employee-feedback">
  <div class="container">
    <div class="row">
      <div class="column half">
        <h2><?php the_field('employee_feedback_heading'); ?></h2>
       <?php the_field('_employee_feedback_content'); ?>
      </div>
      <div class="column half">
        <img src="<?php the_field('employee_feedback_image'); ?>" alt="">
      </div>
    </div>
  </div>
</section>
<section class="section-dark section-employee-invite">
  <div class="container">
    <div class="row">
      <h2><?php the_field('inviting_employee_content'); ?></h2>
    </div>
  </div>
</section>
<section class="section-how">
  <div class="container">
    <h2 class="center"><?php the_field('inmoment_solution_heading'); ?></h2>   
    <div class="row">
    <?php

      // check if the repeater field has rows of data
      if( have_rows('inmoment_description') ):

        // loop through the rows of data
          while ( have_rows('inmoment_description') ) : the_row();

              // display a sub field value
             ?>
               <div class="column fourth">
              <img src="<?php  the_sub_field('image');  ?>" alt="">
              <h4><?php  the_sub_field('heading');  ?></h4>
              <p><?php  the_sub_field('content'); ?></p>
            </div>


              <?php 

          endwhile;

      else :

          // no rows found

      endif;

      ?>
     
    </div>
    </div>
  </section>


<?php get_footer(); ?>
