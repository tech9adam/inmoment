<?php
/**
Template Name: Solution share Page|Layout
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
  <section class="section-share">
   <img src="<?php the_field('background_image'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('heading'); ?></h5>
      <h1><?php the_field('subheading'); ?></h1>
    </div>
  </section>
  <section class="section-intro-share">
    <div class="container">
      <h2><?php the_field('left_section_content'); ?></h2>
      <p><?php the_field('right_section_content'); ?></p>
    </div>
  </section>
  <section class="section-actionable">
    <div class="container">
      <div class="row">
        <h5><?php the_field('bottom_conent_heading'); ?></h5>
        <h2><?php the_field('bottom_content_subheading'); ?></h2>
      </div>
    </div>
  </section>
  <section class="section-tabs-share">
    <div class="container tabs-container tabs-tour">
      <nav>
        <ul class="tabs-nav">
        <?php

          // check if the repeater field has rows of data
          if( have_rows('tabs_tour') ):
            $selected='selected';
          $i=1;
            // loop through the rows of data
              while ( have_rows('tabs_tour') ) : the_row();

                  // display a sub field value 
                   ?>
          <li class="active">
            <a href="#0" data-content="<?php the_sub_field('data_content'); ?>" class="<?php if($selected==1 || $i==1){ echo $selected; }  ?>">
              <i data-icon="<?php the_sub_field('data_icon'); ?>"></i>
              <span><?php the_sub_field('heading'); ?></span>
            </a>
          </li>
            <?php 
            $i++;
                  $selected='';
              endwhile;

          else :

              // no rows found

          endif;

          ?>
         
        </ul>
      </nav>
      <ul class="tabs-content">
      <?php

        // check if the repeater field has rows of data
        if( have_rows('content_of_tab_tour') ):
          $selected='selected';
        $i=1;
          // loop through the rows of data
            while ( have_rows('content_of_tab_tour') ) : the_row();

                // display a sub field value
                ?>
        <li data-content="<?php the_sub_field('data_content');  ?>" class="<?php if($selected==1 || $i==1){echo $selected; } ?>">
          <div class="row">
            <div class="column half">
              <p><b><?php the_sub_field('heading');  ?></b></p>
              <p><?php the_sub_field('content');  ?></p>
            </div>
            <div class="column half">
              <img class="tab-asset " src="<?php the_sub_field('image');  ?>">
            </div>
          </div>
        </li>
         <?php
                $selected='';
                $i++;
            endwhile;

        else :

            // no rows found

        endif;

        ?>
        
      </ul>
    </div>
  </section>
  <?php

      // check if the repeater field has rows of data
      if( have_rows('integration_section_') ):
        $i=1;
        // loop through the rows of data
          while ( have_rows('integration_section_') ) : the_row();

              // display a sub field value
              ?>

  <?php if($i==2){?>
     <section class="section-quote-share">
    <div class="container">
     <h2><?php the_sub_field('content');  ?></h2>
    </div>
  </section>
   <?php }else{ ?>
  <section class="section-efactor">
    <div class="container">
   
   
      <div class="row">
        <div class="column half content">
          <h5><?php the_sub_field('heading');  ?></h5>
          <h2><?php the_sub_field('subheading');  ?></h2>
          <p><?php the_sub_field('content');  ?></p>
          <a href="<?php the_sub_field('next_button_link1');  ?>" class="btn btn-stroke btn-pill-large learn-more-btn">Learn more &nbsp;»</a>
        </div>
        <div class="column half photo"><img src="<?php the_sub_field('images'); ?>" alt="" style="height: 600px;"></div>
      </div>
      <?php } ?>
    </div>
  </section>
   <?php 
   $i++;
          endwhile;

      else :

          // no rows found

      endif;

      ?>
 <!--  <section class="section-quote-share">
    <div class="container">
      <h2>Feedback should be a powerful agent for internal change. But why stop there?</h2>
      <h2>InMoments Social Advocacy &amp; Reviews tools make it simple for customers to share their experiences with friends, family, and other customers.</h2>
    </div>
  </section> -->
    <?php

    // check if the repeater field has rows of data
    if( have_rows('share_last_section') ):
      $i=1;
      // loop through the rows of data
        while ( have_rows('share_last_section') ) : the_row();

            // display a sub field value
           ?>
            <section class="section-share-features">
            <div class="container">
              <div class="row">
                <div class="column half <?php if($i==1){echo "empty";}else{/*nothing*/} ?>" <?php if($i==2){echo "style='display:none'"; }else{/*nothing*/} ?>>
                  &nbsp;
                  <img class=" laptop-offscreen wow fadeInLeft" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                </div>
                <div class="column half">
                  <div class="push<?php if($i==2){echo "-opposite"; }else{/*nothing*/} ?>">
                    <h5><?php  the_sub_field('heading'); ?></h5>
                    <h2><?php  the_sub_field('subheading'); ?></h2>
                    <p><?php  the_sub_field('content'); ?></p>
                  </div>
                </div>
                <?php if($i==2){ ?>
                <div class="column half empty">
                &nbsp;
                <img class=" laptop-offscreen-right wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
              </div>
              <?php } ?>
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
 <?php  get_footer(); ?>