'use strict';
//    ____     ____                _   _     ____          ____      ____                   
//  /\  __\  /\  __\    /'\_/`\  /\ \/\ \  /\  __`\      /\  __`\  /\  __`\    /'\_/`\      
//  \ \ \_/_ \ \ \_/_  /\      \ \ \ \ \ \ \ \ \ \_\     \ \ \ \_\ \ \ \ \ \  /\      \     
//   \ \  __\ \ \  __\ \ \ \_/\_\ \ \ \ \ \ \ \ \  __     \ \ \  __ \ \ \ \ \ \ \ \_/\_\    
//    \ \ \_/  \ \ \_/_ \ \ \\ \ \ \ \ \_/ \ \ \ \_\ \  __ \ \ \_\ \ \ \ \_\ \ \ \ \\ \ \   
//     \ \_\    \ \____/ \ \_\\ \_\ \ `\___/  \ \____/ /\_\ \ \____/  \ \_____\ \ \_\\ \_\  
//      \/_/     \/___/   \/_/ \/_/  `\/__/    \/___/  \/_/  \/___/    \/_____/  \/_/ \/_/  
//                                                                                          
//                                                                                          

/**
 * @name 组件
 * @public
 * @author wanghaiyang
 * @date 2013/08/08
 * @param {Object} options 控件初始化参数.
 */
define('./hui.Label', ['./hui', './hui.Control'], function(){

hui.Label = function (options, pending) {
    hui.Label.superClass.call(this, options, 'pending');
    
    // 类型声明，用于生成控件子dom的id和class
    this.type = 'label';
    
    //进入控件处理主流程!
    if (pending != 'pending') {
        this.enterControl();
    }
};

hui.Label.prototype = {
    /**
     * @name 渲染控件
     * @param {Object} main 控件挂载的DOM.
     */
    render: function() {
        hui.Label.superClass.prototype.render.call(this);
        var me = this;
        //me.main = main;
        if (me.text !== undefined) {
            me.setInnerHTML(me.text);
        }
    },
    /**
     * @name 设置文字
     * @param {Object} main 控件挂载的DOM.
     */
    setValue: function(txt) {
        var me = this;
        //me.main = main;
        if (me.main) {
            txt = String(txt);
            me.setInnerHTML(txt);
            me.value = txt;
            me.text = txt;
        }
    }
};

/*通过hui.Control派生hui.Button*/
//hui.Control.derive(hui.Label);
/* hui.Label 继承了 hui.Control */
hui.inherits(hui.Label, hui.Control);

});