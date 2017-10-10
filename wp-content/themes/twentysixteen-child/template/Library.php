<?php
/**
* Template Name: Library Page|Layout
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
<?php //if ( get_option('permalink_structure') ) { echo 'permalinks enabled'; } ?>
<main>
<section class="section-blog-header">
<div class="container">
<div class="row">
<?php
if ( have_posts() ) {
  while ( have_posts() ) {
    the_post();  ?>

    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>
    <?php
  } // end while
} // end if
?>

</div>
</div>
</section>
<section class="resourace-lib-cls">
<div class="container">
<div class="row">
<div class="lib-search-div">
<?php
$parent_term_id='5';
$args = array('post_type'=> 'library','taxonomy'=> 'category',  'parent'  => $parent_term_id);
$categories = get_categories( $args );

?>

<div class="col-md-7 col-sm-8">
<div class="col-md-6 col-sm-6">
  <div class="select-lib-div">
    <select class="form-control form-control-select" id="content" >

      <option disabled selected value="0">Select Topic</option>
      <?php foreach ($categories as $value) {
        $cat_name=$value->cat_name;
        $slug=$value->slug; ;
       ?>
       <option  value="<?php echo $slug;  ?>"><?php echo $cat_name ?></option>
          <?php   }
             ?>

      <!-- <option>Case Study</option>
      <option>eBook</option>
      <option>Guide</option>
      <option>Research Report</option>
      <option>Video</option>
      <option>Webinar</option>
      <option>Whitepaper</option> -->
    </select>
  </div>
</div>
<div class="col-md-6 col-sm-6">
  <div class="select-lib-div">
  <?php

   $args = array('post_type'=> 'library','taxonomy'=> 'category');
   $tags_array = get_tags( $args );
   //print_r($tags_array); ?>
    <select class="form-control form-control-select" id="topic">
      <option  selected value="0">Select Content Type</option>
      <?php foreach ($tags_array as $value) {
        $tag_name=$value->name;
        $tag_id=$value->term_id; ;
       ?>
      <option  value="<?php echo $tag_id; ?>"><?php echo $tag_name; ?></option>
      <?php } ?>
      <!-- <option>B2B</option>
      <option>Customer Experience (CX)</option>
      <option>Customer Support</option>
      <option>Employee Voice/HR</option>
      <option>Energy & Utilities</option>
      <option>Financial Services</option>
      <option>Healthcare</option> -->
    </select>
  </div>
</div>
</div>
<div class="col-md-2 col-sm-4">
<div class="document_box_downloads">
 <button id="reset_search" class="btn document_box_download_links">Clear Filters</button></div></div>
<div class="col-md-3 col-sm-4">
<div class="col-md-12">
  <div class="search-cls-div">
    <input type="text" class="form-control" placeholder="Search" id="title" name="title" value="">
    <button class="btn btn-search"><i class="glyphicon glyphicon-search"></i></button>

  </div>
</div>
</div>

<div class="clearfix"></div>
</div>
</div>


<div class="row">
<div class="library-contant-cls">
<div class="row">
<?php
// WP_Query arguments
$args = array(
'post_type'              => array( 'library' ),
'post_status'            => array( 'publish' ),
'posts_per_page'         => '9',

);

// The Query
$query = new WP_Query( $args );
// print_r($query);
// The Loop
if ( $query->have_posts() ) {
while ( $query->have_posts() ) {
$query->the_post();
$ID=get_the_ID();
$site_url=site_url();

// do something
//$condition= get_post_meta($post->ID,'condition_logic_for_post','true');
// $ConditionPost= get_post_meta($post->ID,'condition_logic_for_post_form','true'); ?>


<?php

//$ID=$get_the_ID();

 global $wpdb;

/*$results = $wpdb->get_results( "SELECT * FROM CustomCheck WHERE PostID = '".$ID."'", OBJECT );*/
//echo "SELECT * FROM CustomCheck WHERE PostID = '" . $ID . "'";
$post_exists = $wpdb->get_results("SELECT * FROM CustomCheck WHERE PostID = '".$ID."'");
// print_r($post_exists);die;
$post_value = array();
foreach ($post_exists as $key => $value) {
   $post_values=$value->PostID;
   //if($post_values==$ID)
  $post_value[] = $post_values;
  # code...
}
// print_r($post_value);


