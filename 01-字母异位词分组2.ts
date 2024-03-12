function groupAnagrams(strs: string[]): string[][] {
    
    let map: Map<string, string[]> = new Map();
    
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("");
        let _strs: string[] = map.get(key) || [];
        _strs.push(strs[i]);
        map.set(key, _strs);
    }

    return [...map.values()];
}