<?php
/**
Template Name: Understand subPage|Layout
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
   <img src="<?php the_field('explore_background_image'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('explor_page_heading'); ?></h5>
      <h1><?php the_field('explore_page_subheading'); ?></h1>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
      <div class="row">
      <h2><?php the_field('explore_page_content'); ?></h2>
    </div>
  </div>
</section>
<section class="section-overview">
  <div class="container">
    <div class="row">
      <div class="column sixth">&nbsp;</div>
      <div class="column two-thirds center">
      <p><?php the_field('inmoment_heading'); ?></p>
      </div>
    </div>
    <div class="row">
      <div class="column sixth">&nbsp;</div>
      <div class="column two-thirds">
        <img src="<?php the_field('inmoment_image'); ?>" alt="">
      </div>
    </div>
  </div>
</section>
<section class="section-gray">
  <div class="container">
  <?php

      // check if the repeater field has rows of data
      if( have_rows('instant_insight_desc') ):

        // loop through the rows of data
          while ( have_rows('instant_insight_desc') ) : the_row();

              // display a sub field value
             ?>
              <div class="row insights">
              <div class="column third">
                <img src="<?php  the_sub_field('image'); ?>" alt="">
              </div>
              <div class="column half">
                <h2><?php  the_sub_field('heading'); ?></h2>
                <p><?php  the_sub_field('content'); ?></p>
              </div>
            </div>

              <?php 

          endwhile;

      else :

          // no rows found

      endif;

      ?>
    
   <!--  <div class="row sources">
      <div class="column third">
        <img src="../../../media/original_images/img-explore-sources.png" alt="">
      </div>
      <div class="column half">
        <h2>Comments from all sources in one location</h2>
        <p>Your customers leave their feedback in a variety of channels. InMoment Explore lets you easily search all sources of customer feedback at once—voice, web, video, and social.</p>
      </div>
    </div>
    <div class="row data-exploration">
      <div class="column third">
        <img src="../../../media/original_images/img-explore-data-exploration.png" alt="">
      </div>
      <div class="column half">
        <h2>DIY data exploration</h2>
        <p>Slice and dice data by sentiment, customer segment, topic, word, or phrase to get results tailored to the issues you care about.</p>
      </div>
    </div> -->
  </div>
</section>
<section class="section-results">
  <div class="container">
    <div class="row">
      <div class="column half">
        <h2><?php the_field('timely_and_relevant_heading'); ?></h2>
        <p><?php the_field('timely_and_relevant_content'); ?></p>
      </div>
      <div class="column half">
        <img src="<?php the_field('timely_and_relevant_image'); ?>" alt="">
      </div>
    </div>
    </div>
  </section>

<?php get_footer(); ?>
