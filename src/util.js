const searchEmJSON = search => {
    let pairs = search.substring(1).split('&'), objeto = {}, pair, i;
    for (i in pairs) {
        if (pairs[i] === '') continue
        pair = pairs[i].split('=')
        objeto[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
    }
    return objeto
}

export {searchEmJSON}