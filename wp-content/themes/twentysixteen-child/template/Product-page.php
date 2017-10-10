<?php
/**
Template Name:  Employee engagement & product Page|Layout
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
   <img src="<?php the_field('employee_background_image'); ?>" alt="solution-bg" class="img-bg-banner img-responsive">
    <div class="container-fluid">
    <div class="col-md-12 banner-main-text">
    <div class="row">
      <h5><?php the_field('employee_heading'); ?></h5>
      <h1 class="Software-hading"><?php the_field('employee_subheading'); ?></h1>
    </div>
    </div>
    </div>
  </section>
 <?php

// check if the repeater field has rows of data
if( have_rows('content_of_employee') ):
$i=1;
    // loop through the rows of data
    while ( have_rows('content_of_employee') ) : the_row();

        // display a sub field value
    if(is_page(array(2122,2123))){
         ?>

<div class="container-fluid pad <?php if($i==2){echo "backround-color";}else{/*nothing*/} ?>">
 <div class="col-md-6 quick-image" <?php if($i==2){echo "style=display:block;";}else{echo "style=display:none;";} ?>>&nbsp;                      
<img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
</div>
    <div class="col-md-6 problem" <?php if($i==2){echo "style=display:none;";} ?>>

   <div  style="<?php //if($i==2){ echo "display:none"; }else{/**/}?>">
        <h3 class="product-hed"><?php the_sub_field('heading'); ?></h3>
        <h1 class="black"><?php the_sub_field('subheading'); ?></h1>
        <p class="color2"><?php the_sub_field('content'); ?></p>
</div>
    </div>
    
    <div class="col-md-6 employeeImg" <?php if($i==2){echo "style=display:none;";}else{echo "style=display:block;";} ?>>&nbsp;                      
<img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
</div>
    
    <div class="col-md-6 <?php if($i==2){echo "Solution2 uncover quickly";}else{/*nothing*/} ?>">
    <?php if($i==2){ ?>
        <h3 class="solution-color"><?php the_sub_field('heading'); ?></h3>
        <h1 class="black"><?php the_sub_field('subheading'); ?></h1>
        <p class="color2"><?php the_sub_field('content'); ?></p>
        
        <?php } ?>
    </div>

</div>
<?php } elseif(is_page(array(2113,16))){  ?>


        <section class="section<?php if(($i % 2) == 0){ echo "-video-feedback";}else{ echo "-active-listening";} ?>">
        
        <div class="container voice-of-customer analytics">
        <div class="row">
        


        <?php if(($i % 2) == 0){ ?>
        <div class="col-md-6 employee-engagement"> <img src="<?php the_sub_field('image'); ?>" alt=""></div>
        <div class="col-md-6 main-h5-text employee">
        <h5><?php the_sub_field('heading');  ?></h5>
        <h2><?php //the_sub_field('subheading');  ?></h2>
        <p><?php the_sub_field('content');  ?></p>
        <a href="<?php the_sub_field('button_link');  ?>" class="btn btn-listen-stroke btn-pill-large learn-more-btn"><?php the_sub_field('button_name');  ?></a>

        </div>
        
        <?php }else{ ?>
       
        <div class="col-md-6">
        <h5><?php the_sub_field('heading');  ?></h5>
        <h2><?php //the_sub_field('');  ?></h2>
        <p><?php the_sub_field('content');  ?></p>
       <a href="<?php the_sub_field('button_link');  ?>" class="btn btn-listen-stroke btn-pill-large learn-more-btn"><?php the_sub_field('button_name');  ?></a>
        </div>
         <div class="col-md-6 image-closed-loop"> <img src="<?php the_sub_field('image'); ?>" alt=""></div>
        <?php }  ?>


        </div>
        </div>
        </section>
        <?php }else{ ?>

    
<div class="container-fluid pad <?php if($i==2){echo "backround-color";}else{/*nothing*/} ?>">
 <div class="col-md-6" <?php if($i==2){echo "style=display:block;";}else{echo "style=display:none;";} ?>>&nbsp;                      
<img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
</div>
    <div class="col-md-6 problem" <?php if($i==2){echo "style=display:none;";} ?>>

   <div  style="<?php //if($i==2){ echo "display:none"; }else{/**/}?>">
        <?php the_sub_field('heading'); ?>
        <h1 class="black"><?php the_sub_field('subheading'); ?></h1>
        <p class="color2"><?php the_sub_field('content'); ?></p>
</div>
    </div>
    
    <div class="col-md-6 employeeImg" <?php if($i==2){echo "style=display:none;";}else{echo "style=display:block;";} ?>>&nbsp;                      
<img class=" img-asset-opposite wow fadeInRight" data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php  the_sub_field('image'); ?>">
</div>
    
    <div class="col-md-6 <?php if($i==2){echo "Solution2 uncover";}else{/*nothing*/} ?>">
    <?php if($i==2){ ?>
        <?php the_sub_field('heading'); ?>
        <h1 class="black"><?php the_sub_field('subheading'); ?></h1>
        <p class="color2"><?php the_sub_field('content'); ?></p>
        <?php } ?>
    </div>

</div>
<?php  } ?>
<?php
$i++;
endwhile;

