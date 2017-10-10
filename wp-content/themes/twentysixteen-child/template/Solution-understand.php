<?php
/**
Template Name: Solution understand Page|Layout
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
    
  <section class="section-understand">
   <img src="<?php the_field('background_image'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('heading'); ?></h5>
      <h1><?php the_field('subheading'); ?></h1>
    </div>
  </section>
  <section class="section-intro-understand">
    <div class="container">
      <h2><?php the_field('left_section_content'); ?></h2>
      <p><?php the_field('right_section_content'); ?></p>
    </div>
  </section>
  <section class="section-advanced">
    <div class="container">
      <div class="row">
        <h5><?php the_field('bottom_conent_heading'); ?></h5>
        <h2><?php the_field('bottom_content_subheading'); ?></h2>
      </div>
    </div>
  </section>
  <section class="section-tabs-understand">
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
                  <li>
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
          
         <!--  <li>
            <a href="#0" data-content="predictive-analytics">
              <i data-icon="w"></i>
              <span>Explore</span>
            </a>
          </li>
          <li>
            <a href="#0" data-content="analyst-tool">
              <i data-icon="x"></i>
              <span>Analyst Tool</span>
            </a>
          </li>
          <li>
            <a href="#0" data-content="data-science">
              <i data-icon="y"></i>
              <span>Data Science Team</span>
            </a>
          </li> -->
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
                <li data-content="<?php the_sub_field('data_content');  ?>" class="<?php if($selected==1 || $i==1 ){echo $selected; } ?>">
                <div class="row">
                  <div class="column half empty">
                    <img class=" tab-asset" src="<?php the_sub_field('image');  ?>">
                  </div>
                  <div class="column half">
                    <p><b><?php the_sub_field('heading');  ?></b></p>
                    <p><?php the_sub_field('content');  ?></p>
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
        
      <!--   <li data-content="predictive-analytics">
          <div class="row">
            <div class="column half empty">
              <img class="tab-asset" src="../../media/original_images/img-understand-explore.png">
            </div>
            <div class="column half">
              <p><b>Explore</b></p>
              <p>Your customers are sharing stories daily via surveys, social posts, and review sites about your products, staff, and services. These comments hold answers to improving your business, and customer experience, but how do you find answers to specific questions in a sea of so much information?<br /><br />InMoment Explore provides a quick and easy way to search through unstructured data from all channels, instantly, for any word or phrase that is relevant to your business at any time. This DIY analytics tools saves you time slogging through comments and running reports, so you get the answers you want when you need them most.</p>
              <a href="explore/index.html" class="btn btn-understand-stroke btn-pill-large">Learn more &nbsp;»</a>
            </div>
          </div>
        </li>
        <li data-content="analyst-tool">
          <div class="row">
            <div class="column half empty">
              <img class="retina tab-asset" src="../../static/img/img-understand-analysttool.png">
            </div>
            <div class="column half">
              <p><b>CX Analyst Tool</b></p>
              <p>Sophisticated and self-serve, this visualization tool enables your in-house analysts to explore large datasets—on the fly and from multiples sources—and create customized, interactive views of customer and employee experiences.</p>
            </div>
          </div>
        </li>
        <li data-content="data-science">
          <div class="row">
            <div class="column half empty">
              <img class="retina tab-asset" src="../../static/img/img-understand-datascience.png">
            </div>
            <div class="column half">
              <p><b>Data Sciences Team</b></p>
              <p>Our professional analysts take your data even further with loyalty modeling, linkage analysis, multivariate stats, structural equation modeling, segmentation, and more.</p>
            </div>
          </div>
        </li> -->
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


  <section class="section<?php if($i==2){ echo "-integrity"; }else{ echo "-integrations"; } ?>">
    <div class="container">
      <div class="row">
      <?php if($i==2){ ?>
      <i data-icon="D"></i>
       <h5><?php the_sub_field('heading');  ?></h5>
        <p><?php the_sub_field('content');  ?></p>
      <?php }else{ ?>
       <div class="column half empty" <?php if($i==2){ echo "style='display:none;'"; } ?>>
          <img class=" integrations wow fadeInLeft" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php the_sub_field('images');  ?>">
        </div>
        <div class="column half">
          <h5><?php the_sub_field('heading');  ?></h5>
          <h2><?php the_sub_field('subheading');  ?></h2>
          <p><?php the_sub_field('content');  ?></p>
        </div>
       <?php  } ?>
       
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
  <!-- <section class="section-integrity">
    <div class="container">
      <div class="row">
        <i data-icon="D"></i>
        <h5>DATA INTEGRITY</h5>
        <p>InMoment deploys protective and cleansing measures that prevent fraud and ensure the integrity of your customer data, so you can make confident decisions based on reliable results.</p>
      </div>
    </div>
  </section> -->
  <section class="section-tour-understand">
    <div class="container">
      <div class="row">
        <h5>Next: Share</h5>
        <h2>Ready. Set. Action.</h2>
        <a href="<?php the_field('last_link'); ?>" class="tour-next" data-icon="b"></a>
      </div>
    </div>
  </section>
  <?php get_footer(); ?>