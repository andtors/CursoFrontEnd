const images = document.querySelectorAll(".image-container img")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return 

        const image = entry.target
        let imgSrc
        if(image.src.includes("?w")){
            imgSrc = image.src.replace("?w=10", "?w=1000")
        } else if (image.src.includes("&w")){
            imgSrc = image.src.replace("&w=10", "&w=1000")
        }
        
        image.setAttribute('src', imgSrc)

        observer.unobserve(image)
    })
}, {})

images.forEach((image) => {
    observer.observe(image)
})