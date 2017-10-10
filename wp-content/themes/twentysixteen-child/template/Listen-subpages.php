<?php
/**
Template Name: Listen SubPage|Layout
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
   <img src="<?php the_field('background_image'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('template_heading'); ?></h5>
      <h1><?php the_field('template_subheading') ?></h1>
    </div>
  </section>
  <section class="section-default-body" <?php if(is_page('active-listening')){echo "style='display:none;'";}else{/**/} ?>>
    <div class="container">
      <div class="row" >
      <h2><?php the_field('template_bottom_content'); ?></h2>
    </div>
  </div>
</section>
<section class="section-overview">
  <div class="container">
    <div class="row" <?php if(is_page('active-listening')){echo "style='display:none;'";}else{/**/} ?>>
      <div class="column three-fourths">
      <h2><?php the_field('uncover_buyer_heading'); ?></h2>
      </div>
    </div>
    <div class="row">
      <div class="<?php if(is_page('active-listening')){echo "column half";}else{/**/} ?>" style="-webkit-padding-before:'300px'" >
        <?php the_field('uncover_buyer_content'); ?> 
      </div>
      <div class="column half"> 
		<div class='embed-container'>
		   <div class="inner_container">
<div id="media" style="max-height: 476px; max-width: 846px;">

    	<?php the_field('second_section_video');?>
        <img src="<?php the_field('second_section_img'); ?> " alt="">
</div>
</div>
      </div>
	  
    </div>
  </div>
</section>
<section class="section-dark section-location-based">
  <div class="container">
    <div class="row">
      <h2><?php the_field('third_section_heading'); ?></h2>
      <p><?php the_field('third_section_content'); ?></p> 
    </div>
  </div>
</section>
    <?php

    // check if the repeater field has rows of data
    if( have_rows('section_parts') ):
    $i=1;
    // loop through the rows of data
    while ( have_rows('section_parts') ) : the_row();

    // display a sub field value ?>
    <?php if(is_page('active-listening')) {?>
    <section class="section<?php if($i==2){echo "-how section-inmoment-solution";}elseif($i==3){echo "-gray section-better-info";}else{echo "-improve-exp";} ?>">
    <?php }else{ ?>
    <section class="section<?php if($i==2){echo "-gray section-geofencing";}else{echo "-beacons";} ?>">
    <?php } ?>
    <div class="container">
    <div class="row">
    <?php if($i==2){ ?>
    <div class="column half">
    <h2><?php the_sub_field('heading'); ?></h2>
    <?php the_sub_field('content'); ?>
    </div>
    <?php } ?>
    <div class="column half">

    <img src="<?php the_sub_field('images'); ?>" alt="">

    </div>
    <div class="column half"<?php if($i==2){echo "style='display:none'";}else{/*echo "-beacons";*/} ?> >
    <h2><?php the_sub_field('heading'); ?></h2>
    <?php the_sub_field('content'); ?>
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

<!-- <section class="section-gray section-geofencing">
  <div class="container">
    <div class="row">
      <div class="column half">
        <h2>Geofencing</h2>
        <p>When paired with our Location-based Insights, geofencing offers a flexible and scalable solution for gathering non-buyer data. With geofencing, you can request feedback after a customer enters and leaves your retail store’s geographical location. Geofencing can be deployed quickly since there are no beacons to install and the “fence” is based off a location's address. You’re also able to set rules and configure the parameters around when to trigger a survey in order to truly customize the customer experience.</p>
      </div>
      <div class="column half">
        <img src="../../../media/original_images/img-lb-geofencing.png" alt="">
      </div>
    </div>
  </div>
</section> -->
<section <?php echo(is_page('active-listening')?'class=" section-inmoment-solution"':'class="section-how"'); ?>>
  <div class="container">
    <h2 class="center"><?php the_field('how_it_work_'); ?></h2>   
    <div class="row">
     <?php if(is_page('active-listening')) {?>
      <div class="column fifth" style="display: none;">&nbsp;</div>
      <?php }else{ ?>
      <div class="column fifth">&nbsp;</div>
        <?php } ?>
      <?php

      // check if the repeater field has rows of data
      if( have_rows('how_it_work_desc') ):

        // loop through the rows of data
          while ( have_rows('how_it_work_desc') ) : the_row();

              // display a sub field value
              ?>
               <div <?php echo(is_page('active-listening')?'class="column fourth"':'class="column fifth"'); ?>>
              <img src="<?php the_sub_field('image');  ?> " alt="">
              <h4><?php the_sub_field('heading');  ?></h4>
              <p><?php the_sub_field('content');  ?> </p>
            </div>
              <?php

          endwhile;

      else :

          // no rows found

      endif;

      ?>
     
     <!--  <div class="column fifth">
        <img src="../../../media/original_images/img-lb-notification.png" alt="">
        <p>When a customer with your downloaded app enters your location and either triggers a beacon or the geofence, a survey notification will appear on their mobile device.</p>
      </div>
      <div class="column fifth">
        <img src="../../../media/original_images/img-lb-feedback.png" alt="">
        <p>Customers are invited to share their feedback, using features including Active Listening and Video Feedback.</p>
      </div> -->
    </div>
    </div>
  </section>

<?php get_footer(); ?>
