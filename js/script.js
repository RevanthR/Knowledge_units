jQuery("input").each(function() {
    // clear form field on focus and restore if empty
        var default_value = this.value;
        jQuery(this).focus(function(){
        if(this.value == default_value) {this.value = '';}
        });
        jQuery(this).blur(function(){
                if(this.value == '') {this.value = default_value;}
        });
    });
});