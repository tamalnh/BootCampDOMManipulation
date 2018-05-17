
let post = document.querySelector('#postBox')
let postBtn = document.querySelector('#postBtn');
let postParent = document.querySelector('#postParent');
 getColor();



postBtn.addEventListener('click', () => {

    const post = getPost();

    let colorSelect = document.getElementById("postBox").style.getPropertyValue("background");
        // alert(colorSelect);
        

    if(post !== '') {
        let singlePost = document.createElement('div');
        singlePost.className = 'col-sm-8 col-sm-offset-4 text-center my-5 single-post-item';
        let singlePostStyle = {
            background : colorSelect,
            padding : '87px 60px',
            color : '#333'
        }

        

        Object.assign(singlePost.style, singlePostStyle);

        if(post.length < 30) {
            let h1 = document.createElement('h1');
            h1.innerText = post;
            singlePost.appendChild(h1)
        }else{
            let pera = document.createElement('p');
                pera.className = 'lead';
                pera.innerText = post;

                singlePost.appendChild(pera)
        }

        postFunctionality (singlePost); //post meta*****************

        postParent.appendChild(singlePost);
        
    }else{
        alert('post should not be empty');
    }
    
    
})

function getColor(){
    let bgColor = document.querySelector('#bgColor');
    let color = ['white', 'yellow', 'red', 'blue', 'purple'];


    let colorLength = color.length;
    for(let i =0; i<=colorLength; i++){
            color[i];
        let colorItems = document.createElement('span');
            colorItems.className = 'color-items';
            colorItems.setAttribute('id', color[i]);
         
            
            let colorItemsStyle = {
                height: '15px',
                width: '15px',
                background: color[i],
                display: 'inline-block',
                margin: '5px',
                cursor:  'pointer',
                border: '2px solid #ddd',
                position : 'relative'

            }
        Object.assign(colorItems.style, colorItemsStyle);
        bgColor.appendChild(colorItems);

        colorItems.addEventListener('click', () => {
            post.style.background = color[i];
        });
        
    }
    
    return bgColor;
}

function getPost(events) {
    let post = document.querySelector('#postBox').value;
    return post
}

function postFunctionality (singlePost) {

    let postMeta = document.createElement('div');
        postMeta.setAttribute('id', 'postMeta');
    
    let likeBox = document.createElement('div');
        likeBox.setAttribute('id', 'like');
    let like = document.createElement('span');
        like.setAttribute('id', 'likeMe');
        like.innerText = 'Like'

    let likeCount = 1;
        like.addEventListener('click', function(){
            likeCount+=1;

            if(likeCount % 2 === 0){
                like.innerText = 'Unlike'; 
            }else{
                like.innerText = 'Like';
            }
        });

        likeBox.appendChild(like);

    let replyBox = document.createElement('input');
    replyBox.setAttribute('type', 'text');
    replyBox.setAttribute('id', 'reply');
    replyBox.setAttribute('placeholder', 'Reply....');
    replyBox.className = 'form-group';


    // style

    let postMetaStyle = {
        position:  'absolute',
        bottom: '-68px',
        width: '80%',
        left: '0',
        textAlign: 'left'
    }

    let replyInputStyle = {
        width: '100%',
        border: '1px solid #ddd',
        padding: '10px',
    }

    let likeStyle = {
        textAlign: 'center',
        cursor:  'pointer',
        width:  '12%',
        background: '#f9f9f9',
        marginBottom: '5px',
        padding: '5px',
    }

    Object.assign(postMeta.style, postMetaStyle);
    Object.assign(replyBox.style, replyInputStyle);
    Object.assign(like.style, likeStyle);


    postMeta.appendChild(likeBox);
    postMeta.appendChild(replyBox);
    singlePost.appendChild(postMeta);


    getComment(singlePost, replyBox);
}

function getComment(singlePost, replyBox){
    replyBox.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            if(event.target.value !== ''){
                let replyItems = document.createElement('div');
                    replyItems.className = 'reply-items';
                let p = document.createElement('p');
                    p.className = 'lead';
                    p.style.fontSize = '13px';
                    p.style.margin = 0;
                    p.style.padding ='10px';
                let comment = event.target.value;
                    p.innerText = comment;

                    event.target.value = '';

                replyItems.appendChild(p);

                let row = document.createElement('div');
                    row.className = 'row';
                let col = document.createElement('div');
                    col.className = 'col-sm-12';
                    row.appendChild(col);
                    col.appendChild(replyItems);
                    singlePost.appendChild(row);


                    // let rowStyle = {
                    //     position: 'absolute',
                    //     width: '74%',
                    //     textAlign: 'left',
                    //     bottom: '-118px',
                    //     background: '#f9f9f9',
                    // }

                    Object.assign(row.style, rowStyle);

            }else{
                alert('Reply should not be empty!');
            }
        }
        
    });
}

