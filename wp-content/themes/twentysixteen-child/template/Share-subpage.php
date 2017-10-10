<?php
/**
Template Name: Share subPage|Layout
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
   <img src="<?php the_field('resolve_background_page'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('resolve_headding'); ?></h5>
      <h1><?php the_field('resolve_subheading'); ?></h1>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
      <div class="row">
      <div class="column three-eighths">
        <h2><?php the_field('resolve_bottom_left_content'); ?></h2>
      </div>
      <div class="column five-eighths">
        <p><?php the_field('resolve_bottom_right_content'); ?></p>
      </div>
    </div>
  </div>
</section>
<section class="section-overview">
  <div class="container">
    <div class="row">
      <div class="column five-sixths">
      <h2><?php the_field('resolve_mangmt'); ?></h2>
      </div>
    </div>
    <?php

      // check if the repeater field has rows of data
        if( have_rows('resolve_management_content') ):

          // loop through the rows of data
            while ( have_rows('resolve_management_content') ) : the_row();

                // display a sub field value
                 ?>
                 <div class="row">
                  <div class="column half">
                    <h4><?php the_sub_field('heading'); ?></h4>
                    <p><?php the_sub_field('content'); ?></p>
                  </div>
                  <div class="column half">
                    <h4><?php the_sub_field('heading_2'); ?></h4>
                    <p><?php the_sub_field('content_2'); ?></p>
                  </div>
                </div>

                <?php 

            endwhile;

        else :

            // no rows found

        endif;

        ?>
   
   <!--  <div class="row">
      <div class="column half">
        <h4>Enable quick resolution</h4>
        <p>Real-time alerts, via mobile push notifications, text, email, and dashboards help you address problems immediately to turn negative experiences into positive ones.</p>
      </div>
      <div class="column half">
        <h4>Receive guidance on prioritization and recommendations</h4>
        <p>Prioritized case lists let you know which issue to address first, depending on how long the case has been open; the staff member handling the case can also choose to escalate it and move it to the top of the list if necessary.</p>
      </div>
    </div> -->
  </div>
</section>
<section class="section-gray section-org-change">
  <div class="container">
    <div class="row">
      <div class="column sixth">&nbsp;</div>
      <div class="column two-thirds center">
        <h2><?php the_field('empower_organizational_change'); ?></h2>
        <p><?php the_field('empower_organizational_change_content'); ?></p>
      </div>
    </div>
    <div class="row">
      <div class="column sixth">&nbsp;</div>
      <div class="column two-thirds">
        <img src="<?php the_field('empower_organizational_change_image'); ?>" alt="">
      </div>
    </div>
  </div>
</section>

<?php

    // check if the repeater field has rows of data
    if( have_rows('resolve_desc') ):

      // loop through the rows of data
        while ( have_rows('resolve_desc') ) : the_row();

            // display a sub field value
             ?>

            <section class="section-emp-perspective">
            <div class="container">
              <div class="row">
                <div class="column half">
                  <h2><?php the_sub_field('heading'); ?></h2>
                  <p><?php the_sub_field('content'); ?></p>
                </div>
                <div class="column half">
                  <img src="<?php the_sub_field('image'); ?>" alt="">
                </div>
              </div>
            </div>
          </section>
            <?php

        endwhile;

    else :

        // no rows found

    endif;

    ?>

<!-- <section class="section-gray section-root-cause">
  <div class="container">
    <div class="row">
      <div class="column half">
        <img src="../../../media/original_images/img-resolve-root-cause.png" alt="">
      </div>
      <div class="column half">
        <h2>Integrate CRM data</h2>
        <p>Knowing your customers is the first step toward creating a positive brand experience. Resolve integrates with your CRM data to ensure you have a holistic picture of who your customer is, when, where, and how they've interacted with your brand, and a way to contact them to resolve outstanding issues.</p>
      </div>
    </div>
  </div>
</section>   -->
<section class="section-how">
  <div class="container">
    <h2 class="center"><?php the_field('how_to_works_heading'); ?></h2>   
    <div class="row">
    <?php

      // check if the repeater field has rows of data
      if( have_rows('how_to_work_desc') ):

        // loop through the rows of data
          while ( have_rows('how_to_work_desc') ) : the_row();

              // display a sub field value
               ?>
              <div class="column fourth">
              <img src="<?php the_sub_field('image'); ?>" alt="">
              <p><?php the_sub_field('content'); ?></p>
            </div>

              <?php 

          endwhile;

      else :

          // no rows found

      endif;

      ?>
      
    <!--   <div class="column fourth">
        <img src="../../../media/original_images/img-resolve-analyze.png" alt="">
        <p>The customer’s feedback is analyzed using InMoment’s advanced analytics. If a negative experience has occurred, a case is created and prioritized.</p>
      </div>
      <div class="column fourth">
        <img src="../../../media/original_images/img-resolve-escalate.png" alt="">
        <p>Managers and employees can see the history of the issue, resolve it, and record their own feedback. Employees can also escalate the case to the correct manager.</p>
      </div>
      <div class="column fourth">
        <img src="../../../media/original_images/img-resolve-managers.png" alt="">
        <p>Managers can view closed cases to provide coaching and identify common themes throughout the business.</p>
      </div> -->
    </div>
    </div>
  </section>



<?php get_footer(); ?>
