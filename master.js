let fig = document.getElementById("fig")
        fig.addEventListener("mousemove", (e)=>{
            let x = ((e.offsetX)/5)-30
            let y = ((e.offsetY)/5)-30
            fig.style.transform = `perspective(1000px)rotateX(${y}deg)rotateY(${x}deg)`
        })
        fig.addEventListener("mouseleave", ()=>{
            fig.style.transform = `rotate(0deg)`
        })