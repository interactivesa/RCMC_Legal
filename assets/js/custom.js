var form = $("#example-form");

form.steps({
    headerTag: "h6",
    bodyTag: "section",
    transitionEffect: "fade",
  titleTemplate: '<span class="step">#index#</span> #title#',



  labels: {
    finish: "إرسال",
    next: "التالي",
    previous: "السابق",
    done: "55555555"
}

});

