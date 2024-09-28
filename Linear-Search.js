let langkah = 0;

const LinearSearch = async (arrayAngka, findAngka) => {
    for (let i = 0; i < arrayAngka.length; i++) {
        if (arrayAngka[i] === findAngka) {
            return true;
        } else {
            console.log(`Langkah Ke ${++langkah}. ${arrayAngka[i]} !== ${findAngka}`);
        }

        await new Promise(resolve => setTimeout(resolve, 500));
    }

    return false;
}
const Starter = async () => {
    let arrayAngka = [1, 3, 5, 7, 9, 11, 13, 15, 18, 23, 25, 35];
    let findAngka = 19;

    let Result = await LinearSearch(arrayAngka, findAngka);

    if (Result === true) {
        console.log(`Angka ${findAngka} Ditemukan Pada Langkah Ke ${++langkah}`)
    } else {
        console.log(`Angka ${findAngka} Tidak Ditemukan`)
    }
}

Starter();