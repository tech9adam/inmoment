<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header('privacy_policy');  ?>

<script type="text/javascript" xml:space="preserve">
			function changeLanguage()
			{
				var languageCode = document.getElementById("langSelect").value;
				var destinationLang = '/' + languageCode + "/?lang=" + languageCode;
				//alert(destinationLang);
				window.location.href = window.location.protocol + "//" + window.location.host  + "/privacy_policy" +  destinationLang;

				//alert(window.location.href);

				////////////////////////////////////////////////////alert(window.location.href );

			}
</script>
 <main>
    <?php
		$pp = $_GET['lang'];

// Get the 'Privacy' post type
		$args = array(
			'post_type' => 'privacy_policy',
			'posts_per_page' => 100,
			'orderby'=>'title',
			'post__not_in' => array('2346'),
			'order' => 'ASC'
		);
	?>
		  <!-- <section class="section-default">
		    <div class="container">
		    	<?php $post_types = get_post_types();
		    	//echo '<pre>';
		    	//print_r($post_types);
		    	?>


		      <h5>Privacy Policy</h5>
		      <h1><?php the_title(); ?></h1>
		    </div>
		  </section> -->
		  <section class="section-default-body privacy_policy">
		    <div class="container">
          <div class="row">
            <h5>InMoment Privacy Policy</h5>
  		      <h1><?php the_title(); ?></h1>
          </div>
		      <div class='row' style='margin-bottom: 30px;'>
		      			<?php
		      			if (isset($_REQUEST['lang'])){ $mn_active = $_REQUEST['lang'];
		                    $active_val=trim(strtolower($mn_active));
		                    //echo $active_val;die;
		                }
		                ?>
						<?php

						$loop = new WP_Query($args); ?>
						<select id="langSelect" onchange="changeLanguage()" >
							<option class="lang" value="english" <?php if($pp == 'english') { echo 'selected'; }  ?> > English </option>
						<?php
						while($loop->have_posts()): $loop->the_post();

						?>

						<option class="lang" value="<?php echo $post->post_name; ?>" <?php if($pp == $post->post_name) { echo 'selected'; }  ?> > <?php the_title(); ?> </option>

						<?php endwhile; ?>
						</select>
		<?php
		wp_reset_query();
		?>


				</div>
				<div id="content">

					<div class="row" >
					<?php
					if ( have_posts() ) {
						while ( have_posts() ) {
							the_post();
							the_content();
							//
							// Post Content here
							//
						} // end while
					} // end if
					?>

					</div>
				    </div>
		    </div>
		  </section>


<?php get_footer('privacy_policy'); ?>
