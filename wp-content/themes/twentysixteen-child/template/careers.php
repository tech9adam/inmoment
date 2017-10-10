<?php
/*
Template Name: Careers
*/
get_header(); ?>
<main>
<section class="section-solution banner" >
   <img src="<?php the_field('banner_background_image'); ?>" alt="solution-bg" class="img-bg-banner img-responsive">
    <div class="container-fluid">
    <div class="col-md-12 banner-inmoment-text">
    <div class="row">
      <h5><?php the_field('small_banner_heading'); ?></h5>
      <h1 class="Software-hading"><?php the_field('main_banner_heading'); ?></h1>
	  <a href="<?php the_field('banner_button_link'); ?>"><button class="inmomentapply"><?php the_field('banner_button'); ?></button></a>
    </div>
    </div>
	<div class="row home-pattern"></div>
    </div>
  </section>



<section class="westrivewrap">
<div class="container">
<div class="row">
<div class="col-sm-6 col-sm-offset-3 ">
<h2><?php the_field('first_section_heading'); ?></h2>
<p><?php the_field('first_section_subheading'); ?></p>
</div>
</div>
</div>
</section>

<section class="weseriouswrap">
<div class="container">
<div class="row">
<div class="col-sm-12">
<h2><?php the_field('video_section_heading'); ?></h2>
<video autoplay="autoplay" loop="">
                                       <source src="<?php the_field('video_section_mp4_link'); ?>" type="video/webm codecs=vp8, vorbis">
                                                     <source src="<?php the_field('video_section_mp4_link'); ?>" type="video/ogg codecs=theora, vorbis">

                <source src="<?php the_field('video_section_mp4_link'); ?>" type="video/mp4">


     <!--  <source src="static/videos/video-inmoment-hero.mp4" type="video/mp4">
      <source src="static/videos/video-inmoment-hero.ogg" type="video/ogg"> -->
    </video>
</div>
</div>
</div>
</section>
<section class="weareglobwrap">
<div class="container">
<h2><?php the_field('third_section_heading'); ?></h2>
<span></span>
<div>

<!--
<div class="col-sm-4">
<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/unitedglob.png" alt="unstates"/>
<p>United states</p>
</div>
<div class="col-sm-4">
<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/cnadaglob.png" alt="cnada"/>
<p>Canada</p>
</div>
<div class="col-sm-4">
<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/unkingdomglob.png" alt="unkindom"/>
<p>United kingdom</p>
</div> -->

      <?php

        // check if the repeater field has rows of data
        if( have_rows('third_section_content') ):

          // loop through the rows of data
            while ( have_rows('third_section_content') ) : the_row();

              $image = get_sub_field('country_image');
                // display a sub field value
                 ?>
              <div class="col-sm-4">
              <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
              <p><?php the_sub_field('country_text'); ?></p>
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



<section class="comeworkwrap">
<div class="container">
<h2><?php the_field('fourth_section_heading'); ?></h2>
<a href="<?php the_field('fourth_section_button_link'); ?>"><button><?php the_field('fourth_section_button_text'); ?></button></a>
</div>
</section>

<?php get_footer(); ?>
