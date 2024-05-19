    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

    // attachEvent() :: works on application run on internet explorer
    // jQuery -> on

    // type , timeStamp , defaultPrevented
    // target , toElement , srcElement , currentTarget ,
    // clientX , clientY , screenX , screenY
    // altkey , ctrlkey , shiftkey , keyCode

    // document.getElementById('owl').addEventListener('click',function(e){
    //     console.log(e)
    // },false)

     // event propagtion  :  event bubbling(bottom - up ) and event capution(top - down)

     // false : event bubbling
     //true  : event capturing

    // document.getElementById('images').addEventListener('click',function(e){
    //     console.log("clicked inside the ul")
    // },false)

    // document.getElementById('owl').addEventListener('click',function(e){
    //     console.log("Owl Clicked")
    //     e.stopPropagation()     // on click owl :: the event will not go upward as bubbling
    // },false)

    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault()  
    //     e.stopPropagation()       // to stop bubbling
    //     console.log("googled clicked")
        
    // })

    // project scnerio :: on click the image will remove

    document.querySelector('#images').addEventListener('click',function(e){
        //console.log(e.target.parentNode)
        console.log(e.target.tagName)
        if(e.target.tagName === 'IMG')
        {
            console.log(e.target.id)
            let removeIt = e.target.parentNode
            removeIt.remove()
        }

        //removeIt.parentNode.removeChild(removeIt)
    },false)