if(get_field('dispaly_form') == 'Yes'){

?>
<?php
  $post_tags = get_the_tags();
  $post_tagSlug = $post_tags[0]->slug;
  $post_tagName = $post_tags[0]->name;
?>

<div class="col-md-4 random <?php echo $post_tagSlug; ?>-library">

<div class="lib-contant-sub">


<a id="<?php echo str_replace($site_url,'',get_permalink());  ?>" class="confirmform add_content_id" name="<?php echo get_the_title(); ?>"
  data-id="<?php echo get_the_ID(); ?>" <?php  if(!in_array(get_the_ID(), $post_value)){  ?> onclick='show_form( myUrl = "<?php echo str_replace($site_url,'',get_permalink());  ?>",id="<?php echo get_the_ID(); ?>",formid="<?php echo get_field('formid'); ?>",munchkinid="<?php echo get_field('munchkinid'); ?>")' <?php }else{?> href="<?php echo str_replace($site_url,'',get_permalink());  ?>"<?php } ?>  >
  <?php
 if ( has_post_thumbnail( $ID ) ) :
    $image_array = wp_get_attachment_image_src( get_post_thumbnail_id( $ID ), 'optional-size' );
    $image = $image_array[0];
else :
    $image = get_template_directory_uri() . '/static/img/image-not-found.png';
endif;

?>
   <div class=""><img src="<?php echo $image; ?>" alt=""></div>
<div class="lib-contant">
<div class="document_box_left">

<p><span class="document_box_title"><?php echo wp_trim_words(get_the_title(),12); ?></span></p>
<p class="library-tag"><span> <?php echo $post_tagName; ?></span></p>
</div>

<div class="document_box_right">
<div class="doc-overlay"></div>
<p>
<?php echo wp_trim_words( get_the_content(), 18, '...' ); ?></p> </div>

</div>
<!-- The Modal -->

<div class="document_box_download">
<button   class="btn document_box_download_link" >
<?php
$value_check=get_field('condition_logic_for_post_form');

//echo $value_check;
if($value_check=='Video'){ ?>
<span><?php the_field('watch_now'); ?></span>
<?php
}
else{ ?>
<span><?php the_field('download'); ?></span>
<?php
}
?>
</button>

</div>
</a>
</div>
</div>

<?php }
else{ ?>

<?php
  $post_tags = get_the_tags();
  $post_tagSlug = $post_tags[0]->slug;
  $post_tagName = $post_tags[0]->name;
?>

  <div class="col-md-4 random <?php echo $post_tagSlug; ?>-library">
<div class="lib-contant-sub">

<a  href="<?php echo str_replace($site_url,'',get_permalink()); ?>"
 <?php // if(empty($PostID && $IPAddress) ){  ?>  <?php //} ?>  >
 <?php
 if ( has_post_thumbnail( $ID ) ) :
    $image_array = wp_get_attachment_image_src( get_post_thumbnail_id( $ID ), 'optional-size' );
    $image = $image_array[0];
else :
    $image = get_template_directory_uri() . '/static/img/image-not-found.png';
endif;

?>
   <div class=""><img src="<?php echo $image; ?>" alt=""></div>
<div class="lib-contant">
<div class="document_box_left">

<p><span class="document_box_title"><?php echo wp_trim_words(get_the_title(),12); ?></span></p>
<p class="library-tag"><span> <?php echo $post_tagName; ?></span></p>
</div>

<div class="document_box_right">
<div class="doc-overlay"></div>
<p>
<?php echo wp_trim_words( get_the_content(), 18, '...' ); ?></p> </div>

</div>
<!-- The Modal -->

<div class="document_box_download">
 <button class="btn document_box_download_link" >
<?php
$value_check=get_field('condition_logic_for_post_form');

//echo $value_check;
if($value_check=='Video'){ ?>
<span>Watch Now</span>
<?php
}
else{ ?>
<span>Download Now</span>
<?php
}
?>
</button> </div>
</a>
</div></div>



	<?php
}
}
} ?>
<!-- <div class="append_data"></div>
 --><div id="response"></div>


