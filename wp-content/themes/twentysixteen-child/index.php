<?php
/**
Template Name: Front Page|Layout
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
    
  <section class="section-home">
    <div class="container">
    <div class="banner-content">
      <h1><?php the_field('home_heading'); ?></h1>
      <p><?php the_field('home_content'); ?></p>
      <a href="<?php the_field('home_button_link'); ?>" class="btn btn-huge"><?php the_field('home_button'); ?></a>
    </div>
    </div>
  <div class="container-fluid">
    <video autoplay="autoplay" loop="">
      <?php

        // check if the repeater field has rows of data
        if( have_rows('home_videoes') ):
          $i=1;
          // loop through the rows of data
            while ( have_rows('home_videoes') ) : the_row();

                // display a sub field value ?>
                <?php if($i==1){ ?>
                 <source src="<?php the_sub_field('videos'); ?>" type="video/webm codecs=vp8, vorbis">
                 <?php }elseif ($i==2) { ?>
                    <source src="<?php the_sub_field('videos'); ?>"  type="video/ogg codecs=theora, vorbis">
                <?php  } else{ ?> 
                <source src="<?php the_sub_field('videos'); ?>" type="video/mp4" >

               <?php }
                
                
                
               $i++;
            endwhile;

        else :

            // no rows found

        endif;

        ?>
     
     <!--  <source src="static/videos/video-inmoment-hero.mp4" type="video/mp4">
      <source src="static/videos/video-inmoment-hero.ogg" type="video/ogg"> -->
    </video>
  
    <div class="row home-pattern"></div>
  </div>
  </section>
  <section class="two-sec-div hp-promo">
	<!--<img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/coach-ipad.png">-->
	<div class="container">
      <?php

    // check if the repeater field has rows of data
    if( have_rows('home_sections') ):
      $i=1;
      // loop through the rows of data
        while ( have_rows('home_sections') ) : the_row();

            // display a sub field value
          ?>

		<div class="col-md-6 <?php if($i==2){echo "second-sec pad-right-0";}else{echo "first-sec pad-left-0"; } ?> ">
			<div class="row">
				<div class="col-md-6">
					<img src=" <?php   the_sub_field('image'); ?>">
				</div>
				<div class="col-md-6">
					<h2> <?php   the_sub_field('heading'); ?></h2>
					<p> <?php   the_sub_field('content'); ?></p>
					<p class="view-link"><a href=" <?php   the_sub_field('link'); ?>"> <?php   the_sub_field('link_name'); ?></a></p>
				</div>
			</div>	
		</div>
    <?php 
    $i++;
        endwhile;

    else :

        // no rows found

    endif;

    ?>
	<!-- 	<div class="col-md-6 second-sec pad-right-0">
			<div class="row">
				<div class="col-md-6">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/score.png">
				</div>
				<div class="col-md-6">
					<h2>A Score is Only Part of the Story</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer dkjdk and the clouse se asdfadipiscing asdw</p>
					<p class="view-link"><a href="#">View eBook</a></p>
				</div>
			</div>
		</div> -->
	</div>
  </section>
  <section class="more-than-score">
    <div class="container">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6 col-sm-12 image-cont"><img src="<?php the_field('second_block'); ?>" alt="" class="img-responsive"></div>
        <div class="col-md-6 col-sm-12 content">
          <h2><?php the_field('first_block_heading'); ?></h2>
          <p><?php the_field('first_block_content'); ?></p>
		  <p><a href="<?php the_field('first_block_button_link'); ?>" class="btn btn-understand-stroke btn-pill-large learn-more-btn"> <?php the_field('first_block_button_'); ?></a></p>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section class="brands">
	<div class="container">
		<h3><?php the_field('brands_heading'); ?></h3>
		<ul>
    <?php

        // check if the repeater field has rows of data
        if( have_rows('first_block') ):

          // loop through the rows of data
            while ( have_rows('first_block') ) : the_row();

                // display a sub field value
                ?>
                  <li><img src="<?php the_sub_field('data_icon'); ?>"></li>
         <?php 
            endwhile;

        else :

            // no rows found

        endif;

        ?>
		
			<!-- <li><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/brand2.png"></li>
			<li><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/brand3.png"></li>
			<li><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/brand4.png"></li>
			<li><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/brand5.png"></li>
			<li><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/brand6.png"></li>
			<li><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/brand7.png"></li> -->
		</ul>
	</div>
  </section>
  
  <section>
  <h1 class="heading"><?php the_field('inmoment_differnt_heading'); ?></h1>
  </section>
    <?php

      // check if the repeater field has rows of data
      if( have_rows('inmoment_content') ):
        $i=1;
        // loop through the rows of data
          while ( have_rows('inmoment_content') ) : the_row();

              // display a sub field value
             ?>
              <section class="<?php if($i==2){echo "speed"; }elseif($i==3){echo "moment-different listen";}else{echo "moment-different"; } ?>">    
                <div class="container">
                <?php if(($i%2)==0){?>
                 <div class="col-md-6 col-sm-12 content">
                <h2><?php  the_sub_field('heading'); ?></h2>
                <p><?php  the_sub_field('content'); ?></p>
            <p><a href="<?php  the_sub_field('learn_more_link'); ?>" class="btn btn-understand-stroke btn-pill-large learn-more-btn org">Learn more »</a></p>
              </div>
              <div class="col-md-6 col-sm-12 image-cont "><img src="<?php  the_sub_field('image'); ?>" alt="" class="img-responsive"></div>

                <?php }else{ ?>
                  <div class="col-md-6 col-sm-12 image-cont big-img "><img src="<?php  the_sub_field('image'); ?>" alt="" class="img-responsive"></div>
                      <div class="col-md-6 col-sm-12 content pull-right">
                        <h2><?php  the_sub_field('heading'); ?></h2>
                        <p><?php  the_sub_field('content'); ?></p>
                    <p><a href="<?php  the_sub_field('learn_more_link'); ?>" class="btn btn-understand-stroke btn-pill-large learn-more-btn <?php if($i==3){echo "grn";} ?>">Learn more »</a></p>
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
  
  
  
  
  <!--  <section class="speed">		
	<div class="container">

        <div class="col-md-6 col-sm-12 content">
          <h2>Speed to Insight</h2>
          <p>Our implementation doesn't take forever, and we'll help you get to the bottom of your questions before your data is irrelevant. These are real-time insights delivered in the moment you need them.</p>
		  <p> <a href="#" class="btn btn-understand-stroke btn-pill-large learn-more-btn org"> Learn more » </a> </p>
        </div>
		<div class="col-md-6 col-sm-12 image-cont"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/user.jpg" alt="" class="img-responsive"></div>
	</div>	
  </section>
  
  
   <section class="moment-different listen">		
   
	<div class="container">

		<div class="col-md-6 col-sm-12 image-cont"><img src="<?php echo get_stylesheet_directory_uri(); ?>/static/img/img-ipad.png" alt="" class="img-responsive"></div>
		<div class="col-md-6 col-sm-12 content pull-right">
			<h2>We Know How to Listen</h2>
			<p>Garbage in, garbage out, right? How you listen matters, so we'll show you different ways to capture customer feedback that is useful. And because we are listening experts, we also know how to listen to our own customers. We won't sell you technology then disappear when you actually need us.</p>
			<p><a href="#" class="btn btn-understand-stroke btn-pill-large learn-more-btn grn">Learn more »</a></p>
		</div>
	</div>
	
  </section> -->
  
  
<!--   <section class="dark">
	<div class="container">
		<div class="col-sm-12">
			<h2>Ready to improve your CX? </h2>
			<p><a href="#" class="btn btn-understand-stroke">Request Demo</a></p>
		
		</div>
	</div>
  </section> -->
  
       
<?php get_footer(); ?>
