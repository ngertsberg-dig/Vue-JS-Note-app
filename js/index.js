$(".input-code-container").hide();
      var app1 = new Vue({
        el:"#app",
        data:{
          notes:[
            {title:"Title 1 sample title",message:`data:{
            THIS IS A SAMPLE NOTE notes:[{title:"Title 1",message:""}
            showHome:true,
            showNote:false
          },THIS IS A SAMPLE NOTE`}
        ],
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
              },
              clearInputTitle(){
                $('.title-input').val('');
                $('.title-input').css({'textAlign':'left','paddingLeft':'5px'})
              },
              deleteNote(e){
                var noteClicked = e.target;
                $(noteClicked).parent().parent().parent().remove();
              }
            }
        })
