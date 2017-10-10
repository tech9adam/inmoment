<?php
/**
Template Name: CX Elevated EMEA Page|Layout
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
get_header();
?>

<main>
    
  <section class="section-default">
  <img src="<?php the_field('cx_elevated_emea'); ?>" alt="about-bg" class="img-bg-banner">
    <div class="container">
      <?php 
    if ( have_posts() ) {
      while ( have_posts() ) {
        the_post(); 
        ?>
         <h5><?php the_content(); ?></h5>
      <h1><?php the_title(); ?></h1>
        <?php
        //
        // Post Content here
        //
      } // end while
    } // end if
    ?>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
      <div class="row">
        <div class="column two-fifths starfish">
          <h4><?php  the_field('customer_experience_elevated_date'); ?></h4>
          <p><?php  the_field('customer_experience_elevated_content'); ?></p>
          <a class="btn btn-space-stroke btn-pill-large learn-more-btn" href="<?php  the_field('customer_experience_elevated_heading'); ?>" target="_blank">Register Now</a>
        </div>
        <div class="column three-fifths conf-description">
          <p><?php  the_field('cx_content'); ?></p>
        </div>
      </div>
      <div class="row">
        <div class="column eighth">
          &nbsp;
        </div>
        <div class="column three-fourths">
          <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
          </style>
           <div class='embed-container'>
          <?php  the_field('cx_content_description'); ?></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-speakers">
    <div class="container">
      
         <?php

          // check if the repeater field has rows of data
          if( have_rows('speaker_info') ):
            $i=1;
            // loop through the rows of data
              while ( have_rows('speaker_info') ) : the_row();

                  // display a sub field value
                  ?>
          <div class="row">
        <div class="column three-eighths nudge-right">
        <?php if($i==1){ ?>
          <h2><?php  the_sub_field('keynote_heading'); ?></h2>
          <div class="cxe-line-break">&nbsp;</div><?php } ?>
          <div class="">&nbsp;</div>
        </div>
        <div class="column fourth">
          <img src="<?php the_sub_field('image');?>" alt="Jo Causon">
        </div>
        <div class="column three-eighths bios">
          <h3><?php the_sub_field('name');?></h3>
          <h4><?php the_sub_field('position');?></h4>
          <p><?php the_sub_field('description');?></p>
        </div>
          </div>
        <?php 
        $i++;
              endwhile;

          else :

              // no rows found

          endif;

          ?>
       
    
    
    </div>
    <div class="container client-stories top-60">
      <div class="row">
        <div class="col-md-2">
          <img src="/wp-content/uploads/2017/04/cs-john-heatherington.jpg" alt="John Heatherington">
          <h3>John <br>Heatherington</h3>
          <h4>International Operations Manager, M&amp;S International</h4>
        </div>
        <div class="col-md-2">
          <img src="/wp-content/uploads/2017/05/cs-kate-eastwood.jpg" alt="Kate Eastwood">
          <h3>Kate <br>Eastwood</h3>
          <h4>Sales Director, Revolution Bars</h4>
        </div>
        <div class="col-md-2">
          <img src="/wp-content/uploads/2017/05/cs-fiona-regan-2.jpg" alt="Fiona Regan">
          <h3>Fiona <br>Regan</h3>
          <h4>People Development Director, Revolution Bars</h4>
        </div>
        <div class="col-md-2">
          <img src="/wp-content/uploads/2017/04/cs-alexa-larsson.jpg" alt="Alexa Larsson">
          <h3>Alexa <br>Larsson</h3>
          <h4>Senior Retail Operations Manager, The North Face</h4>
        </div>
        <div class="col-md-2">
          <img src="/wp-content/uploads/2017/05/cs-christine-stoddart-2.jpg" alt="Christine Stoddart">
          <h3>Christine <br>Stoddart</h3>
          <h4>Head of Customer Planning and Insight, Wilko</h4>
        </div>
        <div class="col-md-2">
          <img src="/wp-content/uploads/2017/04/cs-jami-blake.jpg" alt="Jami Blake">
          <h3>Jami <br>Blake</h3>
          <h4>Director, Voice of the Customer, Tiffany &amp; Co</h4>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-quote cxe-post-office">
    <div class="container">
      <div class="row">
        <div class="">
         <?php the_field('cxe_post_office__video'); ?>
         <p><?php the_field('cxe-post-office'); ?></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-location">
    <div class="container">
      <div class="row">
        <div class="column half nudge-right location-description">
          <h2><?php the_field('cxe_location'); ?></h2>
          <div class="cxe-line-break">&nbsp;</div>
           <p><?php the_field('c_xe_description'); ?></p>
          <a class="btn btn-space-stroke btn-pill-large learn-more-btn" href="<?php the_field('button_link'); ?>" target="_blank">Learn More</a>
        </div>
        <div class="column half">
          <a href="<?php the_field('cx_map_url'); ?>" target="_blank">
            <img src="<?php the_field('cx_map_image'); ?>" alt="Aston University">
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-quote cxe-footlocker">
    <div class="container">
      <div class="row">
        <div class="column half">
          &nbsp;
        </div>
        <div class="column half">
         <?php the_field('cxe_footlocker_video'); ?>
          <p><?php the_field('cxe_footlocker__content'); ?></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-rooms">
    <div class="container">
      <div class="row">
      <div class="column third">
          <h2>Room Reservations</h2>
          <div class="cxe-line-break">&nbsp;</div>
        </div>
      <?php

        // check if the repeater field has rows of data
        if( have_rows('room_reservation_heading') ):

          // loop through the rows of data
            while ( have_rows('room_reservation_heading') ) : the_row();

                // display a sub field value
               ?>
                <div class="column third">
                <figure><img src="<?php  the_sub_field('image'); ?>" alt=""></figure>
              </div>

                <?php 

            endwhile;

        else :

            // no rows found

        endif;

        ?>
        
     
      </div>
      <div class="row">
        <div class="column third">
          &nbsp;
        </div>
        <div class="column half">
          <p><?php the_field('content_of_room_reservatio'); ?></p>
          <a class="btn btn-space-stroke btn-pill-large learn-more-btn" href="mailto:<?php the_field('link_for_'); ?>" target="_blank">Book a Room</a>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-quote cxe-marstons">
    <div class="container">
      <div class="row">
        <div class="column three-fifths nudge-right">
         <?php the_field('cxe-marstons_content_video_'); ?>
           <p><?php the_field('cxe-marstons_content'); ?></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-agenda">
    <div class="container">
      <div class="row">
        <div class="column full">
          <h2>Agenda</h2>
          <div class="cxe-line-break" style="margin-bottom: 2.5em;">&nbsp;</div>
          <a class="btn" href="http://info.inmoment.com/rs/463-JAW-587/images/cx-elevated-emea-2017-agenda.pdf" target="_blank" style="margin-left: auto; margin-right: auto; display: block; font-weight: 700; padding: 15px; max-width: 300px; background: #f0b323; margin-bottom: 30px;">Download Full Agenda</a>
        </div>
      </div>
        <div class="row">
      <?php

      // check if the repeater field has rows of data
      if( have_rows('agenda_description') ):
        $i=1;
        // loop through the rows of data
          while ( have_rows('agenda_description') ) : the_row();

              // display a sub field value
               ?>
    
        <div class="column half <?php if($i==1){echo "right-border";}else{/**/}  ?>">
          <h4><?php the_sub_field('agenda_date'); ?></h4>
            <?php

        // check if the repeater field has rows of data
        if( have_rows('agenda_sub_description') ):

          // loop through the rows of data
            while ( have_rows('agenda_sub_description') ) : the_row();

                // display a sub field value
                ?>
          <div class="row">
            <div class="column eighth">&nbsp;</div>
            <div class="column three-eighths"><p><?php the_sub_field('date'); ?></p></div>
            <div class="column half"><p><?php the_sub_field('content'); ?></p></div>
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
    </div>
  </section>
  <section class="section-cxe-quote cxe-new-look">
    <div class="container">
      <div class="row">
        <div class="column three-fifths nudge-right">
         <?php the_field('video_link'); ?>
          <p><?php the_field('cxe_new_look_content'); ?></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-register">
    <div class="container">
      <div class="row center">
        <h2>Elevate your Customer Experience</h2>
        <div class="cxe-line-break">&nbsp;</div>
        <h4>Secure your spot now.</h4>
        <a class="btn btn-space-stroke btn-pill-large learn-more-btn" href="<?php the_field('button_link'); ?>" target="_blank"><?php the_field('button_text'); ?></a>
      </div>
    </div>
  </section></b></b>


  <?php get_footer(); ?>