function lengthOfLongestSubstring(s: string): number {
    let longest : number = 0;
    for (let i : number = 0; i < s.length; i++) {
        let characters : string[] = [];
        let finishSub : boolean = false;
        let currentIndex : number = i;
        while(!finishSub){
            characters.push(s[currentIndex]);
            currentIndex++;
            if(characters.includes(s[currentIndex]) || currentIndex == s.length){
                finishSub = true;
            }
        }
        if(longest < currentIndex-i){
            longest = currentIndex-i;
        }
    }
    return longest;
};