<?php
/**
Template Name: Privacy Page|Layout
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

<script type="text/javascript" xml:space="preserve">
			function changeLanguage()
			{
				var languageCode = document.getElementById("langSelect").value;
				var destinationLang = '/' + languageCode + "/?lang=" + languageCode;
				window.location.href = window.location.protocol + "//" + window.location.host  + destinationLang;
				//alert(window.location.href);

				////////////////////////////////////////////////////alert(window.location.href );

			}
		</script>
 <main>
    
  <section class="section-default">
    <div class="container">
      <h5><?php the_field('page_heading','option'); ?></h5>
      <h1><?php the_title(); ?></h1>
    </div>
  </section>
  <section class="section-default-body">
    <div class="container">
      <div class='row' style='margin-bottom: 30px;'>
      			<?php 
      			if (isset($_REQUEST['lang'])){ $mn_active = $_REQUEST['lang']; 
                    $active_val=trim(strtolower($mn_active));
                    //echo $active_val;die;
                }
                ?>
				<select id="langSelect" onchange="changeLanguage()" >
				<?php
				 
				// check if the repeater field has rows of data
				if( have_rows('privacy_policy_language','option') ):
					
				    while ( have_rows('privacy_policy_language','option') ) : the_row(); ?>
					<div class="language"></div>
					<?php

				// check if the repeater field has rows of data
				if( have_rows('language','option') ):
				 
				    while ( have_rows('language','option') ) : the_row();
				    $lang=get_sub_field('language_link'); ?>

				    <option class="lang" value="<?php  the_sub_field('language_link'); ?>" <?php if($active_val==$lang){echo 'selected';} ?> ><?php  the_sub_field('language_name'); ?></option>
				  	<?php 

				        // display a sub field value
				   
				    endwhile;

				else :

				    // no rows found

				endif;

				?>
				    <?php 

				        // display a sub field value
				      

				    endwhile;

				else :

				    // no rows found

				endif;

				?>
					
					<!-- <option value="da">Dansk</option>
					<option value="de">Deutsch</option>
					<option value="es">Espa&ntilde;ol</option>
					<option value="fr">Fran&ccedil;ais</option>
					<option value="kr">한국의</option> -->
				</select>
			
    
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
 
<?php get_footer(); ?>