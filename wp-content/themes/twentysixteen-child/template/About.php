<?php
/**
 * Template Name: About Page|Layout
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

  <section class="section-about">
  <img src="<?php the_field('background_image'); ?>" alt="about-bg" class="img-bg-banner">
    <div class="container">
      <h5><?php the_field('small_heading'); ?></h5>
      <h1><?php the_field('head_content'); ?></h1>
    </div>
  </section>
  <section class="section-intro-about">
    <div class="container">
      <h2><?php the_field('head_left_content'); ?></h2>
      <p><?php the_field('head_right_content'); ?></p>
    </div>
  </section>
  <section class="section-values">
    <div class="container">
      <div class="row intro">
        <h2><?php the_field('description'); ?></h2>
        <p><?php the_field('block_content'); ?></p>
      </div>
      <div class="row values">
      <?php

        // check if the repeater field has rows of data
        if( have_rows('block_section') ):

          // loop through the rows of data
            while ( have_rows('block_section') ) : the_row();

                // display a sub field value
                 ?>
                 <div class="column fifth">

                <i data-icon="<?php the_sub_field('data_icon'); ?>"></i>
                <h4><?php the_sub_field('heading'); ?></h4>
              </div>

                <?php

            endwhile;

        else :

            // no rows found

        endif;

        ?>

      <!--   <div class="column fifth">
          <i data-icon="I"></i>
          <h4>Simple &amp; Elegant</h4>
        </div>
        <div class="column fifth">
          <i data-icon="J"></i>
          <h4>Bold</h4>
        </div>
        <div class="column fifth">
          <i data-icon="K"></i>
          <h4>Innovative</h4>
        </div>
        <div class="column tablet-helper fifth">
          <i data-icon="L"></i>
          <h4>Human</h4>
        </div>
        <div class="column tablet-helper fifth">
          <i data-icon="M"></i>
          <h4>Invested</h4>
        </div> -->
      </div>
    </div>
  </section>
  <section class="section-global">
    <div class="container">
      <div class="">
        <h2><?php the_field('block_section_heading'); ?></h2>
      </div>
      <div class="row">
       <?php

        // check if the repeater field has rows of data
        if( have_rows('block_section_desc') ):

          // loop through the rows of data
            while ( have_rows('block_section_desc') ) : the_row();

                // display a sub field value
                 ?>
                 <div class="column fourth">
									<img src="<?php the_sub_field('data_icon'); ?>">
                  <!-- <i data-icon="<?php the_sub_field('data_icon'); ?>"></i> -->
                  <h4><?php the_sub_field('heading'); ?></h4>
                </div>

                <?php

            endwhile;

        else :

            // no rows found

        endif;

        ?>

       <!--  <div class="column third">
          <i data-icon="O"></i>
          <h4>Canada</h4>
        </div>
        <div class="column third">
          <i data-icon="P"></i>
          <h4>United Kingdom</h4>
        </div> -->
      </div>
    </div>
  </section>

  <section class="section-culture">
    <div class="container">
      <div class="row">
        <div class="column two-thirds">
          <h5><?php the_field('culture_heading'); ?></h5>
          <h2><?php the_field('culture_content'); ?></h2>
          <p><?php the_field('culture_section_left_content'); ?></p>
          <a href="<?php the_field('culture_button_link'); ?>" class="btn btn-pill-large btn-green-stroke learn-more-btn"><?php the_field('culture_button'); ?></a>

        </div>
        <div class="column third">
          <h2 class="quote"><?php the_field('culture_right_content'); ?></h2>
        </div>
      </div>
    </div>
  </section>
  <section class="section-summit">
    <div class="container">
      <div class="row">
        <div class="column half photo"><img src="<?php the_field('together_section_image'); ?>"  alt="photo"></div>
        <div class="column half content">
          <h2><?php the_field('together_section_heading'); ?></h2>
          <p><?php the_field('together_section_content'); ?></p>
          <a href="http://www.cxelevated.com" class="btn btn-understand-stroke btn-pill-large learn-more-btn">Learn More</a>
          <div class="row conferences">
           <?php

          // check if the repeater field has rows of data
          if( have_rows('together_section_button') ):
            $i=1;
            // loop through the rows of data
              while ( have_rows('together_section_button') ) : the_row();

                  // display a sub field value
                  ?>
            <div class="column half" style="padding-left: 12px;">
              <h3><?php the_sub_field('name'); ?></h3>
              <p><?php the_sub_field('date'); ?><br>
                <a href="<?php the_sub_field('link'); ?>"><?php the_sub_field('button'); ?></a><br>
                <a href="<?php the_sub_field('register_now_link'); ?>" class="main-cta">REGISTER NOW</a>
              </p>
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
      </div>
    </div>
  </section>

  <section class="section-leadership">
    <div class="container">
      <div class="row leadership-toggle tabs-container tabs-leadership">
        <nav>
          <ul class=tabs-nav>
            <?php

              // check if the repeater field has rows of data
              if( have_rows('list_of_team','option') ):
                $selected='selected';
                // loop through the rows of data
                  while ( have_rows('list_of_team','option') ) : the_row();

                      // display a sub field value ?>

                      <li><a href="#0" data-content="<?php the_sub_field('data_content'); ?>" class="btn btn-huge btn-green-stroke  <?php echo $selected ?>"><?php the_sub_field('heading'); ?></a></li>
                      <?php

                      $selected='';
                  endwhile;

              else :

                  // no rows found

              endif;

              ?>

            <!-- <li><a href="#0" data-content="directors" class="btn btn-huge btn-green-stroke">Board of Directors</a></li> -->
          </ul>
        </nav>
        <ul class="row leadership-content tabs-content">
          <li data-content="leadership" class="leadership selected">


          <?php

          // check if the repeater field has rows of data
          if( have_rows('team_member','option') ):

            // loop through the rows of data
              while ( have_rows('team_member','option') ) : the_row();

                  // display a sub field value
                  ?>
                  <div class="column">
                    <figure>
                      <a href="<?php the_sub_field('link_'); ?>" rel="modal:open">
                        <span>Read Bio &nbsp;»</span>
                      </a>
                      <img alt="<?php the_sub_field('name'); ?>" height="360" src="<?php the_sub_field('image'); ?>" width="360">
                    </figure>
                    <h6><?php the_sub_field('name'); ?></h6>
                    <p><?php the_sub_field('position_of_person'); ?></p>
                  </div>
                  <div class="modal leadership-modal hide-modal" id="<?php the_sub_field('id'); ?>">
                    <div class="container">
                      <div class="row">
                        <div class="column third">
                          <img alt="<?php the_sub_field('name'); ?>" height="360" src="<?php the_sub_field('image'); ?>" width="360">
                          <div class="details">

                          </div>
                        </div>
                        <div class="column two-thirds">
                          <h2><?php the_sub_field('name'); ?></h2>
                          <h5><?php the_sub_field('position_of_person'); ?></h5>
                          <div class="bio"><div class="rich-text"><?php the_sub_field('detail_bio-data'); ?></div></div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <?php

              endwhile;

          else :

              // no rows found

          endif;

          ?>

          </li>
          <li data-content="directors" class="directors">
            <?php

            // check if the repeater field has rows of data
            if( have_rows('board_of_director','option') ):

              // loop through the rows of data
                while ( have_rows('board_of_director','option') ) : the_row();

                    // display a sub field value
                     ?>

                    <div class="column">
                  <a href="<?php the_sub_field('bio_link'); ?>"><h6><?php the_sub_field('name'); ?></h6></a>
                  <p><?php the_sub_field('position'); ?></p>
                </div>

                    <?php

                endwhile;

            else :

                // no rows found

            endif;

            ?>


          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section-press">
    <div class="container">
      <div class="">
        <h5>Press</h5>
        <h2>Exciting news from the frontlines of the CX industry</h2>
      </div>
      <div class="">

        <ul class="list-unstyled blog-list">
          <?php
          // WP_Query arguments
          $args = array(
            'post_type'              => array( 'press' ),
            'post_status'            => array( 'publish' ),
            'posts_per_page'         => '3',
          );

          // The Query
          $query = new WP_Query( $args );
          //print_r($query);
          // The Loop
          if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
              $query->the_post();
              // do something ?>

							<li class="blog-item">
								<div class="meta date"><?php echo get_the_date();?></div>
								<a href="<?php echo get_post_permalink(); ?>" class="blog-post-link"><?php the_title();?></a>
								<div class="blog-intro">
									<div class="rich-text">
										<!-- <p>- <i><?php echo wp_trim_words( get_the_content(), 20, '...' ); ?><br/></i></p> -->
										<?php echo get_the_excerpt(); ?>
									</div>
								</div>
							</li>

              <?php
            }
          } else {
            // no posts found
          }

          // Restore original Post Data
          wp_reset_postdata();
         ?>


        </ul>

      </div>
      <div class="row archive">
        <a href="<?php the_field('link'); ?>" class="btn btn-pill-large btn-green-stroke learn-more-btn"><?php the_field('last_section'); ?></a>
      </div>
    </div>
  </section>
<?php get_footer(); ?>
