function countList(){
  var listCounter = 0;
  $(".note-list li").each(function(){
  $(this).attr('id',listCounter);
  listCounter++;
  });
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

$(".input-code-container").hide();
$("#save-notification").hide();
      var app1 = new Vue({
        el:"#app",
        data:{
          notes:store.get('notes'),
          showHome:true,
          showNote:false
        },
        methods:{
          togglePages(){
            if(this.showHome == true && this.showNote ==false){
            this.showHome = false
            this.showNote = true
            $(".input-code-container").fadeIn()
            $(".note-list").hide()

            }
            else{
              this.showHome = true
              this.showNote = false
                    $(".input-code-container").hide()
                    $(".note-list").fadeIn()
            }
          },
          submitNote(){
                this.notes.push({title:$(".title-input").val(),message:$("textarea").val()});
                $("textarea").val("");
                $(".back-home i").click();

                setTimeout(function(){
                  countList();
                },1);
              },
              clearInputTitle(){
                $('.title-input').val('');
                $('.title-input').css({'textAlign':'left','paddingLeft':'5px'})
              },
              deleteNote(e){
                  var toDelete = $(e.target).parent().parent().parent().attr('id');
                  toDelete = parseInt(toDelete);
                  app1.notes.remove(toDelete);
              },
              save(){
                store.clear();
                store.set('notes',app1.notes);
                app1.notes = store.get('notes');
                $("#save-notification").show();
                $("#save-notification").fadeOut(1000);
              }
            },
            mounted:function(){
                  countList();

            }

        })
