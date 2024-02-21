const house = [
    {
        "id": "0",
        "galleryId": "2",
        "image": "village/village-1",
        "category": "Animal"
    },
    {
        "id": "1",
        "galleryId": "2",
        "image": "village/village-2",
        "category": "Animal"
    },
    {
        "id": "2",
        "galleryId": "2",
        "image": "village/village-3",
        "category": "Animal"
    },
    {
        "id": "3",
        "galleryId": "2",
        "image": "village/village-4",
        "category": "Animal"
    },
    {
        "id": "4",
        "galleryId": "2",
        "image": "village/village-5",
        "category": "Animal"
    },
    {
        "id": "5",
        "galleryId": "2",
        "image": "village/village-6",
        "category": "Animal"
    },
    {
        "id": "6",
        "galleryId": "2",
        "image": "village/village-7",
        "category": "Animal"
    },
    {
        "id": "7",
        "galleryId": "2",
        "image": "village/village-8",
        "category": "Animal"
    },
    {
        "id": "8",
        "galleryId": "2",
        "image": "village/village-9",
        "category": "Animal"
    }
]

const result = house.map((item, index) => (`village/village-${index + 1}.jpg`));
for (let i = 0; i < result.length; i++) {
    house[i].galleryId = 2
    house[i].image = result[i];
    house[i].category = 'Village'

}



console.log([...house]);

