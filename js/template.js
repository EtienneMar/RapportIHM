var elementTuto = [
    {
    img: "./image/phare-1.png" ,
    blender:"./blender/phare-1.blend",
    objetDuDomaine: "Objets du domaine: cylindre, empty (plain axes), empty (single arrow)",
    instrument: "Instruments: array modifier, extrusion, parentage." 
    }, 
    {
    img: "./image/phare-2.png" ,
    blender:"./blender/phare-2.blend",
    instrument: "Instruments: duplication simple, scale." 
    }
];



function loadhtml() {
    console.log("bonjour");
    const gridContainerTab = document.getElementById('gridContainer'); 
    elementTuto.forEach(element => {
            gridContainerTab.innerHTML += '<div><img src="'+element.img+'" width="200" height="150" alt="phare 1"> </div>'
            if (element.objetDuDomaine == null){
                
                gridContainerTab.innerHTML+='<div class="two" id="two">'+
                                                '<p>'+element.instrument+'</p>'+
                                                '<a href="'+element.blender+'">Fichier Blender</a>'
                                            '</div>'
            }else if (element.instrument == null){
                gridContainerTab.innerHTML+='<div class="two" id="two">'+
                                                '<p>'+element.instrument+'</p>'+
                                                '<a href="'+element.blender+'">Fichier Blender</a>'+
                                            '</div>'    

            }else {
                gridContainerTab.innerHTML+='<div class="two" id="two">'+
                                                '<p>'+element.objetDuDomaine+'</p>'+
                                                '<p>'+element.instrument+'</p>'+
                                                '<a href="'+element.blender+'">Fichier Blender</a>'+
                                            '</div>'   
            }
                                                
                                                
    }); 
    
} 
