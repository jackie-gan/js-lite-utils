export function getQuery(url, key) {
    const reg = new RegExp(`${key}=`, 'g');
    const matched = url.match(reg);
}

export function addQuery(url, key, value) {

}
