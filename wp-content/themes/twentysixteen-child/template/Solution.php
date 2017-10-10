<?php
/**
Template Name: Solution old Page|Layout
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
    
  <section class="section-solution">
   <img src="<?php the_field('background_image'); ?>" alt="solution-bg" class="img-bg-banner img-responsive">
    <div class="container">
    <div class="col-md-12">
    <div class="row">
      <h5><?php the_field('small_heading'); ?></h5>
      <h1><?php the_field('head_content'); ?></h1>
    </div>
    </div>
    </div>
  </section>
  <section class="section-intro-solution">
    <div class="container">
     <div class="col-md-12">
     <div class="row">
      <h2><?php the_field('head_left_content'); ?></h2>
      <p><?php the_field('head_right_content'); ?></p>
      </div>
    </div>
    </div>
  </section>
  <section class="section-how-quote">
    <div class="row how-pattern"></div>
    <div class="container">
     <div class="col-md-12">
      <div class="row">
        <h2><?php the_field('description'); ?></h2>
      </div>
      </div>
       <div class="col-md-12">
      <div class="row how-blocks">
      
      
        <h5><?php the_field('block_content'); ?></h5>

        <?php

        // check if the repeater field has rows of data
        if( have_rows('block_section') ):

          // loop through the rows of data
            while ( have_rows('block_section') ) : the_row();

                // display a sub field value
                 ?>
                <div class="col-md-4 col-sm-12 col-xs-12">
               
                <a href="<?php the_sub_field('link'); ?>">
                <?php $value=strtolower(get_sub_field('heading')); ?>
                  <div class="how-block <?php echo $value; ?>">
                    <h2><i data-icon="<?php the_sub_field('data_icon'); ?>"></i><?php the_sub_field('heading'); ?></h2>
                  </div>
                </a>
              
              </div>
                <?php 

            endwhile;

        else :

            // no rows found

        endif;

        ?>
        
        <!-- <div class="column third">
          <a href="understand/index.html">
            <div class="how-block understand">
              <h2><i data-icon="k"></i>Understand</h2>
            </div>
          </a>
        </div>
        <div class="column third">
          <a href="share/index.html">
            <div class="how-block share">
              <h2><i data-icon="j"></i>Share</h2>
            </div>
          </a>
        </div> -->
    
      </div>
      </div>
    </div>
  </section>
        <?php

      // check if the repeater field has rows of data
      if( have_rows('take_tour_desciption') ):
          $i=1;
        // loop through the rows of data
          while ( have_rows('take_tour_desciption') ) : the_row();
           
              // display a sub field value
             ?>
                <section class="section-take-tour<?php if($i==1){ echo '-listen';}elseif($i==2){
                  echo '-understand'; }else{ echo '-share';}
                   ?>">
                <div class="container">
                <div class="col-md-12">
                  <div class="row">
                    <div class="column half empty"<?php if($i==2){ echo 'style="display: none;"' ;}else{/* display none */} ?>>
                      &nbsp;
                      <img src="<?php  the_sub_field('image') ?>" class=" img-asset img-phone wow fadeInLeft img-responsive" data-wow-duration="0.3s" data-wow-delay="0.25s" >
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="push<?php if($i==2){echo '-opposite';}else{ /* display nothing */} ?>">
                        <i data-icon="<?php  the_sub_field('data_icon'); ?>"></i>
                        <h2> <?php the_sub_field('heading');?></h2>
                        <?php  the_sub_field('description'); ?>
                        <a href="<?php  the_sub_field('button_link'); ?>" class="btn btn<?php if($i==1){ echo '-listen';}elseif($i==2){
                  echo '-understand'; }else{ echo '-share';}
                   ?>-stroke btn-pill-large learn-more-btn"><?php  the_sub_field('button_text');?></a>
                      </div>
                    </div>
                    <?php if($i==2){ ?>
                    <div class="col-md-6 col-sm-12 empty">
                      &nbsp;
                      
                      <img class="img-responsive  img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
                    <?php } ?>
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


  <section class="section-together">
    <div class="container">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6 col-sm-12 image-cont"><img src="<?php the_field('together_section_image'); ?>" alt="" class="img-responsive"></div>
        <div class="col-md-6 col-sm-12 content">
          <h2><?php the_field('together_section_heading'); ?></h2>
          <p><?php the_field('together_section_content'); ?></p>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section class="section-tour-solution">
    <div class="container">
     <div class="col-md-12">
      <div class="row">
        <h5>Listen</h5>
        <h2><?php the_field('last_section'); ?></h2>
        <a href="<?php the_field('link'); ?>" class="tour-next" data-icon="b"></a>
      </div>
      </div>
    </div>
  </section>

<style type="text/css">
  .section-intro-solution .row > p{color: #fff;}
  .section-together .content p{color: #fff;}
  .section-together .container{padding: 0px;}
  .img-bg-banner.img-responsive{min-height: 100%;}
  .section-together .img-responsive{width: 100%;}
  /*6489*/
</style>
<?php get_footer(); ?>
