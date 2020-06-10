export default function getRandonNumber(min, max, integer = false) {
    let r = Math.random() * (max - min + 1) + min;
    return integer ? parseInt(r) : parseFloat(r);
}