</div>
</div>
<a class="load-more-posts" offset='9'>Load More</a>
</div>


</section>

<script type="text/javascript">

jQuery('.add_content_id').on('click',function(){
  var id = jQuery(this).attr('id');
  setTimeout(function(){
    jQuery('input[name="contentID"]').val(id);
  }, 3000);
})


jQuery( function( $ ) {
// search filed
$('#content').val(0);
$('#topic').val(0);
$("#title").val("");
//$('#title').val(0);
//offset_all_blog = 9;

function myCall(search_key='', content='', topic='', offset_all_blog='', resAct) {

   /* alert(offset_all_blog);
    alert(content);
    alert(search_key);
    alert(topic);*/
    jQuery.ajax({
    data: {action:'ajax_search',content:content,topic:topic,search_key:search_key,offset:offset_all_blog},
    url: ajaxurl,
    type: 'POST',

    success:function( response ) {
     // alert(response);

             $('.random .lib-contant-sub > a').on("click",function(){
          var url=  this.id;
          var title=this.name;
          //alert(url);
         var id=$(this).data("id");

          $('div.modal-header > h4').html("<h3 class='modal-title'>" +title+ "</h3>");

         })




          if (resAct == 'append') {
          if(response !=''){
          offset_all_blog = parseInt(offset_all_blog)+parseInt(9);
          $(".load-more-posts").attr('offset', offset_all_blog);
          //console.log(response);return false;
          $('#response').append(response);
          }
          else{
          $('.load-more-posts').hide();
          $('#response').append('<h1>No Post Found</h1>');
              }
          }
          else {
          $('.random').remove();
          (response) ? jQuery('#response').html( response ): jQuery('#response').html("<h1>No Post Found</h1> ");
               }

        },
    });
}

/*--news home --*/

// var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';


$("#title").keyup(function(){
  var content = $( '#content' ).val();
  var topic = $( '#topic' ).val();
  var search_key = $(this).val();

  myCall( search_key, content, topic, offset_all_blog = '', resAct = 'html');
});

$('select').on('change', function() {
  var content = $( '#content' ).val();
  var topic = $( '#topic' ).val();
  //alert(content);
  var search_key = $('#title').val();
  myCall(search_key, content, topic, offset_all_blog ='', resAct = 'html');

});

$("#reset_search").on('click',function(e){
  $('#content').val(0);$('#topic').val(0);$('#title').val("");
 /* var content = 0, topic = 0, search_key=;
  var topic =
  var search_key = $('#title').val("");*/

  myCall( ' ', 0, 0, offset_all_blog = '', resAct = 'html');
});

$(".load-more-posts").click(function() {

  offset_all_blog = jQuery(this).attr('offset');

  var content = $( '#content' ).val();
  var topic = $( '#topic' ).val();

  var search_key = $('#title').val();
  /*alert(content);
  alert(topic);
  alert(offset_all_blog);
  alert(search_key);*/

  myCall(search_key, content, topic,offset_all_blog, resAct = 'append');
});

});
</script>

<style type="text/css">
.dcs_para_center_post{
padding: 50px;
}

.template-blog .modal.fade.in{background: none;}
.mktoButton{color: #fff;}
.error{color: red;}
.modal-dialog{width: 327px;}
#response > h1{padding: 17px;}
/*.modal-dialog{margin: 30px 471px !important}*/
</style>


<?php get_footer(); ?>
