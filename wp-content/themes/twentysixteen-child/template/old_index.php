<?php
/**
Template Name: Front Page1|Layout
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
        <?php

      // check if the repeater field has rows of data
      if( have_rows('home_sections') ):
        $i=1;
        // loop through the rows of data
          while ( have_rows('home_sections') ) : the_row();
            
              // display a sub field value ?>
                <section class="section-identify<?php if($i==2){echo '-opposite';}else{ /* display nothing */} ?>">
              <div class="container">
				<div class="col-md-12">
                <div class="row">
                <?php if($i==2){ ?>

                <div class="col-md-6 col-sm-6  empty">&nbsp;</div>
                  <div class="col-md-6 col-sm-6 pull-right full-width">
                    <h2><?php  the_sub_field('heading'); ?></h2>
                    <p><?php  the_sub_field('content'); ?></p>
                  </div>
                  
                <?php  } else{?>
                <div class="col-md-6 col-sm-6 pull-left full-width">
                    <h2><?php  the_sub_field('heading'); ?></h2>
                    <p><?php  the_sub_field('content'); ?></p>
                  </div>
                  <?php } ?>
                  <div class="col-md-6 col-sm-6 empty">&nbsp;</div>
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
 
  
  <section class="section-explore">
  <div class="container">
	<div class="col-md-12">
    <div class="row">
	  
      <div class="col-md-6 col-sm-6 full-width">
        <div class="row how-blocks">

        <?php

          // check if the repeater field has rows of data
          if( have_rows('first_block') ):

            // loop through the rows of data
              while ( have_rows('first_block') ) : the_row();

                  // display a sub field value
                  ?>
                  <div class="col-md-4 col-sm-4 col-xs-4">
                  <a href="<?php  the_sub_field('link'); ?>">
                    <div class="how-block <?php $heading=get_sub_field('heading');  echo strtolower($heading); ?>">
                      <h3><i data-icon="<?php  the_sub_field('data_icon'); ?>"></i><?php  the_sub_field('heading'); ?></h3>
                    </div>
                  </a>
                </div>

                  <?php 

              endwhile;

          else :

              // no rows found

          endif;

          ?>
          
         <!--  <div class="column third">
            <a href="solution/understand/index.html">
              <div class="how-block understand">
                <h3><i data-icon="k"></i>Understand</h3>
              </div>
            </a>
          </div>
          <div class="column third">
            <a href="solution/share/index.html">
              <div class="how-block share">
                <h3><i data-icon="j"></i>Share</h3>
              </div>
            </a>
          </div> -->
        </div>
        <p><?php the_field('first_block_content'); ?></p>
        <a class="btn btn-listen-stroke btn-pill-large explore-btn" href="<?php the_field('first_block_button_link'); ?>"><?php the_field('first_block_button_'); ?></a>
      </div>
	  
	  
      <div class="col-md-6 col-sm-6 empty full-width">
        &nbsp;
        <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php the_field('second_block'); ?>">
      </div>
	  
    </div>
	</div>
  </div>
  </section>
  <section class="section-elevate">
    <div class="container">
		<div class="col-md-12">
		  <div class="row">
			<figure class="inmoment-dot" data-icon="Q"></figure>
			<h2><?php the_field('section_elevate_content'); ?></h2>
			<a href="<?php the_field('section_elevate_button_link'); ?>" class="btn demo-btn"><?php the_field('section_elevate_button'); ?></a>
		  </div>
	  </div>
    </div>
  </section>
  <section class="section-success">
    <div class="container">
		<div class="row">
      <h5><?php the_field('section_success_heading'); ?></h5>
      <h2><?php the_field('section_success_sub_heading'); ?></h2>
	  
	  <div class="col-xs-12 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2">	  
      <div class="slides-container">
        <ul class="slides">
        <?php

            // check if the repeater field has rows of data
            if( have_rows('crousel') ):

              // loop through the rows of data
                while ( have_rows('crousel') ) : the_row();

                    // display a sub field value
                    ?>
                     <li>
            <p><?php  the_sub_field('content'); ?></p>
            <figure class="client-logo <?php  the_sub_field('heading'); ?>"><img src="<?php  the_sub_field('image'); ?>" alt="logo" ></figure>
          </li>
                    <?php 

                endwhile;

            else :

                // no rows found

            endif;

            ?>
         
        </ul>
      </div>
	  </div>
      <div class="slides-nav"></div>
	  </div>
    </div>
  </section>
<?php get_footer(); ?>
