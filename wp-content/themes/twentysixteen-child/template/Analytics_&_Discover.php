<?php
/**
Template Name: Analytics overlay, VOC & Discover |Layout
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
    
  <section class="section-solution banner">
   <img src="<?php the_field('background_image'); ?>" alt="solution-bg" class="img-bg-banner">
    <div class="container-fluid main-text-tp">
      <h5><?php the_field('listen_heading'); ?></h5>
      <h1><?php the_field('listen_subheading'); ?></h1>
    </div>
  </section>
 <?php

// check if the repeater field has rows of data
if( have_rows('section_content') ):
   $i=1;
  // loop through the rows of data
    while ( have_rows('section_content') ) : the_row();
   
        // display a sub field value
    if(is_page(2114)){
        ?>

         <section class="section<?php //if(($i % 2) == 0){ echo "-video-feedback";}else{ echo "-active-listening";} ?>">
    <div class="container-fluid ref-color">
      <div class="row analytice-top-right <?php if(($i % 2) == 0){ echo "discover";}else{/*nothing*/} ?>">
     
      
        <?php if(($i % 2) == 0){ ?>
        <div class="col-md-6" <?php //if($i==4){echo "style=display:none;";}else{/*nothing*/} ?>>&nbsp;                      
                      <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
         <div class="col-md-6 solution">
            <h5><?php the_sub_field('heading');  ?></h5>
            <h2><?php the_sub_field('subheading');  ?></h2>
            <p><?php the_sub_field('content');  ?></p>
             
          </div>
          
          <?php }else{ ?>
            <div class="col-md-6 analytics-hed" >
          <h5><?php the_sub_field('heading');  ?></h5>
          <h2><?php the_sub_field('subheading');  ?></h2>
          <p><?php the_sub_field('content');  ?></p>
           
          </div>
          <div class="col-md-6 analytics-image">&nbsp;                      
                      <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
          <?php }  ?>
        
       
      </div>
    </div>
  </section>
  <?php }elseif(is_page(2198)){ ?>
   <section class="section voc<?php //if(($i % 2) == 0){ echo "-video-feedback";}else{ echo "-active-listening";} ?>">
    <div class="<?php if($i==3){echo "container-fluid remove";}else{echo "container-fluid";} ?>">
      <div class="row <?php if(($i % 2) == 0){ echo "discover";}else{/*nothing*/} ?>">
     
      
        <?php if(($i % 2) == 0){ ?>
        <div class="col-md-6" <?php if($i==4){echo "style=display:none;";}else{/*nothing*/} ?>>&nbsp;                      
                      <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
         <div class="col-md-6 first-text discover-heigh">
            <h5 class="heading"><?php the_sub_field('heading');  ?></h5>
            <h2><?php the_sub_field('subheading');  ?></h2>
            <p><?php the_sub_field('content');  ?></p>
             <a href="<?php the_sub_field('link');  ?>" class="btn btn-understand-stroke btn-pill-large learn-more-btn"><?php the_sub_field('link_name');  ?></a>
          </div>
          
          <?php }else{ ?>
            <div class="col-md-6 first-text" >
          <h5><?php the_sub_field('heading');  ?></h5>
          <h2><?php the_sub_field('subheading');  ?></h2>
          <p><?php the_sub_field('content');  ?></p>
           <a href="<?php the_sub_field('link');  ?>" class="btn <?php if($i==3){echo "btn-share-stroke";}
           else{echo "btn-listen-stroke ";} ?> btn-pill-large learn-more-btn"><?php the_sub_field('link_name');  ?></a>
          </div>
          <div class="<?php if($i==3){ echo "no";} else{echo "col-md-6 first-image";} ?>">&nbsp;                      
                      <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
          <?php }  ?>
        
       
      </div>
    </div>
  </section>
  <?php }else{  ?>
 
   <section class="section<?php //if(($i % 2) == 0){ echo "-video-feedback";}else{ echo "-active-listening";} ?>">
    <div class="<?php if($i==3){echo "container-fluid remove";}else{echo "container-fluid";} ?>">
      <div class="row <?php if(($i % 2) == 0){ echo "discover";}else{/*nothing*/} ?>">
     
      
        <?php if(($i % 2) == 0){ ?>
        <div class="col-md-6" <?php if($i==4){echo "style=display:none;";}else{/*nothing*/} ?>>&nbsp;                      
                      <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
         <div class="col-md-6 first-text discover-heigh">
            <h5 class="heading"><?php the_sub_field('heading');  ?></h5>
            <h2><?php the_sub_field('subheading');  ?></h2>
            <p><?php the_sub_field('content');  ?></p>
             
          </div>
          
          <?php }else{ ?>
            <div class="col-md-6 first-text" >
          <h5><?php the_sub_field('heading');  ?></h5>
          <h2><?php the_sub_field('subheading');  ?></h2>
          <p><?php the_sub_field('content');  ?></p>
           
          </div>
          <div class="<?php if($i==3){ echo "no";} else{echo "col-md-6 first-image";} ?>">&nbsp;                      
                      <img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
                    </div>
          <?php }  ?>
        
       
      </div>
    </div>
  </section>
  <?php } ?>
        <?php 
        $i++;
    endwhile;

else :

    // no rows found

endif;

?>
 <section class="section-active-listening" <?php if(is_page(array(2109,2198))){echo "style=display:none";}?>>
    <div class="container pad em-piece">
 <hr>
    <div class="row">
      <p><?php the_field('content_of_listen'); ?></p>
      </div>
    </div>
  </section> 
  
 
 
  <style type="text/css">
    .img-bg-banner{height: 1000px}
    .section-active-listening .push{margin-left: 400px}
   /* .section-analytics{padding: 0px;background: rgba(37, 55, 70, 0.8) none repeat scroll 0 0;padding:20px; color: #fff;}*/
   .section-active-listening hr{border:medium solid; width: 100px; color: #00afd7;}
  	.voc .col-md-6 > h5{color:  #52c9b5; font-size:13px; }

  </style>
<?php get_footer(); ?>