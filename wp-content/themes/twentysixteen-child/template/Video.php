<?php
/**
Template Name: Video Page|Layout
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
    
  <section class="section-demo">
    <div class="container">
  
      <?php 
      if ( have_posts() ) {
      while ( have_posts() ) {
      the_post(); ?>
          <h5><?php the_title(); ?></h5>
      <h1><?php the_content(); ?></h1>
      <?php 
      } // end while
      } // end if
      ?>
      
    </div>
  </section>
 <section class="section-form">
<div class="container">
 <div class="library-contant-cls">
  <div class="row">
  
       <?php

// check if the repeater field has rows of data
if( have_rows('videoes') ):

  // loop through the rows of data
    while ( have_rows('videoes') ) : the_row();

        // display a sub field value
        ?>
       
        <div class="col-md-4 random">
      <div class="lib-contant-sub">

     <a href="<?php the_permalink(); ?>">
        <div class="lib-contant">
        <div class="document_box_left">
          <p><span class="document_box_title"><?php //echo wp_trim_words(get_the_title(),12); ?></span></p>
         
        </div>
        <div class="document_box_right"> 
          <div class="doc-overlay"></div>
          <p>
         <?php //echo wp_trim_words( get_the_content(), 30, '...' ); ?></p> </div></div></a>
          <!-- The Modal -->
      
       <div class="document_box_download">
       
     
        <a  id="<?php the_permalink(); ?>" data-id="<?php echo get_the_title(); ?>" data-toggle="modal" data-target="#myModal" class="document_box_download_link" >
        <?php  
        $value_check=get_field('condition_logic_for_post_form');
        
      //echo $value_check;
        if($value_check=='Video'){ ?>
        <span>Watch Now</span>
       <?php
        }
       else
        { ?>
       <span>Download Now</span>
       <?php
        }
        ?>
        </a> </div>
    
        <?php  the_sub_field('videos');?>
          <div class="document_box_right"> <a href="https://www.maritzcx.com/lp/151000-reasons-customer-experience-dealership-loyalty-matter/">
         </a>
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
  </section>
<style type="text/css">
  .modal-open .modal.fade.in{background: none;}
 .mktoButton{color: #fff;}
 .error{color: red;}
</style>

<?php get_footer(); ?>
