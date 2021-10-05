        $pokemon=document.querySelector("#pokemon");
        $siguiente=document.querySelector("#next");
        $atras=document.querySelector("#before");
        $imagen=document.querySelector(".image");
        $nombre=document.querySelector(".name");
        $close=document.querySelector(".close");
        $modal=document.querySelector(".modal");

        let cont=1;
        promesa(cont)
        function promesa(cont)
        {
            fetch(`https://pokeapi.co/api/v2/pokemon/${cont}`)
            .then(response=>{return response.json()})
            .then(data=>{
                renderImage(data.sprites.front_default);
                $nombre.innerHTML=`${(data.name).toUpperCase()}`
            })
            .catch(()=>{
                renderImage("imagen.png")
                $nombre.innerHTML=``})
        }
        function renderImage(image)
        {
            $pokemon.setAttribute("src",image);
        }

        $siguiente.addEventListener("click",()=>{

            cont++;
            promesa(cont);
        })
        $atras.addEventListener("click",()=>{
            cont--;
            promesa(cont);
        })
        $close.addEventListener("click",()=>{
            $modal.style.animationName="modalOut"
        })