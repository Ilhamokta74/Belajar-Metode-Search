const binarySearch = async (arrayAngka, findAngka) => {
    let Starter = 0;
    let Ended = arrayAngka.length - 1;
    let search = 0;

    let langkah = 0;

    while (findAngka !== arrayAngka[search]) {
        let search = Math.floor((Starter + Ended) / 2);

        if (Starter === Ended) {
            if (findAngka === arrayAngka[search]) {
                console.log(`${langkah}. Angka ${findAngka} Di Temukan`);
                break;
            } else {
                console.log(`${++langkah}. Angka ${findAngka} Tidak Di Temukan`);
                break;
            }
        } else if (findAngka < arrayAngka[search]) {
            console.log(`Langkah Ke ${++langkah} => [${Starter}] < [${Ended}] => ${arrayAngka[Starter]} < ${arrayAngka[Ended]}`);
            Ended = search - 1;
        } else {
            console.log(`Langkah Ke ${++langkah} => [${Starter}] > [${Ended}] => ${arrayAngka[Starter]} > ${arrayAngka[Ended]}`);
            Starter = search + 1;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

let arrayAngka = [1, 3, 5, 7, 9, 11, 13, 15, 18, 23, 25, 35];
let findAngka = 4;

binarySearch(arrayAngka, findAngka);