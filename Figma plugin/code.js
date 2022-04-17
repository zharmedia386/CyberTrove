function runPlugin(){
    //mendapatkan nilai banyak elemen yang terpilih
    let selectedElements = figma.currentPage.selection.length
    console.log(selectedElements)

    //jika tidak ada elemen yang dipilih atau elemen yang dipilih lebih dari satu
    if(selectedElements == 0){
        figma.closePlugin('No element selected')
        return
    } else if(selectedElements > 1){
        figma.closePlugin('You can only select one element')
        return
    }

    //mendapatkan nama dari elemen yang dipilih
    let selectedName = figma.currentPage.selection[0].name
    console.log(selectedName)

    //proses mendapatkan elemen yang memiliki nama yang sama
    function isSameName(node){
        return node.name == selectedName
    }

    let getSame = figma.currentPage.findAll(isSameName) //mendapatkan node/elemen mana saja yg memiliki nama yg sama

    figma.currentPage.selection = getSame //memilih semua node/elemen yang memiliki nama yang sama

    if(getSame.length > 1){
        figma.closePlugin(getSame.length + ' elements selected')
        return
    } else{
        figma.closePlugin('There is no element that has the same name as the selected element')
        return
    }

}

runPlugin()