<?php 
   define('WP_USE_THEMES', false);
 require('./wp-blog-header.php');
 require('./wp-load.php');
// echo site_url();
 global $wpdb;


$qry="SELECT blog_blogpage.body,blog_blogpage.date,blog_blogpage.page_ptr_id,wagtailcore_page.* FROM blog_blogpage INNER JOIN wagtailcore_page ON blog_blogpage.page_ptr_id = wagtailcore_page.id WHERE wagtailcore_page.url_path LIKE '/home/press/%'";



 //echo $qry;die;
  $get_post = $wpdb->get_results( $qry );
 //print_r($get_post);die;
  //$tmparr=array();
  
foreach ($get_post as  $value) {
	  $title=$value->title;
	 $date=$value->date;
	 $update_query="UPDATE wp_posts SET post_date='$date 20:03:03' WHERE post_title='$title'";
	 $query=$wpdb->query($update_query);
	 echo $title.$date;
	 if($query){
	 	echo "sucess";
	 }
	# code...
}
// print_r($tmparr);
// foreach ($tmparr as  $value) {
// 	print_r($tmparr);
// 	# code...
// }
// print_r($tmparr['date']);
// print_r($tmparr['title']);
// // print_r($date);
// // print_r($title);
// $update_query="UPDATE wp_posts SET post_date='$date 20:03:03' WHERE post_title='$sound'";
// 	//echo $update_query;die;
// 	//$value=$wpdb->update($update_query);
// 	$query=$wpdb->query($update_query);
// 	if($query){
// 		echo "success";
// 	}

?>