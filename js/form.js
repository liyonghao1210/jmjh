/**
 * Created by admin on 2017/11/8.
 */
var Form = function () {} ;
Form.prototype.render = function () {
    var item = {
        checked:function () {
            var CHECKEDE = $('input[type="checkbox"].cao-checkBox');
            var events = function (dom,checks) {
                var check = checks;
                dom.on('click',function () {
                    if(check[0].disabled) return;

                    /*check[0].checked ? (
                     check[0].checked = false
                     ,dom.removeClass('checked-ture').find('i').html('&#xe61c;')
                     ) : (
                     check[0].checked = true
                     ,dom.addClass('checked-ture').find('i').html('&#xe612;')
                     );*/
                    $(check[0]).trigger('click');
                    !check[0].checked ? (
                        dom.removeClass('checked-ture').find('i').html('&#xe61c;')
                    ) : (
                        dom.addClass('checked-ture').find('i').html('&#xe612;')
                    );
                })
            };
            CHECKEDE.each(function (index,item) {
                var _this = $(this);
                var title = _this.attr('data-title');
                var skin = _this.prop('checked');

                var dom = $("<div style='margin-right: "+(title ? 10 : 0)+"px' class='new-checkBox "+(skin ? (""+'checked-ture'+"") : '')+"'>" +
                    ""+function () {
                        var span = '';
                        if(title){
                            span = "<span>"+title+"</span>"
                        }
                        return span;
                    }()+"" +
                    "<i class='iconfont'>"+(skin ? '&#xe612;' : '&#xe61c;')+"</i>"+
                    "</div>");

                _this.after(dom).hide();

                events(dom,_this);
            })
        },
        radio:function () {
            var RADIO = $('input[type="radio"].cao-radio');
            var CLASS = 'new-radio';
            var events = function (dom,radios) {
                var radio = radios;
                dom.on('click',function () {

                    var name = radio[0].name;
                    var sameRadio = $('input[name="'+name+'"]');

                    if(radio[0].disabled) return;

                    dom.prev().trigger('click');

                    $.each(sameRadio,function () {
                        var next = $(this).next('.'+CLASS);
                        next.removeClass('checked-ture');
                        next.find('i').html('&#xe61a;');
                    });

                    dom.addClass('checked-ture');
                    dom.find('i').html('&#xe618;');
                })
            };
            RADIO.each(function (index,item) {
                var _this = $(this);
                var title = _this.attr('data-title');
                var skin = _this.prop('checked');

                var dom = $("<div class='new-radio "+(skin ? (""+'checked-ture'+"") : (""+''+""))+"'>" +
                    ""+function () {
                        var span = '';
                        if(title){
                            span = "<span>"+title+"</span>"
                        }
                        return span;
                    }()+"" +
                    "<i class='iconfont'>"+(skin ? '&#xe618;' : '&#xe61a;')+"</i>"+
                    "</div>");

                _this.after(dom).hide();

                events(dom,_this);
            })
        }
    };
    $.each(item,function (index,item) {
        return item();
    });
};

Form.prototype.init = function () {

    var check = $('.cao-checkBox');

    check.each(function () {
        var dom = $(this).next();
        $(this).prop('checked') ? (
            dom.addClass('checked-ture').find('i').html('&#xe612;')
        ) : (
            dom.removeClass('checked-ture').find('i').html('&#xe61c;')
        );
        //$(this).trigger('change');
    })
};
var form = new Form();

$(function () {
    form.render();
});
