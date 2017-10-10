<?php
/**
Template Name: CX Elevated Page|Layout
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
   <img src="<?php the_field('header_image'); ?>" alt="about-bg" class="img-bg-banner">
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
        <div class="column five-eighths nudge-right">
          <h2><?php  the_field('customer_experience_elevated_heading'); ?></h2>
          <div class="cxe-line-break">&nbsp;</div>
          <h4><?php  the_field('customer_experience_elevated_date'); ?></h4>
          <p><?php  the_field('customer_experience_elevated_content'); ?></p>
        </div>
        <div class="column three-eighths">
          <img class="img-asset-opposite wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_field('customer_experience_elevated_image'); ?>" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe17-description">
    <div class="container">
      <div class="row">
        <div class="column three-eighths nudge-right">
          <h3 style="font-family: 'Gotham A', 'Gotham B', Gotham, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif!important;">Analyze. Act. <br /><strong>Ascend.</strong></h3>
          <p class="starfish"><?php  the_field('cx_content_description'); ?>
          </p>
          <a class="btn btn-space-stroke btn-pill-large learn-more-btn" href="<?php  the_field('cx_booking_link'); ?>" target="_blank">Register Now</a>
        </div>
        <div class="column five-eighths conf-description">
          <p><?php  the_field('cx_content'); ?></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-speakers">
    <div class="container">
      <div class="">
        <div class="column three-eighths nudge-right">
          <h2><?php  the_field('keynote_'); ?></h2>
          <div class="cxe-line-break">&nbsp;</div>
        </div>
        <div class="column five-eighths">
        <?php

          // check if the repeater field has rows of data
          if( have_rows('speaker_info') ):

            // loop through the rows of data
              while ( have_rows('speaker_info') ) : the_row();

                  // display a sub field value
                  ?>

                   <div class="row bottom-60">
                    <div class="column third">
                      <img src="<?php the_sub_field('image');?>" alt="Dan Pink">
                    </div>
                    <div class="column two-thirds">
                      <div class="bios">
                        <h3 style="margin-top: 0;"><?php the_sub_field('name');?></h3>
                        <h4><?php the_sub_field('position');?></h4>
                        <p><?php the_sub_field('description');?></p>
                      </div>
                    </div>
                  </div>
                  <?php 

              endwhile;

          else :

              // no rows found

          endif;

          ?>
       
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-speakers" style="background-color: #f6f7f9;">
    <div class="container">
      <div class="row">
        <div class="column three-eighths nudge-right">
          <h2 style="margin-top: 0;">Executive Track</h2>
          <div class="cxe-line-break">&nbsp;</div>
        </div>
        <div class="column five-eighths">
          <div class="column third">
            <div class="row bottom-60">
              <img src="/wp-content/uploads/2017/03/victoria-bough.png" alt="Victoria Bough" style="max-width: 210px; margin-bottom: 15px;">
              <div class="bios" style="padding-right: 15px;">
                <h3>Victoria Bough</h3>
                <h4>McKinsey &amp; Company</h4>
                <p>Victoria leads McKinsey&rsquo;s customer experience solutions portfolio.  In this role, she manages McKinsey&rsquo;s proprietary journey benchmark solution and its alliances with technology partners that implement measurement systems during customer experience transformation engagements.</p>
              </div>
            </div>
          </div>
          <div class="column third">
            <div class="row">
              <img src="/wp-content/uploads/2017/03/graham-tutton.png" alt="Graham Tutton" style="max-width: 210px; margin-bottom: 15px;">
              <div class="bios" style="padding-right: 15px;">
                <h3>Graham Tutton</h3>
                <h4>Comcast</h4>
                <p>Graham leads Comcast&rsquo;s Customer Insights group, providing the organization detailed customer and employee intelligence to define, prioritize and manage strategic and tactical enhancements to the Comcast Customer Experience.</p>
              </div>
            </div>
          </div>
          <div class="column third">
            <div class="row bottom-60">
              <img src="/wp-content/uploads/2017/03/jon-atkin.png" alt="Jon Atkin" style="max-width: 210px; margin-bottom: 15px;">
              <div class="bios" style="padding-right: 15px;">
                <h3>Jon Atkin</h3>
                <h4>Ipsos Loyalty</h4>
                <p>Jon is a leader in Ipsos Loyalty&rsquo;s customer experience management team, helping clients design, implement and manage programs that drive their CX strategy. His main area of focus is supporting executives to embed programs for lasting change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-location">
    <div class="container">
      <div class="row">
        <div class="column three-eighths">
          <a href="<?php the_field('cx_map_url'); ?>" target="_blank">
            <img src="<?php the_field('cx_map_image'); ?>" alt="">
          </a>
        </div>
        <div class="column five-eighths location-description">
          <h2><?php the_field('cxe_location'); ?></h2>
         <?php the_field('c_xe_description'); ?>
          <a class="btn btn-stroke btn-pill-large learn-more-btn" href="https://reservations.travelclick.com/4650?groupID=1640209&hotelID=4650#/guestsandrooms" target="_blank">Room Reservations</a>
        </div>
      </div>
    </div>
  </section>
  <section class="section-cxe-agenda">
    <div class="container">
      <div class="row center">
        <h2>Agenda</h2>
        <a href="http://info.inmoment.com/rs/463-JAW-587/images/2017_CXEAgenda_WEB.pdf" target="_blank" class="btn btn-small" style="color: #fff; background: #f0b323; padding: 0 15px; line-height: 35px;"> Download full agenda</a>
        <a href="http://info.inmoment.com/rs/463-JAW-587/images/2017_CXEAgenda_ExecTrack_WEB.pdf" target="_blank" class="btn btn-small" style="color: #fff; background: #f0b323; padding: 0 15px; line-height: 35px;"> Download Executive Track agenda</a>
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

               <div class="column fourth agenda-column <?php if($i==2){echo "border-left border-right"; }elseif($i==3){echo "border-right"; }else{/**/} ?>">
          <div class="row center">
            <h3 ><?php the_sub_field('agenda_date'); ?></h3>
          </div>
         
          <?php

        // check if the repeater field has rows of data
        if( have_rows('agenda_sub_description') ):

          // loop through the rows of data
            while ( have_rows('agenda_sub_description') ) : the_row();

                // display a sub field value
                ?>

                  <div class="row">
            <div class="column third">
              <p class="time"><?php the_sub_field('date'); ?></p>
            </div>
            <div class="column two-thirds">
              <h5 class='meal'><?php the_sub_field('content'); ?></h5>
            </div>
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
  <section class="section-cxe-breakouts">
    <div class="container">
    <?php

    // check if the repeater field has rows of data
    if( have_rows('breakout_session') ):
      $i=1;
      // loop through the rows of data
        while ( have_rows('breakout_session') ) : the_row();

            // display a sub field value
            //the_sub_field('sub_field_name'); ?>
             <div class="row">
          <?php  if($i==1){ ?>
          
        <div class="column third nudge-right">
          <h2>Breakout Sessions</h2>
          <div class="cxe-line-break">&nbsp;</div>
        </div>
       
          <?php
        }
           
          ?>
     
        <?php

        // check if the repeater field has rows of data
        if( have_rows('adding_row') ):

          // loop through the rows of data
            while ( have_rows('adding_row') ) : the_row();

                // display a sub field value ?>
                 <div class="column third">
          <div class="breakout-description">
            <h3> <?php  the_sub_field('heading'); ?></h3>
            <h4> <?php  the_sub_field('subheading'); ?></h4>
            <p> <?php  the_sub_field('content'); ?></p>
          </div>
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
  <section class="section-cxe-register">
    <div class="container">
      <div class="row center">
        <h2>Elevate your Customer Experience</h2>
        <div class="cxe-line-break">&nbsp;</div>
        <h4>Secure your spot now.</h4>
        <a class="btn btn-space-stroke btn-pill-large learn-more-btn" href="<?php the_field('button_link'); ?>" target="_blank"><?php the_field('button_text'); ?></a>
      </div>
    </div>
  </section>


  <?php get_footer(); ?>