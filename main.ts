let squareX = [2, 2, 3, 3]
let squareY = [1, 0, 1, 0]

let pieceX = [2, 2, 3, 3]
let pieceY = [1,0,1 ,0]



let filledX = [5]
let filledY = [5]

for(let i =0; i<pieceX.length; i++){
    led.plot(pieceX[i], pieceY[i])
}

//Moving Left and Right
basic.forever(function() {

    input.onButtonPressed(Button.A, function () {
        let leftWall = false
        for (let i = 0; i < pieceX.length; i++) {
            if (pieceX[i] == 0) {
                leftWall = true
            }
        }

        if (!leftWall) {
            for (let i = 0; i < pieceX.length; i++) {
                if (!leftWall) {
                    led.unplot(pieceX[i], pieceY[i])
                    pieceX[i] -= 1
                    
                }
            }
        }
        for (let i = 0; i < pieceX.length; i++) {
            led.plot(pieceX[i], pieceY[i])
        }
    })

    input.onButtonPressed(Button.B, function () {
        let rightWall = false
        for (let i = 0; i < pieceX.length; i++) {
            if(pieceX[i]==4){
                rightWall = true
            }
        }

        if (!rightWall) {
        for (let i = 0; i < pieceX.length; i++) {
            if(!rightWall){
            led.unplot(pieceX[i], pieceY[i])
            pieceX[i] += 1
            
            }
        }
        }
        for (let i = 0; i < pieceX.length; i++) {
            led.plot(pieceX[i], pieceY[i])
        }
    })
})

//Falling
basic.forever(function () {
pause(900)
	
    let aboveFill = false
    for(let i =0; i<filledY.length; i++){
        for (let b = 0; b < pieceY.length; b++) {
            if(pieceY[b]+1==filledY[i]&&pieceX[b]==filledX[i]||pieceY[b]+1==5){
                aboveFill=true;
            }
        }
    }

    if(aboveFill==false){
        for (let i = 0; i < pieceY.length; i++) {
            led.unplot(pieceX[i], pieceY[i])
            pieceY[i] +=1 
            led.plot(pieceX[i], pieceY[i])
        }
    }else {
        for(let i =0; i<pieceX.length; i++){
            filledX.push(pieceX[i])
            filledY.push(pieceY[i])
        }
        for (let i = 0; i < pieceX.length; i++) {
            pieceX.pop()
            pieceY.pop()

        }
        pieceX = squareX
        pieceY = squareY
        for (let i = 0; i < pieceX.length; i++) {
            led.plot(pieceX[i], pieceY[i])
        }

    }

})