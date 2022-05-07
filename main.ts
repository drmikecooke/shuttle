radio.onReceivedBuffer(function (receivedBuffer) {
    serial.writeBuffer(receivedBuffer)
})
let send: Buffer = null
radio.setGroup(6)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    send = serial.readBuffer(0)
    if (send.length > 0) {
        radio.sendBuffer(send)
    }
})