else :

    // no rows found

endif;

?>
<?php if(!is_page(array(2113,16))){ ?>
        <div class="container-fluid bottom-mar">
        <?php if(is_page(array(2122,2123))){ ?>
          <div class="container resolve">
        <h1 class="yellow-color"><?php the_field('icon_heading'); ?>
            <h1 class="black" class="bene"><?php the_field('icon_subheading'); ?></h1>
            <p><?php the_field('icon_description'); ?></p>
            </div>
            <?php }else{ ?>
        <div class="container">
       		<h1 class="black" class="bene"><?php the_field('icon_heading'); ?></h1>
        	</div>
            <?php } ?>
            <div class="container pad">
            <?php

                // check if the repeater field has rows of data
                if( have_rows('icon_content') ):

                    // loop through the rows of data
                    while ( have_rows('icon_content') ) : the_row();

                        // display a sub field value
                       ?>


              
            	<div class="col-md-3 font-cap"><img src="<?php the_sub_field('image');  ?>" class="center-block">
                 <h4><?php the_sub_field('icon_heading');  ?></h4>
                <p class=" text-center"><?php the_sub_field('subheading');  ?></p>
                </div>
                  <?php 

                  endwhile;

                else :

                    // no rows found

                endif;
                    ?>
                <!-- <div class="col-md-3"><img src="images/benefits1.png" class="center-block">
                <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-md-3"><img src="images/benefits2.png" class="center-block">
                <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-md-3"><img src="images/benefits3.png" class="center-block">
                <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div> -->
            
            </div>
        
        </div>
        
        
        
        
        <div class="container-fluid pad  backround-color"<?php if(is_page(array(2122,2123))){echo "style=display:none";} ?>>
	<div class="col-md-6 Solution3 ">
    	<div class="yellow-color"><?php the_field('last_section_heading'); ?></div>
        <h1 class="black Engage"><?php the_field('last_section_subheading'); ?></h1>
        <p class="color2 InMoment"></p>
        <p ><?php the_field('last_section_content'); ?></p>
       
    </div>
    <div class="col-md-6">
    	 <img class=" img-asset-opposite wow fadeInRight " data-wow-duration="0.3s" data-wow-delay="0.25s" src="<?php the_field('last_section_image');  ?>">
    </div>

</div>
<div class="container-fluid bottom-mar quotes_cont">
<div class="container pad em-piece">
<hr>
<p><?php the_field('quotes'); ?><p>
</div>
</div>
<?php } ?>
<style type="text/css">
.bottom-mar hr{
    color: #00afd7;
    border:medium solid;
    width:100px;

}
.pad

{
    padding:0px;
}
.image-banner img{
  width: 100%;
}

.problem
{
    font-size:15px;
    color:#f0b422;
    font-weight:bold;
    text-transform:uppercase;
   /* padding-top:193px;*/
    padding-left:143px;
    padding-bottom:193px;
}
.Solution2
{
    color: #717c7d;
font-weight: normal;
font-size: 14px;
text-transform: capitalize;
}
.black
{
    color:#273848;
}
.color2
{ color:#727c7e;}

.backround-color
{
    background-color:#eff0f2;
}
.bene
{
    text-align:center;
    padding-left:50px;
}
.container h1
{
    text-align:center;
}
.bottom-mar
{
    margin-bottom:173px;
    margin-top:173px;
}
.template-solution .section-active-listening{background: #fff;}
.template-solution .section-video-feedback{background: #f6f7f9 none repeat scroll 0 0;}
</style>


<?php get_footer();  ?>