function showArchive() {

    //    var archiveBtn = document.getElementById("archive_btn");
    var archiveGallery = document.getElementById("gallery_archive");
    
    if (archiveGallery.style.display === "flex"){
        archiveGallery.style.display = "none";
    } else {
        archiveGallery.style.display = "flex";
    }
}
