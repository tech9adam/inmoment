<?php
/*
Template Name: inmoment2 Page
*/

// get_header(); ?>
<style>
.benefit-list {
    display: inline-block;
    margin-bottom: 40px;
    text-align: center;
	width:100%;
}
.benefit-list p {
    text-transform: uppercase;
    font-size: 15px;
}
.ustestimonilwrap img {
  max-width: 170px;
  min-height: 170px;
}

</style>
<main>
<!-- <section class="section-family banner">
   <img src="<?php the_field('banner_background'); ?>" alt="solution-bg" class="img-bg-banner img-responsive">
    <div class="container-fluid">
    <div class="col-md-12 banner-inmoment-text">
    <div class="row">
      <h5><?php the_field('small_banner_heading'); ?></h5>
      <h1 class="Software-hading"><?php the_field('main_banner_heading'); ?></h1>
	  <a href="<?php the_field('banner_button_link'); ?>"><button class="inmomentapply"><?php the_field('banner_button_text'); ?> </button></a>
    </div>
    </div>
	<div class="row home-pattern"></div>
    </div>
  </section> -->



<section class="ustestimonilwrap">
<div class="container">
<div class="row">
<div class="col-sm-12 ">
<h2><?php the_field('second_section_heading'); ?></h2>
<div>


<!-- <div class="col-sm-4">
<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/wes.jpg" alt="unstates"/>
<h3>Wes</h3>
<h5>Customer Success Manager</h5>
<p>InMoment is a great place to work! I receive full support in anything and everything that I want to do. No matter the idea, concern, or project, I have team around me that is always willing to support. </p>
</div>
<div class="col-sm-4">
<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/stacy.jpg" alt="cnada"/>
<h3>Stacy</h3>
<h5>Director of Sales  </h5>
<p>InMoment has a culture where people can be apply their talents and abilities without reservation. There is a palpable energy within the company and an optimism for the future that is shared by both executives and employees. </p>
</div>
<div class="col-sm-4">
<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/john.jpg" alt="unkindom"/>
<h3>John</h3>
<h5>Text Analytics</h5>
<p>I have worked for several companies in the valley, and InMoment has been my favorite by far. Everywhere I have worked touts a great culture, but InMoment truly delivers on this. </p>
</div> -->

      <?php

        // check if the repeater field has rows of data
        if( have_rows('second_section_details') ):

          // loop through the rows of data
            while ( have_rows('second_section_details') ) : the_row();

    			if(get_sub_field('image-2')==''){
                // display a sub field value
                 ?>
					<div class="col-sm-4">
						<img src="<?php the_sub_field('image'); ?>" alt="unkindom"/>
						<h3><?php the_sub_field('name'); ?></h3>
						<h5><?php the_sub_field('title'); ?></h5>
						<p><?php the_sub_field('detail'); ?> </p>
					</div>

                <?php
           	 }else{ ?>

				<div class="col-sm-4">
				<div class="col-sm-6">
				<div class="row">
				<img src="<?php the_sub_field('image'); ?>" alt="unkindom"/>
				</div>
				</div>
				<div class="col-sm-6">
				<div class="row">
				<img src="<?php the_sub_field('image-2'); ?>" alt="unkindom"/>
				</div>
				</div>
				<div class="clearfix"></div>
				<h3><?php the_sub_field('name'); ?></h3>
				<h5><?php the_sub_field('title'); ?></h5>
				<p><?php the_sub_field('detail'); ?> </p>
				</div>

           	 <?php }

            endwhile;

        else :

            // no rows found

        endif;

        ?>

</div>
</div>
</div>
</div>
</section>
<section class="unitedbenifet_wrap">
<div class="container">
<h2><?php the_field('third_section_heading'); ?></h2>
<div class="row">
<div class="col-sm-10 col-sm-offset-1">
<div class="row">
<div class="benefit-list">


      <?php

        // check if the repeater field has rows of data
        if( have_rows('third_section_points') ):

          // loop through the rows of data
        	$i=1;
            while ( have_rows('third_section_points') ) : the_row();


                // display a sub field value
                 ?>
                 <?php if($i==1 || ($i-1)%3==0 ) echo '<div class="col-md-12"><div class="row">';  ?>
				<div class="col-sm-4">
				<div>
				<p><?php the_sub_field('point'); ?></p>
				</div>
				</div>
            	<?php if($i%3==0 ) echo '</div></div>';  ?>
                <?php
                $i++;
            endwhile;

        else :

            // no rows found

        endif;

        ?>


</div>
<div class="col-sm-12">
<a href="<?php the_field('third_section_button_link'); ?>"><button><?php the_field('third_section_button_text'); ?></button></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="uscareer-pg-bckgrnd padding-null">
<img src="<?php the_field('mid_banner'); ?>" alt="Inmoment Career" class="img-responsive uscareer-page-bckgrnd">
</section>

<section class="uscareer-page-inmoment-events">
<div class="container">
<h2><?php the_field('events_text'); ?></h2>

<!-- <div class="col-sm-12 ">
<div class="row">
<div class="col-sm-4">
	<div class="event-images">
		<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event1.png" alt="events">
	</div>
</div>
<div class="col-sm-4">
	<div class="event-images">
		<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event2.png" alt="events">
	</div>
</div>
<div class="col-sm-4">
	<div class="event-images">
		<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event3.png" alt="events">
	</div>
</div>
</div>
</div>

<div class="col-sm-12 ">
<div class="row">
<div class="col-sm-4">
	<div class="event-images">
		<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event4.png" alt="events">
	</div>
</div>
<div class="col-sm-4">
	<div class="event-images">
		<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event5.png" alt="events">
	</div>
</div>
<div class="col-sm-4">
	<div class="event-images">
		<img src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event6.png" alt="events">
	</div>
</div>
</div>
</div>

<div class="col-sm-12 ">
<div class="row">
<div class="col-sm-4">
	<div class="event-images">
		<img class="img-responsive" src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event7.png" alt="events">
	</div>
</div>
<div class="col-sm-4">
	<div class="event-images">
		<img class="img-responsive" src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event8.png" alt="events">
	</div>
</div>
<div class="col-sm-4">
	<div class="event-images">
		<img class="img-responsive" src="http://inmoment.staging.wpengine.com/wp-content/uploads/2017/01/event9.png" alt="events">
	</div>
</div>
</div>
</div> -->


      <?php

        // check if the repeater field has rows of data
        if( have_rows('inmoment_events') ):

          // loop through the rows of data
        	$i=1;
            while ( have_rows('inmoment_events') ) : the_row();


                // display a sub field value
                 ?>
                 <?php if($i==1 || ($i-1)%3==0 ) echo '<div class="col-sm-12"><div class="row">';  ?>
				<div class="col-sm-4">
					<div class="event-images">
						<img class="img-responsive" src="<?php the_sub_field('image'); ?>" alt="events">
					</div>
				</div>
            	<?php if($i%3==0) echo '</div></div>';  ?>
                <?php
                $i++;
            endwhile;

        else :

            // no rows found

        endif;

        ?>


</div>
</section>


<section class="comeworkwrap">
<div class="container">
<h2><?php the_field('last_section_heading'); ?></h2>
<a href="<?php the_field('last_section_button_link'); ?>"><button><?php the_field('last_section_button_text'); ?></button></a>
</div>
</section>

<?php // get_footer(); ?>
