(function () {
  'use strict';
  Polymer({
    ready: function () {
      this.globals.subject = 'global_history';
    },
    checkAns: function (ans) {
      this.$.ans_input.isInvalid = true;
//      alert(ans);
//      if(this.$.ans_input.value != ans) {
//        alert('Its wrong');
//      }else{
//        alert('Its correct');
//      }
    },
    doStuff: function () {
      this.globals.subject = 'global_history';
    },
    doStuff1: function () {
      this.globals.subject = 'us_history';
    },
    doStuff2: function () {
      this.globals.subject = 'physics';
    },
    doStuff3: function () {
      this.globals.subject = 'chemistry';
    }
  });
})();
