(function () {
  'use strict';
  Polymer({
    checkAns: function (ans) {
      this.$.ans_input.isInvalid = true;
//      alert(ans);
//      if(this.$.ans_input.value != ans) {
//        alert('Its wrong');
//      }else{
//        alert('Its correct');
//      }
    }

  });
})();
