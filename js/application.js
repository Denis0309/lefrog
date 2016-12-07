$(function() {
  
  $("input[placeholder], textarea[placeholder]").placeholder();
  
  /* navigation */
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    
    if(top > 403) {
      $('.header_shadow').addClass('wide_nav');
    }
    else {
      $('.header_shadow').removeClass('wide_nav');
    }
    
    if(top > 403) {
      $('.usermenu').addClass('wide_menu');
    }
    else {
      $('.usermenu').removeClass('wide_menu');
    }
  });
  /* end */
  
  /* products filter */
  $('.header .filter_link').on('click', function() {
    var link = $(this);
    var link_text = link.find('.icon');
    var form = $('.header .filter_block');
    
    if(link.hasClass('active')) {
        link.removeClass('active');
        link_text.text('Фильтр товаров');
        form.removeClass('opened');
    }
    else {
        link.addClass('active');
        link_text.text('Скрыть фильтр');
        form.addClass('opened');
    }
  });
  /* end */
  
  /* catalogue list */
  $('.catalogue_list .category_name a').on('click', function() {
    var categories = $('.catalogue_list .catalogue_category');
    var category = $(this).parents('.catalogue_category');
    var types_list = category.find('.category_types');
    
    if(!category.hasClass('opened')) {
      //categories.removeClass('opened'); Uncomment if necessary
      category.addClass('opened');
    }
    else {
        category.removeClass('opened');
    }
  });
  /* end */
  
  /* brands filter */
  $('.brands_filter .brands_list .checkbox:checked').parents('label').addClass('selected');
  
  $('.brands_filter .brands_list .checkbox').on('change', function() {
    if($(this).prop('checked')) {
        $(this).parents('label').addClass('selected');
    }
    else {
        $(this).parents('label').removeClass('selected');
    }
  });
  /* end */
  
  /* club articles */
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    var header = $('.header');
    var right_column = $('.club_articles .right_column');
    var main_column = $('.club_articles .main_column');
    
    if(top > (right_column.height() + header.height() + 25)) {
      right_column.css('display', 'none');
      main_column.css('margin-right', '0px');
    }
    else {
      right_column.css('display', 'block');
      main_column.css('margin-right', '406px');
    }
  });
  /* end */
});

/* contacts form textarea */
$( window ).load(function() {
  var textarea = $('.contacts_form .textareas');
  var message_block = $('.contacts_form .message');
  
  textarea.css({'width':message_block.width() - 642});
});

$( window ).resize(function() {
  var textarea = $('.contacts_form .textareas');
  var message_block = $('.contacts_form .message');
  
  textarea.css({'width':message_block.width() - 642});
});
/* end */

/* SEO block */
$( window ).load(function() {
  var seo_container = $('.seo_block');
  var content_padding = 117 + seo_container.height();

  $('.wrapper > .content_block').css({'padding-bottom': content_padding + 'px'});
});

$(function() {
  $('.seo_block .read_more_link a').on('click', function() {
    var seo_container = $('.seo_block .centered');
    var content_padding = 117 + seo_container.height();
    var seo_height = seo_container.height();

    $('.wrapper > .content_block').css({'padding-bottom': content_padding + 'px'});
    $('.seo_block').css({'height': seo_height + 'px'});
    $('.seo_block .read_more_link').css({'display': 'none'});
  });
});
/* end */