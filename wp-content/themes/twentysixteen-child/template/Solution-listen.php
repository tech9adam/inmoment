<?php
/**
Template Name: Solution Listen Page|Layout
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
    
  <section class="section-listen">
   <img src="<?php the_field('background_image'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('listen_heading'); ?></h5>
      <h1><?php the_field('listen_subheading'); ?></h1>
    </div>
  </section>
  <section class="section-intro-listen">
    <div class="container">
      <h2><?php the_field('left_section_content'); ?></h2>
      <p><?php the_field('right_section_content'); ?></p>
    </div>
  </section>
  <?php

// check if the repeater field has rows of data
if( have_rows('section_content') ):
   $i=1;
  // loop through the rows of data
    while ( have_rows('section_content') ) : the_row();
   
        // display a sub field value
        ?>

         <section class="section<?php if($i==2){ echo "-video-feedback";}else{ echo "-active-listening";} ?>">
    <div class="container">
      <div class="row">
      <?php if($i==2){ ?>
      <div class="column third">
          <img src="<?php the_sub_field('image');  ?>" class="wow fadeInLeft" data-wow-duration="0.3s" data-wow-delay="0.25s" ">
        </div>
        <?php } ?>
        <div class="column two-thirds">
        <?php if($i==2){ ?>
         <div class="push">
            <h5><?php the_sub_field('heading');  ?></h5>
            <h2><?php the_sub_field('subheading');  ?></h2>
            <p><?php the_sub_field('content');  ?></p>
            <a href="<?php the_sub_field('link');  ?>" class="btn btn-listen-stroke btn-pill-large learn-more-btn"><?php the_sub_field('link_name'); ?></a>
          </div>
          <?php }else{ ?>
          <h5><?php the_sub_field('heading');  ?></h5>
          <h2><?php the_sub_field('subheading');  ?></h2>
          <p><?php the_sub_field('content');  ?></p>
          <a href="<?php the_sub_field('link');  ?>" class="btn btn-listen-stroke btn-pill-large learn-more-btn"><?php the_sub_field('link_name'); ?></a>
          <?php }  ?>
        </div>
        <div class="column third "<?php if($i==2){ echo 'style="display: none;"' ;}else{/* display none */} ?>>
          <img src="<?php the_sub_field('image');  ?>" class=" wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" >
        </div>
      </div>
    </div>
  </section>
        <?php 
        $i++;
    endwhile;

else :

    // no rows found

endif;

?>
  <section class="section-quote">
    <div class="container">
      <h2><?php the_field('content_of_listen'); ?></h2>
    </div>
  </section>
  <section class="section-stories">
    <div class="container">
      <div class="row">
        <h5><?php the_field('invite_storied_heading'); ?></h5>
        <h2><?php the_field('invite_storied_subheading'); ?></h2>
      </div>
    
      <?php

        // check if the repeater field has rows of datarows_for_stories
        if( have_rows('all_stories') ):
          $i=1;
          // loop through the rows of data
            while ( have_rows('all_stories') ) : the_row();
             
                // display a sub field value
                 ?> 
                   <div class="row stories">
                 <?php if( have_rows('rows_for_stories') ):
        
          // loop through the rows of data
                while ( have_rows('rows_for_stories') ) : the_row();
             
                // display a sub field value
                 ?>

                 <div class="column fourth">
                  <i data-icon="<?php the_sub_field('icon'); ?>"></i>
                  <h6><?php the_sub_field('heading_'); ?></h6>
                  <p><?php the_sub_field('content'); ?></p>
                </div>
                 <?php
                
               
            endwhile;

        else :

            // no rows found

        endif;

        ?>
         </div>
       
                <?php
                
                $i++;
            endwhile;

        else :

            // no rows found

        endif;

        ?>
     
    </div>
  </section>
  <section class="section-saying">
    <div class="container">
      <div class="row">
        <div class="column half photo"><img src="<?php the_field('images_of_employee'); ?>" alt="" style="height: 522px;"></div>
        <div class="column half content">
          <h5><?php the_field('heading_of_employee'); ?></h5>
          <h2><?php the_field('subheading_of_employee'); ?></h2>
          <p><?php the_field('content_of_employee'); ?></p>
          <a href="<?php the_field('button_link'); ?>" class="btn btn-listen-stroke btn-pill-large learn-more-btn">Learn more &nbsp;»</a>
        </div>
      </div>
    </div>
  </section>
  <section class="section-tour-listen">
    <div class="container">
      <div class="row">
        <h5>Next: Understand</h5>
        <h2><?php the_field('content_of_listen_intelligence'); ?></h2>
        <a href="<?php the_field('link_of_listen'); ?>" class="tour-next" data-icon="b"></a>
      </div>
    </div>
  </section>
<?php get_footer(); ?>