<?php
/**
Template Name: Download PDF Video Page|Layout
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
    
  <section class="section-demo">
    <div class="container">
    <?php 
      if ( have_posts() ) {
      while ( have_posts() ) {
      the_post(); ?>
          <h5><?php the_title(); ?></h5>
      <h1><?php the_content(); ?></h1>
      <?php 
      } // end while
      } // end if
      ?>
    </div>
  </section>
  <section class="section-form">
    <div class="container">
      <div class="row">
        <div class="column half">
          <p><?php the_field('book_a_demo_left_content'); ?></p>
          <fieldset>
            <script src="https://app-ab05.marketo.com/js/forms2/js/forms2.min.js"></script>
            <form id="mktoForm_1860"></form>
            <script>MktoForms2.loadForm("//app-ab05.marketo.com", "463-JAW-587", 1860, function(form) {
              var theform = form.getFormElem();
              theform.find('style').remove();
            });</script>
          </fieldset>
        </div>
        <div class="column half empty">&nbsp;
          <img class="retina laptop-offscreen" src="<?php the_field('book_a_demo_right_image'); ?>">
        </div>
      </div>
      <div class="row">
        <hr>
      </div>
    </div>
  </section>
  <style type="text/css">
  .mktoButtonRow{
    color: #fff;
    line-height: 50px;
  }
</style>
<?php get_footer(); ?>