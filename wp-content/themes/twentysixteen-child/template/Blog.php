<?php
/**
Template Name: Blog & Press Page|Layout
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

<section class="section-blog-header">
  <div class="container">
      <div class="col-md-12 ">

    <div class="row">
      <h1><?php the_title(); ?></h1>
   <p><?php the_field('book_a_demo'); ?></p>
    </div>
    </div>






  </div>
</section>
<section class="section-blog-list">
  <div class="container">
    <div class="col-md-12 ">

    <div class="row">



      <ul class="list-unstyled the-loop">
        <?php
        if(is_page('press')){

           $args = array(
          'post_type'              => array( 'press' ),
          'post_status'            => array( 'publish' ),
          'posts_per_page'         => '5',
          //'category_name'          => 'press',
        );


        }else{



        // WP_Query arguments
        $args = array(
          'post_type'              => array( 'post' ),
          'post_status'            => array( 'publish' ),
          'posts_per_page'         => '5',
          'category_name'          => 'blog',
        );
        //print_r($args);
         }

        // The Query
        $query = new WP_Query( $args );

        // The Loop

          while ( $query->have_posts() ) {
            $query->the_post();
            $site_url=site_url();
            // do something ?>

          <li class="blog-post-item first-reset">
            <div class="blog-intro-wrap">
              <div class="meta date">
                <?php echo get_the_date("M d, Y"); ?>
              </div>

              <a class="blog-post-link" href="<?php echo str_replace($site_url,'',get_permalink()); ?>">
                <h2><?php the_title(); ?></h2>
              </a>

              <div class="blog-intro">
                <?php echo get_the_excerpt(); ?>
                <!-- <p><?php echo wp_trim_words( get_the_content(), 70, '...' ); ?></p> -->
              </div>

              <a class="btn btn-pill-large btn-green-stroke learn-more-btn" href="<?php echo str_replace($site_url,'',get_permalink()); ?>">Continue Reading</a>

            </div>


                </li>
            <?php
          } ?>
           <div class="append_data"></div>

      </ul>

      <a class="load-more-posts" >Load More</a>


    </div>
  </div>
  </div>
</section>
<?php if(is_page('press')){ ?>
<script type="text/javascript">
jQuery(document).ready(function($) {

/*--news home --*/
          offset_all_blog = 5;
          $(".load-more-posts").click(function() {
              // event.preventDefault();
               //var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
               //alert(ajaxurl);
               //alert("msg");

                    $.ajax({
                        type: "POST",
                        url: ajaxurl,
                        data: ({ action: "load_More_press", offset : offset_all_blog}),
                        success: function(response) {
                          //alert(response);
                          if(response !=''){
                            offset_all_blog = offset_all_blog  + 5;
                            //console.log(response);
                           $('.append_data').append(response);
                         }else{
                          $('.load-more-posts').hide();
                          $('.append_data').append('<p class="dcs_para_center">No More Posts to display...</p>');
                         }
                        },
                    });
                });
/*-- news home--*/
});
</script>

<?php }else{ ?>

<script type="text/javascript">
jQuery(document).ready(function($) {
/*--news home --*/
          offset_all_blog = 5;
          $(".load-more-posts").click(function() {
              // event.preventDefault();
               //var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
               //alert('ajaxurl');
               //alert("msg");

                    $.ajax({
                        type: "POST",
                        url: ajaxurl,
                        data: ({ action: "load_More_blog", offset : offset_all_blog}),
                        success: function(response) {
                          //alert(response);
                          if(response !=''){
                            offset_all_blog = offset_all_blog  + 5;
                            //console.log(response);return false;
                           $('.append_data').append(response);
                         }else{
                          $('.load-more-posts').hide();
                          $('.append_data').append('<p class="dcs_para_center">No More Posts to display...</p>');
                         }
                        },
                    });
                });
/*-- news home--*/
});
</script>
<?php } ?>
<?php get_footer(); ?>
