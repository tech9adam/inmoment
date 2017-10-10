<?php 
/**
Template Name: Webservey-rule|Layout
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


get_header('rules'); ?>
<div id="subheader">
<?php 
      			if (isset($_REQUEST['lang'])){ $mn_active = $_REQUEST['lang']; 
                    $active_val=trim(strtolower($mn_active));
                    //echo $active_val;die;
                }
                ?>
				<select id="langSelect" onchange="changeLanguage()">
				<?php

				// check if the repeater field has rows of data
				if( have_rows('language','option') ):
					
				    while ( have_rows('language','option') ) : the_row(); 
				 $lang=get_sub_field('value');?>
				    <option value="<?php  the_sub_field('value'); ?>" <?php if($active_val==$lang){echo 'selected';} ?> <?php  the_sub_field('language_name'); ?> ><?php  the_sub_field('language'); ?></option>
				  
				    <?php 

				        // display a sub field value
				       $selected='';

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

<h1><?php the_field('webservey_heading'); ?></h1>



<br clear="none" />
<h2><?php the_field('heading_of_table'); ?></h2>
<div class="tablecontainer">
<table cellspacing="0" cellpadding="6">
<tr>
<?php

				// check if the repeater field has rows of data
				if( have_rows('subheading_of_table') ):
					
				    while ( have_rows('subheading_of_table') ) : the_row(); ?>

				   <th rowspan="1" colspan="1"><?php  the_sub_field('heading'); ?></th>

				    <?php 

				        // display a sub field value
				       
				    endwhile;

				else :

				    // no rows found

				endif;

				?>
<!-- 				<th th:text="#{rules.official.instant.columnHeader}">InMoment Inc. Instant Sweepstakes ("Instant")</th> -->
</tr>
<?php

				// check if the repeater field has rows of data
				if( have_rows('content_of_table') ):
					
				    while ( have_rows('content_of_table') ) : the_row(); ?>
					<tr>
					<td style="width: 226px;" rowspan="1" colspan="1"><a href="<?php  the_sub_field('link'); ?>" shape="rect"><?php  the_sub_field('content_'); ?></a></td>
					<td style="width: 226px;" rowspan="1" colspan="1"><a href="<?php  the_sub_field('weekly_link'); ?>" shape="rect"><?php  the_sub_field('weekly_content'); ?></a></td>
					<!-- 				<td style="width: 226px;"><a th:href="@{'/2/rules/instant/en'}" href="rules/instant/en">Official Rules</a></td> -->
					</tr>

				    
				    <?php 


				    endwhile;

				else :

				    // no rows found

				endif;

				?>


</table>
</div>

<br clear="none" />
<h2><?php the_field('sweepstackes_heading'); ?></h2>
<div class="tablecontainer">
<table cellspacing="0" cellpadding="6">
<tr>
<?php

				// check if the repeater field has rows of data
				if( have_rows('second_table_heading') ):
					
				    while ( have_rows('second_table_heading') ) : the_row(); ?>
					<th rowspan="1" colspan="1"><?php  the_sub_field('heading'); ?></th>

				    
				    <?php 

				        // display a sub field value
				     

				    endwhile;

				else :

				    // no rows found

				endif;

				?>
<!-- <th rowspan="1" colspan="1">Country/Language</th>
<th colspan="2" rowspan="1">Contest Type</th>
 --></tr>
 <?php

				// check if the repeater field has rows of data
				if( have_rows('second_table_content') ):
					
				    while ( have_rows('second_table_content') ) : the_row(); ?>
					<tr>
							<td style="width: 358px;" rowspan="1" colspan="1"><?php  the_sub_field('heading'); ?></td>
							<td style="width: 100px;" rowspan="1" colspan="1"><a href="<?php  the_sub_field('file'); ?>" shape="rect"><?php  the_sub_field('content'); ?></a></td>
							<td style="width: 100px;" rowspan="1" colspan="1"><a href="<?php  the_sub_field('weekly_file'); ?>" shape="rect"><?php  the_sub_field('weekly_content'); ?></a></td>
			<!-- 				<td style="width: 100px;"><a th:href="@{'/2/resources/SampleDeclarationForms/Instant/CA_EN.pdf'}" href="SampleDeclarationForms/Instant/CA_EN.pdf" th:text="#{rules.forms.instant}">Instant1</a></td> -->
						  </tr>

				    
				    <?php 

				        // display a sub field value
				     

				    endwhile;

				else :

				    // no rows found

				endif;

				?>
<!-- <th rowspan="1" colspan="1">Country/Language</th>
<th colspan="2" rowspan="1">Contest Type</th>
 -->
  

</table>
</div>

<br clear="none" />


<br clear="none" />
<p><?php the_field('last_section_content'); ?></p>

<div id="viewRecent"><a href="<?php the_field('recent_winner_link'); ?>" class="fauxButton" shape="rect"><?php the_field('button_name'); ?></a></div>


<?php get_footer('rules'); ?>