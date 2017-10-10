<?php
/**
Template Name: Contact us Page|Layout
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

   <section class="section-contact">
     <div class="container">
       <h1>Contact Us</h1>
     </div>
   </section>
   <section class="section-office">
     <div class="container">
       <div class="row">
         <div class="well clearfix">
           <h3>Interested in a demo with a member of our sales team?</h3>
           <a class="btn demo-btn" href="<?php the_field('book_a_demo_link','option'); ?>">Book a Demo</a>
         </div>
       </div>
       <div class="row">
         <?php
         // check if the repeater field has rows of data
 				if( have_rows('all_countries_address') ):
 					$i = 0;
 				 	// loop through the rows of data
 				    while ( have_rows('all_countries_address') ) : the_row();
 				        // display a sub field value
         if($i > 0 && $i % 2 == 0) {
         ?>
            </div>
            <div class="row">
         <?php
         }
 				?>
           <div class="column half clearfix">
 				    <div class="office-location-details office-location-<?php  the_sub_field('country_code');   ?>">

               <div class="details">
 						    <h3><?php  the_sub_field('heading');   ?></h3>
 						    <p><?php  the_sub_field('contact_info');   ?></p>
 						  </div>

 						  <div class="details">
 						    <b><?php  the_sub_field('phone_heading');   ?></b>
                <p><a href="tel:<?php  the_sub_field('phone_number'); ?>"><?php the_sub_field('phone_number'); ?></a></p>
 						  </div>

 						  <div class="details">
 						    <b><?php  the_sub_field('fax_heading');   ?></b>
 						    <p><?php  the_sub_field('fax_number');   ?></p>
 						  </div>

 						</div>
           </div>
 				        <?php
                 $i += 1;
 				    endwhile;
 				else :
 				    // no rows found
 				endif;
 				?>
       </div>
      </div>
      <div class="container contact-emails">
       <div class="row">
         <div class="col-12 col-sm-6 support">
           <section>
             <img style="margin: 0 auto; display: block;" src="/wp-content/uploads/2017/05/support-survey.png" />
             <h2 style="text-align: center;">Customer Service and Support</h2>
             <p style="text-align: center;">Problems taking a survey? Call <a href="tel:1-800-467-0047">1-800-467-0047</a> or send us a message at support@inmoment.com.</p>
           </section>
         </div>
         <div class="col-sm-4 col-sm-offset-2">
           <section>
             <div class="details first">
               <b>General Inquiry:</b>
               <p>info@inmoment.com</p>
             </div>
             <div class="details first">
               <b>Sales:</b>
               <p>sales@inmoment.com</p>
             </div>
             <div class="details first">
               <b>Feedback:</b>
               <p>feedback@inmoment.com</p>
             </div>
             <div class="details first">
               <b>Employment:</b>
               <p>careers@inmoment.com</p>
             </div>
           </section>
         </div>
       </div>
     </div>
   </section>

<?php get_footer(); ?>
