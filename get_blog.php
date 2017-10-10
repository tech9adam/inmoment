<?php 
    define('WP_USE_THEMES', false);
require('./wp-blog-header.php');
require('./wp-load.php');
//echo site_url();
global $wpdb;
$qry="SELECT blog_blogpage.body,wagtailcore_page.* FROM blog_blogpage INNER JOIN wagtailcore_page ON blog_blogpage.page_ptr_id = wagtailcore_page.id WHERE wagtailcore_page.search_description='description'";
//echo $qry;die;
 $get_post = $wpdb->get_results( $qry );
//print_r($get_post);die;

foreach ($get_post as  $getBody) {
	//print_r($getBody);die;
	$PostBody=$getBody->body;
	$title=$getBody->title;
	//echo $PostBody;
	$args= array('post_title'	=>$title,
				'post_content' => $PostBody,
				'post_status'   => 'publish',
				'post_author'  =>1);
				wp_insert_post( $args );
	# code...
}

?>